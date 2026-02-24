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
		DialogHeader,
		DialogTitle,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import { Label } from '$lib/components/ui/label';
	import { Loader2, Trash2, CheckCircle, XCircle, Clock } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let proposals: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	let openDialog = $state(false);
	let selectedId = $state('');
	let selectedStatus = $state('pending');

	async function fetchProposals() {
		loading = true;
		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/research/all`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') proposals = response.data;
		} catch {
			toast.error('Gagal memuat data proposal');
		} finally {
			loading = false;
		}
	}

	function openStatusDialog(proposal: any) {
		selectedId = proposal.id;
		selectedStatus = proposal.status;
		openDialog = true;
	}

	async function handleUpdateStatus() {
		saving = true;
		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/research/${selectedId}/status`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` },
				body: JSON.stringify({ status: selectedStatus })
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Status diperbarui');
				openDialog = false;
				fetchProposals();
			} else {
				throw new Error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal memperbarui');
		} finally {
			saving = false;
		}
	}

	async function handleDelete(id: string) {
		if (!confirm('Hapus proposal ini?')) return;
		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/research/${id}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Proposal dihapus');
				fetchProposals();
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal menghapus');
		}
	}

	function getStatusBadge(status: string): 'default' | 'secondary' | 'destructive' {
		if (status === 'approved') return 'default';
		if (status === 'rejected') return 'destructive';
		return 'secondary';
	}

	function getStatusLabel(status: string): string {
		if (status === 'approved') return 'Disetujui';
		if (status === 'rejected') return 'Ditolak';
		return 'Menunggu';
	}

	onMount(() => {
		fetchProposals();
	});
</script>

<div class="flex flex-col gap-6">
	<div>
		<h1 class="text-3xl font-bold tracking-tight">Proposal Penelitian</h1>
		<p class="text-muted-foreground">Kelola proposal Skripsi, PKM, dan Magang mahasiswa.</p>
	</div>

	<Dialog bind:open={openDialog}>
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Ubah Status Proposal</DialogTitle>
			</DialogHeader>
			<div class="grid gap-4 py-4">
				<div class="grid gap-2">
					<Label>Status</Label>
					<select
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
						bind:value={selectedStatus}
					>
						<option value="pending">Menunggu</option>
						<option value="approved">Disetujui</option>
						<option value="rejected">Ditolak</option>
					</select>
				</div>
			</div>
			<DialogFooter>
				<Button variant="outline" onclick={() => (openDialog = false)}>Batal</Button>
				<Button onclick={handleUpdateStatus} disabled={saving}>
					{#if saving}<Loader2 class="mr-2 h-4 w-4 animate-spin" />{/if}
					Simpan
				</Button>
			</DialogFooter>
		</DialogContent>
	</Dialog>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Mahasiswa</TableHead>
							<TableHead>Judul</TableHead>
							<TableHead>Tipe</TableHead>
							<TableHead>Dosen Pilihan</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Tanggal</TableHead>
							<TableHead class="text-right">Aksi</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={7} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if proposals.length === 0}
							<TableRow>
								<TableCell colspan={7} class="h-24 text-center text-muted-foreground">
									Belum ada proposal.
								</TableCell>
							</TableRow>
						{:else}
							{#each proposals as p (p.id)}
								<TableRow>
									<TableCell>
										<div class="font-medium">{p.student_name}</div>
										<div class="text-xs text-muted-foreground">{p.student_number}</div>
									</TableCell>
									<TableCell>
										<div class="max-w-xs font-medium">{p.title}</div>
										{#if p.description}
											<div class="max-w-xs truncate text-xs text-muted-foreground">
												{p.description}
											</div>
										{/if}
									</TableCell>
									<TableCell>
										<Badge variant="outline">{p.type}</Badge>
									</TableCell>
									<TableCell class="text-sm">{p.supervisor_preferred || '-'}</TableCell>
									<TableCell>
										<Badge variant={getStatusBadge(p.status)} class="gap-1">
											{#if p.status === 'approved'}<CheckCircle class="h-3 w-3" />
											{:else if p.status === 'rejected'}<XCircle class="h-3 w-3" />
											{:else}<Clock class="h-3 w-3" />{/if}
											{getStatusLabel(p.status)}
										</Badge>
									</TableCell>
									<TableCell class="text-sm text-muted-foreground">
										{new Date(p.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button size="sm" variant="outline" onclick={() => openStatusDialog(p)}>
												Ubah Status
											</Button>
											<Button
												size="sm"
												variant="ghost"
												class="text-destructive"
												onclick={() => handleDelete(p.id)}
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
