<script lang="ts">
	import { FileText, Video, Link, File, Plus } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let data;
	export let form;

	let showForm = false;

	function getIcon(type: string) {
		switch (type) {
			case 'video':
				return Video;
			case 'link':
				return Link;
			case 'file':
				return File;
			default:
				return FileText;
		}
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-medium text-gray-900">Class Materials</h3>
		{#if $page.data.user?.roles?.includes('lecturer')}
			<button
				on:click={() => (showForm = !showForm)}
				class="inline-flex items-center rounded border border-transparent bg-indigo-100 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none"
			>
				<Plus class="mr-1 h-4 w-4" /> Add Material
			</button>
		{/if}
	</div>

	{#if showForm}
		<div class="rounded-md border border-gray-200 bg-gray-50 p-4">
			<form
				method="POST"
				action="?/create"
				use:enhance
				on:submit={() => (showForm = false)}
				enctype="multipart/form-data"
			>
				<div class="grid grid-cols-1 gap-4">
					<div>
						<label for="title" class="block text-sm font-medium text-gray-700">Title</label>
						<input
							type="text"
							name="title"
							id="title"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="type" class="block text-sm font-medium text-gray-700">Type</label>
						<select
							id="type"
							name="type"
							class="mt-1 block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
						>
							<option value="text">Text/Note</option>
							<option value="video">Video</option>
							<option value="link">Link</option>
							<option value="file">File</option>
						</select>
					</div>
					<div>
						<label for="content" class="block text-sm font-medium text-gray-700"
							>Content / URL</label
						>
						<textarea
							id="content"
							name="content"
							rows="3"
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						></textarea>
					</div>
					<div>
						<label for="file" class="block text-sm font-medium text-gray-700">Or Upload File</label>
						<input
							type="file"
							name="file"
							id="file"
							class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
						/>
					</div>
					<div class="flex justify-end">
						<button
							type="submit"
							class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
							>Save</button
						>
					</div>
				</div>
			</form>
			{#if form?.error}
				<div class="mt-2 rounded-md border border-red-200 bg-red-50 p-4 text-sm text-red-700">
					{form.error}
				</div>
			{/if}
			{#if form?.success}
				<div class="mt-2 rounded-md border border-green-200 bg-green-50 p-4 text-sm text-green-700">
					Material added successfully!
				</div>
			{/if}
		</div>
	{/if}

	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each data.materials as item (item.id)}
				<li class="flex items-center px-4 py-4 sm:px-6">
					<div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
						<div class="flex items-center">
							<div
								class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-100"
							>
								<svelte:component this={getIcon(item.type)} class="h-5 w-5 text-indigo-600" />
							</div>
							<div class="ml-4">
								<p class="truncate text-sm font-medium text-indigo-600">{item.title}</p>
								{#if item.content}
									<p class="mt-1 flex items-center text-sm text-gray-500">{item.content}</p>
								{/if}
							</div>
						</div>
						<div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
							<span
								class="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 capitalize"
							>
								{item.type}
							</span>
						</div>
					</div>
				</li>
			{:else}
				<li class="px-4 py-8 text-center text-gray-500">No materials uploaded yet.</li>
			{/each}
		</ul>
	</div>
</div>
