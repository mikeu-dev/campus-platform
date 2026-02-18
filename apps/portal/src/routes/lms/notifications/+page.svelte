<script lang="ts">
	import {
		Bell,
		CheckCircle2,
		Clock,
		ExternalLink,
		Info,
		AlertTriangle,
		MessageSquare,
		BookOpen,
		Trash2
	} from 'lucide-svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { enhance } from '$app/forms';

	let { data } = $props();
	const notifications = $derived(data.notifications);

	function getNotificationIcon(type: string) {
		switch (type) {
			case 'assignment':
				return { icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' };
			case 'grade':
				return { icon: CheckCircle2, color: 'text-green-500', bg: 'bg-green-50' };
			case 'chat':
				return { icon: MessageSquare, color: 'text-purple-500', bg: 'bg-purple-50' };
			case 'deadline':
				return { icon: AlertTriangle, color: 'text-orange-500', bg: 'bg-orange-50' };
			default:
				return { icon: Info, color: 'text-gray-500', bg: 'bg-gray-50' };
		}
	}
</script>

<div class="mx-auto max-w-4xl space-y-8 px-4">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Notifikasi</h2>
			<p class="text-muted-foreground">Pusat informasi dan pembaruan aktivitas Anda.</p>
		</div>
		<div class="flex gap-2">
			<Button variant="outline" size="sm">Tandai Semua Dibaca</Button>
		</div>
	</div>

	<div class="grid gap-4">
		{#each notifications || [] as notification (notification.id)}
			{@const iconData = getNotificationIcon(notification.type)}
			<Card
				class={`transition-all duration-200 ${notification.is_read ? 'opacity-70 grayscale-[0.2]' : 'border-l-4 border-l-primary shadow-sm'}`}
			>
				<CardContent class="flex gap-4 p-4">
					<div
						class={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconData.bg}`}
					>
						<iconData.icon class={`h-6 w-6 ${iconData.color}`} />
					</div>

					<div class="flex-1 space-y-1">
						<div class="flex items-start justify-between">
							<h3
								class={`font-semibold ${notification.is_read ? 'text-muted-foreground' : 'text-foreground'}`}
							>
								{notification.title}
							</h3>
							<span class="flex items-center gap-1 text-[10px] text-muted-foreground">
								<Clock class="h-3 w-3" />
								{new Date(notification.created_at).toLocaleString('id-ID', {
									hour: '2-digit',
									minute: '2-digit',
									day: 'numeric',
									month: 'short'
								})}
							</span>
						</div>

						<p class="text-sm leading-relaxed text-muted-foreground">
							{notification.message}
						</p>

						<div class="flex items-center justify-between pt-3">
							<div class="flex gap-2">
								{#if notification.link}
									<Button variant="outline" size="sm" class="h-7 gap-1" href={notification.link}>
										Lihat Detail
										<ExternalLink class="h-3 w-3" />
									</Button>
								{/if}
							</div>

							<div class="flex items-center gap-4">
								{#if !notification.is_read}
									<form action="?/markRead" method="POST" use:enhance>
										<input type="hidden" name="notificationId" value={notification.id} />
										<Button
											variant="ghost"
											size="sm"
											type="submit"
											class="h-7 text-primary hover:text-primary/80"
										>
											Tandai Dibaca
										</Button>
									</form>
								{:else}
									<span class="flex items-center gap-1 text-[10px] font-medium text-green-600">
										<CheckCircle2 class="h-3 w-3" />
										Sudah Dibaca
									</span>
								{/if}
								<Button
									variant="ghost"
									size="icon"
									class="h-7 w-7 text-muted-foreground hover:text-destructive"
								>
									<Trash2 class="h-3.5 w-3.5" />
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		{:else}
			<Card class="border-dashed">
				<CardContent class="flex flex-col items-center justify-center py-16 text-center">
					<div class="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4">
						<Bell class="h-8 w-8 text-muted-foreground/40" />
					</div>
					<h3 class="text-lg font-medium">Belum ada notifikasi</h3>
					<p class="text-sm text-muted-foreground max-w-sm mt-1">
						Kami akan memberi tahu Anda di sini jika ada pembaruan kelas, tugas, atau pesan baru.
					</p>
				</CardContent>
			</Card>
		{/each}
	</div>
</div>
