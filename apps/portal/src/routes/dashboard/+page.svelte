<script lang="ts">
	export let data;
</script>

<div class="space-y-6">
	<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
		<h2 class="text-2xl font-bold text-gray-900">Welcome back, {data.user.email}!</h2>
		<p class="mt-1 text-gray-600">
			You are logged in as a <span class="font-semibold">{data.user.roles.join(', ')}</span> in
			<span class="font-semibold">{data.user.tenant_slug}</span>.
		</p>
	</div>

	<!-- Stats or Quick Actions -->
	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="rounded-lg bg-indigo-600 p-6 text-white shadow-lg">
			<h3 class="text-lg font-semibold">Academic Status</h3>
			<p class="mt-2 text-3xl font-bold">Active</p>
			<p class="mt-1 text-sm text-indigo-200">Semester 2023-1</p>
		</div>

		<div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
			<h3 class="text-lg font-semibold text-gray-900">Your Student Profile</h3>
			{#if data.studentProfile}
				<div class="mt-4 space-y-2">
					<p class="text-sm"><span class="text-gray-500">Name:</span> {data.studentProfile.name}</p>
					<p class="text-sm">
						<span class="text-gray-500">Student ID:</span>
						{data.studentProfile.platform_student_number || 'N/A'}
					</p>
				</div>
			{:else}
				<p class="mt-4 text-sm text-yellow-600">No student profile found. Please contact admin.</p>
			{/if}
		</div>
	</div>
</div>
