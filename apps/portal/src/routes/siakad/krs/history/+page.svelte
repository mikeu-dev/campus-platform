<script lang="ts">
	import { Calendar, ChevronDown, Check, Clock, X } from 'lucide-svelte';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import * as m from '$lib/paraglide/messages.js';

	// Mock data for semester history
	const semesterHistory = [
		{
			semester: 'Semester Ganjil 2023/2024',
			sks: 22,
			status: 'Disetujui',
			courses: [
				{
					code: 'IF101',
					name: 'Algoritma dan Pemrograman',
					sks: 4,
					status: 'Disetujui'
				},
				{
					code: 'IF102',
					name: 'Matematika Diskrit',
					sks: 3,
					status: 'Disetujui'
				},
				{
					code: 'IF103',
					name: 'Arsitektur Komputer',
					sks: 3,
					status: 'Disetujui'
				}
			]
		},
		{
			semester: 'Semester Genap 2022/2023',
			sks: 20,
			status: 'Disetujui',
			courses: [
				{
					code: 'MKU101',
					name: 'Pendidikan Kewarganegaraan',
					sks: 2,
					status: 'Disetujui'
				},
				{
					code: 'IF201',
					name: 'Struktur Data',
					sks: 4,
					status: 'Disetujui'
				}
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
		<h2 class="text-3xl font-bold tracking-tight">{m.siakad_krs_history_title()}</h2>
		<p class="text-muted-foreground">{m.siakad_krs_history_desc()}</p>
	</div>

	<div class="grid gap-4">
		{#each semesterHistory as semester}
			<details
				class="group overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm"
			>
				<summary
					class="flex w-full cursor-pointer list-none items-center justify-between px-6 py-4 transition-colors hover:bg-muted/50"
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
						<ChevronDown class="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
					</div>
				</summary>

				<div class="border-t bg-muted/30 px-6 py-4">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead class="w-[100px]">{m.table_code()}</TableHead>
								<TableHead>{m.table_course_name()}</TableHead>
								<TableHead class="w-[80px] text-center">SKS</TableHead>
								<TableHead class="w-[120px] text-right">{m.dashboard_stats_status()}</TableHead>
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
		{/each}
	</div>
</div>
