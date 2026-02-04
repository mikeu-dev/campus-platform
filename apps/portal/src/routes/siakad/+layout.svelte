<script lang="ts">
	import { page } from '$app/state';
	import {
		LayoutDashboard,
		BookOpen,
		LogOut,
		GraduationCap,
		User,
		Menu,
		X,
		MessageSquare
	} from 'lucide-svelte';
	import NotificationBell from '$lib/components/NotificationBell.svelte';
	interface Props {
		children?: import('svelte').Snippet;
		data: { token?: string };
	}

	let { children, data }: Props = $props();
	let sidebarOpen = $state(false);
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<div class="flex min-h-screen bg-gray-100">
	<!-- Mobile Overlay -->
	{#if sidebarOpen}
		<button
			class="fixed inset-0 z-30 bg-black/50 lg:hidden"
			onclick={() => (sidebarOpen = false)}
			aria-label="Close menu"
		></button>
	{/if}

	<!-- Sidebar -->
	<aside
		class="fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 {sidebarOpen
			? 'translate-x-0'
			: '-translate-x-full'}"
	>
		<div class="flex items-center justify-between p-6">
			<div>
				<h1 class="text-2xl font-bold text-indigo-600">
					Campus<span class="text-gray-900">App</span>
				</h1>
				<p class="mt-1 text-sm text-gray-500">{page.data.user?.tenant_slug || 'SaaS Platform'}</p>
			</div>
			<button
				class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
				onclick={() => (sidebarOpen = false)}
			>
				<X class="h-5 w-5" />
			</button>
		</div>

		<nav class="mt-2 flex-1 space-y-1 overflow-y-auto px-4">
			<a
				href="/siakad/enrollment"
				onclick={() => (sidebarOpen = false)}
				class="group flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {page.url.pathname.includes(
					'/enrollment'
				)
					? 'bg-indigo-50 text-indigo-600'
					: ''}"
			>
				<BookOpen class="mr-3 h-5 w-5" />
				Course Enrollment
			</a>

			<a
				href="/siakad/grades"
				onclick={() => (sidebarOpen = false)}
				class="group flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {page.url.pathname.includes(
					'/grades'
				)
					? 'bg-indigo-50 text-indigo-600'
					: ''}"
			>
				<BookOpen class="mr-3 h-5 w-5" />
				My Grades
			</a>

			<a
				href="/siakad/calendar"
				onclick={() => (sidebarOpen = false)}
				class="group flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {page.url.pathname.includes(
					'/calendar'
				)
					? 'bg-indigo-50 text-indigo-600'
					: ''}"
			>
				<BookOpen class="mr-3 h-5 w-5" />
				Calendar
			</a>

			{#if page.data.user?.roles?.includes('lecturer')}
				<div class="pt-4 pb-2">
					<p class="px-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">Lecturer</p>
				</div>
				<a
					href="/siakad/teaching"
					onclick={() => (sidebarOpen = false)}
					class="group flex items-center rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 {page.url.pathname.includes(
						'/teaching'
					)
						? 'bg-indigo-50 text-indigo-600'
						: ''}"
				>
					<BookOpen class="mr-3 h-5 w-5" />
					Teaching
				</a>
			{/if}
		</nav>

		<div class="border-t border-gray-200 p-4">
			<div class="mb-4 flex items-center px-2">
				<User class="mr-2 h-8 w-8 rounded-full bg-gray-200 p-1 text-gray-600" />
				<div class="min-w-0 flex-1 overflow-hidden">
					<p class="truncate text-sm font-medium text-gray-900">{page.data.user?.email}</p>
					<p class="text-xs text-gray-500 capitalize">{page.data.user?.roles?.[0]}</p>
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
	<main class="flex-1 overflow-auto lg:ml-0">
		<!-- Top Bar -->
		<div
			class="sticky top-0 z-20 flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3 lg:px-8"
		>
			<button
				class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"
				onclick={() => (sidebarOpen = true)}
			>
				<Menu class="h-6 w-6" />
			</button>
			<div class="lg:hidden">
				<h1 class="text-lg font-bold text-indigo-600">CampusApp</h1>
			</div>
			<div class="flex items-center gap-4">
				<NotificationBell token={data.token || ''} />
			</div>
		</div>
		<div class="p-4 lg:p-8">
			{@render children?.()}
		</div>
	</main>
</div>
