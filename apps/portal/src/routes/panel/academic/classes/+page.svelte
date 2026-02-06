<script lang="ts">
	import { Plus, Search, Calendar, Users, GraduationCap, ArrowRight } from 'lucide-svelte';
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
	import { Select } from '$lib/components/ui/select';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';

	let { data, form } = $props();
	const {
		classes = [],
		courses = [],
		lecturers = [],
		meta = { page: 1, totalPages: 1 }
	} = $derived(data);

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
			<h2 class="text-3xl font-bold tracking-tight">Jadwal & Kelas</h2>
			<p class="text-muted-foreground">
				Kelola pembukaan kelas perkuliahan dan penetapan dosen pengampu.
			</p>
		</div>
		<Button onclick={() => (isCreateDialogOpen = true)}>
			<Plus class="mr-2 h-4 w-4" /> Buka Kelas Baru
		</Button>
	</div>

	<Card>
		<CardHeader>
			<div class="flex items-center gap-4">
				<div class="relative flex-1">
					<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
					<Input
						placeholder="Cari berdasarkan nama mata kuliah..."
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

			<div class="grid gap-6 md:grid-cols-2">
				{#each classes as cls}
					<Card class="overflow-hidden border-l-4 border-l-primary">
						<CardContent class="p-6">
							<div class="flex items-start justify-between">
								<div class="space-y-1">
									<div class="flex items-center gap-2">
										<Badge variant="outline">{cls.course_code}</Badge>
										<span class="text-xs text-muted-foreground">{cls.semester} {cls.year}</span>
									</div>
									<h3 class="text-lg font-bold">{cls.course_name}</h3>
									<div class="flex items-center gap-2 text-sm text-muted-foreground">
										<Users class="h-3 w-3" />
										<span>{cls.lecturer_name || 'Dosen Belum Ditentukan'}</span>
									</div>
								</div>
								<div class="text-right">
									<div class="text-2xl font-bold text-primary">0</div>
									<div class="text-[10px] tracking-wider text-muted-foreground uppercase">
										Pendaftar
									</div>
								</div>
							</div>
							<div class="mt-4 flex items-center justify-between border-t pt-4">
								<div class="flex gap-4 text-xs">
									<div class="flex items-center gap-1">
										<Calendar class="h-3 w-3 text-muted-foreground" />
										<span>Belum Ada Jadwal</span>
									</div>
								</div>
								<Button variant="ghost" size="sm">
									Detail <ArrowRight class="ml-2 h-3 w-3" />
								</Button>
							</div>
						</CardContent>
					</Card>
				{:else}
					<div
						class="col-span-full h-32 flex items-center justify-center rounded-lg border-2 border-dashed"
					>
						<p class="text-muted-foreground italic">Belum ada kelas yang dibuka.</p>
					</div>
				{/each}
			</div>

			{#if meta.totalPages > 1}
				<div class="mt-8 flex items-center justify-between">
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
	<DialogContent class="max-w-md">
		<DialogHeader>
			<DialogTitle>Buka Kelas Baru</DialogTitle>
		</DialogHeader>
		<form
			action="?/create"
			method="POST"
			class="space-y-4 py-4"
			onsubmit={() => (isCreateDialogOpen = false)}
		>
			<div class="space-y-2">
				<Label for="course_id">Mata Kuliah</Label>
				<select
					id="course_id"
					name="course_id"
					class="w-full rounded-md border p-2 text-sm"
					required
				>
					<option value="">Pilih Mata Kuliah</option>
					{#each courses as course}
						<option value={course.id}>[{course.code}] {course.name}</option>
					{/each}
				</select>
			</div>

			<div class="grid grid-cols-2 gap-4">
				<div class="space-y-2">
					<Label for="semester">Semester</Label>
					<select
						id="semester"
						name="semester"
						class="w-full rounded-md border p-2 text-sm"
						required
					>
						<option value="GANJIL">GANJIL</option>
						<option value="GENAP">GENAP</option>
						<option value="PENDEK">PENDEK</option>
					</select>
				</div>
				<div class="space-y-2">
					<Label for="year">Tahun Akademik</Label>
					<Input id="year" name="year" type="number" value={new Date().getFullYear()} required />
				</div>
			</div>

			<div class="space-y-2">
				<Label for="lecturer_id">Dosen Pengampu (Opsional)</Label>
				<select id="lecturer_id" name="lecturer_id" class="w-full rounded-md border p-2 text-sm">
					<option value="">Pilih Dosen</option>
					{#each lecturers as lecturer}
						<option value={lecturer.id}>{lecturer.name}</option>
					{/each}
				</select>
			</div>

			<div class="space-y-2">
				<Label for="capacity">Kapasitas Mahasiswa</Label>
				<Input id="capacity" name="capacity" type="number" value="40" required />
			</div>

			<DialogFooter>
				<Button type="button" variant="ghost" onclick={() => (isCreateDialogOpen = false)}
					>Batal</Button
				>
				<Button type="submit">Buka Kelas</Button>
			</DialogFooter>
		</form>
	</DialogContent>
</Dialog>
