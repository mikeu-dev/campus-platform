<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Calendar, Clock, MapPin, User, QrCode, Hand, BookOpen, ArrowRight } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	let { data } = $props();
	const schedules = $derived(data.schedules);

	const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

	const enDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	let selectedDayIndex = $state(new Date().getDay());

	const filteredSchedules = $derived(
		schedules.filter((s: any) => s.day.toLowerCase() === enDays[selectedDayIndex].toLowerCase())
	);

	function formatTime(time: string) {
		return time.split(':').slice(0, 2).join(':');
	}

	function getStatusColor(status: string) {
		if (status === 'dimulai') return 'bg-green-500 hover:bg-green-600';
		if (status === 'terjadwal') return 'bg-blue-500 hover:bg-blue-600';
		return 'bg-gray-500 hover:bg-gray-600';
	}
</script>

<svelte:head>
	<title>{m.nav_lms_schedule()} | CampusApp</title>
</svelte:head>

<div class="space-y-6">
	<!-- Page Header -->
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold tracking-tight">{m.nav_lms_schedule()}</h1>
		<p class="text-muted-foreground">{m.siakad_schedule_desc()}</p>
	</div>

	<!-- Day Picker -->
	<div class="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-4">
		{#each days as day, i (day)}
			<Button
				variant={selectedDayIndex === i ? 'default' : 'outline'}
				class={cn(
					'h-20 min-w-[100px] flex-1 flex-col gap-1 rounded-2xl transition-all',
					selectedDayIndex === i && 'scale-105 shadow-lg'
				)}
				onclick={() => (selectedDayIndex = i)}
			>
				<span class="text-xs font-medium uppercase opacity-70">{enDays[i].substring(0, 3)}</span>
				<span class="text-lg font-bold">{day}</span>
			</Button>
		{/each}
	</div>

	<!-- Schedule List -->
	<div class="grid gap-6">
		{#if filteredSchedules.length > 0}
			{#each filteredSchedules as item (item.id || item)}
				<Card class="group overflow-hidden border-none shadow-md transition-all hover:shadow-xl">
					<div class="flex flex-col lg:flex-row">
						<!-- Left Section: Time & Info -->
						<div
							class="flex w-full flex-col justify-between gap-4 border-r bg-primary/5 p-6 lg:w-72"
						>
							<div class="space-y-2">
								<div class="flex items-center gap-2 text-primary">
									<Clock class="h-4 w-4" />
									<span class="text-lg font-bold">
										{formatTime(item.start_time)} - {formatTime(item.end_time)}
									</span>
								</div>
								<Badge class={cn('capitalize', getStatusColor(item.status || 'terjadwal'))}>
									{item.status || 'terjadwal'}
								</Badge>
							</div>

							<div class="space-y-1">
								<p class="text-xs font-bold tracking-wider text-muted-foreground uppercase">
									Perkuliahan
								</p>
								<div class="flex items-center gap-2 font-medium">
									<BookOpen class="h-4 w-4 text-primary" />
									Pertemuan 1 / 16
								</div>
							</div>
						</div>

						<!-- Middle Section: Course & Room -->
						<CardContent class="flex flex-1 flex-col justify-between gap-6 p-6">
							<div class="space-y-4">
								<div>
									<h3
										class="text-xl font-bold text-foreground transition-colors group-hover:text-primary"
									>
										{item.course_name}
									</h3>
									<p class="text-sm font-medium text-muted-foreground">
										{item.course_code} • {item.credits} SKS
									</p>
								</div>

								<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div class="flex items-center gap-2 text-sm">
										<div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
											<User class="h-4 w-4 text-muted-foreground" />
										</div>
										<div>
											<p class="text-[10px] text-muted-foreground uppercase">Dosen Pengampu</p>
											<p class="leading-tight font-semibold">{item.lecturer_name || 'N/A'}</p>
										</div>
									</div>
									<div class="flex items-center gap-2 text-sm">
										<div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
											<MapPin class="h-4 w-4 text-muted-foreground" />
										</div>
										<div>
											<p class="text-[10px] text-muted-foreground uppercase">Ruangan / Tipe</p>
											<p class="leading-tight font-semibold">
												{item.room || 'TBA'} ({item.type || 'Offline'})
											</p>
										</div>
									</div>
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="flex flex-wrap gap-3">
								<Button
									variant="default"
									class="h-11 gap-2 rounded-xl"
									disabled={item.status !== 'dimulai'}
								>
									<QrCode class="h-4 w-4" />
									Scan QR Code
								</Button>
								<Button
									variant="outline"
									class="h-11 gap-2 rounded-xl"
									disabled={item.status !== 'dimulai'}
								>
									<Hand class="h-4 w-4" />
									Presensi Mandiri
								</Button>
								<Button
									variant="ghost"
									class="ml-auto h-11 rounded-full px-6 transition-all group-hover:bg-primary group-hover:text-white"
									href="/lms/classes/{item.class_id}"
								>
									Pintu Kelas
									<ArrowRight class="ml-2 h-4 w-4" />
								</Button>
							</div>
						</CardContent>
					</div>
				</Card>
			{/each}
		{:else}
			<div
				class="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed bg-muted/30 py-20 text-center"
			>
				<div class="flex h-20 w-20 items-center justify-center rounded-full bg-muted shadow-inner">
					<Calendar class="h-10 w-10 text-muted-foreground opacity-50" />
				</div>
				<div class="space-y-1">
					<h3 class="text-xl font-bold text-muted-foreground">{m.siakad_schedule_no_classes()}</h3>
					<p class="mx-auto max-w-xs text-sm text-muted-foreground">
						Nikmati hari tenangmu! Gunakan waktu ini untuk mengerjakan tugas atau beristirahat.
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>
