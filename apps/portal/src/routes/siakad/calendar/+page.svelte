<script lang="ts">
	import { Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	let { data } = $props();

	function getDaysUntil(deadline: string): number {
		const now = new Date();
		const due = new Date(deadline);
		const diffTime = due.getTime() - now.getTime();
		return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	}

	function getUrgencyVariant(
		deadline: string
	): 'default' | 'secondary' | 'destructive' | 'outline' {
		const days = getDaysUntil(deadline);
		if (days <= 1) return 'destructive';
		if (days <= 3) return 'default'; // Orange-ish usually? default is primary color.
		return 'secondary';
	}

	function getUrgencyColorClass(deadline: string): string {
		const days = getDaysUntil(deadline);
		if (days <= 1) return 'bg-red-100 text-red-700 hover:bg-red-100/80';
		if (days <= 3) return 'bg-orange-100 text-orange-700 hover:bg-orange-100/80';
		if (days <= 7) return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100/80';
		return 'bg-green-100 text-green-700 hover:bg-green-100/80';
	}

	function formatDate(dateStr: string): string {
		return new Date(dateStr).toLocaleDateString('id-ID', {
			weekday: 'short',
			day: 'numeric',
			month: 'short',
			hour: '2-digit',
			minute: '2-digit'
		});
	}

	// Group deadlines by date
	function groupByDate(deadlines: any[]) {
		const grouped: { [key: string]: any[] } = {};
		deadlines.forEach((d) => {
			const date = new Date(d.deadline).toLocaleDateString('id-ID', {
				weekday: 'long',
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			});
			if (!grouped[date]) grouped[date] = [];
			grouped[date].push(d);
		});
		return grouped;
	}

	let groupedDeadlines = $derived(groupByDate(data.deadlines));
</script>

<div class="space-y-6">
	<!-- Header -->
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Calendar</h2>
			<p class="text-muted-foreground">Upcoming assignment deadlines.</p>
		</div>
	</div>

	<!-- Legend -->
	<div class="flex flex-wrap gap-4 text-sm">
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full bg-red-500"></span>
			<span class="text-muted-foreground">Due Today</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full bg-orange-500"></span>
			<span class="text-muted-foreground">1-3 Days</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full bg-yellow-500"></span>
			<span class="text-muted-foreground">This Week</span>
		</div>
		<div class="flex items-center gap-2">
			<span class="h-3 w-3 rounded-full bg-green-500"></span>
			<span class="text-muted-foreground">Later</span>
		</div>
	</div>

	<Separator />

	<!-- Deadlines List -->
	{#if Object.keys(groupedDeadlines).length === 0}
		<Card>
			<CardContent class="flex flex-col items-center justify-center p-12 text-center">
				<CalendarIcon class="h-12 w-12 text-muted-foreground/50" />
				<h3 class="mt-4 text-lg font-semibold">No upcoming deadlines</h3>
				<p class="text-muted-foreground">You're all caught up! Enjoy your free time.</p>
			</CardContent>
		</Card>
	{:else}
		<div class="space-y-6">
			{#each Object.entries(groupedDeadlines) as [date, items]}
				<div>
					<h3 class="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
						{date}
					</h3>
					<div class="grid gap-4">
						{#each items as item (item.id)}
							<Card class="transition-shadow hover:shadow-md">
								<CardContent class="flex items-start gap-4 p-4">
									<div class="shrink-0 pt-1">
										{#if item.is_submitted}
											<CheckCircle class="h-5 w-5 text-green-600" />
										{:else}
											<AlertCircle class="h-5 w-5 text-muted-foreground" />
										{/if}
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-start justify-between gap-4">
											<div>
												<p class="font-medium">{item.title}</p>
												{#if item.description}
													<p class="mt-1 line-clamp-2 text-sm text-muted-foreground">
														{item.description}
													</p>
												{/if}
											</div>
											<div class="shrink-0 text-right">
												<div
													class="flex items-center justify-end gap-1 text-sm text-muted-foreground"
												>
													<Clock class="h-3.5 w-3.5" />
													<span>{formatDate(item.deadline)}</span>
												</div>
												<div class="mt-2 text-right">
													<Badge class={getUrgencyColorClass(item.deadline)} variant="outline">
														{getDaysUntil(item.deadline) <= 1
															? getDaysUntil(item.deadline) === 0
																? 'Due Today!'
																: 'Tomorrow'
															: `${getDaysUntil(item.deadline)} days left`}
													</Badge>
												</div>
											</div>
										</div>
										{#if item.is_submitted}
											<div class="mt-2">
												<Badge
													variant="secondary"
													class="bg-green-100 text-green-700 hover:bg-green-100/80"
												>
													<CheckCircle class="mr-1 h-3 w-3" /> Submitted
												</Badge>
											</div>
										{/if}
									</div>
								</CardContent>
							</Card>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
