<script lang="ts">
	import { MessageSquare, User, Search, Send, Plus } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { PUBLIC_LEARNING_API_URL } from '$env/static/public';

	let { data } = $props();
	let selectedUser: any = $state(null);
	let messages: any[] = $state([]);
	let newMessage = $state('');
	let conversations = $state(data.conversations);
	let messagesContainer: HTMLDivElement;

	async function loadMessages(partnerId: string) {
		try {
			const res = await axios.get(`${PUBLIC_LEARNING_API_URL}/messages/${partnerId}`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			messages = res.data.data;
			scrollToBottom();
		} catch (error) {
			console.error('Failed to load messages');
		}
	}

	async function sendMessage() {
		if (!newMessage.trim() || !selectedUser) return;

		const content = newMessage;
		try {
			newMessage = ''; // Optimistic update

			const res = await axios.post(
				`${PUBLIC_LEARNING_API_URL}/messages`,
				{ receiver_id: selectedUser.partner_id, content },
				{ headers: { Authorization: `Bearer ${data.token}` } }
			);

			messages = [...messages, res.data.data];
			scrollToBottom();

			// Update conversation list logic would be here (move to top)
		} catch (error) {
			console.error('Failed to send message');
			newMessage = content; // Revert on failure
		}
	}

	function selectConversation(conv: any) {
		selectedUser = conv;
		loadMessages(conv.partner_id);
	}

	function scrollToBottom() {
		setTimeout(() => {
			if (messagesContainer) {
				messagesContainer.scrollTop = messagesContainer.scrollHeight;
			}
		}, 0);
	}

	function getInitials(email: string) {
		return email?.split('@')[0]?.charAt(0).toUpperCase() || 'U';
	}
</script>

<div
	class="flex h-[calc(100vh-8rem)] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
>
	<!-- Sidebar: Conversations -->
	<div class="flex w-80 flex-col border-r border-gray-200 bg-gray-50">
		<div class="border-b border-gray-200 p-4">
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-lg font-bold text-gray-900">Messages</h2>
				<button class="rounded-full bg-indigo-100 p-2 text-indigo-600 hover:bg-indigo-200">
					<Plus class="h-4 w-4" />
				</button>
			</div>
			<div class="relative">
				<Search class="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
				<input
					type="text"
					placeholder="Search..."
					class="w-full rounded-lg border border-gray-200 bg-white py-2 pr-4 pl-9 text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
				/>
			</div>
		</div>

		<div class="flex-1 overflow-y-auto">
			{#if conversations.length === 0}
				<div class="p-8 text-center text-gray-500">
					<MessageSquare class="mx-auto mb-2 h-8 w-8 text-gray-300" />
					<p class="text-sm">No conversations yet</p>
				</div>
			{/if}
			{#each conversations as conv}
				<button
					onclick={() => selectConversation(conv)}
					class="flex w-full items-center gap-3 border-b border-gray-100 p-4 text-left hover:bg-gray-100 {selectedUser?.partner_id ===
					conv.partner_id
						? 'bg-white shadow-sm'
						: ''}"
				>
					<div class="relative">
						<div
							class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-sm font-medium text-indigo-600"
						>
							{getInitials(conv.sender_email)}
						</div>
						<!-- Online status dot could go here -->
					</div>
					<div class="min-w-0 flex-1">
						<div class="flex items-center justify-between">
							<p class="truncate text-sm font-medium text-gray-900">{conv.sender_email}</p>
							<span class="text-xs text-gray-400">12:30</span>
						</div>
						<p class="truncate text-xs text-gray-500">{conv.last_message}</p>
					</div>
				</button>
			{/each}
		</div>
	</div>

	<!-- Main Chat Area -->
	<div class="flex flex-1 flex-col bg-white">
		{#if selectedUser}
			<!-- Chat Header -->
			<div class="border-b border-gray-200 px-6 py-4">
				<div class="flex items-center gap-3">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-medium text-gray-600"
					>
						{getInitials(selectedUser.sender_email)}
					</div>
					<div>
						<h3 class="font-medium text-gray-900">{selectedUser.sender_email}</h3>
						<p class="text-xs text-green-600">Online</p>
					</div>
				</div>
			</div>

			<!-- Messages -->
			<div bind:this={messagesContainer} class="flex-1 space-y-4 overflow-y-auto bg-gray-50 p-6">
				{#each messages as msg}
					{#if msg.sender_id === (data.user as any)?.sub}
						<!-- Outgoing -->
						<div class="flex justify-end">
							<div
								class="max-w-[70%] rounded-2xl rounded-tr-none bg-indigo-600 px-4 py-2 text-white shadow-sm"
							>
								<p class="text-sm">{msg.content}</p>
								<p class="mt-1 text-right text-[10px] text-indigo-200 opacity-70">10:30 AM</p>
							</div>
						</div>
					{:else}
						<!-- Incoming -->
						<div class="flex justify-start">
							<div
								class="max-w-[70%] rounded-2xl rounded-tl-none bg-white px-4 py-2 text-gray-900 shadow-sm"
							>
								<p class="text-sm">{msg.content}</p>
								<p class="mt-1 text-right text-[10px] text-gray-400">10:32 AM</p>
							</div>
						</div>
					{/if}
				{/each}
			</div>

			<!-- Input Area -->
			<div class="border-t border-gray-200 p-4">
				<form
					class="flex items-center gap-2"
					onsubmit={(e) => {
						e.preventDefault();
						sendMessage();
					}}
				>
					<button
						type="button"
						class="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
					>
						<Plus class="h-5 w-5" />
					</button>
					<input
						type="text"
						bind:value={newMessage}
						placeholder="Type a message..."
						class="flex-1 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm focus:border-indigo-500 focus:bg-white focus:ring-1 focus:ring-indigo-500 focus:outline-none"
					/>
					<button
						type="submit"
						disabled={!newMessage.trim()}
						class="rounded-full bg-indigo-600 p-2 text-white transition-colors hover:bg-indigo-700 disabled:bg-gray-300"
					>
						<Send class="h-4 w-4" />
					</button>
				</form>
			</div>
		{:else}
			<div class="flex flex-1 flex-col items-center justify-center text-gray-400">
				<div class="mb-4 rounded-full bg-gray-50 p-6">
					<MessageSquare class="h-12 w-12 text-gray-300" />
				</div>
				<p class="text-lg font-medium text-gray-900">Select a conversation</p>
				<p class="text-sm">Choose a chat from the sidebar to start messaging</p>
			</div>
		{/if}
	</div>
</div>
