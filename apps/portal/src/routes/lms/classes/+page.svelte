<script lang="ts">
	let { data } = $props();
</script>

<div class="space-y-6">
	<h2 class="text-2xl font-bold text-gray-900">My Classes</h2>

	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each data.enrollments as item (item.class_id)}
			<div
				class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
			>
				<div class="min-w-0 flex-1">
					<!-- eslint-disable svelte/no-navigation-without-resolve -->
					<a href="/lms/classes/{item.class_id}" class="focus:outline-none">
						<span class="absolute inset-0" aria-hidden="true"></span>
						<p class="text-sm font-medium text-gray-900">{item.course_code}</p>
						<p class="text-sm text-gray-500">{item.course_name}</p>
						<p class="mt-2 text-xs font-semibold text-green-600 uppercase">{item.status}</p>
					</a>
				</div>
			</div>
		{:else}
			<p class="col-span-3 text-center text-gray-500 py-8">
				You have not enrolled in any classes yet.
			</p>
		{/each}
	</div>
</div>
