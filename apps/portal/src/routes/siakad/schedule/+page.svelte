<script lang="ts">
	import { Calendar as CalendarIcon, Clock, MapPin, User, BookOpen } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as m from '$lib/paraglide/messages.js';

	// Mock data for class schedule
	const schedule = [
		{
			day: 'Senin',
			classes: [
				{
					time: '08:00 - 10:30',
					course: 'Algoritma dan Pemrograman',
					code: 'IF101',
					room: 'Lab Komputer 1',
					lecturer: 'Dr. Ahmad Fauzi',
					type: 'Praktikum'
				},
				{
					time: '13:00 - 15:30',
					course: 'Matematika Diskrit',
					code: 'IF102',
					room: 'Ruang 302',
					lecturer: 'Dra. Siti Aminah',
					type: 'Teori'
				}
			]
		},
		{
			day: 'Selasa',
			classes: [
				{
					time: '10:00 - 12:30',
					course: 'Basis Data',
					code: 'IF201',
					room: 'Ruang 405',
					lecturer: 'Budi Santoso, M.Kom',
					type: 'Teori'
				}
			]
		},
		{
			day: 'Rabu',
			classes: []
		},
		{
			day: 'Kamis',
			classes: [
				{
					time: '08:00 - 10:30',
					course: 'Jaringan Komputer',
					code: 'IF202',
					room: 'Lab Jaringan',
					lecturer: 'Irwan Yusuf, M.T.',
					type: 'Praktikum'
				}
			]
		},
		{
			day: 'Jumat',
			classes: [
				{
					time: '14:00 - 16:30',
					course: 'Etika Profesi',
					code: 'IF301',
					room: 'Ruang 201',
					lecturer: 'Prof. Dr. Supardi',
					type: 'Teori'
				}
			]
		}
	];
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">{m.siakad_schedule_title()}</h2>
		<p class="text-muted-foreground">{m.siakad_schedule_desc()}</p>
	</div>

	<div class="grid gap-6">
		{#each schedule as daySchedule}
			<div class="space-y-4">
				<h3 class="flex items-center gap-2 border-b pb-2 text-xl font-semibold">
					{daySchedule.day}
				</h3>

				{#if daySchedule.classes.length === 0}
					<Card class="bg-muted/30">
						<CardContent class="flex items-center justify-center p-6 text-muted-foreground">
							{m.siakad_schedule_no_classes()}
						</CardContent>
					</Card>
				{:else}
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each daySchedule.classes as classInfo}
							<Card class="overflow-hidden">
								<div class="h-1.5 w-full bg-primary"></div>
								<CardHeader class="p-4 pb-2">
									<div class="flex items-start justify-between">
										<Badge variant="outline" class="text-[10px] font-bold uppercase"
											>{classInfo.type}</Badge
										>
										<span class="font-mono text-xs text-muted-foreground">{classInfo.code}</span>
									</div>
									<CardTitle class="mt-2 text-base leading-tight">{classInfo.course}</CardTitle>
								</CardHeader>
								<CardContent class="space-y-3 p-4 pt-0">
									<div class="flex items-center gap-2 text-sm text-muted-foreground">
										<Clock class="h-4 w-4" />
										{classInfo.time}
									</div>
									<div class="flex items-center gap-2 text-sm text-muted-foreground">
										<MapPin class="h-4 w-4" />
										{classInfo.room}
									</div>
									<div class="flex items-center gap-2 text-sm text-muted-foreground">
										<User class="h-4 w-4" />
										{classInfo.lecturer}
									</div>
								</CardContent>
							</Card>
						{/each}
					</div>
				{/if}
			</div>
		{/each}

		<!-- Empty State if no classes (optional logic) -->
		{#if schedule.every((d) => d.classes.length === 0)}
			<div
				class="flex flex-col items-center justify-center py-12 text-center text-muted-foreground"
			>
				<BookOpen class="h-12 w-12 opacity-20" />
				<p class="mt-4">Belum ada jadwal kuliah untuk semester ini.</p>
			</div>
		{/if}
	</div>
</div>
