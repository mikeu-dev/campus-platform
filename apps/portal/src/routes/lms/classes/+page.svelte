<script lang="ts">
	import { BookOpen, Search } from 'lucide-svelte';
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';

	let { data } = $props();
	let searchQuery = $state('');

	let filteredEnrollments = $derived(
		data.enrollments.filter((e: any) => 
			e.course_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
			e.course_code.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">My Classes</h2>
			<p class="text-muted-foreground">Access your enrolled courses and learning materials.</p>
		</div>
	</div>

	<div class="flex items-center space-x-2">
		<div class="relative w-full max-w-sm">
			<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
			<Input
				type="search"
				placeholder="Search classes..."
				class="pl-8"
				bind:value={searchQuery}
			/>
		</div>
	</div>

	{#if filteredEnrollments.length === 0}
		<Card>
			<CardContent class="flex flex-col items-center justify-center p-12 text-center">
				<BookOpen class="h-12 w-12 text-muted-foreground/50" />
				<h3 class="mt-4 text-lg font-semibold">No classes found</h3>
				<p class="text-muted-foreground">
					{searchQuery ? 'Try adjusting your search query.' : 'You have not enrolled in any classes yet.'}
				</p>
			</CardContent>
		</Card>
	{:else}
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredEnrollments as item (item.class_id)}
				<Card class="flex flex-col transition-all hover:shadow-lg">
					<CardHeader>
						<div class="flex justify-between items-start">
							<div>
								<CardTitle class="line-clamp-1 text-lg">{item.course_code}</CardTitle>
								<CardDescription class="line-clamp-2 mt-1 min-h-10">{item.course_name}</CardDescription>
							</div>
							<Badge variant={item.status === 'active' ? 'default' : 'secondary'}>
								{item.status}
							</Badge>
						</div>
					</CardHeader>
					<CardContent class="grow">
						<!-- Future content like progress bar could go here -->
						<div class="text-sm text-muted-foreground">
							<p>Class ID: {item.class_id}</p>
						</div>
					</CardContent>
					<CardFooter>
						<Button class="w-full" href="/lms/classes/{item.class_id}">
							<BookOpen class="mr-2 h-4 w-4" /> Go to Class
						</Button>
					</CardFooter>
				</Card>
			{/each}
		</div>
	{/if}
</div>
