<script lang="ts">
	import { enhance } from '$app/forms';
	let { data, form } = $props();
</script>

<div class="space-y-6">
	<h2 class="text-2xl font-bold text-gray-900">Course Enrollment</h2>

	{#if form?.error}
		<div class="mb-4 rounded-md bg-red-100 p-4 text-red-700">{form.error}</div>
	{/if}
	{#if form?.success}
		<div class="mb-4 rounded-md bg-green-100 p-4 text-green-700">Successfully enrolled!</div>
	{/if}

	<div class="overflow-hidden bg-white shadow sm:rounded-md">
		<ul role="list" class="divide-y divide-gray-200">
			{#each data.classes as item (item.id)}
				<li class="flex items-center justify-between px-4 py-4 sm:px-6">
					<div class="min-w-0 flex-1">
						<h3 class="truncate text-lg font-medium text-indigo-600">
							{item.course_code} - {item.course_name}
						</h3>
						<p class="mt-1 flex items-center text-sm text-gray-500">
							Semester {item.semester}
							{item.year}
						</p>
					</div>
					<form method="POST" action="?/enroll" use:enhance>
						<input type="hidden" name="class_id" value={item.id} />
						<button
							type="submit"
							class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
						>
							Enroll
						</button>
					</form>
				</li>
			{:else}
				<li class="px-4 py-8 text-center text-gray-500">No classes available for enrollment.</li>
			{/each}
		</ul>
	</div>
</div>
