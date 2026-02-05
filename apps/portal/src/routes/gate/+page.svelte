<script lang="ts">
	import { GraduationCap, BookOpen, LogOut, User } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as m from '$lib/paraglide/messages.js';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div
	class="relative flex min-h-screen flex-col items-center justify-center overflow-hidden p-4 md:p-8"
>
	<!-- Background Image -->
	<div
		class="absolute inset-0 z-0 scale-110 bg-cover bg-center bg-no-repeat blur-sm"
		style="background-image: url('/gate-bg.png');"
	>
		<div class="absolute inset-0 bg-black/30 mix-blend-overlay"></div>
	</div>

	<!-- Content Wrapper -->
	<div class="relative z-10 flex w-full max-w-5xl flex-col items-center">
		<!-- Header -->
		<div class="mb-12 text-center text-white drop-shadow-md">
			<h1 class="mb-2 text-4xl font-extrabold tracking-tight md:text-5xl">
				Sistem Informasi Akademik
			</h1>
			<h2 class="text-2xl font-light tracking-widest uppercase opacity-90">{m.brand_name()}</h2>
		</div>

		<!-- Main Card Container -->
		<div
			class="glass-card w-full overflow-hidden rounded-3xl border border-white/20 bg-white/90 shadow-2xl backdrop-blur-md"
		>
			<div
				class="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-3 md:divide-x md:divide-y-0"
			>
				<!-- SIAKAD Section -->
				<a
					href="/siakad/enrollment"
					class="group relative flex flex-col items-center justify-center p-12 transition-all hover:bg-indigo-50/50"
				>
					<div
						class="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-indigo-100/80 text-indigo-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-indigo-300/50"
					>
						<GraduationCap class="h-10 w-10" />
					</div>
					<h3 class="mb-2 text-2xl font-bold text-gray-800 group-hover:text-indigo-700">SIAKAD</h3>
					<p class="text-center text-sm font-medium text-gray-500 group-hover:text-gray-600">
						Kartu Rencana Studi<br />& Transkrip Nilai
					</p>
				</a>

				<!-- LMS Section -->
				<a
					href="/lms"
					class="group relative flex flex-col items-center justify-center p-12 transition-all hover:bg-purple-50/50"
				>
					<div
						class="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-purple-100/80 text-purple-600 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-purple-300/50"
					>
						<BookOpen class="h-10 w-10" />
					</div>
					<h3 class="mb-2 text-2xl font-bold text-gray-800 group-hover:text-purple-700">LMS</h3>
					<p class="text-center text-sm font-medium text-gray-500 group-hover:text-gray-600">
						Learning Management<br />System
					</p>
				</a>

				<!-- Profile / Actions Section -->
				<div class="flex flex-col items-center justify-center bg-gray-50/80 p-12">
					<div
						class="mb-6 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-white shadow-xl"
					>
						<User class="h-10 w-10 text-gray-600" />
					</div>

					<div class="mb-8 w-full text-center">
						<p class="mb-1 text-xs font-bold tracking-wider text-gray-400 uppercase">
							Logged in as
						</p>
						<p class="text-xl font-bold text-gray-900 capitalize">
							{data.user?.roles?.[0] || 'User'}
						</p>
					</div>

					<form action="/logout" method="POST" class="w-full">
						<Button
							type="submit"
							variant="outline"
							class="w-full gap-2 rounded-xl border-gray-300 py-6 text-gray-600 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-600"
						>
							<LogOut class="h-5 w-5" />
							Sign Out
						</Button>
					</form>
				</div>
			</div>
		</div>

		<!-- Footer Copyright -->
		<div class="mt-8 text-center text-xs text-white/60">
			&copy; 2026 {m.brand_name()}. All rights reserved.
		</div>
	</div>
</div>
