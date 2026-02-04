<script lang="ts">
	import {
		BookOpen,
		ClipboardList,
		GraduationCap,
		Clock,
		ArrowRight,
		Sparkles
	} from 'lucide-svelte';
	let { data } = $props();

	// Time-based greeting
	function getGreeting() {
		const hour = new Date().getHours();
		if (hour < 12) return 'Good Morning';
		if (hour < 18) return 'Good Afternoon';
		return 'Good Evening';
	}

	// Get first name from email or full name
	function getFirstName() {
		if (data.studentProfile?.name) {
			return data.studentProfile.name.split(' ')[0];
		}
		return data.user?.email?.split('@')[0] || 'Student';
	}
</script>

<div class="space-y-8">
	<!-- Welcome Hero Card -->
	<div
		class="relative overflow-hidden rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 text-white shadow-xl"
	>
		<div class="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10"></div>
		<div class="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/10"></div>
		<div class="relative z-10">
			<div class="flex items-center gap-2">
				<Sparkles class="h-5 w-5 text-yellow-300" />
				<span class="text-sm font-medium text-indigo-200">{data.user?.tenant_slug}</span>
			</div>
			<h1 class="mt-2 text-3xl font-bold">{getGreeting()}, {getFirstName()}!</h1>
			<p class="mt-2 max-w-lg text-indigo-100">
				{#if data.user?.roles?.includes('admin')}
					Manage your institution from the admin dashboard.
				{:else if data.user?.roles?.includes('lecturer')}
					Check your teaching schedule and manage your classes.
				{:else}
					Ready to continue your learning journey? Check your classes and assignments below.
				{/if}
			</p>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<!-- Classes Enrolled -->
		<div
			class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-500">Classes Enrolled</p>
					<p class="mt-2 text-3xl font-bold text-gray-900">{data.enrollmentsCount}</p>
				</div>
				<div
					class="rounded-xl bg-indigo-100 p-3 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white"
				>
					<BookOpen class="h-6 w-6" />
				</div>
			</div>
			<a
				href="/lms/classes"
				class="mt-4 flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
			>
				View Classes <ArrowRight class="ml-1 h-4 w-4" />
			</a>
		</div>

		<!-- Pending Assignments -->
		<div
			class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-500">Pending Tasks</p>
					<p class="mt-2 text-3xl font-bold text-gray-900">{data.pendingAssignments}</p>
				</div>
				<div
					class="rounded-xl bg-orange-100 p-3 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white"
				>
					<ClipboardList class="h-6 w-6" />
				</div>
			</div>
			<p class="mt-4 text-sm text-gray-400">Assignments due soon</p>
		</div>

		<!-- Academic Status -->
		<div
			class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-500">Status</p>
					<p class="mt-2 text-xl font-bold text-green-600">Active</p>
				</div>
				<div
					class="rounded-xl bg-green-100 p-3 text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white"
				>
					<GraduationCap class="h-6 w-6" />
				</div>
			</div>
			<p class="mt-4 text-sm text-gray-400">Semester 2026-1</p>
		</div>

		<!-- Current Time -->
		<div
			class="group relative overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
		>
			<div class="flex items-center justify-between">
				<div>
					<p class="text-sm font-medium text-gray-500">Current Time</p>
					<p class="mt-2 text-xl font-bold text-gray-900">
						{new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
					</p>
				</div>
				<div
					class="rounded-xl bg-purple-100 p-3 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white"
				>
					<Clock class="h-6 w-6" />
				</div>
			</div>
			<p class="mt-4 text-sm text-gray-400">
				{new Date().toLocaleDateString('id-ID', {
					weekday: 'long',
					day: 'numeric',
					month: 'short'
				})}
			</p>
		</div>
	</div>

	<!-- Recent Classes -->
	{#if data.recentClasses && data.recentClasses.length > 0}
		<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
			<div class="mb-4 flex items-center justify-between">
				<h2 class="text-lg font-semibold text-gray-900">Recent Classes</h2>
				<a href="/lms/classes" class="text-sm font-medium text-indigo-600 hover:text-indigo-800"
					>View All</a
				>
			</div>
			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{#each data.recentClasses as item (item.class_id)}
					<a
						href="/lms/classes/{item.class_id}"
						class="group block rounded-lg border border-gray-200 p-4 transition-all hover:border-indigo-300 hover:shadow-md"
					>
						<div class="flex items-center gap-3">
							<div
								class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white"
							>
								<BookOpen class="h-5 w-5" />
							</div>
							<div>
								<p class="font-medium text-gray-900">{item.course_code}</p>
								<p class="text-sm text-gray-500">{item.course_name}</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<!-- Student Profile Card -->
	{#if data.studentProfile}
		<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
			<h2 class="mb-4 text-lg font-semibold text-gray-900">Your Profile</h2>
			<div class="flex items-center gap-4">
				<div
					class="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-xl font-bold text-white"
				>
					{data.studentProfile.name?.charAt(0).toUpperCase() || 'S'}
				</div>
				<div>
					<p class="text-lg font-medium text-gray-900">{data.studentProfile.name}</p>
					<p class="text-sm text-gray-500">
						Student ID: {data.studentProfile.platform_student_number || 'N/A'}
					</p>
					<p class="text-sm text-gray-500">Email: {data.user?.email}</p>
				</div>
			</div>
		</div>
	{/if}
</div>
