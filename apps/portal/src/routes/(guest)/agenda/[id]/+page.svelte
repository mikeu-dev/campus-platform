<script lang="ts">
	let { data } = $props();
	const agenda = $derived(data.agenda);

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	function isPast(dateStr: string) {
		return new Date(dateStr) < new Date();
	}
</script>

<svelte:head>
	{#if agenda}
		<title>{agenda.title} | Agenda Kampus</title>
		<meta name="description" content={agenda.description || 'Detail agenda kampus'} />
	{:else}
		<title>Agenda Tidak Ditemukan | Portal Kampus</title>
	{/if}
</svelte:head>

<div class="min-h-screen bg-white">
	{#if agenda}
		<!-- Header -->
		<section class="relative overflow-hidden bg-gray-900 py-16 text-white md:py-24">
			<div
				class="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-gray-900 to-teal-900/40"
			></div>
			<div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div class="flex items-center gap-3">
					{#if agenda.is_pinned}
						<span
							class="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-3 py-1 text-sm font-medium text-amber-300"
						>
							📌 Disematkan
						</span>
					{/if}
					{#if isPast(agenda.date)}
						<span
							class="inline-flex items-center rounded-full bg-gray-500/20 px-3 py-1 text-sm font-medium text-gray-300"
						>
							Selesai
						</span>
					{:else}
						<span
							class="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-medium text-emerald-300"
						>
							Mendatang
						</span>
					{/if}
				</div>
				<h1 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
					{agenda.title}
				</h1>
			</div>
		</section>

		<!-- Detail Info Cards -->
		<div class="border-b bg-gray-50">
			<div class="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
				<div class="grid gap-4 sm:grid-cols-2">
					<!-- Date Card -->
					<div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
						<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50">
							<svg
								class="h-6 w-6 text-emerald-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<div>
							<p class="text-xs font-medium tracking-wider text-gray-400 uppercase">Tanggal</p>
							<p class="text-sm font-semibold text-gray-900">{formatDate(agenda.date)}</p>
						</div>
					</div>

					<!-- Location Card -->
					{#if agenda.location}
						<div class="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm">
							<div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
								<svg
									class="h-6 w-6 text-blue-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<div>
								<p class="text-xs font-medium tracking-wider text-gray-400 uppercase">Lokasi</p>
								<p class="text-sm font-semibold text-gray-900">{agenda.location}</p>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>

		<!-- Description -->
		{#if agenda.description}
			<section class="py-12 md:py-16">
				<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<h2 class="text-lg font-bold text-gray-900">Deskripsi</h2>
					<div class="prose prose-lg mt-4 max-w-none text-gray-700">
						<p>{agenda.description}</p>
					</div>
				</div>
			</section>
		{/if}

		<!-- Back Button -->
		<div class="border-t">
			<div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
				<a
					href="/agenda"
					class="inline-flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200"
				>
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
					Kembali ke Agenda
				</a>
			</div>
		</div>
	{:else}
		<div class="flex h-[60vh] items-center justify-center">
			<div class="text-center">
				<h1 class="text-4xl font-bold text-gray-900">Agenda Tidak Ditemukan</h1>
				<p class="mt-4 text-gray-600">
					Maaf, agenda yang Anda cari tidak tersedia atau telah berakhir.
				</p>
				<a
					href="/agenda"
					class="mt-8 inline-block rounded-full bg-emerald-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
				>
					Lihat Semua Agenda
				</a>
			</div>
		</div>
	{/if}
</div>
