<script lang="ts">
	import { BookOpen, Search } from 'lucide-svelte';
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

	let { data } = $props();
	let searchQuery = $state('');

	let filteredEnrollments = $derived(
		data.enrollments.filter(
			(e: any) =>
				e.course_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				e.course_code.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.classes_title()}</h2>
			<p class="text-muted-foreground">{m.classes_desc()}</p>
		</div>
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
		<Card>
			<CardContent class="flex flex-col items-center justify-center p-12 text-center">
				<BookOpen class="h-12 w-12 text-muted-foreground/50" />
				<h3 class="mt-4 text-lg font-semibold">{m.classes_no_data_title()}</h3>
				<p class="text-muted-foreground">
					{searchQuery ? m.classes_no_data_desc_search() : m.classes_no_data_desc_empty()}
				</p>
			</CardContent>
		</Card>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredEnrollments as item (item.class_id)}
				<Card class="flex flex-col transition-all hover:shadow-lg">
					<CardHeader>
						<div class="flex items-start justify-between">
							<div>
								<CardTitle class="line-clamp-1 text-lg">{item.course_code}</CardTitle>
								<CardDescription class="mt-1 line-clamp-2 min-h-10"
									>{item.course_name}</CardDescription
								>
							</div>
							<Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
								{item.status}
							</Badge>
						</div>
					</CardHeader>
					<CardContent class="grow">
						<!-- Future content like progress bar could go here -->
						<div class="text-sm text-muted-foreground">
							<p>{m.class_id_label({ id: item.class_id })}</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button class="w-full" href="/lms/classes/{item.class_id}">
							<BookOpen class="mr-2 h-4 w-4" />
							{m.classes_go_to_class()}
						</Button>
					</CardFooter>
				</Card>
			{/each}
		</div>
	{/if}
</div>
