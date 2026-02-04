<script lang="ts">
	import { enhance } from '$app/forms';
	import { GraduationCap, Mail, Lock, LogIn } from 'lucide-svelte';
	import type { ActionData } from './$types';

	interface Props {
		form: ActionData;
	}

	let { form }: Props = $props();
	let isLoading = $state(false);
</script>

<div class="gradient-bg flex min-h-screen items-center justify-center p-4">
	<!-- Floating shapes for visual interest -->
	<div class="pointer-events-none absolute inset-0 overflow-hidden">
		<div
			class="animate-blob absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-300 opacity-30 mix-blend-multiply blur-xl"
		></div>
		<div
			class="animate-blob animation-delay-2000 absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-yellow-300 opacity-30 mix-blend-multiply blur-xl"
		></div>
		<div
			class="animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-300 opacity-30 mix-blend-multiply blur-xl"
		></div>
	</div>

	<!-- Login Card -->
	<div class="glass-card relative z-10 w-full max-w-md rounded-2xl p-8 shadow-2xl">
		<!-- Logo & Header -->
		<div class="mb-8 text-center">
			<div
				class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg"
			>
				<GraduationCap class="h-8 w-8 text-white" />
			</div>
			<h1 class="text-2xl font-bold text-gray-900">
				Campus<span
					class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
					>App</span
				>
			</h1>
			<p class="mt-2 text-sm text-gray-500">Welcome back! Please sign in to continue.</p>
		</div>

		<!-- Error Message -->
		{#if form?.error}
			<div
				class="mb-6 flex items-center rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
			>
				<svg class="mr-2 h-5 w-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
			class="space-y-5"
		>
			<!-- Email Input -->
			<div class="relative">
				<label for="email" class="mb-1.5 block text-sm font-medium text-gray-700"
					>Email Address</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Mail class="h-5 w-5 text-gray-400" />
					</div>
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
						required
						placeholder="you@university.edu"
						class="input-modern w-full rounded-xl py-3 pr-4 pl-10 text-gray-900 placeholder-gray-400 focus:outline-none"
					/>
				</div>
			</div>

			<!-- Password Input -->
			<div class="relative">
				<label for="password" class="mb-1.5 block text-sm font-medium text-gray-700">Password</label
				>
				<div class="relative">
					<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
						<Lock class="h-5 w-5 text-gray-400" />
					</div>
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						placeholder="••••••••"
						class="input-modern w-full rounded-xl py-3 pr-4 pl-10 text-gray-900 placeholder-gray-400 focus:outline-none"
					/>
				</div>
			</div>

			<!-- Submit Button -->
			<button
				type="submit"
				disabled={isLoading}
				class="btn-gradient flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
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
					Signing in...
				{:else}
					<LogIn class="mr-2 h-5 w-5" />
					Sign In
				{/if}
			</button>
		</form>

		<!-- Footer -->
		<div class="mt-8 text-center">
			<p class="text-xs text-gray-500">
				Powered by <span class="font-medium text-indigo-600">CampusApp</span> • Multi-Tenant LMS
			</p>
		</div>
	</div>
</div>

<style>
	@keyframes blob {
		0%,
		100% {
			transform: translate(0, 0) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
	}
	.animate-blob {
		animation: blob 7s infinite;
	}
	.animation-delay-2000 {
		animation-delay: 2s;
	}
	.animation-delay-4000 {
		animation-delay: 4s;
	}
</style>
