<script lang="ts">
	import { Menu, X, LogIn, ChevronDown, GraduationCap } from 'lucide-svelte';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';

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

<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<a href="/" class="flex items-center gap-2">
			<div class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
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
			<span class="text-xl font-bold tracking-tight text-gray-900">
				{settings.app_name || m.brand_name()}<span class="text-indigo-600">
					{settings.app_suffix || 'App'}</span
				>
			</span>
		</a>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex md:gap-x-6">
			<a
				href="/"
				class="text-sm font-semibold text-gray-700 transition-colors hover:text-indigo-600"
			>
				{m.nav_home()}
			</a>

			<a
				href="/pmb"
				class="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
			>
				<GraduationCap class="h-4 w-4" />
				PMB 2026
			</a>

			{#each categories as cat}
				<div class="group relative">
					<button
						class="flex items-center gap-1 text-sm font-semibold text-gray-700 transition-colors hover:text-indigo-600 focus:outline-none"
						onmouseenter={() => (openDropdown = cat.key)}
						onmouseleave={() => (openDropdown = null)}
					>
						{cat.name}
						<ChevronDown class="h-4 w-4" />
					</button>

					{#if openDropdown === cat.key}
						<div
							class="absolute left-0 mt-0 w-56 rounded-xl border border-gray-100 bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none"
							role="menu"
							tabindex="-1"
							onmouseenter={() => (openDropdown = cat.key)}
							onmouseleave={() => (openDropdown = null)}
						>
							{#each getPagesByCategory(cat.key) as p}
								<a
									href={`/pages/${p.slug}`}
									class="block rounded-lg px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
								>
									{p.title}
								</a>
							{/each}
						</div>
					{/if}
				</div>
			{/each}

			<a
				href="/#news"
				class="text-sm font-semibold text-gray-700 transition-colors hover:text-indigo-600"
			>
				{m.nav_news()}
			</a>
		</nav>

		<!-- Desktop CTA -->
		<div class="hidden items-center gap-4 md:flex">
			<a
				href="/auth/login"
				class="text-sm font-semibold text-gray-700 transition-colors hover:text-indigo-600"
			>
				{m.nav_login_staff()}
			</a>
			<a
				href="/auth/siakad/login"
				class="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-indigo-500 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
				<LogIn class="h-4 w-4" />
				{m.nav_student_portal()}
			</a>
		</div>

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
		<div class="border-t border-gray-100 bg-white md:hidden">
			<div class="space-y-1 px-4 pt-2 pb-6 sm:px-3">
				<a
					href="/"
					class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
					onclick={() => (isMenuOpen = false)}
				>
					{m.nav_home()}
				</a>

				{#each categories as cat}
					<div class="space-y-1">
						<button
							class="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
							onclick={() => toggleDropdown(cat.key)}
						>
							{cat.name}
							<ChevronDown
								class={`h-4 w-4 transition-transform ${openDropdown === cat.key ? 'rotate-180' : ''}`}
							/>
						</button>

						{#if openDropdown === cat.key}
							<div class="space-y-1 pl-6">
								{#each getPagesByCategory(cat.key) as p}
									<a
										href={`/pages/${p.slug}`}
										class="block rounded-md px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-indigo-600"
										onclick={() => (isMenuOpen = false)}
									>
										{p.title}
									</a>
								{/each}
							</div>
						{/if}
					</div>
				{/each}

				<div class="mt-4 space-y-2 border-t border-gray-100 pt-4">
					<a
						href="/auth/login"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
					>
						{m.nav_login_staff()}
					</a>
					<a
						href="/auth/siakad/login"
						class="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 px-3 py-4 text-base font-semibold text-white hover:bg-indigo-500"
					>
						<LogIn class="h-4 w-4" />
						{m.nav_student_portal()}
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
