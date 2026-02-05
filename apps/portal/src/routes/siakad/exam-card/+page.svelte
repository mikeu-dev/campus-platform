<script lang="ts">
	import { Printer, User, Calendar, BookOpen, MapPin, Clock, Download } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

	// Mock data for exam card
	const studentInfo = {
		name: 'Budi Santoso',
		nim: '10123456',
		program: 'Teknik Informatika',
		semester: 'Semester 5',
		academicYear: '2024/2025 Ganjil',
		photo: null
	};

	const examSchedule = [
		{
			code: 'IF3101',
			name: 'Pemrograman Web Lanjut',
			date: '15 Januari 2025',
			time: '08:00 - 10:00',
			room: 'Lab Komputer 3'
		},
		{
			code: 'IF3102',
			name: 'Sistem Basis Data',
			date: '16 Januari 2025',
			time: '10:30 - 12:30',
			room: 'Ruang Teori 2.1'
		},
		{
			code: 'IF3103',
			name: 'Jaringan Komputer',
			date: '17 Januari 2025',
			time: '08:00 - 10:00',
			room: 'Lab Jaringan'
		},
		{
			code: 'IF3104',
			name: 'Etika Profesi',
			date: '18 Januari 2025',
			time: '13:00 - 15:00',
			room: 'Aula Utama'
		},
		{
			code: 'IF3105',
			name: 'Kecerdasan Buatan',
			date: '20 Januari 2025',
			time: '08:00 - 10:00',
			room: 'Ruang Teori 2.3'
		},
		{
			code: 'IF3106',
			name: 'Keamanan Sistem',
			date: '21 Januari 2025',
			time: '10:30 - 12:30',
			room: 'Lab Komputer 2'
		},
		{
			code: 'IF3107',
			name: 'Proyek Perangkat Lunak',
			date: '22 Januari 2025',
			time: '08:00 - 10:00',
			room: 'Ruang Sidang'
		}
	];

	function handlePrint() {
		window.print();
	}
</script>

<svelte:head>
	<style>
		@media print {
			body * {
				visibility: hidden;
			}
			#exam-card,
			#exam-card * {
				visibility: visible;
			}
			#exam-card {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
			}
			.no-print {
				display: none !important;
			}
		}
	</style>
</svelte:head>

<div class="space-y-6">
	<div class="no-print flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Kartu Ujian</h2>
			<p class="text-muted-foreground">Cetak kartu ujian untuk mengikuti ujian semester.</p>
		</div>
		<div class="flex gap-2">
			<Button onclick={handlePrint}>
				<Printer class="mr-2 h-4 w-4" />
				Cetak
			</Button>
			<Button variant="outline">
				<Download class="mr-2 h-4 w-4" />
				Download PDF
			</Button>
		</div>
	</div>

	<!-- Exam Card Preview -->
	<Card id="exam-card" class="mx-auto max-w-4xl">
		<CardHeader class="border-b text-center">
			<div class="flex items-center justify-center gap-4">
				<div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
					<BookOpen class="h-8 w-8 text-primary" />
				</div>
				<div>
					<h3 class="text-xl font-bold uppercase">Kartu Tanda Peserta Ujian</h3>
					<p class="text-muted-foreground">Universitas Contoh Indonesia</p>
					<p class="text-sm text-muted-foreground">{studentInfo.academicYear}</p>
				</div>
			</div>
		</CardHeader>
		<CardContent class="p-6">
			<!-- Student Info -->
			<div class="mb-6 grid gap-6 md:grid-cols-[1fr_150px]">
				<div class="grid grid-cols-[120px_1fr] gap-y-2 text-sm">
					<span class="text-muted-foreground">Nama</span>
					<span class="font-medium">: {studentInfo.name}</span>
					<span class="text-muted-foreground">NIM</span>
					<span class="font-medium">: {studentInfo.nim}</span>
					<span class="text-muted-foreground">Program Studi</span>
					<span class="font-medium">: {studentInfo.program}</span>
					<span class="text-muted-foreground">Semester</span>
					<span class="font-medium">: {studentInfo.semester}</span>
				</div>
				<div class="flex items-start justify-center md:justify-end">
					<div
						class="flex h-36 w-28 items-center justify-center rounded border-2 border-dashed border-muted-foreground/30 p-2 text-center text-xs text-muted-foreground"
					>
						Pas Foto 3x4
					</div>
				</div>
			</div>

			<Separator class="my-4" />

			<!-- Exam Schedule -->
			<h4 class="mb-4 font-semibold">Jadwal Ujian</h4>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead class="w-[60px]">No</TableHead>
						<TableHead class="w-[100px]">Kode</TableHead>
						<TableHead>Mata Kuliah</TableHead>
						<TableHead class="w-[140px]">Tanggal</TableHead>
						<TableHead class="w-[120px]">Waktu</TableHead>
						<TableHead>Ruang</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each examSchedule as exam, idx}
						<TableRow>
							<TableCell class="text-center">{idx + 1}</TableCell>
							<TableCell class="font-mono text-sm">{exam.code}</TableCell>
							<TableCell>{exam.name}</TableCell>
							<TableCell>{exam.date}</TableCell>
							<TableCell>{exam.time}</TableCell>
							<TableCell>{exam.room}</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>

			<Separator class="my-6" />

			<!-- Signatures -->
			<div class="grid gap-8 text-center text-sm md:grid-cols-2">
				<div>
					<p class="mb-12 text-muted-foreground">Mengetahui,</p>
					<p class="font-medium">Kepala Bagian Akademik</p>
				</div>
				<div>
					<p class="mb-12 text-muted-foreground">Peserta Ujian,</p>
					<p class="font-medium">{studentInfo.name}</p>
					<p class="text-muted-foreground">NIM: {studentInfo.nim}</p>
				</div>
			</div>
		</CardContent>
	</Card>
</div>
