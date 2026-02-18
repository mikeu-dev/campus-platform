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
	import { Search, Loader2, FileEdit, Trash2, Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let courses: any[] = $state([]);
	let loading = $state(true);
	let search = $state('');
	let pagination = $state({
		page: 1,
		limit: 10,
		total: 0,
		totalPages: 1
	});
	let debounceTimer: NodeJS.Timeout;

	// Create Course State
	let createOpen = $state(false);
	let createLoading = $state(false);
	let newCourse = $state({
		code: '',
		name: '',
		credits: 3
	});

	// Edit Course State
	let editOpen = $state(false);
	let editLoading = $state(false);
	let editingCourse = $state({
		id: '',
		code: '',
		name: '',
		credits: 3
	});

	async function fetchCourses() {
		loading = true;
		try {
			const query = new URLSearchParams({
				page: pagination.page.toString(),
				limit: pagination.limit.toString(),
				search: search
			});

			const res = await fetch(`http://localhost:3002/api/v1/courses?${query.toString()}`, {
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});

			const response = await res.json();
			if (response.status === 'success') {
				courses = response.data;
				pagination = response.meta;
			}
		} catch (error) {
			console.error('Failed to fetch courses:', error);
			toast.error('Gagal memuat data mata kuliah');
		} finally {
			loading = false;
		}
	}

	async function handleCreateCourse() {
		createLoading = true;
		try {
			const res = await fetch('http://localhost:3002/api/v1/courses', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					code: newCourse.code,
					name: newCourse.name,
					credits: parseInt(newCourse.credits.toString())
				})
			});
			const response = await res.json();

			if (response.status !== 'success') {
				throw new Error(response.message || 'Gagal membuat mata kuliah');
			}

			toast.success('Mata kuliah berhasil ditambahkan');
			createOpen = false;
			newCourse = { code: '', name: '', credits: 3 };
			fetchCourses();
		} catch (error: any) {
			console.error('Create course error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			createLoading = false;
		}
	}

	function openEditDialog(course: any) {
		editingCourse = {
			id: course.id,
			code: course.code,
			name: course.name,
			credits: course.credits
		};
		editOpen = true;
	}

	async function handleUpdateCourse() {
		editLoading = true;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/courses/${editingCourse.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					code: editingCourse.code,
					name: editingCourse.name,
					credits: parseInt(editingCourse.credits.toString())
				})
			});
			const response = await res.json();

			if (response.status === 'success') {
				toast.success('Data mata kuliah berhasil diperbarui');
				editOpen = false;
				fetchCourses();
			} else {
				throw new Error(response.message || 'Gagal memperbarui data mata kuliah');
			}
		} catch (error: any) {
			console.error('Update course error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			editLoading = false;
		}
	}

	async function handleDeleteCourse(id: string) {
		if (
			!confirm(
				'Apakah Anda yakin ingin menghapus mata kuliah ini? Data yang dihapus tidak dapat dikembalikan.'
			)
		)
			return;

		try {
			const res = await fetch(`http://localhost:3002/api/v1/courses/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Mata kuliah berhasil dihapus');
				fetchCourses();
			} else {
				toast.error(response.message || 'Gagal menghapus mata kuliah');
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
			fetchCourses();
		}, 500);
	}

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			pagination.page = newPage;
			fetchCourses();
		}
	}

	onMount(() => {
		fetchCourses();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Mata Kuliah</h1>
			<p class="text-muted-foreground">Kelola data mata kuliah dan kurikulum.</p>
		</div>
		<div class="flex gap-2">
			<!-- CREATE COURSE DIALOG -->
			<Dialog bind:open={createOpen}>
				<DialogTrigger>
					<Button>
						<Plus class="mr-2 h-4 w-4" />
						Tambah Mata Kuliah
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Tambah Mata Kuliah</DialogTitle>
						<DialogDescription>Masukkan detail mata kuliah baru.</DialogDescription>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid gap-2">
							<Label for="code">Kode Mata Kuliah</Label>
							<Input id="code" bind:value={newCourse.code} placeholder="Contoh: TIF101" />
						</div>
						<div class="grid gap-2">
							<Label for="name">Nama Mata Kuliah</Label>
							<Input
								id="name"
								bind:value={newCourse.name}
								placeholder="Contoh: Algoritma dan Pemrograman"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="credits">SKS</Label>
							<Input id="credits" type="number" bind:value={newCourse.credits} placeholder="3" />
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (createOpen = false)} disabled={createLoading}
							>Batal</Button
						>
						<Button onclick={handleCreateCourse} disabled={createLoading}>
							{#if createLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Simpan
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<!-- EDIT COURSE DIALOG -->
			<Dialog bind:open={editOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Mata Kuliah</DialogTitle>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid gap-2">
							<Label for="edit-code">Kode Mata Kuliah</Label>
							<Input id="edit-code" bind:value={editingCourse.code} placeholder="Kode MK" />
						</div>
						<div class="grid gap-2">
							<Label for="edit-name">Nama Mata Kuliah</Label>
							<Input
								id="edit-name"
								bind:value={editingCourse.name}
								placeholder="Nama Mata Kuliah"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="edit-credits">SKS</Label>
							<Input
								id="edit-credits"
								type="number"
								bind:value={editingCourse.credits}
								placeholder="SKS"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (editOpen = false)} disabled={editLoading}
							>Batal</Button
						>
						<Button onclick={handleUpdateCourse} disabled={editLoading}>
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
						placeholder="Cari kode atau nama mata kuliah..."
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
							<TableHead>Kode</TableHead>
							<TableHead>Nama Mata Kuliah</TableHead>
							<TableHead>SKS</TableHead>
							<TableHead>Dibuat Tanggal</TableHead>
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
						{:else if courses.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Tidak ada data mata kuliah.
								</TableCell>
							</TableRow>
						{:else}
							{#each courses as course (course.id)}
								<TableRow>
									<TableCell class="font-medium">{course.code}</TableCell>
									<TableCell>{course.name}</TableCell>
									<TableCell>{course.credits}</TableCell>
									<TableCell>
										{new Date(course.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex justify-end gap-2">
											<Button variant="ghost" size="icon" onclick={() => openEditDialog(course)}>
												<FileEdit class="h-4 w-4" />
												<span class="sr-only">Edit</span>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												class="text-destructive hover:bg-destructive/10"
												onclick={() => handleDeleteCourse(course.id)}
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
