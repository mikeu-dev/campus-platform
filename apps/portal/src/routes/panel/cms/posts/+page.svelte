<script lang="ts">
	import { Plus, Pencil, Trash2, Eye, Pin, FileText, Check, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import { Textarea } from '$lib/components/ui/textarea';
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
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';

	let { data, form } = $props();
	const { posts = [] } = $derived(data);

	let isDialogOpen = $state(false);
	let editingPost = $state<any>(null);

	function resetForm() {
		editingPost = null;
		isDialogOpen = false;
	}

	function handleEdit(post: any) {
		editingPost = { ...post };
		isDialogOpen = true;
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Berita & Info Kampus</h2>
			<p class="text-muted-foreground">
				Kelola pengumuman, berita terkini, dan informasi akademik untuk publik.
			</p>
		</div>
		<Dialog bind:open={isDialogOpen}>
			<DialogTrigger>
				{#snippet child({ props })}
					<Button {...props} onclick={() => (editingPost = null)} class="gap-2">
						<Plus class="h-4 w-4" />
						Buat Postingan
					</Button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="max-h-[90vh] overflow-y-auto sm:max-w-[700px]">
				<form method="POST" action={editingPost ? '?/update' : '?/create'} class="space-y-4">
					<DialogHeader>
						<DialogTitle>{editingPost ? 'Edit Postingan' : 'Buat Postingan Baru'}</DialogTitle>
						<DialogDescription>
							Isi detail postingan di bawah ini. Postingan dapat disematkan di halaman depan.
						</DialogDescription>
					</DialogHeader>

					{#if editingPost}
						<input type="hidden" name="id" value={editingPost.id} />
					{/if}

					<div class="grid gap-4 py-4">
						<div class="space-y-2">
							<Label for="title">Judul Postingan</Label>
							<Input
								id="title"
								name="title"
								value={editingPost?.title || ''}
								placeholder="Masukkan judul utama"
								required
							/>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="category">Kategori</Label>
								<Input
									id="category"
									name="category"
									value={editingPost?.category || 'Berita'}
									placeholder="Misal: Berita, Pengumuman, Event"
								/>
							</div>
							<div class="space-y-2">
								<Label for="thumbnail_url">URL Thumbnail</Label>
								<Input
									id="thumbnail_url"
									name="thumbnail_url"
									value={editingPost?.thumbnail_url || ''}
									placeholder="https://..."
								/>
							</div>
						</div>
						<div class="space-y-2">
							<Label for="excerpt">Ringkasan Singkat</Label>
							<Textarea
								id="excerpt"
								name="excerpt"
								value={editingPost?.excerpt || ''}
								placeholder="Ringkasan teks yang muncul di kartu berita"
								rows={2}
							/>
						</div>
						<div class="space-y-2">
							<Label for="content">Konten Lengkap (HTML didukung)</Label>
							<Textarea
								id="content"
								name="content"
								value={editingPost?.content || ''}
								placeholder="Gunakan tag HTML untuk format teks"
								rows={6}
								required
							/>
						</div>
						<div class="flex gap-6 pt-2">
							<div class="flex items-center space-x-2">
								<Checkbox
									id="is_pinned"
									name="is_pinned"
									checked={editingPost?.is_pinned || false}
								/>
								<Label for="is_pinned">Sematkan di Beranda</Label>
							</div>
							<div class="flex items-center space-x-2">
								<Checkbox
									id="is_published"
									name="is_published"
									checked={editingPost ? editingPost.is_published : true}
								/>
								<Label for="is_published">Terbitkan Langsung</Label>
							</div>
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onclick={resetForm}>Batal</Button>
						<Button type="submit">{editingPost ? 'Simpan Perubahan' : 'Buat Postingan'}</Button>
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
						<TableHead class="w-[300px]">Judul</TableHead>
						<TableHead>Kategori</TableHead>
						<TableHead>Tgl Publikasi</TableHead>
						<TableHead class="w-[100px]">Status</TableHead>
						<TableHead class="text-right">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each posts as post}
						<TableRow>
							<TableCell>
								<div class="flex items-center gap-2 font-medium">
									{#if post.is_pinned}
										<Pin class="h-3 w-3 fill-indigo-600 text-indigo-600" />
									{/if}
									<span class="max-w-[250px] truncate">{post.title}</span>
								</div>
							</TableCell>
							<TableCell>
								<Badge variant="outline">{post.category || 'Berita'}</Badge>
							</TableCell>
							<TableCell class="text-xs text-muted-foreground">
								{new Date(post.created_at).toLocaleDateString('id-ID', {
									day: 'numeric',
									month: 'short',
									year: 'numeric'
								})}
							</TableCell>
							<TableCell>
								{#if post.is_published}
									<Badge class="bg-blue-100 text-blue-700 hover:bg-blue-100">Live</Badge>
								{:else}
									<Badge variant="secondary">Draft</Badge>
								{/if}
							</TableCell>
							<TableCell class="text-right">
								<div class="flex justify-end gap-2">
									<Button variant="ghost" size="icon" onclick={() => handleEdit(post)}>
										<Pencil class="h-4 w-4" />
									</Button>
									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={post.id} />
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
								Belum ada berita atau informasi yang diposting.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
