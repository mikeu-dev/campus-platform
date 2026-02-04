<script lang="ts">
	import { Calendar, ChevronRight, Plus } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	let { data, form } = $props();

	let showForm = $state(false);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-medium text-gray-900">Assignments</h3>
		{#if $page.data.user?.roles?.includes('lecturer')}
			<button
				onclick={() => (showForm = !showForm)}
				class="inline-flex items-center rounded border border-transparent bg-indigo-100 px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none"
			>
				<Plus class="mr-1 h-4 w-4" /> Create Assignment
			</button>
		{/if}
	</div>

	{#if showForm}
		<div class="rounded-md border border-gray-200 bg-gray-50 p-4">
			<form method="POST" action="?/create" use:enhance onsubmit={() => (showForm = false)}>
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
						<label for="deadline" class="block text-sm font-medium text-gray-700">Deadline</label>
						<input
							type="datetime-local"
							name="deadline"
							id="deadline"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="description" class="block text-sm font-medium text-gray-700"
							>Description</label
						>
						<textarea
							id="description"
							name="description"
							rows="3"
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						></textarea>
					</div>
					<div class="flex justify-end">
						<button
							type="submit"
							class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
							>Create</button
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
					Assignment created successfully!
				</div>
			{/if}
		</div>
	{/if}

	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each data.assignments as item (item.id)}
				<li>
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a
						href="/dashboard/classes/{data.classId}/assignments/{item.id}"
						class="block hover:bg-gray-50"
					>
						<div class="flex items-center px-4 py-4 sm:px-6">
							<div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
								<div class="truncate">
									<div class="flex text-sm">
										<p class="truncate font-medium text-indigo-600">{item.title}</p>
									</div>
									<div class="mt-2 flex">
										{#if item.description}
											<p class="truncate text-sm text-gray-500">{item.description}</p>
										{/if}
									</div>
								</div>
								<div class="mt-4 shrink-0 sm:mt-0 sm:ml-5">
									<div class="flex items-center text-sm text-gray-500">
										<Calendar class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
										<p>
											Due on <time datetime={item.deadline}
												>{new Date(item.deadline).toLocaleDateString()}</time
											>
										</p>
									</div>
								</div>
							</div>
							<div class="ml-5 shrink-0">
								<ChevronRight class="h-5 w-5 text-gray-400" />
							</div>
						</div>
					</a>
				</li>
			{:else}
				<li class="px-4 py-8 text-center text-gray-500">No assignments due.</li>
			{/each}
		</ul>
	</div>
</div>
