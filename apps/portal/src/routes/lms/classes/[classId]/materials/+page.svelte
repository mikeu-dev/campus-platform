<script lang="ts">
	import { FileText, Video, Link as LinkIcon, File as FileIcon, Plus, Save } from 'lucide-svelte';
	import { page } from '$app/state';
	import { enhance } from '$app/forms';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	
	let { data, form } = $props();
	let showForm = $state(false);

	function getIcon(type: string) {
		switch (type) {
			case 'video': return Video;
			case 'link': return LinkIcon;
			case 'file': return FileIcon;
			default: return FileText;
		}
	}

	function getTypeVariant(type: string): "default" | "secondary" | "outline" | "destructive" {
		switch (type) {
			case 'video': return 'destructive'; // Red-ish
			case 'link': return 'secondary';
			case 'file': return 'outline';
			default: return 'default';
		}
	}

	// Styles matching Shadcn Input for native elements we haven't ported yet
	const inputClass = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h3 class="text-lg font-medium">Class Materials</h3>
			<p class="text-sm text-muted-foreground">Resources and learning content.</p>
		</div>
		{#if page.data.user?.roles?.includes('lecturer')}
			<Button variant={showForm ? "secondary" : "default"} onclick={() => (showForm = !showForm)} size="sm">
				<Plus class="mr-2 h-4 w-4" /> 
				{showForm ? 'Cancel' : 'Add Material'}
			</Button>
		{/if}
	</div>

	{#if showForm}
		<Card>
			<CardHeader>
				<CardTitle>Add New Material</CardTitle>
				<CardDescription>Upload files or add links for your students.</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					method="POST"
					action="?/create"
					use:enhance
					onsubmit={() => (showForm = false)}
					enctype="multipart/form-data"
					class="space-y-4"
				>
					<div class="grid gap-2">
						<Label for="title">Title</Label>
						<Input type="text" name="title" id="title" required placeholder="e.g. Introduction Slides" />
					</div>
					
					<div class="grid gap-2">
						<Label for="type">Type</Label>
						<select id="type" name="type" class={inputClass}>
							<option value="text">Text/Note</option>
							<option value="video">Video</option>
							<option value="link">Link</option>
							<option value="file">File</option>
						</select>
					</div>

					<div class="grid gap-2">
						<Label for="content">Content / URL</Label>
						<textarea id="content" name="content" rows="3" class="{inputClass} min-h-[80px]" placeholder="Description or URL..."></textarea>
					</div>

					<div class="grid gap-2">
						<Label for="file">Or Upload File</Label>
						<Input type="file" name="file" id="file" />
					</div>
					
					<div class="flex justify-end pt-2">
						<Button type="submit">
							<Save class="mr-2 h-4 w-4" /> Save Material
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
						Material added successfully!
					</div>
				{/if}
			</CardContent>
		</Card>
	{/if}

	<div class="grid gap-4">
		{#each data.materials as item (item.id)}
			{@const SvelteComponent = getIcon(item.type)}
			<Card class="transition-shadow hover:shadow-sm">
				<CardContent class="flex items-start gap-4 p-4">
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
						<SvelteComponent class="h-5 w-5 text-primary" />
					</div>
					<div class="min-w-0 flex-1">
						<div class="flex items-start justify-between gap-2">
							<div>
								<h4 class="font-medium leading-none">{item.title}</h4>
								{#if item.content}
									<p class="mt-1 text-sm text-muted-foreground line-clamp-2">{item.content}</p>
								{/if}
							</div>
							<Badge variant={getTypeVariant(item.type)} class="capitalize">
								{item.type}
							</Badge>
						</div>
					</div>
				</CardContent>
			</Card>
		{:else}
			<div class="rounded-lg border border-dashed p-8 text-center text-muted-foreground">
				No materials uploaded yet.
			</div>
		{/each}
	</div>
</div>
