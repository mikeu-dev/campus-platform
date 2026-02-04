<script lang="ts">
	import { page } from '$app/stores';
	export let data;
</script>

<div class="space-y-6">
	<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
		<h2 class="text-2xl font-bold text-gray-900">
			{#if data.classInfo}
				{data.classInfo.course_code} - {data.classInfo.course_name}
			{:else}
				Class Details
			{/if}
		</h2>
		<p class="mt-1 text-gray-600">
			Semester {data.classInfo?.semester}
			{data.classInfo?.year}
		</p>

		<!-- Tabs -->
		<div class="mt-6 border-b border-gray-200">
			<nav class="-mb-px flex space-x-8">
				<a
					href="/dashboard/classes/{data.classId}/materials"
					class="border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap transition-colors
                   {$page.url.pathname.includes('/materials')
						? 'border-indigo-500 text-indigo-600'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
				>
					Materials
				</a>

				<a
					href="/dashboard/classes/{data.classId}/assignments"
					class="border-b-2 px-1 pb-4 text-sm font-medium whitespace-nowrap transition-colors
                   {$page.url.pathname.includes('/assignments')
						? 'border-indigo-500 text-indigo-600'
						: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'}"
				>
					Assignments
				</a>
			</nav>
		</div>
	</div>

	<slot />
</div>
