<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Search,
		Loader2,
		FileEdit,
		Trash2,
		Plus,
		CalendarClock,
		ClipboardList
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let classes: any[] = $state([]);
	let loading = $state(true);
	let search = $state('');
	let pagination = $state({
		page: 1,
		limit: 10,
		total: 0,
		totalPages: 1
	});
	let debounceTimer: NodeJS.Timeout;

	// Dropdown Data
	let courses: any[] = $state([]);
	let lecturers: any[] = $state([]);

	// Create Class State
	let createOpen = $state(false);
	let createLoading = $state(false);
	let newClass = $state({
		courseId: '',
		lecturerId: '',
		semester: 'GANJIL',
		year: new Date().getFullYear(),
		capacity: 40
	});

	// Edit Class State
	let editOpen = $state(false);
	let editLoading = $state(false);
	let editingClass = $state({
		id: '',
		courseId: '',
		lecturerId: '',
		semester: '',
		year: 0,
		capacity: 0
	});

	async function fetchClasses() {
		loading = true;
		try {
			const query = new URLSearchParams({
				page: pagination.page.toString(),
				limit: pagination.limit.toString(),
				search: search
			});

			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/classes?${query.toString()}`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});

			const response = await res.json();
			if (response.status === 'success') {
				classes = response.data;
				pagination = response.meta;
			}
		} catch (error) {
			console.error('Failed to fetch classes:', error);
			toast.error('Gagal memuat data kelas');
		} finally {
			loading = false;
		}
	}

	async function fetchDropdownData() {
		try {
			const [coursesRes, lecturersRes] = await Promise.all([
				fetch(`${PUBLIC_ACADEMIC_API_URL}/courses?limit=100`, {
					headers: { Authorization: `Bearer ${data.token}` }
				}),
				fetch(`${PUBLIC_ACADEMIC_API_URL}/lecturers?limit=100`, {
					headers: { Authorization: `Bearer ${data.token}` }
				})
			]);

			const coursesData = await coursesRes.json();
			const lecturersData = await lecturersRes.json();

			if (coursesData.status === 'success') courses = coursesData.data;
			if (lecturersData.status === 'success') lecturers = lecturersData.data;
		} catch (error) {
			console.error('Failed to fetch dropdown data:', error);
		}
	}

	async function handleCreateClass() {
		if (!newClass.courseId || !newClass.semester || !newClass.year) {
			toast.error('Mohon lengkapi data wajib');
			return;
		}

		createLoading = true;
		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/classes`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					course_id: newClass.courseId,
					lecturer_id: newClass.lecturerId || null,
					semester: newClass.semester,
					year: parseInt(newClass.year.toString()),
					capacity: parseInt(newClass.capacity.toString())
				})
			});
			const response = await res.json();

			if (response.status !== 'success') {
				throw new Error(response.message || 'Gagal membuat kelas');
			}

			toast.success('Kelas berhasil ditambahkan');
			createOpen = false;
			newClass = {
				courseId: '',
				lecturerId: '',
				semester: 'GANJIL',
				year: new Date().getFullYear(),
				capacity: 40
			};
			fetchClasses();
		} catch (error: any) {
			console.error('Create class error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			createLoading = false;
		}
	}

	function openEditDialog(cls: any) {
		editingClass = {
			id: cls.id,
			courseId: '', // Ideally we shouldn't change course, but if needed, pre-fill it
			lecturerId: cls.lecturer_id || '', // Use lecturer_id from DB
			semester: cls.semester,
			year: cls.year,
			capacity: cls.capacity
		};
		// Find course ID from course code if needed, but API returns course data joined.
		// For simplicity, we might lock course editing or find the ID.
		// Since fetchClasses returns joined data, we need to map course_code/name back to ID if we want to edit it.
		// Let's assume we can edit details but maybe not the course itself for safety, OR we find it.
		const course = courses.find((c) => c.code === cls.course_code);
		if (course) editingClass.courseId = course.id;

		editOpen = true;
	}

	async function handleUpdateClass() {
		editLoading = true;
		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/classes/${editingClass.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					lecturer_id: editingClass.lecturerId || null,
					semester: editingClass.semester,
					year: parseInt(editingClass.year.toString()),
					capacity: parseInt(editingClass.capacity.toString())
				})
			});
			const response = await res.json();

			if (response.status === 'success') {
				toast.success('Data kelas berhasil diperbarui');
				editOpen = false;
				fetchClasses();
			} else {
				throw new Error(response.message || 'Gagal memperbarui data kelas');
			}
		} catch (error: any) {
			console.error('Update class error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			editLoading = false;
		}
	}

	async function handleDeleteClass(id: string) {
		if (
			!confirm(
				'Apakah Anda yakin ingin menghapus kelas ini? Data yang dihapus tidak dapat dikembalikan.'
			)
		)
			return;

		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/classes/${id}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Kelas berhasil dihapus');
				fetchClasses();
			} else {
				toast.error(response.message || 'Gagal menghapus kelas');
			}
		} catch (error) {
			console.error('Delete error:', error);
			toast.error('Terjadi kesalahan saat menghapus');
		}
	}

	function handleSearch(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		search = value;
		pagination.page = 1;
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			fetchClasses();
		}, 500);
	}

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			pagination.page = newPage;
			fetchClasses();
		}
	}

	onMount(() => {
		fetchClasses();
		fetchDropdownData();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Manajemen Kelas</h1>
			<p class="text-muted-foreground">Kelola jadwal kelas dan penugasan dosen.</p>
		</div>
		<div class="flex gap-2">
			<!-- CREATE CLASS DIALOG -->
			<Dialog bind:open={createOpen}>
				<DialogTrigger>
					<Button>
						<Plus class="mr-2 h-4 w-4" />
						Buat Kelas
					</Button>
				</DialogTrigger>
				<DialogContent class="max-w-lg">
					<DialogHeader>
						<DialogTitle>Buat Kelas Baru</DialogTitle>
						<DialogDescription>Pilih mata kuliah dan dosen pengampu.</DialogDescription>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid gap-2">
							<Label>Mata Kuliah</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								bind:value={newClass.courseId}
							>
								<option value="" disabled>Pilih Mata Kuliah</option>
								{#each courses as course (course.id)}
									<option value={course.id}
										>{course.code} - {course.name} ({course.credits} SKS)</option
									>
								{/each}
							</select>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="grid gap-2">
								<Label>Semester</Label>
								<select
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
									bind:value={newClass.semester}
								>
									<option value="GANJIL">GANJIL</option>
									<option value="GENAP">GENAP</option>
									<option value="PENDEK">PENDEK</option>
								</select>
							</div>
							<div class="grid gap-2">
								<Label>Tahun</Label>
								<Input type="number" bind:value={newClass.year} />
							</div>
						</div>

						<div class="grid gap-2">
							<Label>Dosen Pengampu</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								bind:value={newClass.lecturerId}
							>
								<option value="">-- Belum Ditentukan --</option>
								{#each lecturers as lecturer (lecturer.id)}
									<option value={lecturer.id}>{lecturer.name}</option>
								{/each}
							</select>
						</div>

						<div class="grid gap-2">
							<Label>Kapasitas</Label>
							<Input type="number" bind:value={newClass.capacity} />
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (createOpen = false)} disabled={createLoading}
							>Batal</Button
						>
						<Button onclick={handleCreateClass} disabled={createLoading}>
							{#if createLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Simpan
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<!-- EDIT CLASS DIALOG -->
			<Dialog bind:open={editOpen}>
				<DialogContent class="max-w-lg">
					<DialogHeader>
						<DialogTitle>Edit Kelas</DialogTitle>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<!-- Course is usually fixed after creation, but can show as disabled/readonly info -->

						<div class="grid grid-cols-2 gap-4">
							<div class="grid gap-2">
								<Label>Semester</Label>
								<select
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
									bind:value={editingClass.semester}
								>
									<option value="GANJIL">GANJIL</option>
									<option value="GENAP">GENAP</option>
									<option value="PENDEK">PENDEK</option>
								</select>
							</div>
							<div class="grid gap-2">
								<Label>Tahun</Label>
								<Input type="number" bind:value={editingClass.year} />
							</div>
						</div>

						<div class="grid gap-2">
							<Label>Dosen Pengampu</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								bind:value={editingClass.lecturerId}
							>
								<option value="">-- Belum Ditentukan --</option>
								{#each lecturers as lecturer (lecturer.id)}
									<option value={lecturer.id}>{lecturer.name}</option>
								{/each}
							</select>
						</div>

						<div class="grid gap-2">
							<Label>Kapasitas</Label>
							<Input type="number" bind:value={editingClass.capacity} />
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (editOpen = false)} disabled={editLoading}
							>Batal</Button
						>
						<Button onclick={handleUpdateClass} disabled={editLoading}>
							{#if editLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Simpan Perubahan
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="mb-4 flex items-center justify-between gap-4">
				<div class="relative max-w-sm flex-1">
					<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Cari mata kuliah..."
						class="pl-8"
						value={search}
						oninput={handleSearch}
					/>
				</div>
			</div>

			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Mata Kuliah</TableHead>
							<TableHead>Semester / Tahun</TableHead>
							<TableHead>Dosen</TableHead>
							<TableHead>Kapasitas</TableHead>
							<TableHead class="text-right">Aksi</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if classes.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Tidak ada data kelas.
								</TableCell>
							</TableRow>
						{:else}
							{#each classes as cls (cls.id)}
								<TableRow>
									<TableCell>
										<div class="font-medium">{cls.course_name}</div>
										<div class="text-xs text-muted-foreground">
											{cls.course_code} - {cls.credits} SKS
										</div>
									</TableCell>
									<TableCell>
										<Badge variant="outline">{cls.semester}</Badge>
										{cls.year}
									</TableCell>
									<TableCell>
										{cls.lecturer_name || '-'}
									</TableCell>
									<TableCell>{cls.capacity}</TableCell>
									<TableCell class="text-right">
										<div class="flex justify-end gap-2">
											<Button
												variant="ghost"
												size="icon"
												href={`/panel/academic/classes/${cls.id}/schedules`}
											>
												<CalendarClock class="h-4 w-4" />
												<span class="sr-only">Jadwal</span>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												href={`/panel/academic/classes/${cls.id}/exams`}
											>
												<ClipboardList class="h-4 w-4" />
												<span class="sr-only">Ujian</span>
											</Button>
											<Button variant="ghost" size="icon" onclick={() => openEditDialog(cls)}>
												<FileEdit class="h-4 w-4" />
												<span class="sr-only">Edit</span>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												class="text-destructive hover:bg-destructive/10"
												onclick={() => handleDeleteClass(cls.id)}
											>
												<Trash2 class="h-4 w-4" />
												<span class="sr-only">Hapus</span>
											</Button>
										</div>
									</TableCell>
								</TableRow>
							{/each}
						{/if}
					</TableBody>
				</Table>
			</div>

			<div class="mt-4 flex items-center justify-between">
				<div class="text-sm text-muted-foreground">
					Menampilkan {(pagination.page - 1) * pagination.limit + 1} sampai {Math.min(
						pagination.page * pagination.limit,
						pagination.total
					)} dari {pagination.total} data
				</div>
				<div class="flex items-center gap-2">
					<Button
						variant="outline"
						size="sm"
						onclick={() => goToPage(pagination.page - 1)}
						disabled={pagination.page === 1}
					>
						Sebelumnya
					</Button>
					<Button
						variant="outline"
						size="sm"
						onclick={() => goToPage(pagination.page + 1)}
						disabled={pagination.page === pagination.totalPages}
					>
						Selanjutnya
					</Button>
				</div>
			</div>
		</div>
	</div>
</div>
