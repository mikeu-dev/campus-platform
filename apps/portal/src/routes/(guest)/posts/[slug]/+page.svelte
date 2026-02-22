<script lang="ts">
	let { data } = $props();
	const post = $derived(data.post);

	function formatDate(dateStr: string) {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			weekday: 'long',
			day: 'numeric',
			month: 'long',
			year: 'numeric'
		});
	}
</script>

<svelte:head>
	{#if post}
		<title>{post.title} | Portal Kampus</title>
		<meta name="description" content={post.content?.replace(/<[^>]*>/g, '').substring(0, 160)} />
	{:else}
		<title>Berita Tidak Ditemukan | Portal Kampus</title>
	{/if}
</svelte:head>

<div class="min-h-screen bg-white">
	{#if post}
		<!-- Hero Image -->
		{#if post.image_url}
			<div class="relative h-64 overflow-hidden sm:h-80 md:h-96">
				<img src={post.image_url} alt={post.title} class="h-full w-full object-cover" />
				<div
					class="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"
				></div>
				<div class="absolute right-0 bottom-0 left-0 p-6 md:p-10">
					<div class="mx-auto max-w-4xl">
						{#if post.category}
							<span
								class="inline-block rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-semibold text-white"
							>
								{post.category}
							</span>
						{/if}
						<h1 class="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
							{post.title}
						</h1>
					</div>
				</div>
			</div>
		{:else}
			<section class="bg-gray-900 py-16 text-white md:py-24">
				<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					{#if post.category}
						<span
							class="inline-block rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-semibold text-white"
						>
							{post.category}
						</span>
					{/if}
					<h1 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
						{post.title}
					</h1>
				</div>
			</section>
		{/if}

		<!-- Meta Info -->
		<div class="border-b">
			<div
				class="mx-auto flex max-w-4xl items-center gap-4 px-4 py-4 text-sm text-gray-500 sm:px-6 lg:px-8"
			>
				<div class="flex items-center gap-2">
					<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
					<span>{formatDate(post.created_at)}</span>
				</div>

				{#if post.is_pinned}
					<span
						class="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600"
					>
						📌 Disematkan
					</span>
				{/if}
			</div>
		</div>

		<!-- Content -->
		<section class="py-12 md:py-16">
			<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<article
					class="prose prose-lg max-w-none text-gray-700 prose-indigo prose-headings:text-gray-900 prose-a:text-indigo-600"
				>
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html post.content}
				</article>
			</div>
		</section>

		<!-- Back Button -->
		<div class="border-t">
			<div class="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
				<a
					href="/posts"
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
					Kembali ke Daftar Berita
				</a>
			</div>
		</div>
	{:else}
		<div class="flex h-[60vh] items-center justify-center">
			<div class="text-center">
				<h1 class="text-4xl font-bold text-gray-900">Berita Tidak Ditemukan</h1>
				<p class="mt-4 text-gray-600">
					Maaf, berita yang Anda cari tidak tersedia atau telah dipindahkan.
				</p>
				<a
					href="/posts"
					class="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
				>
					Lihat Semua Berita
				</a>
			</div>
		</div>
	{/if}
</div>
