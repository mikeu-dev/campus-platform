<script lang="ts">
	import { page } from '$app/state';
	let { data, children } = $props();
</script>

<div class="space-y-6">
	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<h2 class="text-2xl leading-none font-semibold tracking-tight">
				{#if data.classInfo}
					{data.classInfo.course_code} - {data.classInfo.course_name}
				{:else}
					Class Details
				{/if}
			</h2>
			<p class="mt-1 text-sm text-muted-foreground">
				Semester {data.classInfo?.semester}
				{data.classInfo?.year}
			</p>
		</div>

		<!-- Tabs-like Navigation -->
		<div class="border-b px-6">
			<nav class="-mb-px flex space-x-6">
				<a
					href="/lms/classes/{data.classId}/materials"
					class="border-b-2 py-4 text-sm font-medium transition-colors
                   {page.url.pathname.includes('/materials')
						? 'border-primary text-primary'
						: 'border-transparent text-muted-foreground hover:border-gray-300 hover:text-foreground'}"
				>
					Materials
				</a>

				<a
					href="/lms/classes/{data.classId}/assignments"
					class="border-b-2 py-4 text-sm font-medium transition-colors
                   {page.url.pathname.includes('/assignments')
						? 'border-primary text-primary'
						: 'border-transparent text-muted-foreground hover:border-gray-300 hover:text-foreground'}"
				>
					Assignments
				</a>

				<a
					href="/lms/classes/{data.classId}/discussions"
					class="border-b-2 py-4 text-sm font-medium transition-colors
                   {page.url.pathname.includes('/discussions')
						? 'border-primary text-primary'
						: 'border-transparent text-muted-foreground hover:border-gray-300 hover:text-foreground'}"
				>
					Discussions
				</a>
			</nav>
		</div>
	</div>

	{@render children?.()}
</div>
