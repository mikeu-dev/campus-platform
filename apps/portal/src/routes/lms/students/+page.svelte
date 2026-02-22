<script lang="ts">
	import { Users, Search, BookOpen, TrendingUp } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge';

	let searchQuery = $state('');
	let selectedClass = $state('all');

	const classes = [
		{ id: 'all', name: 'Semua Kelas' },
		{ id: 'web', name: 'Pemrograman Web' },
		{ id: 'db', name: 'Basis Data' },
		{ id: 'algo', name: 'Algoritma Lanjut' }
	];

	const students = [
		{
			id: 1,
			nim: '2024001',
			name: 'Ahmad Fauzi',
			class: 'web',
			className: 'Pemrograman Web',
			semester: 4,
			gpa: 3.65,
			attendance: 95
		},
		{
			id: 2,
			nim: '2024002',
			name: 'Siti Nurhaliza',
			class: 'web',
			className: 'Pemrograman Web',
			semester: 4,
			gpa: 3.82,
			attendance: 100
		},
		{
			id: 3,
			nim: '2023015',
			name: 'Budi Santoso',
			class: 'db',
			className: 'Basis Data',
			semester: 6,
			gpa: 2.95,
			attendance: 75
		},
		{
			id: 4,
			nim: '2024010',
			name: 'Dewi Anggraini',
			class: 'db',
			className: 'Basis Data',
			semester: 4,
			gpa: 3.5,
			attendance: 90
		},
		{
			id: 5,
			nim: '2023008',
			name: 'Rizki Pratama',
			class: 'algo',
			className: 'Algoritma Lanjut',
			semester: 6,
			gpa: 3.12,
			attendance: 85
		},
		{
			id: 6,
			nim: '2022003',
			name: 'Rina Wulandari',
			class: 'web',
			className: 'Pemrograman Web',
			semester: 8,
			gpa: 3.44,
			attendance: 92
		},
		{
			id: 7,
			nim: '2024005',
			name: 'Farhan Malik',
			class: 'algo',
			className: 'Algoritma Lanjut',
			semester: 4,
			gpa: 3.71,
			attendance: 88
		},
		{
			id: 8,
			nim: '2023012',
			name: 'Putri Rahmawati',
			class: 'db',
			className: 'Basis Data',
			semester: 6,
			gpa: 3.33,
			attendance: 95
		}
	];

	const filteredStudents = $derived(
		students.filter((s) => {
			const matchSearch =
				s.name.toLowerCase().includes(searchQuery.toLowerCase()) || s.nim.includes(searchQuery);
			const matchClass = selectedClass === 'all' || s.class === selectedClass;
			return matchSearch && matchClass;
		})
	);

	const totalStudents = $derived(students.length);
	const avgGpa = $derived(
		(students.reduce((sum, s) => sum + s.gpa, 0) / students.length).toFixed(2)
	);
	const avgAttendance = $derived(
		Math.round(students.reduce((sum, s) => sum + s.attendance, 0) / students.length)
	);
</script>

<svelte:head>
	<title>Mahasiswa Saya | CampusApp</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h2 class="text-2xl font-bold text-gray-900">Mahasiswa Saya</h2>
		<p class="mt-1 text-sm text-muted-foreground">
			Daftar mahasiswa di seluruh kelas yang Anda ampu.
		</p>
	</div>

	<!-- Stats -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-blue-100 p-2.5">
					<Users class="h-5 w-5 text-blue-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">{totalStudents}</p>
					<p class="text-xs text-muted-foreground">Total Mahasiswa</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-emerald-100 p-2.5">
					<TrendingUp class="h-5 w-5 text-emerald-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">{avgGpa}</p>
					<p class="text-xs text-muted-foreground">Rata-rata IPK</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-violet-100 p-2.5">
					<BookOpen class="h-5 w-5 text-violet-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">{avgAttendance}%</p>
					<p class="text-xs text-muted-foreground">Rata-rata Kehadiran</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Filters -->
	<div class="flex flex-col gap-3 sm:flex-row">
		<div class="relative flex-1">
			<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<input
				type="text"
				placeholder="Cari nama atau NIM..."
				class="w-full rounded-lg border bg-background py-2.5 pr-4 pl-10 text-sm outline-none focus:ring-2 focus:ring-primary"
				bind:value={searchQuery}
			/>
		</div>
		<select
			bind:value={selectedClass}
			class="rounded-lg border bg-background px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary"
		>
			{#each classes as cls (cls.id)}
				<option value={cls.id}>{cls.name}</option>
			{/each}
		</select>
	</div>

	<!-- Student List -->
	<div class="overflow-hidden rounded-xl border bg-card shadow-sm">
		<div class="overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b bg-muted/50">
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Mahasiswa</th>
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">NIM</th>
						<th class="px-6 py-3 text-left font-medium text-muted-foreground">Kelas</th>
						<th class="px-6 py-3 text-center font-medium text-muted-foreground">Semester</th>
						<th class="px-6 py-3 text-center font-medium text-muted-foreground">IPK</th>
						<th class="px-6 py-3 text-center font-medium text-muted-foreground">Kehadiran</th>
					</tr>
				</thead>
				<tbody class="divide-y">
					{#each filteredStudents as student (student.id)}
						<tr class="transition-colors hover:bg-muted/50">
							<td class="px-6 py-4">
								<div class="flex items-center gap-3">
									<div
										class="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary uppercase"
									>
										{student.name.substring(0, 2)}
									</div>
									<span class="font-medium">{student.name}</span>
								</div>
							</td>
							<td class="px-6 py-4 text-muted-foreground">{student.nim}</td>
							<td class="px-6 py-4">
								<Badge variant="outline">{student.className}</Badge>
							</td>
							<td class="px-6 py-4 text-center">{student.semester}</td>
							<td class="px-6 py-4 text-center font-semibold">{student.gpa.toFixed(2)}</td>
							<td class="px-6 py-4 text-center">
								<Badge
									class={student.attendance >= 90
										? 'bg-green-100 text-green-800 hover:bg-green-100'
										: student.attendance >= 80
											? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
											: 'bg-rose-100 text-rose-800 hover:bg-rose-100'}
								>
									{student.attendance}%
								</Badge>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		{#if filteredStudents.length === 0}
			<div class="flex h-32 items-center justify-center text-muted-foreground">
				Tidak ada mahasiswa yang sesuai dengan pencarian.
			</div>
		{/if}
	</div>
</div>
