<script lang="ts">
	import { Calendar, ChevronRight, Plus, Save } from 'lucide-svelte';
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	
	let { data, form } = $props();
	let showForm = $state(false);
	
	const inputClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h3 class="text-lg font-medium">Assignments</h3>
			<p class="text-sm text-muted-foreground">Manage class assignments and homework.</p>
		</div>
		{#if page.data.user?.roles?.includes('lecturer')}
			<Button variant={showForm ? "secondary" : "default"} onclick={() => (showForm = !showForm)} size="sm">
				<Plus class="mr-2 h-4 w-4" /> 
				{showForm ? 'Cancel' : 'Create Assignment'}
			</Button>
		{/if}
	</div>

	{#if showForm}
		<Card>
			<CardHeader>
				<CardTitle>Create New Assignment</CardTitle>
				<CardDescription>Set a deadline and instructions for your students.</CardDescription>
			</CardHeader>
			<CardContent>
				<form method="POST" action="?/create" use:enhance onsubmit={() => (showForm = false)} class="space-y-4">
					<div class="grid gap-2">
						<Label for="title">Title</Label>
						<Input type="text" name="title" id="title" required placeholder="e.g. Midterm Project" />
					</div>
					
					<div class="grid gap-2">
						<Label for="deadline">Deadline</Label>
						<Input type="datetime-local" name="deadline" id="deadline" required />
					</div>

					<div class="grid gap-2">
						<Label for="description">Description</Label>
						<textarea id="description" name="description" rows="3" class="{inputClass} min-h-[100px]" placeholder="Detailed instructions..."></textarea>
					</div>

					<div class="flex justify-end pt-2">
						<Button type="submit">
							<Save class="mr-2 h-4 w-4" /> Create Assignment
						</Button>
					</div>
				</form>

				{#if form?.error}
					<div class="mt-4 rounded-md bg-destructive/15 p-3 text-sm text-destructive font-medium">
						{form.error}
					</div>
				{/if}
				{#if form?.success}
					<div class="mt-4 rounded-md bg-green-500/15 p-3 text-sm text-green-700 font-medium">
						Assignment created successfully!
					</div>
				{/if}
			</CardContent>
		</Card>
	{/if}

	<div class="grid gap-4">
		{#each data.assignments as item (item.id)}
			<a href="/lms/classes/{data.classId}/assignments/{item.id}" class="block group">
				<Card class="transition-all hover:shadow-md hover:border-primary/50">
					<CardContent class="flex items-center justify-between p-6">
						<div class="min-w-0 flex-1">
							<div class="flex items-center justify-between">
								<h4 class="font-semibold text-lg text-primary group-hover:underline decoration-primary/30 underline-offset-4">{item.title}</h4>
								<span class="ml-4 flex items-center text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md">
									<Calendar class="mr-1.5 h-4 w-4" />
									Due {new Date(item.deadline).toLocaleDateString()}
								</span>
							</div>
							{#if item.description}
								<p class="mt-2 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
							{/if}
						</div>
						<div class="ml-6 shrink-0">
							<ChevronRight class="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
						</div>
					</CardContent>
				</Card>
			</a>
		{:else}
			<div class="rounded-lg border border-dashed p-12 text-center text-muted-foreground">
				No assignments due.
			</div>
		{/each}
	</div>
</div>
