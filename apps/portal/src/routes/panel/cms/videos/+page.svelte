<script lang="ts">
	import { Plus, Pencil, Trash2, Youtube, Play, ExternalLink, Check, X } from 'lucide-svelte';
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
	const { videos = [] } = $derived(data);

	let isDialogOpen = $state(false);
	let editingVideo = $state<any>(null);

	function resetForm() {
		editingVideo = null;
		isDialogOpen = false;
	}

	function handleEdit(video: any) {
		editingVideo = { ...video };
		isDialogOpen = true;
	}

	function getYoutubeEmbed(url: string) {
		const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		const match = url.match(regExp);
		return match && match[2].length === 11 ? match[2] : null;
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Kanal Video</h2>
			<p class="text-muted-foreground">
				Kelola video YouTube yang akan muncul di galeri video beranda.
			</p>
		</div>
		<Dialog bind:open={isDialogOpen}>
			<DialogTrigger>
				{#snippet child({ props })}
					<Button {...props} onclick={() => (editingVideo = null)} class="gap-2">
						<Plus class="h-4 w-4" />
						Tambah Video
					</Button>
				{/snippet}
			</DialogTrigger>
			<DialogContent class="sm:max-w-[500px]">
				<form method="POST" action={editingVideo ? '?/update' : '?/create'} class="space-y-4">
					<DialogHeader>
						<DialogTitle>{editingVideo ? 'Edit Video' : 'Tambah Video Baru'}</DialogTitle>
						<DialogDescription>Masukkan URL YouTube dan detail video lainnya.</DialogDescription>
					</DialogHeader>

					{#if editingVideo}
						<input type="hidden" name="id" value={editingVideo.id} />
					{/if}

					<div class="grid gap-4 py-4">
						<div class="space-y-2">
							<Label for="title">Judul Video</Label>
							<Input
								id="title"
								name="title"
								value={editingVideo?.title || ''}
								placeholder="Judul video yang akan ditampilkan"
								required
							/>
						</div>
						<div class="space-y-2">
							<Label for="youtube_url">URL YouTube</Label>
							<Input
								id="youtube_url"
								name="url"
								value={editingVideo?.url || ''}
								placeholder="https://www.youtube.com/watch?v=..."
								required
							/>
						</div>
						<div class="space-y-2">
							<Label for="thumbnail_url">URL Thumbnail (Opsional)</Label>
							<Input
								id="thumbnail_url"
								name="thumbnail_url"
								value={editingVideo?.thumbnail_url || ''}
								placeholder="Kosongkan jika ingin menggunakan default YouTube"
							/>
						</div>
						<div class="flex items-center space-x-2 pt-2">
							<Checkbox
								id="is_active"
								name="is_active"
								checked={editingVideo ? editingVideo.is_active : true}
							/>
							<Label for="is_active">Aktifkan Video</Label>
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onclick={resetForm}>Batal</Button>
						<Button type="submit">{editingVideo ? 'Simpan Perubahan' : 'Tambah Video'}</Button>
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
						<TableHead class="w-[150px]">Preview</TableHead>
						<TableHead>Judul Video</TableHead>
						<TableHead class="w-[100px]">Status</TableHead>
						<TableHead class="text-right">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each videos as video}
						<TableRow>
							<TableCell>
								<div class="group relative h-20 w-32 overflow-hidden rounded-md border bg-muted">
									{#if getYoutubeEmbed(video.url)}
										<img
											src={`https://img.youtube.com/vi/${getYoutubeEmbed(video.url)}/mqdefault.jpg`}
											alt={video.title}
											class="h-full w-full object-cover"
										/>
										<div
											class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40"
										>
											<Play class="h-6 w-6 fill-white text-white opacity-80" />
										</div>
									{:else}
										<div class="flex h-full w-full items-center justify-center bg-gray-100">
											<Youtube class="h-8 w-8 text-gray-400" />
										</div>
									{/if}
								</div>
							</TableCell>
							<TableCell>
								<div class="font-medium">{video.title}</div>
								<a
									href={video.url}
									target="_blank"
									class="mt-1 flex items-center gap-1 text-xs text-indigo-600 hover:underline"
								>
									{video.url}
									<ExternalLink class="h-3 w-3" />
								</a>
							</TableCell>
							<TableCell>
								{#if video.is_active}
									<Badge class="bg-green-100 text-green-700 hover:bg-green-100">Aktif</Badge>
								{:else}
									<Badge variant="secondary">Draft</Badge>
								{/if}
							</TableCell>
							<TableCell class="text-right">
								<div class="flex justify-end gap-2">
									<Button variant="ghost" size="icon" onclick={() => handleEdit(video)}>
										<Pencil class="h-4 w-4" />
									</Button>
									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={video.id} />
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
							<TableCell colspan={4} class="h-32 text-center text-muted-foreground italic">
								Belum ada video yang ditambahkan.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
