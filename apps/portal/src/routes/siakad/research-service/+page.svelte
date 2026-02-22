<script lang="ts">
	import { BookOpen, FileText, FlaskConical, Handshake } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages.js';
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-2xl font-bold text-gray-900">{m.nav_research_service()}</h2>
		<p class="mt-1 text-sm text-muted-foreground">
			Kelola kegiatan penelitian dan pengabdian kepada masyarakat.
		</p>
	</div>

	<!-- Stats Cards -->
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-indigo-100 p-2.5">
					<FlaskConical class="h-5 w-5 text-indigo-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">3</p>
					<p class="text-xs text-muted-foreground">Penelitian Aktif</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-emerald-100 p-2.5">
					<Handshake class="h-5 w-5 text-emerald-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">2</p>
					<p class="text-xs text-muted-foreground">Pengabdian Aktif</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-amber-100 p-2.5">
					<FileText class="h-5 w-5 text-amber-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">7</p>
					<p class="text-xs text-muted-foreground">Publikasi Ilmiah</p>
				</div>
			</div>
		</div>
		<div class="rounded-xl border bg-card p-5 shadow-sm">
			<div class="flex items-center gap-3">
				<div class="rounded-lg bg-rose-100 p-2.5">
					<BookOpen class="h-5 w-5 text-rose-600" />
				</div>
				<div>
					<p class="text-2xl font-bold">1</p>
					<p class="text-xs text-muted-foreground">HKI / Paten</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Research Section -->
	<div class="rounded-xl border bg-card shadow-sm">
		<div class="border-b px-6 py-4">
			<h3 class="flex items-center gap-2 font-semibold">
				<FlaskConical class="h-4 w-4 text-indigo-600" /> Penelitian
			</h3>
		</div>
		<div class="divide-y">
			{#each [{ title: 'Implementasi Machine Learning untuk Prediksi Kelulusan Mahasiswa', year: '2025/2026', status: 'Berjalan', funding: 'Internal' }, { title: 'Analisis Sentimen Media Sosial Menggunakan NLP', year: '2025/2026', status: 'Berjalan', funding: 'Kemenristekdikti' }, { title: 'Pengembangan Sistem IoT untuk Smart Campus', year: '2024/2025', status: 'Selesai', funding: 'Internal' }] as item (item.title)}
				<div class="px-6 py-4 transition-colors hover:bg-muted/50">
					<div class="flex items-start justify-between gap-4">
						<div class="flex-1">
							<p class="text-sm font-medium">{item.title}</p>
							<p class="mt-1 text-xs text-muted-foreground">
								Tahun: {item.year} · Pendanaan: {item.funding}
							</p>
						</div>
						<span
							class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap
								{item.status === 'Berjalan' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}
							"
						>
							{item.status}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>

	<!-- Community Service Section -->
	<div class="rounded-xl border bg-card shadow-sm">
		<div class="border-b px-6 py-4">
			<h3 class="flex items-center gap-2 font-semibold">
				<Handshake class="h-4 w-4 text-emerald-600" /> Pengabdian kepada Masyarakat
			</h3>
		</div>
		<div class="divide-y">
			{#each [{ title: 'Pelatihan Digital Marketing untuk UMKM Desa Sukamaju', year: '2025/2026', status: 'Berjalan', location: 'Desa Sukamaju, Purwakarta' }, { title: 'Workshop Literasi Digital untuk Siswa SMA', year: '2024/2025', status: 'Selesai', location: 'SMAN 1 Purwakarta' }] as item (item.title)}
				<div class="px-6 py-4 transition-colors hover:bg-muted/50">
					<div class="flex items-start justify-between gap-4">
						<div class="flex-1">
							<p class="text-sm font-medium">{item.title}</p>
							<p class="mt-1 text-xs text-muted-foreground">
								Tahun: {item.year} · Lokasi: {item.location}
							</p>
						</div>
						<span
							class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium whitespace-nowrap
								{item.status === 'Berjalan' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}
							"
						>
							{item.status}
						</span>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
