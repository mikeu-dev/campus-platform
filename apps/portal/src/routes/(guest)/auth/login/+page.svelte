<script lang="ts">
	import { enhance } from '$app/forms';
	import { GraduationCap, Mail, Lock, LogIn, ShieldCheck, Settings } from 'lucide-svelte';
	import type { ActionData } from './$types';
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		form: ActionData;
	}

	let { form }: Props = $props();
	let isLoading = $state(false);
</script>

<div class="flex min-h-screen items-center justify-center bg-slate-950 p-4">
	<!-- Subtle professional background effect -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
		<div class="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
		<div
			class="absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-slate-500/10 blur-3xl"
		></div>
	</div>

	<!-- Login Card -->
	<div
		class="shadow-3xl relative z-10 w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-10 shadow-indigo-500/10"
	>
		<!-- Logo & Header -->
		<div class="mb-10 text-center">
			<div
				class="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-indigo-700 shadow-xl ring-4 ring-slate-800"
			>
				<ShieldCheck class="h-10 w-10 text-white" />
			</div>
			<div class="space-y-1">
				<h1 class="text-3xl font-extrabold tracking-tight text-white">
					Panel <span class="text-indigo-400">Pengelola</span>
				</h1>
				<p class="text-sm font-medium text-slate-400">AMIK-YPAT PURWAKARTA</p>
			</div>
			<div class="mt-4 flex justify-center">
				<span
					class="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold tracking-widest text-indigo-400 uppercase ring-1 ring-indigo-500/50"
				>
					<Settings class="h-3 w-3" />
					Administrative Access
				</span>
			</div>
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
				<label for="email" class="text-xs font-bold tracking-wider text-slate-400 uppercase"
					>{m.auth_email_label()}</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
						<Mail class="h-5 w-5 text-slate-500" />
					</div>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						placeholder="admin@ypat.ac.id"
						class="w-full rounded-xl border-2 border-slate-800 bg-slate-950/50 py-3.5 pr-4 pl-11 text-white placeholder-slate-600 transition-all outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
					/>
				</div>
			</div>

			<!-- Password Input -->
			<div class="space-y-2">
				<label for="password" class="text-xs font-bold tracking-wider text-slate-400 uppercase"
					>{m.auth_password_label()}</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
						<Lock class="h-5 w-5 text-slate-500" />
					</div>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						placeholder="••••••••"
						class="w-full rounded-xl border-2 border-slate-800 bg-slate-950/50 py-3.5 pr-4 pl-11 text-white placeholder-slate-600 transition-all outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
					/>
				</div>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isLoading}
				class="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-indigo-500 hover:shadow-indigo-500/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
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
					{m.auth_signing_in()}
				{:else}
					<LogIn class="mr-2 h-5 w-5" />
					{m.auth_signin_button()}
				{/if}
			</button>
		</form>

		<!-- Footer -->
		<div class="mt-10 border-t border-slate-800 pt-6 text-center">
			<p class="text-[10px] font-medium tracking-widest text-slate-500 uppercase">
				&copy; 2026 AMIK-YPAT • Secure Administration Portal
			</p>
		</div>
	</div>
</div>
