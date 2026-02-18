<script lang="ts">
	import {
		MessageSquare,
		Search,
		Send,
		Plus,
		Check,
		CheckCheck,
		Phone,
		Video,
		Info
	} from 'lucide-svelte';
	import { tick } from 'svelte';
	import axios from 'axios';
	import { PUBLIC_LEARNING_API_URL } from '$env/static/public';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();
	let selectedUser: any = $state(null);
	let messages: any[] = $state([]);
	let newMessage = $state('');
	// svelte-ignore state_referenced_locally
	// eslint-disable-next-line svelte/prefer-writable-derived
	let conversations = $state(data.conversations);
	let messagesContainer: HTMLDivElement | undefined = $state();

	$effect(() => {
		conversations = data.conversations;
	});

	async function loadMessages(partnerId: string) {
		try {
			const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/messages/${partnerId}`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			messages = res.data.data;
			await tick();
			scrollToBottom();
		} catch (_error) {
			console.error('Failed to load messages');
		}
	}

	async function sendMessage() {
		if (!newMessage.trim() || !selectedUser) return;

		const content = newMessage;
		try {
			newMessage = '';
			const res = await axios.post(
				`${PUBLIC_LEARNING_API_URL}/messages`,
				{ receiver_id: selectedUser.partner_id, content },
				{ headers: { Authorization: `Bearer ${data.token}` } }
			);

			messages = [...messages, res.data.data];
			await tick();
			scrollToBottom();

			// Update local conversation list
			const convIndex = conversations.findIndex(
				(c: any) => c.partner_id === selectedUser.partner_id
			);
			if (convIndex !== -1) {
				conversations[convIndex].last_message = content;
				conversations[convIndex].created_at = new Date().toISOString();
				// Move to top
				const item = conversations.splice(convIndex, 1)[0];
				conversations.unshift(item);
			}
		} catch (_error) {
			console.error('Failed to send message');
			newMessage = content;
		}
	}

	function selectConversation(conv: any) {
		selectedUser = conv;
		loadMessages(conv.partner_id);
	}

	function scrollToBottom() {
		if (messagesContainer) {
			messagesContainer.scrollTo({
				top: messagesContainer.scrollHeight,
				behavior: 'smooth'
			});
		}
	}

	function getInitials(email: string) {
		return email?.split('@')[0]?.charAt(0).toUpperCase() || 'U';
	}

	function formatTime(date: string) {
		return new Date(date).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
	}

	function isNewDay(current: string, previous?: string) {
		if (!previous) return true;
		return new Date(current).toDateString() !== new Date(previous).toDateString();
	}

	function formatDateLabel(date: string) {
		const d = new Date(date);
		const today = new Date();
		if (d.toDateString() === today.toDateString()) return 'Hari Ini';
		return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
	}
</script>

<div
	class="flex h-[calc(100vh-6rem)] overflow-hidden rounded-xl border border-border bg-background shadow-lg"
>
	<!-- Sidebar: Conversations -->
	<div class="flex w-80 flex-col border-r border-border bg-muted/30">
		<div class="space-y-4 p-4">
			<div class="flex items-center justify-between">
				<h2 class="text-xl font-bold">{m.chat_title()}</h2>
				<Button variant="ghost" size="icon" class="rounded-full">
					<Plus class="h-5 w-5" />
				</Button>
			</div>
			<div class="relative">
				<Search class="absolute top-2.5 left-3 h-4 w-4 text-muted-foreground" />
				<Input placeholder={m.chat_search_placeholder()} class="bg-background pl-9" />
			</div>
		</div>

		<div class="flex-1 overflow-y-auto">
			{#if conversations.length === 0}
				<div class="p-8 text-center text-muted-foreground">
					<MessageSquare class="mx-auto mb-2 h-8 w-8 opacity-20" />
					<p class="text-sm">{m.chat_no_conversations()}</p>
				</div>
			{/if}
			{#each conversations as conv (conv.partner_id)}
				<button
					onclick={() => selectConversation(conv)}
					class={`flex w-full items-center gap-3 border-b border-border/50 p-4 text-left transition-colors hover:bg-muted/50 ${selectedUser?.partner_id === conv.partner_id ? 'bg-background shadow-sm ring-1 ring-primary/10 ring-inset' : ''}`}
				>
					<div class="relative">
						<div
							class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary"
						>
							{getInitials(conv.sender_email)}
						</div>
						{#if !conv.is_read && conv.sender_id !== (data.user as any).sub}
							<div
								class="absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary"
							></div>
						{/if}
					</div>
					<div class="min-w-0 flex-1">
						<div class="flex items-center justify-between">
							<p class="truncate text-sm font-semibold">{conv.sender_email?.split('@')[0]}</p>
							<span class="text-[10px] text-muted-foreground italic"
								>{formatTime(conv.created_at)}</span
							>
						</div>
						<p class="mt-0.5 truncate text-xs text-muted-foreground">{conv.last_message}</p>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Main Chat Area -->
	<div class="relative flex flex-1 flex-col bg-background">
		{#if selectedUser}
			<!-- Chat Header -->
			<div
				class="z-10 flex items-center justify-between border-b border-border bg-background/95 px-6 py-3 backdrop-blur-sm"
			>
				<div class="flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 font-bold text-primary"
					>
						{getInitials(selectedUser.sender_email)}
					</div>
					<div>
						<h3 class="text-sm font-semibold">{selectedUser.sender_email}</h3>
						<div class="flex items-center gap-1">
							<div class="h-1.5 w-1.5 rounded-full bg-green-500"></div>
							<span class="text-[10px] font-medium text-muted-foreground">Aktif Sekarang</span>
						</div>
					</div>
				</div>
				<div class="flex items-center gap-1">
					<Button variant="ghost" size="icon" class="rounded-full text-muted-foreground"
						><Phone class="h-4 w-4" /></Button
					>
					<Button variant="ghost" size="icon" class="rounded-full text-muted-foreground"
						><Video class="h-4 w-4" /></Button
					>
					<Button variant="ghost" size="icon" class="rounded-full text-muted-foreground"
						><Info class="h-4 w-4" /></Button
					>
				</div>
			</div>

			<!-- Messages -->
			<div
				bind:this={messagesContainer}
				class="flex-1 space-y-6 overflow-y-auto bg-linear-to-b from-muted/50 to-background p-6"
			>
				{#each messages as msg, i (msg.id || i)}
					{#if isNewDay(msg.created_at, messages[i - 1]?.created_at)}
						<div class="my-4 flex justify-center">
							<span
								class="rounded bg-muted px-2 py-1 text-[10px] font-bold tracking-wider text-muted-foreground uppercase"
							>
								{formatDateLabel(msg.created_at)}
							</span>
						</div>
					{/if}

					{#if msg.sender_id === (data.user as any)?.sub}
						<!-- Outgoing -->
						<div class="animate-in slide-in-from-right-2 flex justify-end duration-300">
							<div class="max-w-[70%] space-y-1">
								<div
									class="rounded-2xl rounded-tr-none bg-primary px-4 py-2.5 text-primary-foreground shadow-sm"
								>
									<p class="text-sm leading-relaxed">{msg.content}</p>
								</div>
								<div class="flex items-center justify-end gap-1.5 pr-1">
									<span class="text-[9px] font-medium text-muted-foreground"
										>{formatTime(msg.created_at)}</span
									>
									{#if msg.is_read}
										<CheckCheck class="h-3 w-3 text-blue-500" />
									{:else}
										<Check class="h-3 w-3 text-muted-foreground" />
									{/if}
								</div>
							</div>
						</div>
					{:else}
						<!-- Incoming -->
						<div class="animate-in slide-in-from-left-2 flex justify-start duration-300">
							<div class="max-w-[70%] space-y-1">
								<div
									class="rounded-2xl rounded-tl-none border border-border bg-background px-4 py-2.5 text-foreground shadow-sm"
								>
									<p class="text-sm leading-relaxed">{msg.content}</p>
								</div>
								<div class="flex items-center gap-1.5 pl-1">
									<span class="text-[9px] font-medium text-muted-foreground"
										>{formatTime(msg.created_at)}</span
									>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<!-- Input Area -->
			<div class="border-t border-border bg-background p-4">
				<form
					class="flex items-center gap-3 rounded-2xl bg-muted/50 p-1.5 pr-2 transition-all focus-within:ring-2 focus-within:ring-primary/20"
					onsubmit={(e) => {
						e.preventDefault();
						sendMessage();
					}}
				>
					<Button
						variant="ghost"
						size="icon"
						class="h-9 w-9 shrink-0 rounded-full text-muted-foreground"
						><Plus class="h-5 w-5" /></Button
					>
					<!-- svelte-ignore a11y_autofocus -->
					<input
						bind:value={newMessage}
						placeholder={m.chat_type_message()}
						class="flex-1 border-none bg-transparent py-2 text-sm placeholder:text-muted-foreground focus:ring-0"
						autofocus
					/>
					<Button
						type="submit"
						disabled={!newMessage.trim()}
						size="icon"
						class="h-9 w-9 shrink-0 rounded-xl shadow-lg"
					>
						<Send class="h-4 w-4" />
					</Button>
				</form>
			</div>
		{:else}
			<div class="flex flex-1 flex-col items-center justify-center bg-muted/5 p-12 text-center">
				<div class="relative mb-6 rounded-full bg-primary/5 p-10">
					<MessageSquare class="h-20 w-20 text-primary opacity-20" />
					<div class="absolute inset-0 animate-ping rounded-full bg-primary/5 opacity-20"></div>
				</div>
				<h3 class="text-2xl font-bold tracking-tight">{m.chat_select_conversation()}</h3>
				<p class="mx-auto mt-2 max-w-sm text-muted-foreground">
					{m.chat_select_conversation_desc()}
				</p>
				<div class="mt-8">
					<Button class="rounded-full px-8">Mulai Pesan Baru</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
