<script lang="ts">
	let { data } = $props();
	const posts = $derived(data.posts || []);

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Berita & Pengumuman | Portal Kampus</title>
	<meta name="description" content="Berita dan pengumuman terbaru dari kampus." />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Hero Header -->
	<section class="relative overflow-hidden bg-gray-900 py-20 text-white md:py-28">
		<div
			class="absolute inset-0 bg-gradient-to-br from-indigo-900/60 via-gray-900 to-purple-900/40"
		></div>
		<div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
				Berita & Pengumuman
			</h1>
			<p class="mt-4 max-w-2xl text-xl text-gray-300">
				Informasi terkini seputar kegiatan akademik, prestasi, dan pengumuman resmi kampus.
			</p>
		</div>
	</section>

	<!-- Posts Grid -->
	<section class="py-16 md:py-20">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			{#if posts.length > 0}
				<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each posts as post (post.id)}
						<a
							href="/posts/{post.slug}"
							class="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
						>
							{#if post.image_url}
								<div class="aspect-video overflow-hidden">
									<img
										src={post.image_url}
										alt={post.title}
										class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>
							{:else}
								<div
									class="flex aspect-video items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50"
								>
									<svg
										class="h-12 w-12 text-indigo-200"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
										/>
									</svg>
								</div>
							{/if}

							<div class="p-5">
								{#if post.category}
									<span
										class="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600"
									>
										{post.category}
									</span>
								{/if}

								<h2
									class="mt-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-indigo-600"
								>
									{post.title}
								</h2>

								{#if post.content}
									<p class="mt-2 line-clamp-2 text-sm text-gray-500">
										{post.content.replace(/<[^>]*>/g, '').substring(0, 120)}...
									</p>
								{/if}

								<div class="mt-4 flex items-center gap-2 text-xs text-gray-400">
									<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									<span>{formatDate(post.created_at)}</span>

									{#if post.is_pinned}
										<span
											class="ml-auto inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-600"
										>
											📌 Disematkan
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
							d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
						/>
					</svg>
					<h2 class="text-xl font-semibold text-gray-900">Belum Ada Berita</h2>
					<p class="mt-2 text-gray-500">Berita dan pengumuman akan tampil di sini.</p>
				</div>
			{/if}
		</div>
	</section>
</div>
