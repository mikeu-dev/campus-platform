<script lang="ts">
	import { Menu, X, LogIn } from 'lucide-svelte';
	import { page } from '$app/stores';
	import * as m from '$lib/paraglide/messages.js';

	let isMenuOpen = false;

	const navigation = [
		{ name: m.nav_home(), href: '#' },
		{ name: m.nav_about(), href: '#about' },
		{ name: m.nav_academic(), href: '#academic' },
		{ name: m.nav_facilities(), href: '#facilities' },
		{ name: m.nav_news(), href: '#news' }
	];
</script>

<header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
		<!-- Logo -->
		<div class="flex items-center gap-2">
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
				{m.brand_name()}<span class="text-indigo-600">App</span>
			</span>
		</div>

		<!-- Desktop Navigation -->
		<nav class="hidden md:flex md:gap-x-8">
			{#each navigation as item}
				<a
					href={item.href}
					class="text-sm font-semibold text-gray-700 transition-colors hover:text-indigo-600"
				>
					{item.name}
				</a>
			{/each}
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
		<div class="md:hidden">
			<div class="space-y-1 px-4 pt-2 pb-3 sm:px-3">
				{#each navigation as item}
					<a
						href={item.href}
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
						onclick={() => (isMenuOpen = false)}
					>
						{item.name}
					</a>
				{/each}
				<div class="mt-4 border-t border-gray-200 pt-4">
					<a
						href="/auth/login"
						class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
					>
						{m.nav_login_staff()}
					</a>
					<a
						href="/auth/siakad/login"
						class="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-indigo-600 px-3 py-2 text-base font-medium text-white hover:bg-indigo-500"
					>
						<LogIn class="h-4 w-4" />
						{m.nav_student_portal()}
					</a>
				</div>
			</div>
		</div>
	{/if}
</header>
