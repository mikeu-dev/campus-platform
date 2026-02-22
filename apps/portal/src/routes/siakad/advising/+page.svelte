<script lang="ts">
	import { Users, Search, GraduationCap } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-2xl font-bold text-gray-900">{m.nav_advising()}</h2>
			<p class="mt-1 text-sm text-muted-foreground">
				Kelola dan pantau mahasiswa bimbingan/perwalian Anda.
			</p>
		</div>
	</div>

	<!-- Search -->
	<div class="relative">
		<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
		<input
			type="text"
			placeholder="Cari mahasiswa bimbingan..."
			class="w-full rounded-lg border bg-background py-2.5 pr-4 pl-10 text-sm outline-none focus:ring-2 focus:ring-primary"
		/>
	</div>

	<!-- Stats Cards -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-blue-100 p-2.5">
					<Users class="h-5 w-5 text-blue-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">12</p>
					<p class="text-xs text-muted-foreground">Total Mahasiswa Wali</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-green-100 p-2.5">
					<GraduationCap class="h-5 w-5 text-green-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">10</p>
					<p class="text-xs text-muted-foreground">Aktif Semester Ini</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-amber-100 p-2.5">
					<Users class="h-5 w-5 text-amber-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">2</p>
					<p class="text-xs text-muted-foreground">Butuh Perhatian</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Student List -->
	<div class="rounded-xl border bg-card shadow-sm">
		<div class="border-b px-6 py-4">
			<h3 class="font-semibold">Daftar Mahasiswa Bimbingan</h3>
		</div>
		<div class="divide-y">
			{#each [{ nim: '2024001', name: 'Ahmad Fauzi', semester: 4, gpa: 3.65, status: 'Aktif' }, { nim: '2024002', name: 'Siti Nurhaliza', semester: 4, gpa: 3.82, status: 'Aktif' }, { nim: '2023015', name: 'Budi Santoso', semester: 6, gpa: 2.95, status: 'Peringatan' }, { nim: '2024010', name: 'Dewi Anggraini', semester: 4, gpa: 3.5, status: 'Aktif' }, { nim: '2023008', name: 'Rizki Pratama', semester: 6, gpa: 3.12, status: 'Aktif' }, { nim: '2022003', name: 'Rina Wulandari', semester: 8, gpa: 3.44, status: 'Skripsi' }] as student (student.nim)}
				<div
					class="flex items-center justify-between px-6 py-4 transition-colors hover:bg-muted/50"
				>
					<div class="flex items-center gap-4">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary uppercase"
						>
							{student.name.substring(0, 2)}
						</div>
						<div>
							<p class="text-sm font-medium">{student.name}</p>
							<p class="text-xs text-muted-foreground">
								NIM: {student.nim} · Semester {student.semester}
							</p>
						</div>
					</div>
					<div class="flex items-center gap-4">
						<div class="text-right">
							<p class="text-sm font-semibold">IPK {student.gpa.toFixed(2)}</p>
						</div>
						<span
							class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
								{student.status === 'Aktif' ? 'bg-green-100 text-green-800' : ''}
								{student.status === 'Peringatan' ? 'bg-amber-100 text-amber-800' : ''}
								{student.status === 'Skripsi' ? 'bg-blue-100 text-blue-800' : ''}
							"
						>
							{student.status}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
