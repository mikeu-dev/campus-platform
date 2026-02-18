<script lang="ts">
	import { Plus, Pencil, Trash2, ExternalLink, Link as LinkIcon } from 'lucide-svelte';
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
	const { links = [] } = $derived(data);

	let isDialogOpen = $state(false);
	let editingLink = $state<any>(null);

	function resetForm() {
		editingLink = null;
		isDialogOpen = false;
	}

	function handleEdit(link: any) {
		editingLink = { ...link };
		isDialogOpen = true;
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Tautan Terkait</h2>
			<p class="text-muted-foreground">
				Kelola tautan penting yang akan muncul di footer halaman utama.
			</p>
			<Button
				onclick={() => {
					editingLink = null;
					isDialogOpen = true;
				}}
				class="gap-2"
			>
				<Plus class="h-4 w-4" />
				Tambah Tautan
			</Button>
		</div>
		<Dialog bind:open={isDialogOpen}>
			<DialogContent class="sm:max-w-[500px]">
				<form method="POST" action={editingLink ? '?/update' : '?/create'} class="space-y-4">
					<DialogHeader>
						<DialogTitle>{editingLink ? 'Edit Tautan' : 'Tambah Tautan Baru'}</DialogTitle>
						<DialogDescription>
							Masukkan judul dan URL tautan. Tautan akan muncul di footer.
						</DialogDescription>
					</DialogHeader>

					{#if editingLink}
						<input type="hidden" name="id" value={editingLink.id} />
					{/if}

					<div class="grid gap-4 py-4">
						<div class="space-y-2">
							<Label for="title">Judul Tautan</Label>
							<Input
								id="title"
								name="title"
								value={editingLink?.title || ''}
								placeholder="Misal: Pendaftaran Mahasiswa Baru"
								required
							/>
						</div>
						<div class="space-y-2">
							<Label for="url">URL Tautan</Label>
							<Input
								id="url"
								name="url"
								type="url"
								value={editingLink?.url || ''}
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
									value={editingLink?.order_index || 0}
								/>
							</div>
							<div class="flex items-center space-x-2 pt-8">
								<Checkbox
									id="is_active"
									name="is_active"
									checked={editingLink ? editingLink.is_active : true}
								/>
								<Label for="is_active">Aktifkan Tautan</Label>
							</div>
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onclick={resetForm}>Batal</Button>
						<Button type="submit">{editingLink ? 'Simpan Perubahan' : 'Tambah Tautan'}</Button>
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
						<TableHead>Judul Tautan</TableHead>
						<TableHead>URL</TableHead>
						<TableHead class="w-[100px]">Urutan</TableHead>
						<TableHead class="w-[100px]">Status</TableHead>
						<TableHead class="text-right">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each links as link (link.id)}
						<TableRow>
							<TableCell>
								<div class="flex items-center gap-2 font-medium">
									<LinkIcon class="h-4 w-4 text-muted-foreground" />
									{link.title}
								</div>
							</TableCell>
							<TableCell>
								<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
								<a
									href={link.url}
									target="_blank"
									class="flex items-center gap-1 text-xs text-indigo-600 hover:underline"
								>
									{link.url}
									<ExternalLink class="h-3 w-3" />
								</a>
							</TableCell>
							<TableCell>{link.order_index}</TableCell>
							<TableCell>
								{#if link.is_active}
									<Badge class="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>
								{:else}
									<Badge variant="secondary">Draft</Badge>
								{/if}
							</TableCell>
							<TableCell class="text-right">
								<div class="flex justify-end gap-2">
									<Button variant="ghost" size="icon" onclick={() => handleEdit(link)}>
										<Pencil class="h-4 w-4" />
									</Button>
									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={link.id} />
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
								Belum ada tautan terkait yang ditambahkan.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
