<script lang="ts">
	import { enhance } from '$app/forms';
	import { MessageCircle, Send, User, ArrowLeft } from 'lucide-svelte';
	import type { ActionData, PageData } from './$types';

	interface Props {
		data: PageData;
		form: ActionData;
	}

	let { data, form }: Props = $props();
	let content = $state('');
	let isSubmitting = $state(false);

	function timeAgo(dateString: string) {
		const date = new Date(dateString);
		const now = new Date();
		const diffMs = now.getTime() - date.getTime();
		const diffMins = Math.floor(diffMs / 60000);
		if (diffMins < 1) return 'Just now';
		if (diffMins < 60) return `${diffMins}m ago`;
		const diffHours = Math.floor(diffMins / 60);
		if (diffHours < 24) return `${diffHours}h ago`;
		const diffDays = Math.floor(diffHours / 24);
		return `${diffDays}d ago`;
	}

	function getInitials(email: string) {
		return email?.split('@')[0]?.charAt(0).toUpperCase() || 'U';
	}
</script>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex items-center gap-4">
		<a href="/lms/classes/{data.classId}" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100">
			<ArrowLeft class="h-5 w-5" />
		</a>
		<div>
			<h2 class="text-2xl font-bold text-gray-900">Class Discussion</h2>
			<p class="text-gray-500">Share questions and ideas with your classmates</p>
		</div>
	</div>

	<!-- Post Form -->
	<div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
		<form
			method="POST"
			action="?/post"
			use:enhance={() => {
				isSubmitting = true;
				return async ({ update }) => {
					await update();
					isSubmitting = false;
					content = '';
				};
			}}
		>
			{#if form?.error}
				<div class="mb-3 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">{form.error}</div>
			{/if}
			<div class="flex gap-3">
				<div class="shrink-0">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600"
					>
						U
					</div>
				</div>
				<div class="min-w-0 flex-1">
					<textarea
						name="content"
						bind:value={content}
						rows="3"
						placeholder="What's on your mind? Ask a question or share an idea..."
						class="w-full resize-none rounded-lg border border-gray-200 p-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
					></textarea>
					<div class="mt-2 flex justify-end">
						<button
							type="submit"
							disabled={isSubmitting || content.trim().length === 0}
							class="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<Send class="h-4 w-4" />
							Post
						</button>
					</div>
				</div>
			</div>
		</form>
	</div>

	<!-- Discussion Feed -->
	<div class="space-y-4">
		{#if data.discussions.length === 0}
			<div class="rounded-xl border border-gray-200 bg-white p-12 text-center">
				<MessageCircle class="mx-auto h-12 w-12 text-gray-300" />
				<p class="mt-4 text-lg font-medium text-gray-900">No discussions yet</p>
				<p class="mt-1 text-gray-500">Be the first to start a conversation!</p>
			</div>
		{:else}
			{#each data.discussions as post (post.id)}
				<div class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
					<div class="flex gap-3">
						<div class="shrink-0">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600"
							>
								{getInitials(post.user_email)}
							</div>
						</div>
						<div class="min-w-0 flex-1">
							<div class="flex items-center gap-2">
								<p class="font-medium text-gray-900">{post.user_email?.split('@')[0]}</p>
								<span class="text-xs text-gray-400">{timeAgo(post.created_at)}</span>
							</div>
							<p class="mt-2 whitespace-pre-wrap text-gray-700">{post.content}</p>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
