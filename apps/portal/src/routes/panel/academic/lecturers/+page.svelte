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

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let lecturers: any[] = $state([]);
	let loading = $state(true);
	let search = $state('');
	let pagination = $state({
		page: 1,
		limit: 10,
		total: 0,
		totalPages: 1
	});
	let debounceTimer: NodeJS.Timeout;

	// Create Lecturer State
	let createOpen = $state(false);
	let createLoading = $state(false);
	let newLecturer = $state({
		fullName: '',
		email: '',
		password: '',
		lecturerNumber: ''
	});

	// Edit Lecturer State
	let editOpen = $state(false);
	let editLoading = $state(false);
	let editingLecturer = $state({
		id: '',
		fullName: '',
		lecturerNumber: ''
	});

	async function fetchLecturers() {
		loading = true;
		try {
			const query = new URLSearchParams({
				page: pagination.page.toString(),
				limit: pagination.limit.toString(),
				search: search
			});

			const res = await fetch(`http://localhost:3002/api/v1/lecturers?${query.toString()}`, {
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});

			const response = await res.json();
			if (response.status === 'success') {
				lecturers = response.data;
				pagination = response.meta;
			}
		} catch (error) {
			console.error('Failed to fetch lecturers:', error);
			toast.error('Gagal memuat data dosen');
		} finally {
			loading = false;
		}
	}

	async function handleCreateLecturer() {
		createLoading = true;
		try {
			// 1. Create User in Identity Service
			const userRes = await fetch('http://localhost:3001/api/v1/auth/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					email: newLecturer.email,
					password: newLecturer.password,
					fullName: newLecturer.fullName,
					roleName: 'lecturer'
				})
			});
			const userResponse = await userRes.json();

			if (userResponse.status !== 'success') {
				throw new Error(userResponse.message || 'Gagal membuat user');
			}

			const userId = userResponse.data.id;

			// 2. Create Lecturer in Academic Service
			const lecturerRes = await fetch('http://localhost:3002/api/v1/lecturers', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					user_id: userId,
					name: newLecturer.fullName,
					lecturer_number: newLecturer.lecturerNumber
				})
			});
			const lecturerResponse = await lecturerRes.json();

			if (lecturerResponse.status !== 'success') {
				throw new Error(lecturerResponse.message || 'Gagal membuat data dosen');
			}

			toast.success('Dosen berhasil ditambahkan');
			createOpen = false;
			newLecturer = { fullName: '', email: '', password: '', lecturerNumber: '' };
			fetchLecturers();
		} catch (error: any) {
			console.error('Create lecturer error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			createLoading = false;
		}
	}

	function openEditDialog(lecturer: any) {
		editingLecturer = {
			id: lecturer.id,
			fullName: lecturer.name,
			lecturerNumber: lecturer.platform_lecturer_number || ''
		};
		editOpen = true;
	}

	async function handleUpdateLecturer() {
		editLoading = true;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/lecturers/${editingLecturer.id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					name: editingLecturer.fullName,
					lecturer_number: editingLecturer.lecturerNumber
				})
			});
			const response = await res.json();

			if (response.status === 'success') {
				toast.success('Data dosen berhasil diperbarui');
				editOpen = false;
				fetchLecturers();
			} else {
				throw new Error(response.message || 'Gagal memperbarui data dosen');
			}
		} catch (error: any) {
			console.error('Update lecturer error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			editLoading = false;
		}
	}

	async function handleDeleteLecturer(id: string) {
		if (
			!confirm(
				'Apakah Anda yakin ingin menghapus dosen ini? Data yang dihapus tidak dapat dikembalikan.'
			)
		)
			return;

		try {
			const res = await fetch(`http://localhost:3002/api/v1/lecturers/${id}`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Dosen berhasil dihapus');
				fetchLecturers();
			} else {
				toast.error(response.message || 'Gagal menghapus dosen');
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
			fetchLecturers();
		}, 500);
	}

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			pagination.page = newPage;
			fetchLecturers();
		}
	}

	onMount(() => {
		fetchLecturers();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Data Dosen</h1>
			<p class="text-muted-foreground">Kelola data dosen dan pengajar.</p>
		</div>
		<div class="flex gap-2">
			<!-- CREATE LECTURER DIALOG -->
			<Dialog bind:open={createOpen}>
				<DialogTrigger>
					<Button>
						<Plus class="mr-2 h-4 w-4" />
						Tambah Dosen
					</Button>
				</DialogTrigger>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Tambah Dosen Baru</DialogTitle>
						<DialogDescription>
							Buat akun user dan data dosen baru secara bersamaan.
						</DialogDescription>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid gap-2">
							<Label for="name">Nama Lengkap</Label>
							<Input
								id="name"
								bind:value={newLecturer.fullName}
								placeholder="Contoh: Dr. Budi Santoso, M.Kom"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="nidn">NIDN/NIP (Opsional)</Label>
							<Input
								id="nidn"
								bind:value={newLecturer.lecturerNumber}
								placeholder="Contoh: 04123456"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="email">Email</Label>
							<Input
								id="email"
								type="email"
								bind:value={newLecturer.email}
								placeholder="dosen@example.com"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="password">Password</Label>
							<Input
								id="password"
								type="password"
								bind:value={newLecturer.password}
								placeholder="Minimal 6 karakter"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (createOpen = false)} disabled={createLoading}
							>Batal</Button
						>
						<Button onclick={handleCreateLecturer} disabled={createLoading}>
							{#if createLoading}
								<Loader2 class="mr-2 h-4 w-4 animate-spin" />
							{/if}
							Simpan
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>

			<!-- EDIT LECTURER DIALOG -->
			<Dialog bind:open={editOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Edit Data Dosen</DialogTitle>
					</DialogHeader>
					<div class="grid gap-4 py-4">
						<div class="grid gap-2">
							<Label for="edit-name">Nama Lengkap</Label>
							<Input
								id="edit-name"
								bind:value={editingLecturer.fullName}
								placeholder="Nama Lengkap"
							/>
						</div>
						<div class="grid gap-2">
							<Label for="edit-nidn">NIDN/NIP</Label>
							<Input
								id="edit-nidn"
								bind:value={editingLecturer.lecturerNumber}
								placeholder="NIDN/NIP"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button variant="outline" onclick={() => (editOpen = false)} disabled={editLoading}
							>Batal</Button
						>
						<Button onclick={handleUpdateLecturer} disabled={editLoading}>
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
						placeholder="Cari nama atau NIDN..."
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
							<TableHead>NIDN/NIP</TableHead>
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
						{:else if lecturers.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Tidak ada data dosen.
								</TableCell>
							</TableRow>
						{:else}
							{#each lecturers as lecturer (lecturer.id)}
								<TableRow>
									<TableCell class="font-medium"
										>{lecturer.platform_lecturer_number || '-'}</TableCell
									>
									<TableCell>{lecturer.name}</TableCell>
									<TableCell>
										<Badge variant="outline" class="capitalize">{lecturer.status || 'Active'}</Badge
										>
									</TableCell>
									<TableCell>
										{new Date(lecturer.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex justify-end gap-2">
											<Button variant="ghost" size="icon" onclick={() => openEditDialog(lecturer)}>
												<FileEdit class="h-4 w-4" />
												<span class="sr-only">Edit</span>
											</Button>
											<Button
												variant="ghost"
												size="icon"
												class="text-destructive hover:bg-destructive/10"
												onclick={() => handleDeleteLecturer(lecturer.id)}
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
