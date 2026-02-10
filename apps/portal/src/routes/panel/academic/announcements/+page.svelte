<script lang="ts">
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
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Plus, Pencil, Trash2, Loader2, Megaphone, Eye, EyeOff } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let announcements: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	// Form state
	let openDialog = $state(false);
	let editingId: string | null = $state(null);
	let formTitle = $state('');
	let formContent = $state('');
	let formType = $state('general');
	let formIsActive = $state(true);

	async function fetchAnnouncements() {
		loading = true;
		try {
			const res = await fetch('http://localhost:3002/api/v1/announcements/all', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				announcements = response.data;
			}
		} catch (error) {
			console.error('Failed to fetch announcements:', error);
			toast.error('Gagal memuat pengumuman');
		} finally {
			loading = false;
		}
	}

	function resetForm() {
		editingId = null;
		formTitle = '';
		formContent = '';
		formType = 'general';
		formIsActive = true;
	}

	function openCreate() {
		resetForm();
		openDialog = true;
	}

	function openEdit(item: any) {
		editingId = item.id;
		formTitle = item.title;
		formContent = item.content;
		formType = item.type || 'general';
		formIsActive = item.is_active;
		openDialog = true;
	}

	async function handleSave() {
		if (!formTitle || !formContent) {
			toast.error('Judul dan konten wajib diisi');
			return;
		}
		saving = true;
		try {
			const body = {
				title: formTitle,
				content: formContent,
				type: formType,
				is_active: formIsActive
			};

			let res: Response;
			if (editingId) {
				res = await fetch(`http://localhost:3002/api/v1/announcements/${editingId}`, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` },
					body: JSON.stringify(body)
				});
			} else {
				res = await fetch('http://localhost:3002/api/v1/announcements', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` },
					body: JSON.stringify(body)
				});
			}

			const response = await res.json();
			if (response.status === 'success') {
				toast.success(editingId ? 'Pengumuman diperbarui' : 'Pengumuman ditambahkan');
				openDialog = false;
				fetchAnnouncements();
			} else {
				throw new Error(response.message || 'Gagal menyimpan');
			}
		} catch (error: any) {
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			saving = false;
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Hapus pengumuman ini?')) return;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/announcements/${id}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Pengumuman dihapus');
				fetchAnnouncements();
			} else {
				throw new Error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal menghapus');
		}
	}

	function getTypeBadge(type: string): 'default' | 'secondary' | 'destructive' | 'outline' {
		if (type === 'academic') return 'default';
		if (type === 'financial') return 'destructive';
		return 'secondary';
	}

	function getTypeLabel(type: string): string {
		if (type === 'academic') return 'Akademik';
		if (type === 'financial') return 'Keuangan';
		return 'Umum';
	}

	onMount(() => {
		fetchAnnouncements();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Manajemen Pengumuman</h1>
			<p class="text-muted-foreground">Kelola pengumuman untuk mahasiswa dan dosen.</p>
		</div>
		<Dialog bind:open={openDialog}>
			<DialogTrigger>
				<Button onclick={openCreate}>
					<Plus class="mr-2 h-4 w-4" />
					Buat Pengumuman
				</Button>
			</DialogTrigger>
			<DialogContent class="max-w-lg">
				<DialogHeader>
					<DialogTitle>{editingId ? 'Edit Pengumuman' : 'Buat Pengumuman Baru'}</DialogTitle>
					<DialogDescription>
						{editingId ? 'Perbarui pengumuman.' : 'Tulis pengumuman baru.'}
					</DialogDescription>
				</DialogHeader>

				<div class="grid gap-4 py-4">
					<div class="grid gap-2">
						<Label>Judul</Label>
						<Input bind:value={formTitle} placeholder="Judul pengumuman" />
					</div>
					<div class="grid gap-2">
						<Label>Konten</Label>
						<textarea
							class="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
							bind:value={formContent}
							placeholder="Isi pengumuman..."
						></textarea>
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="grid gap-2">
							<Label>Kategori</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
								bind:value={formType}
							>
								<option value="general">Umum</option>
								<option value="academic">Akademik</option>
								<option value="financial">Keuangan</option>
							</select>
						</div>
						<div class="grid gap-2">
							<Label>Status</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
								bind:value={formIsActive}
							>
								<option value={true}>Aktif</option>
								<option value={false}>Non-Aktif</option>
							</select>
						</div>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onclick={() => (openDialog = false)}>Batal</Button>
					<Button onclick={handleSave} disabled={saving}>
						{#if saving}
							<Loader2 class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						{editingId ? 'Perbarui' : 'Simpan'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Judul</TableHead>
							<TableHead>Kategori</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Tanggal</TableHead>
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
						{:else if announcements.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Belum ada pengumuman.
								</TableCell>
							</TableRow>
						{:else}
							{#each announcements as item}
								<TableRow>
									<TableCell>
										<div class="font-medium">{item.title}</div>
										<div class="max-w-xs truncate text-xs text-muted-foreground">
											{item.content}
										</div>
									</TableCell>
									<TableCell>
										<Badge variant={getTypeBadge(item.type)}>
											{getTypeLabel(item.type)}
										</Badge>
									</TableCell>
									<TableCell>
										{#if item.is_active}
											<Badge variant="default" class="gap-1">
												<Eye class="h-3 w-3" />
												Aktif
											</Badge>
										{:else}
											<Badge variant="outline" class="gap-1">
												<EyeOff class="h-3 w-3" />
												Non-Aktif
											</Badge>
										{/if}
									</TableCell>
									<TableCell class="text-sm text-muted-foreground">
										{new Date(item.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button size="sm" variant="ghost" onclick={() => openEdit(item)}>
												<Pencil class="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="ghost"
												class="text-destructive"
												onclick={() => handleDelete(item.id)}
											>
												<Trash2 class="h-4 w-4" />
											</Button>
										</div>
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
