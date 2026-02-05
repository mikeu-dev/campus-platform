<script lang="ts">
	import { BookOpen, Calendar, Check, X, Clock, ChevronDown } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

	// Mock data for KRS history
	const krsHistory = [
		{
			semester: 'Semester 5 (2024/2025 Ganjil)',
			status: 'Disetujui',
			sks: 20,
			courses: [
				{ code: 'IF3101', name: 'Pemrograman Web Lanjut', sks: 3, status: 'Disetujui' },
				{ code: 'IF3102', name: 'Sistem Basis Data', sks: 3, status: 'Disetujui' },
				{ code: 'IF3103', name: 'Jaringan Komputer', sks: 3, status: 'Disetujui' },
				{ code: 'IF3104', name: 'Etika Profesi', sks: 2, status: 'Disetujui' },
				{ code: 'IF3105', name: 'Kecerdasan Buatan', sks: 3, status: 'Disetujui' },
				{ code: 'IF3106', name: 'Keamanan Sistem', sks: 3, status: 'Disetujui' },
				{ code: 'IF3107', name: 'Proyek Perangkat Lunak', sks: 3, status: 'Disetujui' }
			]
		},
		{
			semester: 'Semester 4 (2023/2024 Genap)',
			status: 'Disetujui',
			sks: 21,
			courses: [
				{ code: 'IF2201', name: 'Struktur Data', sks: 3, status: 'Disetujui' },
				{ code: 'IF2202', name: 'Sistem Operasi', sks: 3, status: 'Disetujui' },
				{ code: 'IF2203', name: 'Pemrograman Berorientasi Objek', sks: 3, status: 'Disetujui' },
				{ code: 'IF2204', name: 'Aljabar Linear', sks: 3, status: 'Disetujui' },
				{ code: 'IF2205', name: 'Probabilitas dan Statistik', sks: 3, status: 'Disetujui' },
				{ code: 'IF2206', name: 'Interaksi Manusia Komputer', sks: 3, status: 'Disetujui' },
				{ code: 'IF2207', name: 'Bahasa Indonesia', sks: 3, status: 'Disetujui' }
			]
		},
		{
			semester: 'Semester 3 (2023/2024 Ganjil)',
			status: 'Disetujui',
			sks: 20,
			courses: [
				{ code: 'IF2101', name: 'Algoritma dan Pemrograman', sks: 4, status: 'Disetujui' },
				{ code: 'IF2102', name: 'Matematika Diskrit', sks: 3, status: 'Disetujui' },
				{ code: 'IF2103', name: 'Arsitektur Komputer', sks: 3, status: 'Disetujui' },
				{ code: 'IF2104', name: 'Basis Data', sks: 3, status: 'Disetujui' },
				{ code: 'GE2001', name: 'Bahasa Inggris 2', sks: 3, status: 'Disetujui' },
				{ code: 'GE2002', name: 'Pancasila', sks: 2, status: 'Disetujui' },
				{ code: 'GE2003', name: 'Kewarganegaraan', sks: 2, status: 'Disetujui' }
			]
		}
	];

	function getStatusBadge(status: string) {
		switch (status) {
			case 'Disetujui':
				return {
					variant: 'default' as const,
					class: 'bg-green-100 text-green-700 hover:bg-green-100'
				};
			case 'Pending':
				return {
					variant: 'secondary' as const,
					class: 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100'
				};
			case 'Ditolak':
				return { variant: 'destructive' as const, class: '' };
			default:
				return { variant: 'outline' as const, class: '' };
		}
	}
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Riwayat KRS</h2>
		<p class="text-muted-foreground">Riwayat pengisian Kartu Rencana Studi per semester.</p>
	</div>

	<div class="space-y-4">
		{#each krsHistory as semester}
			<div class="rounded-lg border bg-card text-card-foreground shadow-sm">
				<details class="group">
					<summary
						class="flex w-full cursor-pointer list-none items-center justify-between px-6 py-4"
					>
						<div class="flex items-center gap-3">
							<Calendar class="h-5 w-5 text-primary" />
							<span class="font-semibold">{semester.semester}</span>
						</div>
						<div class="flex items-center gap-4">
							<span class="hidden text-sm text-muted-foreground sm:inline-block"
								>{semester.sks} SKS</span
							>
							<Badge
								class={getStatusBadge(semester.status).class}
								variant={getStatusBadge(semester.status).variant}
							>
								{semester.status}
							</Badge>
							<ChevronDown
								class="h-4 w-4 transition-transform duration-200 group-open:rotate-180"
							/>
						</div>
					</summary>
					<div class="border-t px-6 py-4">
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead class="w-[100px]">Kode</TableHead>
									<TableHead>Mata Kuliah</TableHead>
									<TableHead class="w-[80px] text-center">SKS</TableHead>
									<TableHead class="w-[120px] text-right">Status</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{#each semester.courses as course}
									<TableRow>
										<TableCell class="font-mono text-sm">{course.code}</TableCell>
										<TableCell>{course.name}</TableCell>
										<TableCell class="text-center">{course.sks}</TableCell>
										<TableCell class="text-right">
											<Badge
												class={getStatusBadge(course.status).class}
												variant={getStatusBadge(course.status).variant}
											>
												{#if course.status === 'Disetujui'}
													<Check class="mr-1 h-3 w-3" />
												{:else if course.status === 'Pending'}
													<Clock class="mr-1 h-3 w-3" />
												{:else}
													<X class="mr-1 h-3 w-3" />
												{/if}
												{course.status}
											</Badge>
										</TableCell>
									</TableRow>
								{/each}
							</TableBody>
						</Table>
					</div>
				</details>
			</div>
		{/each}
	</div>
</div>
