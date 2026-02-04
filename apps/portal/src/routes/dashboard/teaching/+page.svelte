<script lang="ts">
	import { BookOpen, Plus } from 'lucide-svelte';
	export let data;
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-bold text-gray-900">Teaching Dashboard</h2>
		{#if data.lecturerProfile}
			<button
				class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
			>
				<Plus class="mr-2 h-5 w-5" />
				Open New Class
			</button>
		{/if}
	</div>

	{#if !data.lecturerProfile}
		<div class="border-l-4 border-yellow-400 bg-yellow-50 p-4">
			<div class="flex">
				<div class="ml-3">
					<p class="text-sm text-yellow-700">
						You do not have a lecturer profile yet. Please contact an administrator or
						<span class="font-bold">Initialize Profile (Mock)</span>.
					</p>
				</div>
			</div>
		</div>
	{:else}
		<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each data.classes as item}
				<div
					class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
				>
					<div class="min-w-0 flex-1">
						<a href="/dashboard/classes/{item.id}" class="focus:outline-none">
							<span class="absolute inset-0" aria-hidden="true"></span>
							<p class="text-sm font-medium text-gray-900">{item.course_code}</p>
							<p class="text-sm text-gray-500">{item.course_name}</p>
							<p class="mt-1 text-xs text-gray-400">Semester {item.semester} {item.year}</p>
						</a>
					</div>
				</div>
			{:else}
				<p class="col-span-3 text-center text-gray-500 py-8">
					You have not opened any classes yet.
				</p>
			{/each}
		</div>
	{/if}
</div>
