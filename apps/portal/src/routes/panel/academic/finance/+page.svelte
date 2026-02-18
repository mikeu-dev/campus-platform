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
	import { Plus, Pencil, Trash2, Loader2, Check, X } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let bills: any[] = $state([]);
	let students: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	let openDialog = $state(false);
	let editingId: string | null = $state(null);
	let formStudentId = $state('');
	let formTitle = $state('');
	let formAmount = $state(0);
	let formDueDate = $state('');
	let formIsPaid = $state(false);

	async function fetchBills() {
		loading = true;
		try {
			const res = await fetch('http://localhost:3002/api/v1/finance/bills', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') bills = response.data;
		} catch {
			toast.error('Gagal memuat data tagihan');
		} finally {
			loading = false;
		}
	}

	async function fetchStudents() {
		try {
			const res = await fetch('http://localhost:3002/api/v1/students?limit=500', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') students = response.data;
		} catch (error) {
			console.error('Failed to fetch students:', error);
		}
	}

	function resetForm() {
		editingId = null;
		formStudentId = '';
		formTitle = '';
		formAmount = 0;
		formDueDate = '';
		formIsPaid = false;
	}

	function openCreate() {
		resetForm();
		openDialog = true;
	}

	function openEdit(bill: any) {
		editingId = bill.id;
		formStudentId = bill.student_id;
		formTitle = bill.title;
		formAmount = bill.amount;
		formDueDate = bill.due_date?.slice(0, 10) || '';
		formIsPaid = bill.is_paid;
		openDialog = true;
	}

	async function handleSave() {
		if (!formTitle || !formAmount) {
			toast.error('Judul dan nominal wajib diisi');
			return;
		}
		saving = true;
		try {
			const body: any = {
				title: formTitle,
				amount: formAmount,
				due_date: formDueDate || null,
				is_paid: formIsPaid
			};

			let res: Response;
			if (editingId) {
				res = await fetch(`http://localhost:3002/api/v1/finance/bills/${editingId}`, {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` },
					body: JSON.stringify(body)
				});
			} else {
				body.student_id = formStudentId;
				res = await fetch('http://localhost:3002/api/v1/finance/bills', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${data.token}` },
					body: JSON.stringify(body)
				});
			}
			const response = await res.json();
			if (response.status === 'success') {
				toast.success(editingId ? 'Tagihan diperbarui' : 'Tagihan ditambahkan');
				openDialog = false;
				fetchBills();
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
		if (!confirm('Hapus tagihan ini?')) return;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/finance/bills/${id}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Tagihan dihapus');
				fetchBills();
			} else {
				throw new Error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal menghapus');
		}
	}

	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(amount);
	}

	onMount(() => {
		fetchBills();
		fetchStudents();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Manajemen Tagihan</h1>
			<p class="text-muted-foreground">Kelola tagihan keuangan mahasiswa.</p>
		</div>
		<Dialog bind:open={openDialog}>
			<DialogTrigger>
				<Button onclick={openCreate}>
					<Plus class="mr-2 h-4 w-4" />
					Buat Tagihan
				</Button>
			</DialogTrigger>
			<DialogContent class="max-w-lg">
				<DialogHeader>
					<DialogTitle>{editingId ? 'Edit Tagihan' : 'Buat Tagihan Baru'}</DialogTitle>
					<DialogDescription>
						{editingId ? 'Perbarui data tagihan.' : 'Tambah tagihan baru untuk mahasiswa.'}
					</DialogDescription>
				</DialogHeader>
				<div class="grid gap-4 py-4">
					{#if !editingId}
						<div class="grid gap-2">
							<Label>Mahasiswa</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
								bind:value={formStudentId}
							>
								<option value="" disabled>Pilih Mahasiswa</option>
								{#each students as s (s.id)}
									<option value={s.id}>{s.student_number} - {s.name}</option>
								{/each}
							</select>
						</div>
					{/if}
					<div class="grid gap-2">
						<Label>Judul Tagihan</Label>
						<Input bind:value={formTitle} placeholder="SPP Semester Ganjil 2025/2026" />
					</div>
					<div class="grid grid-cols-2 gap-4">
						<div class="grid gap-2">
							<Label>Nominal (Rp)</Label>
							<Input type="number" bind:value={formAmount} />
						</div>
						<div class="grid gap-2">
							<Label>Jatuh Tempo</Label>
							<Input type="date" bind:value={formDueDate} />
						</div>
					</div>
					{#if editingId}
						<div class="grid gap-2">
							<Label>Status Pembayaran</Label>
							<select
								class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
								bind:value={formIsPaid}
							>
								<option value={false}>Belum Lunas</option>
								<option value={true}>Lunas</option>
							</select>
						</div>
					{/if}
				</div>
				<DialogFooter>
					<Button variant="outline" onclick={() => (openDialog = false)}>Batal</Button>
					<Button onclick={handleSave} disabled={saving}>
						{#if saving}<Loader2 class="mr-2 h-4 w-4 animate-spin" />{/if}
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
							<TableHead>Mahasiswa</TableHead>
							<TableHead>Tagihan</TableHead>
							<TableHead>Nominal</TableHead>
							<TableHead>Jatuh Tempo</TableHead>
							<TableHead>Status</TableHead>
							<TableHead class="text-right">Aksi</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={6} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if bills.length === 0}
							<TableRow>
								<TableCell colspan={6} class="h-24 text-center text-muted-foreground">
									Belum ada tagihan.
								</TableCell>
							</TableRow>
						{:else}
							{#each bills as bill (bill.id)}
								<TableRow>
									<TableCell>
										<div class="font-medium">{bill.student_name}</div>
										<div class="text-xs text-muted-foreground">{bill.student_number}</div>
									</TableCell>
									<TableCell class="font-medium">{bill.title}</TableCell>
									<TableCell class="font-mono">{formatCurrency(bill.amount)}</TableCell>
									<TableCell class="text-sm">
										{bill.due_date ? new Date(bill.due_date).toLocaleDateString('id-ID') : '-'}
									</TableCell>
									<TableCell>
										{#if bill.is_paid}
											<Badge variant="default" class="gap-1">
												<Check class="h-3 w-3" />
												Lunas
											</Badge>
										{:else}
											<Badge variant="destructive" class="gap-1">
												<X class="h-3 w-3" />
												Belum Lunas
											</Badge>
										{/if}
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button size="sm" variant="ghost" onclick={() => openEdit(bill)}>
												<Pencil class="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="ghost"
												class="text-destructive"
												onclick={() => handleDelete(bill.id)}
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
