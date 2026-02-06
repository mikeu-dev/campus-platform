<script lang="ts">
	import { Plus, Pencil, Trash2, Library, CheckCircle2, XCircle } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import { Checkbox } from '$lib/components/ui/checkbox';

	let { data, form } = $props();
	const { prodis = [] } = $derived(data);

	let isCreateDialogOpen = $state(false);
	let isEditDialogOpen = $state(false);
	let selectedProdi = $state<any>(null);

	function openEditDialog(prodi: any) {
		selectedProdi = { ...prodi };
		isEditDialogOpen = true;
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Program Studi</h2>
			<p class="text-muted-foreground">Kelola daftar pilihan program studi untuk pendaftar PMB.</p>
		</div>
		<Button onclick={() => (isCreateDialogOpen = true)}>
			<Plus class="mr-2 h-4 w-4" /> Tambah Prodi
		</Button>
	</div>

	{#if form?.message}
		<div class="rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-700">
			{form.message}
		</div>
	{/if}

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each prodis as prodi}
			<Card class={!prodi.is_active ? 'bg-muted/30 opacity-60' : ''}>
				<CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle class="text-lg font-bold">{prodi.name}</CardTitle>
						<CardDescription>{prodi.faculty || 'Fakultas Belum Diatur'}</CardDescription>
					</div>
					<Badge variant={prodi.is_active ? 'default' : 'secondary'} class="text-[10px]">
						{prodi.is_active ? 'Aktif' : 'Non-aktif'}
					</Badge>
				</CardHeader>
				<CardContent>
					<div class="mt-4 flex justify-end gap-2">
						<Button variant="outline" size="sm" onclick={() => openEditDialog(prodi)}>
							<Pencil class="mr-2 h-3 w-3" /> Ubah
						</Button>
						<form action="?/delete" method="POST" onsubmit={() => confirm('Hapus prodi ini?')}>
							<input type="hidden" name="id" value={prodi.id} />
							<Button variant="ghost" size="sm" class="text-destructive hover:bg-destructive/10">
								<Trash2 class="h-3 w-3" />
							</Button>
						</form>
					</div>
				</CardContent>
			</Card>
		{:else}
			<div
				class="col-span-full flex h-32 items-center justify-center rounded-lg border-2 border-dashed"
			>
				<p class="text-muted-foreground italic">Belum ada program studi yang ditambahkan.</p>
			</div>
		{/each}
	</div>
</div>

<!-- Create Dialog -->
<Dialog bind:open={isCreateDialogOpen}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Tambah Program Studi</DialogTitle>
		</DialogHeader>
		<form
			action="?/create"
			method="POST"
			class="space-y-4 py-4"
			onsubmit={() => (isCreateDialogOpen = false)}
		>
			<div class="space-y-2">
				<Label for="name">Nama Program Studi</Label>
				<Input id="name" name="name" placeholder="Contoh: Teknik Informatika" required />
			</div>
			<div class="space-y-2">
				<Label for="faculty">Fakultas</Label>
				<Input id="faculty" name="faculty" placeholder="Contoh: Fakultas Teknik" />
			</div>
			<DialogFooter>
				<Button type="button" variant="ghost" onclick={() => (isCreateDialogOpen = false)}
					>Batal</Button
				>
				<Button type="submit">Simpan</Button>
			</DialogFooter>
		</form>
	</DialogContent>
</Dialog>

<!-- Edit Dialog -->
<Dialog bind:open={isEditDialogOpen}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Ubah Program Studi</DialogTitle>
		</DialogHeader>
		{#if selectedProdi}
			<form
				action="?/update"
				method="POST"
				class="space-y-4 py-4"
				onsubmit={() => (isEditDialogOpen = false)}
			>
				<input type="hidden" name="id" value={selectedProdi.id} />
				<div class="space-y-2">
					<Label for="edit_name">Nama Program Studi</Label>
					<Input id="edit_name" name="name" bind:value={selectedProdi.name} required />
				</div>
				<div class="space-y-2">
					<Label for="edit_faculty">Fakultas</Label>
					<Input id="edit_faculty" name="faculty" bind:value={selectedProdi.faculty} />
				</div>
				<div class="flex items-center space-x-2 py-2">
					<input
						type="checkbox"
						id="edit_active"
						name="is_active"
						checked={selectedProdi.is_active}
						class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
					/>
					<Label for="edit_active">Prodi Aktif (Muncul di Formulir)</Label>
				</div>
				<DialogFooter>
					<Button type="button" variant="ghost" onclick={() => (isEditDialogOpen = false)}
						>Batal</Button
					>
					<Button type="submit">Simpan Perubahan</Button>
				</DialogFooter>
			</form>
		{/if}
	</DialogContent>
</Dialog>
