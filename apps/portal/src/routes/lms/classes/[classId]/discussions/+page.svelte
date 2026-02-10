<script lang="ts">
	import { enhance } from '$app/forms';
	import { MessageCircle, Send, ArrowLeft } from 'lucide-svelte';
	import type { ActionData, PageData } from './$types';
	import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarFallback, AvatarImage } from '$lib/components/ui/avatar';

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

	const textareaClass =
		'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y';
</script>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex items-center gap-4">
		<Button variant="ghost" size="icon" href="/lms/classes/{data.classId}" class="rounded-full">
			<ArrowLeft class="h-5 w-5" />
		</Button>
		<div>
			<h2 class="text-2xl font-bold tracking-tight">Class Discussion</h2>
			<p class="text-muted-foreground">Share questions and ideas with your classmates</p>
		</div>
	</div>

	<!-- Post Form -->
	<Card>
		<CardContent class="p-6">
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
					<div class="mb-4 rounded-md bg-destructive/15 p-3 text-sm font-medium text-destructive">
						{form.error}
					</div>
				{/if}
				<div class="flex gap-4">
					<Avatar>
						<AvatarFallback>Me</AvatarFallback>
					</Avatar>

					<div class="flex-1 space-y-4">
						<textarea
							name="content"
							bind:value={content}
							rows="3"
							placeholder="What's on your mind? Ask a question or share an idea..."
							class={textareaClass}
						></textarea>
						<div class="flex justify-end">
							<Button type="submit" disabled={isSubmitting || content.trim().length === 0}>
								<Send class="mr-2 h-4 w-4" /> Post
							</Button>
						</div>
					</div>
				</div>
			</form>
		</CardContent>
	</Card>

	<!-- Discussion Feed -->
	<div class="space-y-4">
		{#if data.discussions.length === 0}
			<Card class="border-dashed">
				<CardContent class="flex flex-col items-center justify-center p-12 text-center">
					<div class="mb-4 rounded-full bg-muted p-4">
						<MessageCircle class="h-8 w-8 text-muted-foreground" />
					</div>
					<h3 class="text-lg font-semibold">No discussions yet</h3>
					<p class="text-muted-foreground">Be the first to start a conversation!</p>
				</CardContent>
			</Card>
		{:else}
			{#each data.discussions as post (post.id)}
				<Card>
					<CardContent class="p-6">
						<div class="flex gap-4">
							<Avatar>
								<AvatarFallback class="bg-primary/10 text-primary">
									{getInitials(post.user_email)}
								</AvatarFallback>
							</Avatar>
							<div class="flex-1 space-y-1">
								<div class="flex items-center justify-between">
									<p class="leading-none font-medium">{post.user_email?.split('@')[0]}</p>
									<span class="text-xs text-muted-foreground">{timeAgo(post.created_at)}</span>
								</div>
								<p class="text-sm leading-relaxed whitespace-pre-wrap text-foreground/90">
									{post.content}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		{/if}
	</div>
</div>
