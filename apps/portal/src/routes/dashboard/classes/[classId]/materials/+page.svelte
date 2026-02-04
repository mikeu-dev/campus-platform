<script lang="ts">
	import { FileText, Video, Link, File } from 'lucide-svelte';
	export let data;

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
	</div>

	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each data.materials as item}
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
