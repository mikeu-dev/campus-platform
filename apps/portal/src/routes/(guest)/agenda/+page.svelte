<script lang="ts">
	let { data } = $props();
	const agendas = $derived(data.agendas || []);

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}

	function getDay(dateStr: string) {
		return new Date(dateStr).getDate();
	}

	function getMonth(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', { month: 'short' }).toUpperCase();
	}

	function getYear(dateStr: string) {
		return new Date(dateStr).getFullYear();
	}

	function isPast(dateStr: string) {
		return new Date(dateStr) < new Date();
	}
</script>

<svelte:head>
	<title>Agenda Kampus | Portal Kampus</title>
	<meta name="description" content="Jadwal kegiatan dan acara kampus terkini." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Header -->
	<section class="relative overflow-hidden bg-gray-900 py-20 text-white md:py-28">
		<div
			class="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-gray-900 to-teal-900/40"
		></div>
		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Agenda Kampus</h1>
			<p class="mt-4 max-w-2xl text-xl text-gray-300">
				Jadwal kegiatan akademik, seminar, workshop, dan acara kampus lainnya.
			</p>
		</div>
	</section>

	<!-- Agenda List -->
	<section class="py-16 md:py-20">
		<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
			{#if agendas.length > 0}
				<div class="space-y-4">
					{#each agendas as agenda (agenda.id)}
						<a
							href="/agenda/{agenda.id}"
							class="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg"
							class:opacity-60={isPast(agenda.date)}
						>
							<!-- Date Badge -->
							<div
								class="flex h-20 w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl transition-colors"
								class:bg-emerald-50={!isPast(agenda.date)}
								class:bg-gray-100={isPast(agenda.date)}
							>
								<span
									class="text-2xl leading-none font-extrabold"
									class:text-emerald-600={!isPast(agenda.date)}
									class:text-gray-400={isPast(agenda.date)}
								>
									{getDay(agenda.date)}
								</span>
								<span
									class="mt-1 text-xs font-bold tracking-wider"
									class:text-emerald-500={!isPast(agenda.date)}
									class:text-gray-400={isPast(agenda.date)}
								>
									{getMonth(agenda.date)}
								</span>
								<span class="text-[10px] text-gray-400">
									{getYear(agenda.date)}
								</span>
							</div>

							<!-- Content -->
							<div class="min-w-0 flex-1">
								<div class="flex items-start justify-between gap-3">
									<h2
										class="text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-600"
									>
										{agenda.title}
									</h2>
									{#if agenda.is_pinned}
										<span
											class="inline-flex flex-shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-600"
										>
											📌
										</span>
									{/if}
								</div>

								{#if agenda.description}
									<p class="mt-1.5 line-clamp-2 text-sm text-gray-500">
										{agenda.description}
									</p>
								{/if}

								<div class="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-400">
									<div class="flex items-center gap-1.5">
										<svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
											/>
										</svg>
										<span>{formatDate(agenda.date)}</span>
									</div>

									{#if agenda.location}
										<div class="flex items-center gap-1.5">
											<svg
												class="h-3.5 w-3.5"
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
											<span>{agenda.location}</span>
										</div>
									{/if}

									{#if isPast(agenda.date)}
										<span
											class="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-400"
										>
											Selesai
										</span>
									{:else}
										<span
											class="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600"
										>
											Mendatang
										</span>
									{/if}
								</div>
							</div>
						</a>
					{/each}
				</div>
			{:else}
				<div class="flex flex-col items-center justify-center py-20 text-center">
					<svg
						class="mb-4 h-16 w-16 text-gray-300"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="1.5"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-gray-900">Belum Ada Agenda</h2>
					<p class="mt-2 text-gray-500">Jadwal kegiatan kampus akan tampil di sini.</p>
				</div>
			{/if}
		</div>
	</section>
</div>
