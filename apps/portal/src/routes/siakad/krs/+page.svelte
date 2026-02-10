<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
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
	import {
		BookOpen,
		Calendar,
		CheckCircle2,
		Clock,
		Plus,
		Loader2,
		Search,
		AlertCircle
	} from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { Input } from '$lib/components/ui/input';

	interface Props {
		data: { token?: string; user?: any };
	}

	let { data }: Props = $props();

	let enrollments: any[] = $state([]);
	let loading = $state(true);

	// Add Class State
	let openAdd = $state(false);
	let loadingClasses = $state(false);
	let availableClasses: any[] = $state([]);
	let searchClass = $state('');
	let selectedSemester = $state('GANJIL');
	let selectedYear = $state(new Date().getFullYear());
	let enrollingId: string | null = $state(null);

	async function fetchEnrollments() {
		loading = true;
		try {
			const res = await fetch('http://localhost:3002/api/v1/enrollments/my', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				enrollments = response.data;
			}
		} catch (error) {
			console.error('Failed to fetch enrollments:', error);
			toast.error('Gagal memuat data KRS');
		} finally {
			loading = false;
		}
	}

	async function fetchAvailableClasses() {
		loadingClasses = true;
		try {
			const query = new URLSearchParams({
				semester: selectedSemester,
				year: selectedYear.toString(),
				search: searchClass,
				limit: '100' // Fetch enough for selection
			});

			const res = await fetch(`http://localhost:3002/api/v1/classes?${query.toString()}`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				availableClasses = response.data;
			}
		} catch (error) {
			console.error('Failed to fetch classes:', error);
			toast.error('Gagal memuat daftar kelas');
		} finally {
			loadingClasses = false;
		}
	}

	async function handleEnroll(classId: string) {
		enrollingId = classId;
		try {
			const res = await fetch('http://localhost:3002/api/v1/enrollments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					class_id: classId,
					student_id: data.user?.student_id // Assuming user object has student_id or backend handles it via token
					// Actually backend enrollStudent expects student_id in body if using that endpoint directly?
					// Let's check controller: it takes class_id and student_id from body.
					// But usually student enrolls THEMSELVES.
					// Controller implementation: "const { class_id, student_id } = enrollmentSchema.parse(req.body);"
					// If I am a student, I might not know my UUID.
					// Ideally backend should infer student_id from user_id in token.
					// For now, let's assume we need to pass it.
					// We need to fetch basic profile to get student_id if not in session.
					// Or let's fetch profile first.
				})
			});

			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Berhasil mengambil mata kuliah');
				fetchEnrollments();
				// Optionally remove from list or mark as taken
			} else {
				throw new Error(response.message || 'Gagal mengambil mata kuliah');
			}
		} catch (error: any) {
			console.error('Enrollment error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			enrollingId = null;
		}
	}

	// Need to get student ID.
	// Usually this is done in layout or load function.
	// Let's assume we fetch it on mount if missing.
	let studentId = $state('');

	async function getStudentProfile() {
		try {
			const res = await fetch('http://localhost:3002/api/v1/students/me', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				studentId = response.data.id;
			}
		} catch (e) {
			console.error('Failed to get profile', e);
		}
	}

	// Wrapper for enroll to inject student_id
	async function doEnroll(classId: string) {
		if (!studentId) {
			toast.error('Data mahasiswa tidak ditemukan');
			return;
		}
		enrollingId = classId;
		try {
			const res = await fetch('http://localhost:3002/api/v1/enrollments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					class_id: classId,
					student_id: studentId
				})
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Berhasil mengambil kelas');
				fetchEnrollments();
				openAdd = false;
			} else {
				toast.error(response.message || 'Gagal mengambil kelas');
			}
		} catch (e) {
			toast.error('Terjadi kesalahan');
		} finally {
			enrollingId = null;
		}
	}

	onMount(async () => {
		await getStudentProfile();
		fetchEnrollments();
	});

	function debounceSearch(e: Event) {
		searchClass = (e.target as HTMLInputElement).value;
		// Simple debounce
		setTimeout(() => {
			if (openAdd) fetchAvailableClasses();
		}, 500);
	}

	$effect(() => {
		if (openAdd) {
			fetchAvailableClasses();
		}
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Kartu Rencana Studi (KRS)</h1>
			<p class="text-muted-foreground">Kelola rencana studi dan jadwal kuliah Anda.</p>
		</div>
		<Dialog bind:open={openAdd}>
			<DialogTrigger>
				<Button>
					<Plus class="mr-2 h-4 w-4" />
					Isi KRS
				</Button>
			</DialogTrigger>
			<DialogContent class="max-h-[80vh] max-w-4xl overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Ambil Mata Kuliah</DialogTitle>
					<DialogDescription>Pilih mata kuliah yang tersedia untuk semester ini.</DialogDescription>
				</DialogHeader>

				<div class="flex items-center gap-4 py-4">
					<select
						class="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						bind:value={selectedSemester}
						onchange={fetchAvailableClasses}
					>
						<option value="GANJIL">GANJIL</option>
						<option value="GENAP">GENAP</option>
						<option value="PENDEK">PENDEK</option>
					</select>
					<Input
						type="number"
						class="w-24"
						bind:value={selectedYear}
						onchange={fetchAvailableClasses}
					/>
					<div class="relative flex-1">
						<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
						<Input placeholder="Cari mata kuliah..." class="pl-8" oninput={debounceSearch} />
					</div>
				</div>

				<div class="rounded-md border">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Kode</TableHead>
								<TableHead>Mata Kuliah</TableHead>
								<TableHead>SKS</TableHead>
								<TableHead>Dosen</TableHead>
								<TableHead>Jadwal</TableHead>
								<TableHead class="text-right">Aksi</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{#if loadingClasses}
								<TableRow>
									<TableCell colspan={6} class="h-24 text-center">
										<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
									</TableCell>
								</TableRow>
							{:else if availableClasses.length === 0}
								<TableRow>
									<TableCell colspan={6} class="h-24 text-center text-muted-foreground">
										Tidak ada kelas tersedia.
									</TableCell>
								</TableRow>
							{:else}
								{#each availableClasses as cls}
									<TableRow>
										<TableCell>{cls.course_code}</TableCell>
										<TableCell class="font-medium">{cls.course_name}</TableCell>
										<TableCell>{cls.credits}</TableCell>
										<TableCell>{cls.lecturer_name || '-'}</TableCell>
										<TableCell>
											{#if cls.day}
												<div class="flex items-center text-sm">
													<Clock class="mr-1 h-3 w-3" />
													{cls.day}, {cls.start_time?.slice(0, 5)}-{cls.end_time?.slice(0, 5)}
												</div>
												<div class="text-xs text-muted-foreground">{cls.room || 'Online'}</div>
											{:else}
												<span class="text-muted-foreground">-</span>
											{/if}
										</TableCell>
										<TableCell class="text-right">
											{#if enrollments.some((e) => e.class_id === cls.id)}
												<Button variant="ghost" size="sm" disabled>
													<CheckCircle2 class="mr-2 h-4 w-4 text-green-500" />
													Diambil
												</Button>
											{:else}
												<Button
													size="sm"
													disabled={enrollingId === cls.id}
													onclick={() => doEnroll(cls.id)}
												>
													{#if enrollingId === cls.id}
														<Loader2 class="mr-2 h-4 w-4 animate-spin" />
													{:else}
														<Plus class="mr-2 h-4 w-4" />
													{/if}
													Ambil
												</Button>
											{/if}
										</TableCell>
									</TableRow>
								{/each}
							{/if}
						</TableBody>
					</Table>
				</div>
			</DialogContent>
		</Dialog>
	</div>

	<!-- Summary Cards -->
	<div class="grid gap-4 md:grid-cols-3">
		<div class="rounded-xl border bg-card p-6 text-card-foreground shadow">
			<div class="flex flex-row items-center justify-between space-y-0 pb-2">
				<h3 class="text-sm font-medium tracking-tight">Total SKS Diambil</h3>
				<BookOpen class="h-4 w-4 text-muted-foreground" />
			</div>
			<div class="text-2xl font-bold">
				{enrollments.reduce((acc, curr) => acc + (curr.credits || 0), 0)}
			</div>
			<p class="text-xs text-muted-foreground">Semester {selectedSemester} {selectedYear}</p>
		</div>
		<div class="rounded-xl border bg-card p-6 text-card-foreground shadow">
			<div class="flex flex-row items-center justify-between space-y-0 pb-2">
				<h3 class="text-sm font-medium tracking-tight">Mata Kuliah</h3>
				<Calendar class="h-4 w-4 text-muted-foreground" />
			</div>
			<div class="text-2xl font-bold">{enrollments.length}</div>
			<p class="text-xs text-muted-foreground">Sedang berlangsung</p>
		</div>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<h3 class="mb-4 leading-none font-semibold tracking-tight">Daftar Mata Kuliah Diambil</h3>
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Kode</TableHead>
							<TableHead>Mata Kuliah</TableHead>
							<TableHead>SKS</TableHead>
							<TableHead>Dosen</TableHead>
							<TableHead>Jadwal</TableHead>
							<TableHead>Status</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={6} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if enrollments.length === 0}
							<TableRow>
								<TableCell colspan={6} class="h-24 text-center text-muted-foreground">
									Belum ada mata kuliah yang diambil.
								</TableCell>
							</TableRow>
						{:else}
							{#each enrollments as enr}
								<TableRow>
									<TableCell>{enr.course_code}</TableCell>
									<TableCell class="font-medium">{enr.course_name}</TableCell>
									<TableCell>{enr.credits}</TableCell>
									<TableCell>{enr.lecturer_name || '-'}</TableCell>
									<TableCell>
										{#if enr.day}
											<div class="flex items-center text-sm">
												<Clock class="mr-1 h-3 w-3" />
												{enr.day}, {enr.start_time?.slice(0, 5)}-{enr.end_time?.slice(0, 5)}
											</div>
											<div class="text-xs text-muted-foreground">{enr.room || 'Online'}</div>
										{:else}
											<span class="text-muted-foreground">-</span>
										{/if}
									</TableCell>
									<TableCell>
										<Badge variant={enr.status === 'approved' ? 'default' : 'secondary'}>
											{enr.status || 'Enrolled'}
										</Badge>
									</TableCell>
								</TableRow>
							{/each}
						{/if}
					</TableBody>
				</Table>
			</div>
		</div>
	</div>
</div>
