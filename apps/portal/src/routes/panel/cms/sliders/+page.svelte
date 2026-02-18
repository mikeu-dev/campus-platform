<script lang="ts">
	import { Plus, Pencil, Trash2 } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
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
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { Card, CardContent } from '$lib/components/ui/card';

	let { data } = $props();
	const { sliders } = $derived(data);

	let isDialogOpen = $state(false);
	let editingSlider = $state<any>(null);

	function resetForm() {
		editingSlider = null;
		isDialogOpen = false;
	}

	function handleEdit(slider: any) {
		editingSlider = { ...slider };
		isDialogOpen = true;
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Slider Hero</h2>
			<p class="text-muted-foreground">
				Kelola gambar dan teks yang muncul di carousel halaman utama.
			</p>
			<Button
				onclick={() => {
					editingSlider = null;
					isDialogOpen = true;
				}}
				class="gap-2"
			>
				<Plus class="h-4 w-4" />
				Tambah Slider
			</Button>
		</div>
		<Dialog bind:open={isDialogOpen}>
			<DialogContent class="sm:max-w-[500px]">
				<form method="POST" action={editingSlider ? '?/update' : '?/create'} class="space-y-4">
					<DialogHeader>
						<DialogTitle>{editingSlider ? 'Edit Slider' : 'Tambah Slider Baru'}</DialogTitle>
						<DialogDescription>
							Masukkan detail slider. Slider yang aktif akan muncul di beranda tamu.
						</DialogDescription>
					</DialogHeader>

					{#if editingSlider}
						<input type="hidden" name="id" value={editingSlider.id} />
					{/if}

					<div class="grid gap-4 py-4">
						<div class="space-y-2">
							<Label for="title">Judul</Label>
							<Input
								id="title"
								name="title"
								value={editingSlider?.title || ''}
								placeholder="Judul besar di slider"
								required
							/>
						</div>
						<div class="space-y-2">
							<Label for="description">Deskripsi</Label>
							<Input
								id="description"
								name="description"
								value={editingSlider?.description || ''}
								placeholder="Teks penjelasan singkat"
							/>
						</div>
						<div class="space-y-2">
							<Label for="image_url">URL Gambar</Label>
							<Input
								id="image_url"
								name="image_url"
								value={editingSlider?.image_url || ''}
								placeholder="https://..."
								required
							/>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="order_index">Urutan</Label>
								<Input
									id="order_index"
									name="order_index"
									type="number"
									value={editingSlider?.order_index || 0}
								/>
							</div>
							<div class="flex items-center space-x-2 pt-8">
								<Checkbox
									id="is_active"
									name="is_active"
									checked={editingSlider ? editingSlider.is_active : true}
								/>
								<Label for="is_active">Aktifkan Slider</Label>
							</div>
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onclick={resetForm}>Batal</Button>
						<Button type="submit">{editingSlider ? 'Simpan Perubahan' : 'Buat Slider'}</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	</div>

	<Card>
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead class="w-[80px]">Preview</TableHead>
						<TableHead>Judul & Deskripsi</TableHead>
						<TableHead class="w-[100px]">Urutan</TableHead>
						<TableHead class="w-[100px]">Status</TableHead>
						<TableHead class="text-right">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each sliders as slider (slider.id)}
						<TableRow>
							<TableCell>
								<div class="h-10 w-16 overflow-hidden rounded-md border bg-muted">
									<img
										src={slider.image_url}
										alt={slider.title}
										class="h-full w-full object-cover"
									/>
								</div>
							</TableCell>
							<TableCell>
								<div class="font-medium">{slider.title}</div>
								<div class="line-clamp-1 text-xs text-muted-foreground">
									{slider.description || '-'}
								</div>
							</TableCell>
							<TableCell>{slider.order_index}</TableCell>
							<TableCell>
								{#if slider.is_active}
									<Badge class="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>
								{:else}
									<Badge variant="secondary">Draft</Badge>
								{/if}
							</TableCell>
							<TableCell class="text-right">
								<div class="flex justify-end gap-2">
									<Button variant="ghost" size="icon" onclick={() => handleEdit(slider)}>
										<Pencil class="h-4 w-4" />
									</Button>
									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={slider.id} />
										<Button
											variant="ghost"
											size="icon"
											class="text-destructive hover:text-destructive"
											type="submit"
										>
											<Trash2 class="h-4 w-4" />
										</Button>
									</form>
								</div>
							</TableCell>
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={5} class="h-32 text-center text-muted-foreground italic">
								Belum ada slider yang ditambahkan.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
