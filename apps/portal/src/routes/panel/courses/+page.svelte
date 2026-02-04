<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus } from 'lucide-svelte';
	import DataTable from '$lib/components/DataTable.svelte';
	let { data, form } = $props();

	let showForm = $state(false);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-bold text-gray-900">Course Management</h2>
		<button
			onclick={() => (showForm = !showForm)}
			class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
		>
			<Plus class="mr-2 h-5 w-5" />
			Add Course
		</button>
	</div>

	{#if showForm}
		<div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
			<h3 class="mb-4 text-lg font-medium text-gray-900">Create New Course</h3>
			<form method="POST" action="?/create" use:enhance onsubmit={() => (showForm = false)}>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div>
						<label for="code" class="block text-sm font-medium text-gray-700">Course Code</label>
						<input
							type="text"
							name="code"
							id="code"
							placeholder="e.g. CS101"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700">Course Name</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="Introduction to CS"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="credits" class="block text-sm font-medium text-gray-700">Credits</label>
						<input
							type="number"
							name="credits"
							id="credits"
							value="3"
							min="1"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
				</div>
				<div class="mt-6 flex justify-end">
					<button
						type="button"
						onclick={() => (showForm = false)}
						class="mr-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
						>Cancel</button
					>
					<button
						type="submit"
						class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
						>Create Course</button
					>
				</div>
			</form>
			{#if form?.error}
				<div class="relative mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
					<span class="block sm:inline">{form.error}</span>
				</div>
			{/if}
			{#if form?.success}
				<div
					class="relative mt-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-green-700"
				>
					<span class="block sm:inline">Course created successfully!</span>
				</div>
			{/if}
		</div>
	{/if}

	<div class="flex flex-col">
		<DataTable
			data={data.courses}
			columns={[
				{ key: 'code', label: 'Code' },
				{ key: 'name', label: 'Name' },
				{ key: 'credits', label: 'Credits' }
			]}
		>
			{#snippet cell(item: any, columnKey: string)}
				{#if columnKey === 'code'}
					<div class="text-sm font-medium text-indigo-600">{item.code}</div>
				{:else if columnKey === 'name'}
					<div class="text-sm text-gray-900">{item.name}</div>
				{:else if columnKey === 'credits'}
					<div class="text-sm text-gray-500">{item.credits}</div>
				{/if}
			{/snippet}
		</DataTable>
	</div>
</div>
