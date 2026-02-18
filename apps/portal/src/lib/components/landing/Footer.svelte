<script lang="ts">
	import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Youtube } from 'lucide-svelte';
	import * as m from '$lib/paraglide/messages.js';

	let { settings = {}, links = [] } = $props();
</script>

<footer class="bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Brand Info -->
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white"
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
					<span class="text-2xl font-bold tracking-tight text-white">
						{settings.app_name || m.brand_name()}<span class="text-indigo-400"
							>{settings.app_suffix || 'App'}</span
						>
					</span>
				</div>
				<p class="text-sm text-gray-400">
					{settings.app_description || m.footer_desc()}
				</p>
				<div class="flex space-x-4">
					{#if settings.facebook_url}
						<a href={settings.facebook_url} target="_blank" class="text-gray-400 hover:text-white">
							<Facebook class="h-5 w-5" />
						</a>
					{/if}
					{#if settings.twitter_url}
						<a href={settings.twitter_url} target="_blank" class="text-gray-400 hover:text-white">
							<Twitter class="h-5 w-5" />
						</a>
					{/if}
					{#if settings.instagram_url}
						<a href={settings.instagram_url} target="_blank" class="text-gray-400 hover:text-white">
							<Instagram class="h-5 w-5" />
						</a>
					{/if}
					{#if settings.youtube_url}
						<a href={settings.youtube_url} target="_blank" class="text-gray-400 hover:text-white">
							<Youtube class="h-5 w-5" />
						</a>
					{/if}
				</div>
			</div>

			<!-- Quick Links (Dynamic) -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
					{m.footer_info()}
				</h3>
				<ul class="space-y-3 text-sm text-gray-400">
					{#each links as link (link.url)}
						<li><a href={link.url} class="hover:text-white">{link.title}</a></li>
					{:else}
						<li><a href="/" class="hover:text-white">Pengumuman</a></li>
						<li><a href="/" class="hover:text-white">Beasiswa</a></li>
						<li><a href="/" class="hover:text-white">Karir</a></li>
					{/each}
				</ul>
			</div>

			<!-- Static Links / Secondary Info -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
					{m.footer_academic()}
				</h3>
				<ul class="space-y-3 text-sm text-gray-400">
					<li><a href="/pages/profil-kampus" class="hover:text-white">Profil Kampus</a></li>
					<li><a href="/pages/sejarah" class="hover:text-white">Sejarah</a></li>
					<li><a href="/pages/akademik" class="hover:text-white">Akademik</a></li>
					<li><a href="/pages/riset" class="hover:text-white">Riset & Inovasi</a></li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
					{m.footer_contact()}
				</h3>
				<ul class="space-y-3 text-sm text-gray-400">
					<li class="flex items-start gap-3">
						<MapPin class="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
						<span>{settings.address || 'Alamat Kampus'}</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-5 w-5 shrink-0 text-indigo-400" />
						<span>{settings.phone || '-'}</span>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="h-5 w-5 shrink-0 text-indigo-400" />
						<span>{settings.email || '-'}</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 border-t border-gray-800 pt-8 text-center">
			<p class="text-sm text-gray-400">
				&copy; {new Date().getFullYear()}
				{settings.app_name || m.brand_name()}.
				{m.footer_rights()}
			</p>
		</div>
	</div>
</footer>
