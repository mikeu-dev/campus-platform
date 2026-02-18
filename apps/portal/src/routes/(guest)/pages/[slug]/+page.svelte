<script lang="ts">
	let { data } = $props();
	const { pageData } = $derived(data);
</script>

<svelte:head>
	{#if pageData}
		<title>{pageData.title} | Portal Kampus</title>
	{/if}
</svelte:head>

<div class="min-h-screen bg-white">
	{#if pageData}
		<!-- Header / Title Section -->
		<section class="bg-gray-900 py-16 text-white md:py-24">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
					{pageData.title}
				</h1>
				<p class="mt-4 text-xl text-gray-400">
					Informasi resmi seputar {pageData.title.toLowerCase()} kampus kita.
				</p>
			</div>
		</section>

		<!-- Content Section -->
		<section class="py-16 md:py-24">
			<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
				<div class="prose prose-lg max-w-none text-gray-700 prose-indigo">
					<!-- eslint-disable-next-line svelte/no-at-html-tags -->
					{@html pageData.content}
				</div>
			</div>
		</section>
	{:else}
		<div class="flex h-[60vh] items-center justify-center">
			<div class="text-center">
				<h1 class="text-4xl font-bold text-gray-900">Halaman Tidak Ditemukan</h1>
				<p class="mt-4 text-gray-600">
					Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
				</p>
				<a
					href="/"
					class="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white"
				>
					Kembali ke Beranda
				</a>
			</div>
		</div>
	{/if}
</div>
