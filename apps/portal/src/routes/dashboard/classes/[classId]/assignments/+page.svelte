<script lang="ts">
	import { Calendar, ChevronRight } from 'lucide-svelte';
	export let data;
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h3 class="text-lg font-medium text-gray-900">Assignments</h3>
	</div>

	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each data.assignments as item}
				<li>
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
								<div class="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
									<div class="flex items-center text-sm text-gray-500">
										<Calendar class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
										<p>
											Due on <time datetime={item.deadline}
												>{new Date(item.deadline).toLocaleDateString()}</time
											>
										</p>
									</div>
								</div>
							</div>
							<div class="ml-5 flex-shrink-0">
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
