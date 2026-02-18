<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { Button } from '$lib/components/ui/button';
	import { Printer, Download, ArrowLeft, GraduationCap } from 'lucide-svelte';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';

	let { data } = $props();
	const profile = $derived(data.profile);
	const exams = $derived(data.exams);

	function handlePrint() {
		window.print();
	}
</script>

<svelte:head>
	<title>{m.nav_lms_exam_permission()} | CampusApp</title>
</svelte:head>

<div class="space-y-6">
	<!-- Non-printable Actions -->
	<div class="flex items-center justify-between print:hidden">
		<Button variant="ghost" href="/lms/exams" class="gap-2">
			<ArrowLeft class="h-4 w-4" />
			Kembali
		</Button>
		<div class="flex gap-2">
			<Button variant="outline" class="gap-2" onclick={handlePrint}>
				<Printer class="h-4 w-4" />
				Cetak
			</Button>
			<Button class="gap-2">
				<Download class="h-4 w-4" />
				Unduh PDF
			</Button>
		</div>
	</div>

	<!-- Printable Card -->
	<div
		class="mx-auto max-w-[800px] border bg-white p-8 text-black shadow-lg print:border-none print:p-0 print:shadow-none"
	>
		<!-- Header Document -->
		<div class="mb-8 flex items-center gap-6 border-b-2 border-black pb-6">
			<div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-primary">
				<GraduationCap class="h-12 w-12 text-white" />
			</div>
			<div class="space-y-1">
				<h1 class="text-2xl font-black tracking-tighter uppercase">CampusApp University</h1>
				<p class="text-sm font-medium italic opacity-70">"Excellence in Education and Research"</p>
				<div class="space-y-0.5 text-[10px]">
					<p>Jl. Kampus Merdeka No. 123, Jakarta Selatan</p>
					<p>Telp: (021) 1234567 • Email: info@campusapp.ac.id</p>
				</div>
			</div>
			<div class="ml-auto border-l-2 border-black pl-6 text-right">
				<h2 class="text-xl font-bold uppercase underline">Kartu Ujian</h2>
				<p class="text-[10px] font-bold">Semester Ganjil 2025/2026</p>
			</div>
		</div>

		<!-- Student Info -->
		<div class="mb-8 grid grid-cols-2 gap-y-2 text-sm">
			<div class="flex">
				<span class="w-32 font-bold">NIM</span>
				<span class="mr-2">:</span>
				<span>{profile?.nim || '20230001'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-bold">Fakultas</span>
				<span class="mr-2">:</span>
				<span>Teknik & Ilmu Komputer</span>
			</div>
			<div class="flex">
				<span class="w-32 font-bold">Nama Mahasiswa</span>
				<span class="mr-2">:</span>
				<span class="font-bold uppercase">{profile?.name || 'Mahasiswa'}</span>
			</div>
			<div class="flex">
				<span class="w-32 font-bold">Program Studi</span>
				<span class="mr-2">:</span>
				<span>Informatika</span>
			</div>
			<div class="flex">
				<span class="w-32 font-bold">Semester / Kelas</span>
				<span class="mr-2">:</span>
				<span>5 / Reguler A</span>
			</div>
			<div class="flex">
				<span class="w-32 font-bold">Tahun Akademik</span>
				<span class="mr-2">:</span>
				<span>2025/2026</span>
			</div>
		</div>

		<!-- Exam List Table -->
		<div class="mb-8 border-2 border-black">
			<Table>
				<TableHeader class="bg-black/5">
					<TableRow class="border-b-2 border-black hover:bg-black/5">
						<TableHead class="w-12 border-r-2 border-black text-center font-bold text-black"
							>No</TableHead
						>
						<TableHead class="border-r-2 border-black font-bold text-black">Hari / Tgl</TableHead>
						<TableHead class="border-r-2 border-black text-center font-bold text-black"
							>Jam</TableHead
						>
						<TableHead class="border-r-2 border-black font-bold text-black">Mata Kuliah</TableHead>
						<TableHead class="border-r-2 border-black text-center font-bold text-black"
							>Ruang</TableHead
						>
						<TableHead class="text-center font-bold text-black">TTD Pengawas</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each exams as exam, i (i)}
						<TableRow class="border-b-2 border-black hover:bg-transparent">
							<TableCell class="border-r-2 border-black text-center">{i + 1}</TableCell>
							<TableCell class="border-r-2 border-black text-[12px]">
								{new Date(exam.date).toLocaleDateString('id-ID', {
									weekday: 'long',
									day: 'numeric',
									month: 'short'
								})}
							</TableCell>
							<TableCell class="border-r-2 border-black text-center text-[12px]">
								{exam.start_time.split(':').slice(0, 2).join(':')}
							</TableCell>
							<TableCell class="border-r-2 border-black">
								<p class="text-[12px] leading-tight font-bold">{exam.course_name}</p>
								<p class="text-[10px] italic opacity-70">{exam.course_code}</p>
							</TableCell>
							<TableCell class="border-r-2 border-black text-center text-[12px]">
								{exam.room || 'TBA'}
							</TableCell>
							<TableCell class="h-12"></TableCell>
						</TableRow>
					{/each}
					{#if exams.length < 5}
						{#each Array(5 - exams.length) as _, i (i)}
							<TableRow class="h-12 border-b-2 border-black hover:bg-transparent">
								<TableCell class="border-r-2 border-black text-center"></TableCell>
								<TableCell class="border-r-2 border-black"></TableCell>
								<TableCell class="border-r-2 border-black"></TableCell>
								<TableCell class="border-r-2 border-black"></TableCell>
								<TableCell class="border-r-2 border-black"></TableCell>
								<TableCell></TableCell>
							</TableRow>
						{/each}
					{/if}
				</TableBody>
			</Table>
		</div>

		<!-- Footer Info -->
		<div class="grid grid-cols-2 gap-8 text-sm">
			<div class="space-y-3 rounded-lg border-2 border-black bg-black/5 p-4">
				<p class="mb-1 font-bold underline">PENTING / MOHON DIPERHATIKAN:</p>
				<ul class="list-inside list-decimal space-y-1 text-[10px]">
					<li>Kartu Ujian ini wajib dibawa dan ditunjukkan saat mengikuti ujian.</li>
					<li>Mahasiswa wajib mengenakan pakaian seragam/rapi dan ber-Almamater.</li>
					<li>Keterlambatan lebih dari 15 menit tidak diperkenankan mengikuti ujian.</li>
					<li>Peserta wajib menjaga ketertiban selama pelaksanaan ujian berlangsung.</li>
				</ul>
			</div>
			<div class="flex flex-col items-center justify-between pt-4 text-center">
				<p class="text-[12px] font-medium">
					Jakarta, {new Date().toLocaleDateString('id-ID', {
						day: 'numeric',
						month: 'long',
						year: 'numeric'
					})}
				</p>
				<div class="flex h-24 items-center justify-center italic opacity-30">
					<p>( Cap Universitas & Tanda Tangan )</p>
				</div>
				<p class="font-bold uppercase underline">Biro Administrasi Akademik</p>
			</div>
		</div>
	</div>
</div>

<style>
	@media print {
		:global(body) {
			background-color: white !important;
		}
	}
</style>
