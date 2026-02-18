<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Calendar, Clock, MapPin, FileText, ChevronRight } from 'lucide-svelte';

	let { data } = $props();
	const exams = $derived(data.exams);

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('id-ID', {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	function formatTime(time: string) {
		return time.split(':').slice(0, 2).join(':');
	}
</script>

<svelte:head>
	<title>{m.nav_lms_exams()} | CampusApp</title>
</svelte:head>

<div class="space-y-6">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold tracking-tight">{m.nav_lms_exams()}</h1>
		<p class="text-muted-foreground">Jadwal Ujian Tengah Semester dan Akhir Semester Anda.</p>
	</div>

	{#if exams.length === 0}
		<Card class="border-dashed">
			<CardContent class="flex flex-col items-center justify-center p-20 text-center">
				<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
					<Calendar class="h-10 w-10 text-muted-foreground/50" />
				</div>
				<h3 class="text-xl font-bold">Belum Ada Jadwal Ujian</h3>
				<p class="mx-auto mt-2 max-w-xs text-muted-foreground">
					Jadwal ujian belum dipublikasikan oleh pihak akademik.
				</p>
			</CardContent>
		</Card>
	{:else}
		<Card class="overflow-hidden border-none shadow-md">
			<Table>
				<TableHeader class="bg-muted/50">
					<TableRow>
						<TableHead class="font-bold">Mata Kuliah</TableHead>
						<TableHead class="font-bold">Hari, Tanggal</TableHead>
						<TableHead class="font-bold">Waktu</TableHead>
						<TableHead class="font-bold">Ruangan</TableHead>
						<TableHead class="font-bold">Tipe</TableHead>
						<TableHead class="text-right font-bold">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each exams as exam (exam.id || exam)}
						<TableRow class="transition-colors hover:bg-muted/30">
							<TableCell>
								<div class="font-bold">{exam.course_name}</div>
								<div class="text-xs text-muted-foreground">{exam.course_code}</div>
							</TableCell>
							<TableCell class="font-medium">
								{formatDate(exam.date)}
							</TableCell>
							<TableCell>
								<div class="flex items-center gap-1.5 font-medium">
									<Clock class="h-4 w-4 text-primary" />
									{formatTime(exam.start_time)} - {formatTime(exam.end_time)}
								</div>
							</TableCell>
							<TableCell>
								<div class="flex items-center gap-1.5 font-medium text-muted-foreground">
									<MapPin class="h-4 w-4" />
									{exam.room || 'TBA'}
								</div>
							</TableCell>
							<TableCell>
								<Badge variant={exam.type === 'UAS' ? 'default' : 'secondary'} class="font-bold">
									{exam.type}
								</Badge>
							</TableCell>
							<TableCell class="text-right">
								<Button
									variant="ghost"
									size="sm"
									class="gap-2 text-primary"
									href="/lms/classes/{exam.class_id}"
								>
									Pintu Kelas
									<ChevronRight class="h-4 w-4" />
								</Button>
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</Card>
	{/if}

	<div class="grid gap-6 md:grid-cols-2">
		<Card class="border-primary/10 bg-primary/5">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-lg">
					<FileText class="h-5 w-5 text-primary" />
					Surat Izin Ujian
				</CardTitle>
				<CardDescription>Unduh atau cetak surat izin mengikuti ujian semester ini.</CardDescription>
			</CardHeader>
			<CardContent>
				<Button class="w-full gap-2 rounded-xl" href="/lms/exams/permission">
					Buka Surat Izin Ujian
					<ChevronRight class="h-4 w-4" />
				</Button>
			</CardContent>
		</Card>

		<Card class="border-dashed bg-muted/30">
			<CardHeader>
				<CardTitle class="text-lg">Informasi Ujian</CardTitle>
			</CardHeader>
			<CardContent class="space-y-2 text-sm text-muted-foreground">
				<p>• Pastikan Anda membawa kartu mahasiswa dan kartu ujian.</p>
				<p>• Berpakaian rapi menggunakan almamater.</p>
				<p>• Datang 15 menit sebelum ujian dimulai.</p>
			</CardContent>
		</Card>
	</div>
</div>
