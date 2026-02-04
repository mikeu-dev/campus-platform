<script lang="ts">
	import { Calendar as CalendarIcon, Clock, CheckCircle, AlertCircle } from 'lucide-svelte';
	let { data } = $props();

	function getDaysUntil(deadline: string): number {
		const now = new Date();
		const due = new Date(deadline);
		const diffTime = due.getTime() - now.getTime();
		return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	}

	function getUrgencyClass(deadline: string): string {
		const days = getDaysUntil(deadline);
		if (days <= 1) return 'border-l-red-500 bg-red-50';
		if (days <= 3) return 'border-l-orange-500 bg-orange-50';
		if (days <= 7) return 'border-l-yellow-500 bg-yellow-50';
		return 'border-l-green-500 bg-green-50';
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

	const groupedDeadlines = groupByDate(data.deadlines);
</script>

<div class="space-y-8">
	<!-- Header -->
	<div>
		<h2 class="text-2xl font-bold text-gray-900">Calendar</h2>
		<p class="mt-1 text-gray-500">Upcoming assignment deadlines</p>
	</div>

	<!-- Legend -->
	<div class="flex flex-wrap gap-4 text-sm">
		<div class="flex items-center gap-2">
			<div class="h-3 w-3 rounded-full bg-red-500"></div>
			<span class="text-gray-600">Due Today</span>
		</div>
		<div class="flex items-center gap-2">
			<div class="h-3 w-3 rounded-full bg-orange-500"></div>
			<span class="text-gray-600">1-3 Days</span>
		</div>
		<div class="flex items-center gap-2">
			<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
			<span class="text-gray-600">This Week</span>
		</div>
		<div class="flex items-center gap-2">
			<div class="h-3 w-3 rounded-full bg-green-500"></div>
			<span class="text-gray-600">Later</span>
		</div>
	</div>

	<!-- Deadlines List -->
	{#if Object.keys(groupedDeadlines).length === 0}
		<div class="rounded-xl border border-gray-200 bg-white p-12 text-center">
			<CalendarIcon class="mx-auto h-12 w-12 text-gray-300" />
			<p class="mt-4 text-lg font-medium text-gray-900">No upcoming deadlines</p>
			<p class="mt-1 text-gray-500">You're all caught up! Enjoy your free time.</p>
		</div>
	{:else}
		<div class="space-y-6">
			{#each Object.entries(groupedDeadlines) as [date, items]}
				<div>
					<h3 class="mb-3 text-sm font-semibold tracking-wider text-gray-500 uppercase">{date}</h3>
					<div class="space-y-3">
						{#each items as item (item.id)}
							<div
								class="flex items-start gap-4 rounded-lg border-l-4 bg-white p-4 shadow-sm transition-all hover:shadow-md {getUrgencyClass(
									item.deadline
								)}"
							>
								<div class="shrink-0 pt-1">
									{#if item.is_submitted}
										<CheckCircle class="h-5 w-5 text-green-600" />
									{:else}
										<AlertCircle class="h-5 w-5 text-gray-400" />
									{/if}
								</div>
								<div class="min-w-0 flex-1">
									<div class="flex items-start justify-between gap-4">
										<div>
											<p class="font-medium text-gray-900">{item.title}</p>
											{#if item.description}
												<p class="mt-1 line-clamp-2 text-sm text-gray-500">{item.description}</p>
											{/if}
										</div>
										<div class="shrink-0 text-right">
											<div class="flex items-center gap-1 text-sm text-gray-500">
												<Clock class="h-4 w-4" />
												<span>{formatDate(item.deadline)}</span>
											</div>
											{#if getDaysUntil(item.deadline) <= 1}
												<span
													class="mt-1 inline-block rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700"
												>
													{getDaysUntil(item.deadline) === 0 ? 'Due Today!' : 'Tomorrow'}
												</span>
											{:else}
												<span class="mt-1 text-xs text-gray-400">
													{getDaysUntil(item.deadline)} days left
												</span>
											{/if}
										</div>
									</div>
									{#if item.is_submitted}
										<span
											class="mt-2 inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700"
										>
											<CheckCircle class="h-3 w-3" /> Submitted
										</span>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
