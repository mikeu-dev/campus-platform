<script lang="ts">
	import { page } from '$app/stores';
	import { LayoutDashboard, BookOpen, LogOut, GraduationCap, User } from 'lucide-svelte';
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<div class="flex min-h-screen bg-gray-100">
	<!-- Sidebar -->
	<aside class="w-64 border-r border-gray-200 bg-white">
		<div class="p-6">
			<h1 class="text-2xl font-bold text-indigo-600">
				Campus<span class="text-gray-900">App</span>
			</h1>
			<p class="mt-1 text-sm text-gray-500">{$page.data.user?.tenant_slug || 'SaaS Platform'}</p>
		</div>

		<nav class="mt-6 space-y-2 px-4">
			<a
				href="/dashboard"
				class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page
					.url.pathname === '/dashboard'
					? 'bg-indigo-50 text-indigo-600'
					: ''}"
			>
				<LayoutDashboard class="mr-3 h-5 w-5" />
				Dashboard
			</a>

			<a
				href="/dashboard/enrollment"
				class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page.url.pathname.includes(
					'/enrollment'
				)
					? 'bg-indigo-50 text-indigo-600'
					: ''}"
			>
				<BookOpen class="mr-3 h-5 w-5" />
				Course Enrollment
			</a>

			<a
				href="/dashboard/classes"
				class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page.url.pathname.includes(
					'/classes'
				)
					? 'bg-indigo-50 text-indigo-600'
					: ''}"
			>
				<GraduationCap class="mr-3 h-5 w-5" />
				My Classes
			</a>

			{#if $page.data.user?.roles?.includes('lecturer')}
				<div class="pt-4 pb-2">
					<p class="px-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">Lecturer</p>
				</div>
				<a
					href="/dashboard/teaching"
					class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page.url.pathname.includes(
						'/teaching'
					)
						? 'bg-indigo-50 text-indigo-600'
						: ''}"
				>
					<BookOpen class="mr-3 h-5 w-5" />
					Teaching
				</a>
			{/if}

			{#if $page.data.user?.roles?.includes('admin')}
				<div class="pt-4 pb-2">
					<p class="px-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">Admin</p>
				</div>
				<a
					href="/dashboard/admin/users"
					class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page.url.pathname.includes(
						'/admin/users'
					)
						? 'bg-indigo-50 text-indigo-600'
						: ''}"
				>
					<User class="mr-3 h-5 w-5" />
					Users
				</a>
				<a
					href="/dashboard/admin/courses"
					class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page.url.pathname.includes(
						'/admin/courses'
					)
						? 'bg-indigo-50 text-indigo-600'
						: ''}"
				>
					<BookOpen class="mr-3 h-5 w-5" />
					Courses
				</a>
				<a
					href="/dashboard/admin/classes"
					class="group flex items-center rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {$page.url.pathname.includes(
						'/admin/classes'
					)
						? 'bg-indigo-50 text-indigo-600'
						: ''}"
				>
					<GraduationCap class="mr-3 h-5 w-5" />
					Classes
				</a>
			{/if}
		</nav>

		<div class="absolute bottom-0 w-64 border-t border-gray-200 p-4">
			<div class="mb-4 flex items-center px-2">
				<User class="mr-2 h-8 w-8 rounded-full bg-gray-200 p-1 text-gray-600" />
				<div class="overflow-hidden">
					<p class="truncate text-sm font-medium text-gray-900">{$page.data.user?.email}</p>
					<p class="text-xs text-gray-500 capitalize">{$page.data.user?.roles?.[0]}</p>
				</div>
			</div>
			<form action="/logout" method="POST">
				<button
					type="submit"
					class="flex w-full items-center rounded-lg px-4 py-2 text-sm text-red-600 transition-colors hover:bg-red-50"
				>
					<LogOut class="mr-3 h-4 w-4" />
					Sign Out
				</button>
			</form>
		</div>
	</aside>

	<!-- Main Content -->
	<main class="flex-1 overflow-auto p-8">
		<slot />
	</main>
</div>
