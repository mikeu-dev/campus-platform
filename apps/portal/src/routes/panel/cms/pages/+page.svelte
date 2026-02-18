<script lang="ts">
	import { Plus, Pencil, Trash2, ExternalLink, Layers } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import Editor from '$lib/components/Editor.svelte';
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
	const { pages = [] } = $derived(data);

	let isDialogOpen = $state(false);
	let editingPage = $state<any>(null);

	const categories = ['Profil', 'Akademik', 'Prodi', 'Riset', 'Penerimaan'];

	function resetForm() {
		editingPage = null;
		isDialogOpen = false;
	}

	function handleEdit(page: any) {
		editingPage = { ...page };
		isDialogOpen = true;
	}

	function generateSlug(title: string) {
		return title
			.toLowerCase()
			.replace(/ /g, '-')
			.replace(/[^\w-]+/g, '');
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Halaman Dinamis</h2>
			<p class="text-muted-foreground">
				Kelola konten halaman statis seperti profil kampus, sejarah, visi misi, dll.
			</p>
			<Button
				onclick={() => {
					editingPage = null;
					isDialogOpen = true;
				}}
				class="gap-2"
			>
				<Plus class="h-4 w-4" />
				Buat Halaman
			</Button>
		</div>
		<Dialog bind:open={isDialogOpen}>
			<DialogContent class="max-h-[90vh] overflow-y-auto sm:max-w-[800px]">
				<form method="POST" action={editingPage ? '?/update' : '?/create'} class="space-y-4">
					<DialogHeader>
						<DialogTitle>{editingPage ? 'Edit Halaman' : 'Buat Halaman Baru'}</DialogTitle>
						<DialogDescription>
							Tentukan judul, kategori menu, dan isi konten halaman.
						</DialogDescription>
					</DialogHeader>

					{#if editingPage}
						<input type="hidden" name="id" value={editingPage.id} />
					{/if}

					<div class="grid gap-4 py-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="title">Judul Halaman</Label>
								<Input
									id="title"
									name="title"
									value={editingPage?.title || ''}
									placeholder="Misal: Sejarah Kampus"
									required
									oninput={(e: any) => {
										if (!editingPage?.id)
											editingPage = { ...editingPage, slug: generateSlug(e.target.value) };
									}}
								/>
							</div>
							<div class="space-y-2">
								<Label for="slug">Slug (URL)</Label>
								<Input
									id="slug"
									name="slug"
									value={editingPage?.slug || ''}
									placeholder="sejarah-kampus"
									required
								/>
							</div>
						</div>

						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="parent_menu">Kategori Menu</Label>
								<select
									id="parent_menu"
									name="parent_menu"
									class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
									value={editingPage?.parent_menu || 'Profil'}
								>
									{#each categories as cat (cat)}
										<option value={cat}>{cat}</option>
									{/each}
								</select>
							</div>
							<div class="flex items-center space-x-2 pt-8">
								<Checkbox
									id="is_active"
									name="is_active"
									checked={editingPage ? editingPage.is_active : true}
								/>
								<Label for="is_active">Aktifkan Halaman</Label>
							</div>
						</div>

						<div class="space-y-2">
							<Label for="content">Konten Halaman</Label>
							<input type="hidden" name="content" value={editingPage?.content || ''} />
							<Editor
								content={editingPage?.content || ''}
								onchange={(html) => {
									editingPage = { ...editingPage, content: html };
								}}
							/>
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onclick={resetForm}>Batal</Button>
						<Button type="submit">{editingPage ? 'Simpan Perubahan' : 'Buat Halaman'}</Button>
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
						<TableHead class="w-[300px]">Halaman</TableHead>
						<TableHead>Kategori Menu</TableHead>
						<TableHead>Slug</TableHead>
						<TableHead class="w-[100px]">Status</TableHead>
						<TableHead class="text-right">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each pages as page (page.id)}
						<TableRow>
							<TableCell>
								<div class="font-medium">{page.title}</div>
							</TableCell>
							<TableCell>
								<Badge variant="outline" class="gap-1">
									<Layers class="h-3 w-3" />
									{page.parent_menu}
								</Badge>
							</TableCell>
							<TableCell class="text-xs text-muted-foreground">/pages/{page.slug}</TableCell>
							<TableCell>
								{#if page.is_active}
									<Badge class="bg-green-100 text-green-700 hover:bg-green-100">Publik</Badge>
								{:else}
									<Badge variant="secondary">Draft</Badge>
								{/if}
							</TableCell>
							<TableCell class="text-right">
								<div class="flex justify-end gap-2">
									<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
									<a
										href={`/pages/${page.slug}`}
										target="_blank"
										class="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
									>
										<ExternalLink class="h-4 w-4" />
									</a>
									<Button variant="ghost" size="icon" onclick={() => handleEdit(page)}>
										<Pencil class="h-4 w-4" />
									</Button>
									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={page.id} />
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
								Belum ada halaman dinamis yang dibuat.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
