<script lang="ts">
	import { Bell, Check, ExternalLink } from 'lucide-svelte';
	import { onMount } from 'svelte';

	interface Notification {
		id: string;
		type: string;
		title: string;
		message?: string;
		link?: string;
		is_read: boolean;
		created_at: string;
	}

	let { token = '' }: { token: string } = $props();

	let isOpen = $state(false);
	let notifications = $state<Notification[]>([]);
	let unreadCount = $state(0);
	let loading = $state(false);

	const LEARNING_API =
		import.meta.env.VITE_PUBLIC_LEARNING_API_URL || 'http://localhost:3003/api/v1';

	async function fetchNotifications() {
		if (!token) return;
		loading = true;
		try {
			const res = await fetch(`${LEARNING_API}/notifications`, {
				headers: { Authorization: `Bearer ${token}` }
			});
			const json = await res.json();
			notifications = json.data || [];
			unreadCount = notifications.filter((n) => !n.is_read).length;
		} catch (e) {
			console.error('Failed to fetch notifications', e);
		} finally {
			loading = false;
		}
	}

	async function markAsRead(id: string) {
		try {
			await fetch(`${LEARNING_API}/notifications/${id}/read`, {
				method: 'PATCH',
				headers: { Authorization: `Bearer ${token}` }
			});
			notifications = notifications.map((n) => (n.id === id ? { ...n, is_read: true } : n));
			unreadCount = notifications.filter((n) => !n.is_read).length;
		} catch (e) {
			console.error('Failed to mark notification as read', e);
		}
	}

	function getTypeColor(type: string) {
		switch (type) {
			case 'assignment':
				return 'bg-blue-100 text-blue-600';
			case 'grade':
				return 'bg-green-100 text-green-600';
			case 'announcement':
				return 'bg-purple-100 text-purple-600';
			default:
				return 'bg-gray-100 text-gray-600';
		}
	}

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

	onMount(() => {
		fetchNotifications();
	});
</script>

<div class="relative">
	<button
		onclick={() => (isOpen = !isOpen)}
		class="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
	>
		<Bell class="h-6 w-6" />
		{#if unreadCount > 0}
			<span
				class="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white"
			>
				{unreadCount > 9 ? '9+' : unreadCount}
			</span>
		{/if}
	</button>

	{#if isOpen}
		<!-- Backdrop -->
		<button
			class="fixed inset-0 z-40 cursor-default bg-transparent"
			onclick={() => (isOpen = false)}
			aria-label="Close notifications"
		></button>

		<!-- Dropdown -->
		<div
			class="absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-xl border border-gray-200 bg-white shadow-lg"
		>
			<div class="flex items-center justify-between border-b border-gray-100 px-4 py-3">
				<h3 class="text-sm font-semibold text-gray-900">Notifications</h3>
				{#if unreadCount > 0}
					<span class="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-600">
						{unreadCount} new
					</span>
				{/if}
			</div>

			<div class="max-h-80 overflow-y-auto">
				{#if loading}
					<div class="p-4 text-center text-gray-500">Loading...</div>
				{:else if notifications.length === 0}
					<div class="p-6 text-center">
						<Bell class="mx-auto h-8 w-8 text-gray-300" />
						<p class="mt-2 text-sm text-gray-500">No notifications yet</p>
					</div>
				{:else}
					{#each notifications as notif (notif.id)}
						<div
							class="flex items-start gap-3 border-b border-gray-50 px-4 py-3 transition-colors hover:bg-gray-50 {!notif.is_read
								? 'bg-indigo-50/50'
								: ''}"
						>
							<div class={`mt-0.5 rounded-full p-1.5 ${getTypeColor(notif.type)}`}>
								<Bell class="h-4 w-4" />
							</div>
							<div class="min-w-0 flex-1">
								<p class="text-sm font-medium text-gray-900">{notif.title}</p>
								{#if notif.message}
									<p class="mt-0.5 line-clamp-2 text-xs text-gray-500">{notif.message}</p>
								{/if}
								<p class="mt-1 text-xs text-gray-400">{timeAgo(notif.created_at)}</p>
							</div>
							<div class="flex shrink-0 items-center gap-1">
								{#if notif.link}
									<a
										href={notif.link}
										class="rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
										onclick={() => markAsRead(notif.id)}
									>
										<ExternalLink class="h-4 w-4" />
									</a>
								{/if}
								{#if !notif.is_read}
									<button
										onclick={() => markAsRead(notif.id)}
										class="rounded p-1 text-gray-400 hover:bg-green-100 hover:text-green-600"
									>
										<Check class="h-4 w-4" />
									</button>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>

			{#if notifications.length > 0}
				<div class="border-t border-gray-100 px-4 py-2">
					<a
						href="/dashboard/notifications"
						class="block text-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
					>
						View all notifications
					</a>
				</div>
			{/if}
		</div>
	{/if}
</div>
