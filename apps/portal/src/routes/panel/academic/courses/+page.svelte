<script lang="ts">
	import { Plus, Search, BookOpen, GraduationCap, ArrowRight } from 'lucide-svelte';
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
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import { Badge } from '$lib/components/ui/badge';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let { data, form } = $props();
	const { courses = [], meta = { page: 1, totalPages: 1 } } = $derived(data);

	let isCreateDialogOpen = $state(false);
	let searchQuery = $state(page.url.searchParams.get('search') || '');

	function handleSearch() {
		const url = new URL(page.url);
		if (searchQuery) url.searchParams.set('search', searchQuery);
		else url.searchParams.delete('search');
		url.searchParams.set('page', '1');
		goto(url.toString());
	}

	function handlePageChange(newPage: number) {
		const url = new URL(page.url);
		url.searchParams.set('page', newPage.toString());
		goto(url.toString());
	}
</script>

<div class="space-y-6">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Master Mata Kuliah</h2>
			<p class="text-muted-foreground">Kelola kurikulum dan daftar mata kuliah seluruh fakultas.</p>
		</div>
		<Button onclick={() => (isCreateDialogOpen = true)}>
			<Plus class="mr-2 h-4 w-4" /> Mata Kuliah Baru
		</Button>
	</div>

	<Card>
		<CardHeader>
			<div class="flex items-center gap-4">
				<div class="relative flex-1">
					<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						placeholder="Cari kode atau nama mata kuliah..."
						class="pl-10"
						bind:value={searchQuery}
						onkeydown={(e) => e.key === 'Enter' && handleSearch()}
					/>
				</div>
				<Button variant="outline" onclick={handleSearch}>Cari</Button>
			</div>
		</CardHeader>
		<CardContent>
			{#if form?.message}
				<div class="mb-4 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-700">
					{form.message}
				</div>
			{/if}

			<div class="rounded-md border">
				<table class="w-full text-sm">
					<thead class="bg-muted/50 font-medium">
						<tr class="border-b">
							<th class="px-4 py-3 text-left">Kode</th>
							<th class="px-4 py-3 text-left">Nama Mata Kuliah</th>
							<th class="px-4 py-3 text-center">SKS</th>
							<th class="px-4 py-3 text-right">Aksi</th>
						</tr>
					</thead>
					<tbody>
						{#each courses as course}
							<tr class="border-b transition-colors hover:bg-muted/30">
								<td class="px-4 py-3 font-mono font-bold text-primary">{course.code}</td>
								<td class="px-4 py-3 font-medium">{course.name}</td>
								<td class="px-4 py-3 text-center">
									<Badge variant="secondary">{course.credits} SKS</Badge>
								</td>
								<td class="px-4 py-3 text-right">
									<Button variant="ghost" size="sm">
										<ArrowRight class="h-4 w-4" />
									</Button>
								</td>
							</tr>
						{:else}
							<tr>
								<td colspan="4" class="h-32 text-center text-muted-foreground italic">
									Data mata kuliah tidak ditemukan.
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>

			{#if meta.totalPages > 1}
				<div class="mt-4 flex items-center justify-between">
					<p class="text-sm text-muted-foreground">
						Halaman {meta.page} dari {meta.totalPages}
					</p>
					<div class="flex gap-2">
						<Button
							variant="outline"
							size="sm"
							disabled={meta.page <= 1}
							onclick={() => handlePageChange(meta.page - 1)}
						>
							Sebelumnya
						</Button>
						<Button
							variant="outline"
							size="sm"
							disabled={meta.page >= meta.totalPages}
							onclick={() => handlePageChange(meta.page + 1)}
						>
							Selanjutnya
						</Button>
					</div>
				</div>
			{/if}
		</CardContent>
	</Card>
</div>

<!-- Create Dialog -->
<Dialog bind:open={isCreateDialogOpen}>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Tambah Mata Kuliah</DialogTitle>
		</DialogHeader>
		<form
			action="?/create"
			method="POST"
			class="space-y-4 py-4"
			onsubmit={() => (isCreateDialogOpen = false)}
		>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="code" class="text-right">Kode</Label>
				<Input id="code" name="code" placeholder="INF101" class="col-span-3" required />
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="name" class="text-right">Nama</Label>
				<Input
					id="name"
					name="name"
					placeholder="Algoritma Pemrograman"
					class="col-span-3"
					required
				/>
			</div>
			<div class="grid grid-cols-4 items-center gap-4">
				<Label for="credits" class="text-right">SKS</Label>
				<Input
					id="credits"
					name="credits"
					type="number"
					min="1"
					max="6"
					value="3"
					class="col-span-3"
					required
				/>
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
