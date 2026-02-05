<script lang="ts">
	import { BookOpen, Search, User, Clock, MapPin, ChevronRight, FileText } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$lib/paraglide/messages.js';
	import { cn } from '$lib/utils';

	let { data } = $props();
	let searchQuery = $state('');

	let filteredEnrollments = $derived(
		(data.enrollments || []).filter(
			(e: any) =>
				e.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				e.course_code.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);

	function formatTime(time: string) {
		if (!time) return '';
		return time.split(':').slice(0, 2).join(':');
	}
</script>

<svelte:head>
	<title>{m.classes_title()} | CampusApp</title>
</svelte:head>

<div class="space-y-8">
	<div class="flex flex-col gap-2">
		<h1 class="text-3xl font-bold tracking-tight">{m.classes_title()}</h1>
		<p class="text-muted-foreground">{m.classes_desc()}</p>
	</div>

	<div class="flex items-center space-x-2">
		<div class="relative w-full max-w-sm">
			<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
			<Input
				type="search"
				placeholder={m.classes_search_placeholder()}
				class="pl-8"
				bind:value={searchQuery}
			/>
		</div>
	</div>

	{#if filteredEnrollments.length === 0}
		<Card class="border-dashed">
			<CardContent class="flex flex-col items-center justify-center p-20 text-center">
				<div class="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
					<BookOpen class="h-10 w-10 text-muted-foreground/50" />
				</div>
				<h3 class="text-xl font-bold">{m.classes_no_data_title()}</h3>
				<p class="mx-auto mt-2 max-w-xs text-muted-foreground">
					{searchQuery ? m.classes_no_data_desc_search() : m.classes_no_data_desc_empty()}
				</p>
			</CardContent>
		</Card>
	{:else}
		<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
			{#each filteredEnrollments as item (item.class_id)}
				<Card
					class="group flex h-full flex-col overflow-hidden border-none shadow-md transition-all hover:shadow-xl"
				>
					<CardHeader class="pb-4">
						<div class="flex items-start justify-between gap-4">
							<div class="space-y-1">
								<Badge variant="outline" class="text-[10px] font-bold tracking-wider uppercase">
									{item.course_code}
								</Badge>
								<CardTitle class="line-clamp-2 text-xl transition-colors group-hover:text-primary">
									{item.course_name}
								</CardTitle>
							</div>
							<Badge class={cn(item.status === 'active' ? 'bg-green-500' : 'bg-secondary')}>
								{item.status}
							</Badge>
						</div>
					</CardHeader>

					<CardContent class="grow space-y-6">
						<!-- Metadata Grid -->
						<div class="grid grid-cols-2 gap-4 text-sm">
							<div class="flex items-center gap-2 text-muted-foreground">
								<User class="h-4 w-4 shrink-0 text-primary/60" />
								<span class="truncate font-medium text-foreground"
									>{item.lecturer_name || 'TBA'}</span
								>
							</div>
							<div class="flex items-center gap-2 text-muted-foreground">
								<Clock class="h-4 w-4 shrink-0 text-primary/60" />
								<span class="font-medium text-foreground"
									>{item.day || 'N/A'}, {formatTime(item.start_time)}</span
								>
							</div>
							<div class="flex items-center gap-2 text-muted-foreground">
								<MapPin class="h-4 w-4 shrink-0 text-primary/60" />
								<span class="truncate font-medium text-foreground">{item.room || 'TBA'}</span>
							</div>
							<div class="flex items-center gap-2 text-muted-foreground">
								<FileText class="h-4 w-4 shrink-0 text-primary/60" />
								<span class="font-medium text-foreground">{item.credits} SKS</span>
							</div>
						</div>

						<!-- Progress Section -->
						<div class="space-y-3">
							<div class="flex items-center justify-between text-xs">
								<span class="font-bold tracking-tight text-muted-foreground uppercase"
									>Progres Tugas</span
								>
								<span class="font-bold text-primary">
									{#if item.stats}
										{Math.round((item.stats.gradedCount / item.stats.totalSubmissions) * 100) || 0}%
									{:else}
										0%
									{/if}
								</span>
							</div>

							{#if item.stats && item.stats.totalSubmissions > 0}
								<div class="h-2 w-full overflow-hidden rounded-full bg-muted">
									<div
										class="h-full rounded-full bg-primary transition-all duration-500"
										style="width: {(item.stats.gradedCount / item.stats.totalSubmissions) * 100 ||
											0}%"
									></div>
								</div>
								<p class="text-[10px] text-muted-foreground italic">
									{item.stats.gradedCount} dari {item.stats.totalSubmissions} tugas selesai
								</p>
							{:else}
								<div
									class="flex items-center justify-center rounded-lg bg-muted/50 py-2 text-[10px] text-muted-foreground italic"
								>
									belum ada tugas yang diberikan
								</div>
							{/if}
						</div>
					</CardContent>

					<CardFooter class="pt-0 pb-6">
						<Button class="h-11 w-full gap-2 rounded-xl" href="/lms/classes/{item.class_id}">
							{m.classes_go_to_class()}
							<ChevronRight class="h-4 w-4" />
						</Button>
					</CardFooter>
				</Card>
			{/each}
		</div>
	{/if}
</div>
