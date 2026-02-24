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
	import { Search, Loader2, FileEdit, Trash2, Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { PUBLIC_ACADEMIC_API_URL, PUBLIC_IDENTITY_API_URL } from '$env/static/public';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let students: any[] = $state([]);
	let loading = $state(true);
	let search = $state('');
	let pagination = $state({
		page: 1,
		limit: 10,
		total: 0,
		totalPages: 1
	});
	let debounceTimer: NodeJS.Timeout;

	// Create Student State
	let createOpen = $state(false);
	let createLoading = $state(false);
	let newStudent = $state({
		fullName: '',
		email: '',
		password: '',
		studentNumber: ''
	});

	async function fetchStudents() {
		loading = true;
		try {
			const query = new URLSearchParams({
				page: pagination.page.toString(),
				limit: pagination.limit.toString(),
				search: search
			});

			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/students?${query.toString()}`, {
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});

			const response = await res.json();
			if (response.status === 'success') {
				students = response.data;
				pagination = response.meta;
			}
		} catch (error) {
			console.error('Failed to fetch students:', error);
			toast.error('Gagal memuat data mahasiswa');
		} finally {
			loading = false;
		}
	}

	async function handleCreateStudent() {
		createLoading = true;
		try {
			// 1. Create User in Identity Service
			const userRes = await fetch(`${PUBLIC_IDENTITY_API_URL}/auth/users`, {
				// Adjusted to match identity-service port
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					email: newStudent.email,
					password: newStudent.password,
					fullName: newStudent.fullName,
					roleName: 'student'
				})
			});
			const userResponse = await userRes.json();

			if (userResponse.status !== 'success') {
				throw new Error(userResponse.message || 'Gagal membuat user');
			}

			const userId = userResponse.data.id;

			// 2. Create Student in Academic Service
			const studentRes = await fetch(`${PUBLIC_ACADEMIC_API_URL}/students`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					user_id: userId,
					name: newStudent.fullName,
					student_number: newStudent.studentNumber
				})
			});
			const studentResponse = await studentRes.json();

			if (studentResponse.status !== 'success') {
				throw new Error(studentResponse.message || 'Gagal membuat data mahasiswa');
			}

			toast.success('Mahasiswa berhasil ditambahkan');
			createOpen = false;
			newStudent = { fullName: '', email: '', password: '', studentNumber: '' };
			fetchStudents();
		} catch (error: any) {
			console.error('Create student error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			createLoading = false;
		}
	}

	async function handleDeleteStudent(id: string) {
		if (
			!confirm(
				'Apakah Anda yakin ingin menghapus mahasiswa ini? Data yang dihapus tidak dapat dikembalikan.'
			)
		)
			return;

		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/students/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Mahasiswa berhasil dihapus');
				fetchStudents();
			} else {
				toast.error(response.message || 'Gagal menghapus mahasiswa');
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
			fetchStudents();
		}, 500);
	}

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			pagination.page = newPage;
			fetchStudents();
		}
	}

	onMount(() => {
		fetchStudents();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Data Mahasiswa</h1>
			<p class="text-muted-foreground">Kelola data dan profil mahasiswa.</p>
		</div>
		<div class="flex gap-2">
			<Button href="/panel/academic/students/report" variant="outline">Laporan</Button>
			<!-- CREATE STUDENT DIALOG -->
			<Dialog bind:open={createOpen}>
				<DialogTrigger>
					<Button>
						<Plus class="mr-2 h-4 w-4" />
						Tambah Mahasiswa
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Tambah Mahasiswa Baru</DialogTitle>
						<DialogDescription>
							Buat akun user dan data mahasiswa baru secara bersamaan.
						</DialogDescription>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid gap-2">
							<Label for="name">Nama Lengkap</Label>
							<Input
								id="name"
								bind:value={newStudent.fullName}
								placeholder="Contoh: Budi Santoso"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="nim">NIM (Opsional)</Label>
							<Input id="nim" bind:value={newStudent.studentNumber} placeholder="Contoh: 2024001" />
						</div>
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input
								id="email"
								type="email"
								bind:value={newStudent.email}
								placeholder="budi@example.com"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="password">Password</Label>
							<Input
								id="password"
								type="password"
								bind:value={newStudent.password}
								placeholder="Minimal 6 karakter"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (createOpen = false)} disabled={createLoading}
							>Batal</Button
						>
						<Button onclick={handleCreateStudent} disabled={createLoading}>
							{#if createLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Simpan
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
						placeholder="Cari nama atau NIM..."
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
							<TableHead>NIM (Platform)</TableHead>
							<TableHead>Nama</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Terdaftar</TableHead>
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
						{:else if students.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Tidak ada data mahasiswa.
								</TableCell>
							</TableRow>
						{:else}
							{#each students as student (student.id)}
								<TableRow>
									<TableCell class="font-medium">{student.platform_student_number || '-'}</TableCell
									>
									<TableCell>{student.name}</TableCell>
									<TableCell>
										<Badge variant="outline" class="capitalize">{student.status || 'Active'}</Badge>
									</TableCell>
									<TableCell>
										{new Date(student.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex justify-end gap-2">
											<Button
												variant="ghost"
												size="icon"
												href={`/panel/academic/students/${student.id}`}
											>
												<FileEdit class="h-4 w-4" />
												<span class="sr-only">Edit</span>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												class="text-destructive hover:bg-destructive/10"
												onclick={() => handleDeleteStudent(student.id)}
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
