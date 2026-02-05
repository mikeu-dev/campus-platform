<script lang="ts">
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '$lib/components/ui/table';
	import { Input } from '$lib/components/ui/input';
	import { Search } from 'lucide-svelte';
	
	let { data, form } = $props();
	let searchQuery = $state('');

	// Simple client-side search since API doesn't support it yet
	let filteredClasses = $derived(
		data.classes.filter((c: any) => 
			c.course_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
			c.course_code.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Course Enrollment</h2>
			<p class="text-muted-foreground">Register for your upcoming semester classes.</p>
		</div>
	</div>

	{#if form?.error}
		<div class="rounded-md bg-destructive/15 p-4 text-destructive font-medium">{form.error}</div>
	{/if}
	{#if form?.success}
		<div class="rounded-md bg-green-500/15 p-4 text-green-700 font-medium">Successfully enrolled!</div>
	{/if}

	<Card>
		<CardHeader>
			<CardTitle>Available Classes</CardTitle>
			<CardDescription>Select a class to enroll in.</CardDescription>
		</CardHeader>
		<CardContent>
			<div class="mb-4 flex items-center">
				<div class="relative w-full max-w-sm">
					<Search class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Search by name or code..."
						class="pl-8"
						bind:value={searchQuery}
					/>
				</div>
			</div>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Code</TableHead>
						<TableHead>Course Name</TableHead>
						<TableHead>Semester</TableHead>
						<TableHead class="text-right">Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each filteredClasses as item (item.id)}
						<TableRow>
							<TableCell class="font-medium">{item.course_code}</TableCell>
							<TableCell>{item.course_name}</TableCell>
							<TableCell>Semester {item.semester} {item.year}</TableCell>
							<TableCell class="text-right">
								<form method="POST" action="?/enroll" use:enhance class="inline-block">
									<input type="hidden" name="class_id" value={item.id} />
									<Button type="submit" size="sm">Enroll</Button>
								</form>
							</TableCell>
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={4} class="h-24 text-center">
								No classes found.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
