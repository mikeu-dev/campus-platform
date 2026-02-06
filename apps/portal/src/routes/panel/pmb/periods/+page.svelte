<script lang="ts">
	import { Plus, Pencil, Trash2, Calendar, Check, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Checkbox } from '$lib/components/ui/checkbox';
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
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();
	const { periods } = $derived(data);

	let isDialogOpen = $state(false);
	let editingPeriod = $state<any>(null);

	function openCreate() {
		editingPeriod = null;
		isDialogOpen = true;
	}

	function openEdit(period: any) {
		editingPeriod = { ...period };
		isDialogOpen = true;
	}

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Gelombang & Jalur PMB</h2>
			<p class="text-muted-foreground">Kelola periode pendaftaran mahasiswa baru.</p>
		</div>
		<Button onclick={openCreate}>
			<Plus class="mr-2 h-4 w-4" />
			Tambah Gelombang
		</Button>
	</div>

	<div class="rounded-md border bg-card">
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Nama Gelombang</TableHead>
					<TableHead>Mulai</TableHead>
					<TableHead>Berakhir</TableHead>
					<TableHead>Status</TableHead>
					<TableHead class="text-right">Aksi</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each periods as period}
					<TableRow>
						<TableCell>
							<div class="font-medium">{period.name}</div>
							{#if period.description}
								<div class="text-xs text-muted-foreground">{period.description}</div>
							{/if}
						</TableCell>
						<TableCell>{formatDate(period.start_date)}</TableCell>
						<TableCell>{formatDate(period.end_date)}</TableCell>
						<TableCell>
							{#if period.is_active}
								<Badge class="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>
							{:else}
								<Badge variant="secondary">Nonaktif</Badge>
							{/if}
						</TableCell>
						<TableCell class="text-right">
							<div class="flex justify-end gap-2">
								<Button variant="ghost" size="icon" onclick={() => openEdit(period)}>
									<Pencil class="h-4 w-4" />
								</Button>
								<form
									action="?/delete"
									method="POST"
									onsubmit={() => confirm('Hapus gelombang ini?')}
								>
									<input type="hidden" name="id" value={period.id} />
									<Button variant="ghost" size="icon" class="text-destructive">
										<Trash2 class="h-4 w-4" />
									</Button>
								</form>
							</div>
						</TableCell>
					</TableRow>
				{:else}
					<TableRow>
						<TableCell colspan={5} class="h-24 text-center text-muted-foreground italic">
							Belum ada gelombang pendaftaran.
						</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>

<Dialog bind:open={isDialogOpen}>
	<DialogContent class="sm:max-w-[500px]">
		<DialogHeader>
			<DialogTitle>{editingPeriod ? 'Edit Gelombang' : 'Tambah Gelombang Baru'}</DialogTitle>
			<DialogDescription>
				Tentukan nama gelombang, periode pendaftaran, dan status aktivasi.
			</DialogDescription>
		</DialogHeader>
		<form action={editingPeriod ? '?/update' : '?/create'} method="POST" class="space-y-4 py-4">
			{#if editingPeriod}
				<input type="hidden" name="id" value={editingPeriod.id} />
			{/if}

			<div class="grid gap-2">
				<Label for="name">Nama Gelombang</Label>
				<Input
					id="name"
					name="name"
					placeholder="Contoh: Gelombang 1 2026"
					value={editingPeriod?.name || ''}
					required
				/>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="grid gap-2">
					<Label for="start_date">Tanggal Mulai</Label>
					<Input
						id="start_date"
						name="start_date"
						type="date"
						value={editingPeriod?.start_date?.split('T')[0] || ''}
						required
					/>
				</div>
				<div class="grid gap-2">
					<Label for="end_date">Tanggal Berakhir</Label>
					<Input
						id="end_date"
						name="end_date"
						type="date"
						value={editingPeriod?.end_date?.split('T')[0] || ''}
						required
					/>
				</div>
			</div>

			<div class="grid gap-2">
				<Label for="description">Keterangan</Label>
				<Textarea
					id="description"
					name="description"
					placeholder="Info tambahan mengenai jalur ini..."
					value={editingPeriod?.description || ''}
				/>
			</div>

			<div class="flex items-center space-x-2">
				<Checkbox
					id="is_active"
					name="is_active"
					checked={editingPeriod ? editingPeriod.is_active : true}
				/>
				<Label
					for="is_active"
					class="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Aktifkan gelombang ini
				</Label>
			</div>

			<DialogFooter>
				<Button type="button" variant="ghost" onclick={() => (isDialogOpen = false)}>Batal</Button>
				<Button type="submit">{editingPeriod ? 'Simpan Perubahan' : 'Tambah Gelombang'}</Button>
			</DialogFooter>
		</form>
	</DialogContent>
</Dialog>
