<script lang="ts">
	import { Menu, X, LogIn, ChevronDown, GraduationCap, Phone, Mail } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages.js';
	import { slide, fly } from 'svelte/transition';

	let { pages = [], settings = {} } = $props();

	let isMenuOpen = $state(false);
	let openDropdown = $state<string | null>(null);

	const categories = [
		{ name: 'Profil', key: 'Profil' },
		{ name: 'Akademik', key: 'Akademik' },
		{ name: 'Prodi', key: 'Prodi' },
		{ name: 'Riset dan Publikasi', key: 'Riset' },
		{ name: 'Penerimaan', key: 'Penerimaan' }
	];

	function getPagesByCategory(category: string) {
		return pages.filter((p: any) => p.parent_menu === category);
	}

	function toggleDropdown(key: string) {
		if (openDropdown === key) {
			openDropdown = null;
		} else {
			openDropdown = key;
		}
	}
</script>

<!-- TOP UTILITY BAR -->
<div class="w-full bg-slate-900 text-xs font-medium text-slate-300">
	<div class="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Left: Contact Info -->
		<div class="hidden items-center gap-6 sm:flex">
			{#if settings.phone}
				<a
					href={`tel:${settings.phone}`}
					class="flex items-center gap-2 transition-colors hover:text-white"
				>
					<Phone class="h-3.5 w-3.5" />
					<span>{settings.phone}</span>
				</a>
			{/if}
			{#if settings.email}
				<a
					href={`mailto:${settings.email}`}
					class="flex items-center gap-2 transition-colors hover:text-white"
				>
					<Mail class="h-3.5 w-3.5" />
					<span>{settings.email}</span>
				</a>
			{/if}
		</div>

		<!-- Right: Utility Links -->
		<div class="ml-auto flex items-center gap-4">
			<a href="/auth/login" class="transition-colors hover:text-white">
				{m.nav_login_staff()}
			</a>
			<span class="text-slate-700">|</span>
			<a
				href="/auth/siakad/login"
				class="flex items-center gap-1.5 transition-colors hover:text-white"
			>
				<LogIn class="h-3.5 w-3.5" />
				<span>{m.nav_student_portal()}</span>
			</a>
		</div>
	</div>
</div>

<!-- MAIN NAVIGATION BAR -->
<header
	class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md transition-all duration-300"
>
	<div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a href="/" class="group flex items-center gap-3">
			<div
				class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-transform duration-300 group-hover:scale-105"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="h-6 w-6"
				>
					<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
					<path d="M6 12v5c3 3 9 3 12 0v-5" />
				</svg>
			</div>
			<div class="flex flex-col">
				<span class="text-xl leading-tight font-bold tracking-tight text-gray-900">
					{settings.app_name || m.brand_name()}
				</span>
				<span class="-mt-1 text-sm font-medium text-indigo-600">
					{settings.app_suffix || 'App'}
				</span>
			</div>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex md:items-center md:gap-x-8">
			<a href="/" class="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600">
				{m.nav_home()}
			</a>

			{#each categories as cat (cat.key)}
				<!-- svelte-ignore a11y_no_static_element_interactions -->
				<div
					class="group relative h-full"
					onmouseenter={() => (openDropdown = cat.key)}
					onmouseleave={() => (openDropdown = null)}
				>
					<button
						class="flex items-center gap-1 py-2 text-sm font-medium text-gray-600 transition-colors group-hover:text-indigo-600 focus:outline-none"
					>
						{cat.name}
						<ChevronDown
							class={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === cat.key ? 'rotate-180' : ''}`}
						/>
					</button>

					{#if openDropdown === cat.key}
						<div
							class="absolute top-full left-1/2 w-72 -translate-x-1/2 pt-4 focus:outline-none"
							role="menu"
							tabindex="-1"
							transition:fly={{ y: 10, duration: 200 }}
						>
							<div
								class="rounded-2xl border border-gray-100 bg-white p-2 shadow-xl ring-1 shadow-gray-200/50 ring-black/5"
							>
								{#each getPagesByCategory(cat.key) as p (p.slug)}
									<a
										href={`/pages/${p.slug}`}
										class="block rounded-xl px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
									>
										{p.title}
									</a>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			{/each}

			<a
				href="/#news"
				class="text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600"
			>
				{m.nav_news()}
			</a>
		</nav>

		<!-- Mobile Menu Button -->
		<div class="flex md:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				onclick={() => {
					isMenuOpen = !isMenuOpen;
				}}
			>
				<span class="sr-only">Open main menu</span>
				{#if isMenuOpen}
					<X class="h-6 w-6" />
				{:else}
					<Menu class="h-6 w-6" />
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div
			class="absolute top-20 left-0 h-[calc(100vh-5rem)] w-full overflow-y-auto border-t border-gray-100 bg-white shadow-lg md:hidden"
			transition:slide={{ duration: 300 }}
		>
			<div class="space-y-1 px-4 pt-2 pb-6 sm:px-3">
				<a
					href="/"
					class="block rounded-lg px-3 py-2.5 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
					onclick={() => (isMenuOpen = false)}
				>
					{m.nav_home()}
				</a>

				{#each categories as cat (cat.key)}
					<div class="space-y-1">
						<button
							class="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
							onclick={() => toggleDropdown(cat.key)}
						>
							{cat.name}
							<ChevronDown
								class={`h-4 w-4 transition-transform duration-200 ${openDropdown === cat.key ? 'rotate-180' : ''}`}
							/>
						</button>

						{#if openDropdown === cat.key}
							<div class="space-y-1 pl-4" transition:slide={{ duration: 200 }}>
								{#each getPagesByCategory(cat.key) as p (p.slug)}
									<a
										href={`/pages/${p.slug}`}
										class="block rounded-lg border-l-2 border-transparent px-3 py-2 text-sm font-medium text-gray-500 hover:border-indigo-600 hover:bg-gray-50 hover:text-indigo-600"
										onclick={() => (isMenuOpen = false)}
									>
										{p.title}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}

				<div class="mt-4 space-y-3 border-t border-gray-100 pt-6">
					<div class="mt-4 grid grid-cols-2 gap-3">
						<a
							href="/auth/login"
							class="flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-600 hover:border-indigo-200 hover:bg-gray-50 hover:text-indigo-600"
						>
							{m.nav_login_staff()}
						</a>
						<a
							href="/auth/siakad/login"
							class="flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-600 hover:border-indigo-200 hover:bg-gray-50 hover:text-indigo-600"
						>
							<LogIn class="h-4 w-4" />
							Portal Mhs
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>
