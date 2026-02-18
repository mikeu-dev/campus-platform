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
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Loader2, Trash2, CheckCircle, XCircle, Clock, FileDown } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let requests: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	let openDialog = $state(false);
	let selectedId = $state('');
	let selectedStatus = $state('pending');
	let rejectionReason = $state('');
	let downloadUrl = $state('');

	async function fetchRequests() {
		loading = true;
		try {
			const res = await fetch('http://localhost:3002/api/v1/certificates/all', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') requests = response.data;
		} catch {
			toast.error('Gagal memuat data permohonan');
		} finally {
			loading = false;
		}
	}

	function openStatusDialog(req: any) {
		selectedId = req.id;
		selectedStatus = req.status;
		rejectionReason = req.rejection_reason || '';
		downloadUrl = req.download_url || '';
		openDialog = true;
	}

	async function handleUpdateStatus() {
		saving = true;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/certificates/${selectedId}/status`, {
				method: 'PUT',
				headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` },
				body: JSON.stringify({
					status: selectedStatus,
					rejection_reason: rejectionReason,
					download_url: downloadUrl
				})
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Status diperbarui');
				openDialog = false;
				fetchRequests();
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
		if (!confirm('Hapus permohonan ini?')) return;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/certificates/${id}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Permohonan dihapus');
				fetchRequests();
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal menghapus');
		}
	}

	function getStatusBadge(status: string): 'default' | 'secondary' | 'destructive' | 'outline' {
		if (status === 'finished') return 'default';
		if (status === 'rejected') return 'destructive';
		if (status === 'processing') return 'outline';
		return 'secondary';
	}

	function getStatusLabel(status: string): string {
		if (status === 'finished') return 'Selesai';
		if (status === 'rejected') return 'Ditolak';
		if (status === 'processing') return 'Diproses';
		return 'Menunggu';
	}

	onMount(() => {
		fetchRequests();
	});
</script>

<div class="flex flex-col gap-6">
	<div>
		<h1 class="text-3xl font-bold tracking-tight">Permohonan Surat</h1>
		<p class="text-muted-foreground">Kelola permohonan surat dan sertifikat mahasiswa.</p>
	</div>

	<Dialog bind:open={openDialog}>
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Ubah Status Permohonan</DialogTitle>
			</DialogHeader>
			<div class="grid gap-4 py-4">
				<div class="grid gap-2">
					<Label>Status</Label>
					<select
						class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
						bind:value={selectedStatus}
					>
						<option value="pending">Menunggu</option>
						<option value="processing">Diproses</option>
						<option value="finished">Selesai</option>
						<option value="rejected">Ditolak</option>
					</select>
				</div>
				{#if selectedStatus === 'rejected'}
					<div class="grid gap-2">
						<Label>Alasan Penolakan</Label>
						<textarea
							class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
							bind:value={rejectionReason}
							placeholder="Alasan penolakan..."
						></textarea>
					</div>
				{/if}
				{#if selectedStatus === 'finished'}
					<div class="grid gap-2">
						<Label>URL Download</Label>
						<Input bind:value={downloadUrl} placeholder="https://..." />
					</div>
				{/if}
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
							<TableHead>Jenis Surat</TableHead>
							<TableHead>Keperluan</TableHead>
							<TableHead>Jumlah</TableHead>
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
						{:else if requests.length === 0}
							<TableRow>
								<TableCell colspan={7} class="h-24 text-center text-muted-foreground">
									Belum ada permohonan.
								</TableCell>
							</TableRow>
						{:else}
							{#each requests as req (req.id)}
								<TableRow>
									<TableCell>
										<div class="font-medium">{req.student_name}</div>
										<div class="text-xs text-muted-foreground">{req.student_number}</div>
									</TableCell>
									<TableCell class="font-medium">{req.type}</TableCell>
									<TableCell class="max-w-xs text-sm">{req.purpose || '-'}</TableCell>
									<TableCell>{req.quantity}</TableCell>
									<TableCell>
										<Badge variant={getStatusBadge(req.status)} class="gap-1">
											{#if req.status === 'finished'}<CheckCircle class="h-3 w-3" />
											{:else if req.status === 'rejected'}<XCircle class="h-3 w-3" />
											{:else if req.status === 'processing'}<FileDown class="h-3 w-3" />
											{:else}<Clock class="h-3 w-3" />{/if}
											{getStatusLabel(req.status)}
										</Badge>
									</TableCell>
									<TableCell class="text-sm text-muted-foreground">
										{new Date(req.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button size="sm" variant="outline" onclick={() => openStatusDialog(req)}>
												Ubah Status
											</Button>
											<Button
												size="sm"
												variant="ghost"
												class="text-destructive"
												onclick={() => handleDelete(req.id)}
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
