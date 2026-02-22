<script lang="ts">
	import { PenTool, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge';

	let searchQuery = $state('');

	const gradingItems = [
		{
			id: 1,
			student: 'Ahmad Fauzi',
			class: 'Pemrograman Web',
			assignment: 'Tugas 3 - REST API',
			submitted: '2026-02-20',
			status: 'pending',
			score: null
		},
		{
			id: 2,
			student: 'Siti Nurhaliza',
			class: 'Pemrograman Web',
			assignment: 'Tugas 3 - REST API',
			submitted: '2026-02-19',
			status: 'graded',
			score: 85
		},
		{
			id: 3,
			student: 'Budi Santoso',
			class: 'Basis Data',
			assignment: 'Tugas 2 - Normalisasi',
			submitted: '2026-02-18',
			status: 'pending',
			score: null
		},
		{
			id: 4,
			student: 'Dewi Anggraini',
			class: 'Basis Data',
			assignment: 'Tugas 2 - Normalisasi',
			submitted: '2026-02-18',
			status: 'graded',
			score: 92
		},
		{
			id: 5,
			student: 'Rizki Pratama',
			class: 'Algoritma Lanjut',
			assignment: 'Tugas 1 - Dynamic Programming',
			submitted: '2026-02-17',
			status: 'late',
			score: null
		},
		{
			id: 6,
			student: 'Rina Wulandari',
			class: 'Pemrograman Web',
			assignment: 'Tugas 2 - SvelteKit',
			submitted: '2026-02-16',
			status: 'graded',
			score: 78
		}
	];

	const filteredItems = $derived(
		gradingItems.filter(
			(item) =>
				item.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.class.toLowerCase().includes(searchQuery.toLowerCase()) ||
				item.assignment.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	const pendingCount = $derived(gradingItems.filter((i) => i.status === 'pending').length);
	const gradedCount = $derived(gradingItems.filter((i) => i.status === 'graded').length);
	const lateCount = $derived(gradingItems.filter((i) => i.status === 'late').length);
</script>

<svelte:head>
	<title>Penilaian | CampusApp</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h2 class="text-2xl font-bold text-gray-900">Penilaian</h2>
		<p class="mt-1 text-sm text-muted-foreground">
			Kelola dan berikan nilai untuk tugas mahasiswa.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-amber-100 p-2.5">
					<Clock class="h-5 w-5 text-amber-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">{pendingCount}</p>
					<p class="text-xs text-muted-foreground">Menunggu Dinilai</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-green-100 p-2.5">
					<CheckCircle2 class="h-5 w-5 text-green-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">{gradedCount}</p>
					<p class="text-xs text-muted-foreground">Sudah Dinilai</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-rose-100 p-2.5">
					<AlertCircle class="h-5 w-5 text-rose-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">{lateCount}</p>
					<p class="text-xs text-muted-foreground">Terlambat</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Search -->
	<div class="relative">
		<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
		<input
			type="text"
			placeholder="Cari mahasiswa, kelas, atau tugas..."
			class="w-full rounded-lg border bg-background py-2.5 pr-4 pl-10 text-sm outline-none focus:ring-2 focus:ring-primary"
			bind:value={searchQuery}
		/>
	</div>

	<!-- Grading Table -->
	<div class="overflow-hidden rounded-xl border bg-card shadow-sm">
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b bg-muted/50">
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Mahasiswa</th>
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Kelas</th>
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Tugas</th>
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Dikumpulkan</th>
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Status</th>
						<th class="px-6 py-3 text-right font-medium text-muted-foreground">Nilai</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each filteredItems as item (item.id)}
						<tr class="transition-colors hover:bg-muted/50">
							<td class="px-6 py-4 font-medium">{item.student}</td>
							<td class="px-6 py-4 text-muted-foreground">{item.class}</td>
							<td class="px-6 py-4">{item.assignment}</td>
							<td class="px-6 py-4 text-muted-foreground">
								{new Date(item.submitted).toLocaleDateString('id-ID', {
									day: 'numeric',
									month: 'short',
									year: 'numeric'
								})}
							</td>
							<td class="px-6 py-4">
								{#if item.status === 'pending'}
									<Badge class="bg-amber-100 text-amber-800 hover:bg-amber-100">Menunggu</Badge>
								{:else if item.status === 'graded'}
									<Badge class="bg-green-100 text-green-800 hover:bg-green-100">Dinilai</Badge>
								{:else}
									<Badge class="bg-rose-100 text-rose-800 hover:bg-rose-100">Terlambat</Badge>
								{/if}
							</td>
							<td class="px-6 py-4 text-right font-semibold">
								{item.score !== null ? item.score : '—'}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
