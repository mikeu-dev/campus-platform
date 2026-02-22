<script lang="ts">
	import { enhance } from '$app/forms';
	import { GraduationCap, Mail, Lock, LogIn, Sparkles } from 'lucide-svelte';
	import type { ActionData } from './$types';
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		form: ActionData;
	}

	let { form }: Props = $props();
	let isLoading = $state(false);
</script>

<div
	class="flex min-h-screen items-center justify-center bg-linear-to-br from-teal-500 via-emerald-500 to-sky-500 p-4"
>
	<!-- Background sparkles -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="absolute top-1/4 left-1/3 h-64 w-64 animate-pulse rounded-full bg-white/20 blur-3xl"
		></div>
		<div
			class="animation-delay-2000 absolute right-1/4 bottom-1/3 h-64 w-64 animate-pulse rounded-full bg-sky-200/20 blur-3xl"
		></div>
	</div>

	<!-- Login Card -->
	<div
		class="relative z-10 w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm lg:p-10"
	>
		<!-- Logo & Header -->
		<div class="mb-8 text-center">
			<div
				class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-500 to-emerald-600 text-white shadow-lg"
			>
				<GraduationCap class="h-9 w-9" />
			</div>
			<h1 class="text-3xl font-extrabold text-gray-900">
				Halo, <span class="text-emerald-600">Selamat Datang!</span>
			</h1>
			<p class="mt-2 text-sm font-medium text-gray-500">
				Silakan masuk ke akun SIAKAD Bapak/Ibu atau Akun Mahasiswa.
			</p>
		</div>

		<!-- Error Message -->
		{#if form?.error}
			<div
				class="mb-6 flex items-center rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
			>
				<svg class="mr-2 h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
				{form.error}
			</div>
		{/if}

		<!-- Login Form -->
		<form
			method="POST"
			use:enhance={() => {
				isLoading = true;
				return async ({ update }) => {
					await update();
					isLoading = false;
				};
			}}
			class="space-y-6"
		>
			<!-- Email Input -->
			<div class="space-y-2">
				<label for="email" class="pl-1 text-sm font-semibold text-gray-700"
					>{m.auth_email_label()}</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
						<Mail class="h-5 w-5 text-teal-500" />
					</div>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						placeholder="nama@email.com"
						class="w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 py-3.5 pr-4 pl-12 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
					/>
				</div>
			</div>

			<!-- Password Input -->
			<div class="space-y-2">
				<label for="password" class="pl-1 text-sm font-semibold text-gray-700"
					>{m.auth_password_label()}</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
						<Lock class="h-5 w-5 text-teal-500" />
					</div>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						placeholder="••••••••"
						class="w-full rounded-2xl border-2 border-gray-100 bg-gray-50/50 py-3.5 pr-4 pl-12 text-gray-900 placeholder-gray-400 transition-all outline-none focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
					/>
				</div>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isLoading}
				class="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-r from-teal-600 to-emerald-600 p-4 text-sm font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-emerald-500/25 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
			>
				{#if isLoading}
					<svg class="mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					Sedang Masuk...
				{:else}
					<LogIn class="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
					{m.auth_signin_button()}
				{/if}
			</button>
		</form>

		<!-- Footer -->
		<div class="mt-8 text-center">
			<p class="text-xs font-medium text-gray-400">
				Dikembangkan oleh <span class="text-teal-600">AMIK-YPAT PURWAKARTA</span>
			</p>
		</div>
	</div>
</div>

<style>
	.animation-delay-2000 {
		animation-delay: 2s;
	}
</style>
