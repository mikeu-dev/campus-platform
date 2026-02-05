<script lang="ts">
	import { Calendar as CalendarIcon, Clock, MapPin, User, BookOpen } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	// Mock data for class schedule
	const schedule = [
		{
			day: 'Senin',
			classes: [
				{
					time: '08:00 - 09:40',
					course: 'Pemrograman Web Lanjut',
					code: 'IF3101',
					room: 'Lab Komputer 3',
					lecturer: 'Dr. Budi Santoso, M.Kom',
					type: 'Praktek'
				},
				{
					time: '10:00 - 11:40',
					course: 'Sistem Basis Data',
					code: 'IF3102',
					room: 'Ruang Teori 2.1',
					lecturer: 'Siti Aminah, S.T., M.T.',
					type: 'Teori'
				}
			]
		},
		{
			day: 'Selasa',
			classes: [
				{
					time: '13:00 - 14:40',
					course: 'Kecerdasan Buatan',
					code: 'IF3105',
					room: 'Ruang Teori 2.3',
					lecturer: 'Prof. Dr. Ir. Eko Purnomo',
					type: 'Teori'
				}
			]
		},
		{
			day: 'Rabu',
			classes: [
				{
					time: '08:00 - 09:40',
					course: 'Jaringan Komputer',
					code: 'IF3103',
					room: 'Lab Jaringan',
					lecturer: 'Dedi Kurniawan, S.Kom., M.Kom',
					type: 'Praktek'
				}
			]
		},
		{
			day: 'Kamis',
			classes: []
		},
		{
			day: 'Jumat',
			classes: [
				{
					time: '09:00 - 10:40',
					course: 'Etika Profesi',
					code: 'IF3104',
					room: 'Aula Utama',
					lecturer: 'Dr. Rina Wati, S.H., M.H.',
					type: 'Teori'
				}
			]
		}
	];
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Jadwal Kuliah</h2>
		<p class="text-muted-foreground">Jadwal belajar mahasiswa semester terbaru.</p>
	</div>

	<div class="space-y-6">
		{#each schedule as day}
			{#if day.classes.length > 0}
				<div class="space-y-3">
					<h3 class="flex items-center gap-2 text-lg font-semibold text-primary">
						<CalendarIcon class="h-5 w-5" />
						{day.day}
					</h3>
					<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{#each day.classes as item}
							<Card
								class="overflow-hidden border-l-4 border-l-primary transition-all hover:shadow-md"
							>
								<CardContent class="p-4">
									<div class="flex flex-col gap-3">
										<!-- Header: Time & Type -->
										<div class="flex items-center justify-between">
											<Badge variant="outline" class="flex items-center gap-1 font-mono text-xs">
												<Clock class="h-3 w-3" />
												{item.time}
											</Badge>
											<Badge
												variant={item.type === 'Praktek' ? 'secondary' : 'default'}
												class="text-xs"
											>
												{item.type}
											</Badge>
										</div>

										<!-- Course Info -->
										<div>
											<h4 class="line-clamp-1 font-bold" title={item.course}>{item.course}</h4>
											<p class="text-xs text-muted-foreground">{item.code}</p>
										</div>

										<Separator />

										<!-- Details: Loc & Lecturer -->
										<div class="space-y-1 text-sm text-muted-foreground">
											<div class="flex items-start gap-2">
												<MapPin class="h-4 w-4 shrink-0 text-primary/70" />
												<span class="line-clamp-1">{item.room}</span>
											</div>
											<div class="flex items-start gap-2">
												<User class="h-4 w-4 shrink-0 text-primary/70" />
												<span class="line-clamp-1">{item.lecturer}</span>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
						{/each}
					</div>
				</div>
			{/if}
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
