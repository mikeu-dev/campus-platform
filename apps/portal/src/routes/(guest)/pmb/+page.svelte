<script lang="ts">
	import {
		ChevronRight,
		GraduationCap,
		Calendar,
		FileText,
		HelpCircle,
		CheckCircle2,
		ArrowRight
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();
	const { periods = [], prodis = [] } = $derived(data);

	function formatDate(date: string) {
		return new Date(date).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<div class="bg-gray-50 pb-20">
	<!-- Hero Section -->
	<section class="relative overflow-hidden bg-indigo-900 py-20 text-white">
		<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
				Penerimaan Mahasiswa Baru
			</h1>
			<p class="mx-auto mt-6 max-w-2xl text-xl text-indigo-100">
				Mulai perjalanan akademik Anda di kampus terbaik. Bergabunglah dengan komunitas pembelajar
				masa depan.
			</p>
			<div class="mt-10 flex justify-center gap-4">
				<Button size="lg" class="bg-white text-indigo-900 hover:bg-indigo-50" href="/pmb/register">
					Daftar Sekarang
				</Button>
				<Button
					size="lg"
					variant="outline"
					class="border-white text-white hover:bg-white/10"
					href="/pmb/status"
				>
					Cek Status Pendaftaran
				</Button>
			</div>
		</div>

		<!-- Decorative Elements -->
		<div
			class="absolute -right-12 -bottom-12 h-64 w-64 rounded-full bg-indigo-800/50 blur-3xl"
		></div>
		<div class="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-indigo-800/30 blur-3xl"></div>
	</section>

	<div class="mx-auto mt-[-3rem] max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<Card class="border-t-4 border-t-indigo-600 shadow-lg">
				<CardHeader>
					<div
						class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600"
					>
						<Calendar class="h-5 w-5" />
					</div>
					<CardTitle>Jadwal Gelombang</CardTitle>
					<CardDescription>Periode pendaftaran yang sedang aktif.</CardDescription>
				</CardHeader>
				<CardContent class="grid gap-4">
					{#each periods as period}
						<div class="rounded-lg border p-3">
							<div class="mb-1 flex items-center justify-between">
								<span class="text-sm font-bold">{period.name}</span>
								<Badge variant="secondary" class="bg-green-100 text-[10px] text-green-700"
									>Aktif</Badge
								>
							</div>
							<p class="text-xs text-muted-foreground">
								{formatDate(period.start_date)} - {formatDate(period.end_date)}
							</p>
						</div>
					{:else}
						<p class="text-sm text-muted-foreground italic">Belum ada gelombang aktif saat ini.</p>
					{/each}
				</CardContent>
			</Card>

			<Card class="border-t-4 border-t-indigo-600 shadow-lg">
				<CardHeader>
					<div
						class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600"
					>
						<GraduationCap class="h-5 w-5" />
					</div>
					<CardTitle>Pilihan Program Studi</CardTitle>
					<CardDescription>Tersedia berbagai pilihan jalur masa depan.</CardDescription>
				</CardHeader>
				<CardContent class="grid gap-2">
					{#each prodis.slice(0, 5) as prodi}
						<div class="flex items-center gap-2 text-sm">
							<CheckCircle2 class="h-4 w-4 text-green-600" />
							<span>{prodi.name}</span>
						</div>
					{/each}
					{#if prodis.length > 5}
						<p class="mt-2 text-xs font-medium text-muted-foreground">
							Dan {prodis.length - 5} prodi lainnya...
						</p>
					{/if}
				</CardContent>
			</Card>

			<Card class="border-t-4 border-t-indigo-600 shadow-lg">
				<CardHeader>
					<div
						class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600"
					>
						<FileText class="h-5 w-5" />
					</div>
					<CardTitle>Persyaratan Berkas</CardTitle>
					<CardDescription>Dokumen yang perlu Anda siapkan.</CardDescription>
				</CardHeader>
				<CardContent>
					<ul class="space-y-2 text-sm">
						<li class="flex items-center gap-2">1. Pas Foto Terbaru (3x4)</li>
						<li class="flex items-center gap-2">2. Scan Ijazah / Surat Keterangan Lulus</li>
						<li class="flex items-center gap-2">3. Scan KTP / Kartu Keluarga</li>
						<li class="flex items-center gap-2">4. Scan Rapor Semester 1-5</li>
					</ul>
				</CardContent>
			</Card>
		</div>

		<!-- Steps Section -->
		<section class="mt-20">
			<div class="text-center">
				<h2 class="text-3xl font-bold">Alur Pendaftaran</h2>
				<p class="mt-4 text-muted-foreground">
					Cukup 4 langkah mudah untuk menjadi bagian dari kami.
				</p>
			</div>

			<div class="mt-12 grid gap-8 md:grid-cols-4">
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-100 bg-white font-bold text-indigo-600 shadow-md"
					>
						1
					</div>
					<h3 class="font-bold">Buat Akun</h3>
					<p class="mt-2 text-sm text-muted-foreground">Daftar menggunakan email aktif.</p>
				</div>
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-100 bg-white font-bold text-indigo-600 shadow-md"
					>
						2
					</div>
					<h3 class="font-bold">Isi Formulir</h3>
					<p class="mt-2 text-sm text-muted-foreground">Lengkapi data diri dan pilihan prodi.</p>
				</div>
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-100 bg-white font-bold text-indigo-600 shadow-md"
					>
						3
					</div>
					<h3 class="font-bold">Unggah Berkas</h3>
					<p class="mt-2 text-sm text-muted-foreground">Upload dokumen persyaratan.</p>
				</div>
				<div class="relative text-center">
					<div
						class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-indigo-100 bg-white font-bold text-indigo-600 shadow-md"
					>
						4
					</div>
					<h3 class="font-bold">Seleksi & Hasil</h3>
					<p class="mt-2 text-sm text-muted-foreground">Tunggu pengumuman kelulusan.</p>
				</div>
			</div>
		</section>

		<!-- FAQ Section -->
		<section class="mt-28 mb-10">
			<div class="rounded-3xl border border-indigo-50 bg-white p-10 shadow-xl">
				<div class="flex flex-col gap-10 md:flex-row">
					<div class="md:w-1/3">
						<h2 class="text-3xl font-bold text-indigo-900">Pertanyaan Umum (FAQ)</h2>
						<p class="mt-4 text-muted-foreground">Butuh bantuan lebih lanjut?</p>
						<Button class="mt-6" variant="outline">Hubungi WhatsApp Admin</Button>
					</div>
					<div class="grid gap-6 md:w-2/3">
						<div class="space-y-1">
							<h4 class="font-bold">Berapa biaya pendaftarannya?</h4>
							<p class="text-sm text-muted-foreground">
								Biaya pendaftaran bervariasi tergantung jalur yang dipilih, berkisar antara Rp
								250.000 - Rp 500.000.
							</p>
						</div>
						<div class="space-y-1">
							<h4 class="font-bold">Apakah bisa mendaftar di dua pilihan prodi?</h4>
							<p class="text-sm text-muted-foreground">
								Ya, pendaftar dapat memilih hingga 2 program studi sebagai pilihan utama dan
								cadangan.
							</p>
						</div>
						<div class="space-y-1">
							<h4 class="font-bold">Bagaimana jika dokumen saya belum lengkap?</h4>
							<p class="text-sm text-muted-foreground">
								Anda dapat menyimpan draf pendaftaran dan melengkapinya sebelum batas akhir
								gelombang ditutup.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
