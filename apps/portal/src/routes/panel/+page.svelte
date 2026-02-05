<script lang="ts">
	import {
		BookOpen,
		ClipboardList,
		GraduationCap,
		Clock,
		ArrowRight,
		Sparkles
	} from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	// Time-based greeting
	function getGreeting() {
		const hour = new Date().getHours();
		if (hour < 12) return m.dashboard_greeting_morning();
		if (hour < 18) return m.dashboard_greeting_afternoon();
		return m.dashboard_greeting_evening();
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
		class="relative overflow-hidden rounded-xl bg-linear-to-r from-primary to-purple-600 p-8 text-primary-foreground shadow-lg"
	>
		<div class="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-white/10 blur-xl"></div>
		<div class="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-white/10 blur-xl"></div>
		<div class="relative z-10">
			<div class="flex items-center gap-2">
				<Badge variant="secondary" class="border-none bg-white/20 text-white hover:bg-white/30">
					<Sparkles class="mr-1 h-3 w-3 text-yellow-300" />
					{data.user?.tenant_slug}
				</Badge>
			</div>
			<h1 class="mt-4 text-3xl font-bold tracking-tight">{getGreeting()}, {getFirstName()}!</h1>
			<p class="mt-2 max-w-lg text-primary-foreground/90">
				{#if data.user?.roles?.includes('admin')}
					{m.dashboard_welcome_admin()}
				{:else if data.user?.roles?.includes('lecturer')}
					{m.dashboard_welcome_lecturer()}
				{:else}
					{m.dashboard_welcome_student()}
				{/if}
			</p>
		</div>
	</div>

	<!-- Stats Grid -->
	<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<!-- Classes Enrolled -->
		<Card class="transition-all hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium text-muted-foreground"
					>{m.dashboard_stats_enrolled()}</CardTitle
				>
				<div class="rounded-full bg-primary/10 p-2">
					<BookOpen class="h-4 w-4 text-primary" />
				</div>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{data.enrollmentsCount}</div>
				<Button
					variant="link"
					class="mt-2 h-auto px-0 text-xs text-muted-foreground hover:text-primary"
					href="/lms/classes"
				>
					{m.dashboard_stats_view_classes()}
					<ArrowRight class="ml-1 h-3 w-3" />
				</Button>
			</CardContent>
		</Card>

		<!-- Pending Assignments -->
		<Card class="transition-all hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium text-muted-foreground"
					>{m.dashboard_stats_pending()}</CardTitle
				>
				<div class="rounded-full bg-orange-100 p-2">
					<ClipboardList class="h-4 w-4 text-orange-600" />
				</div>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold text-orange-600">{data.pendingAssignments}</div>
				<p class="mt-2 text-xs text-muted-foreground">{m.dashboard_stats_pending_desc()}</p>
			</CardContent>
		</Card>

		<!-- Academic Status -->
		<Card class="transition-all hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium text-muted-foreground"
					>{m.dashboard_stats_status()}</CardTitle
				>
				<div class="rounded-full bg-green-100 p-2">
					<GraduationCap class="h-4 w-4 text-green-600" />
				</div>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold text-green-600">{m.dashboard_stats_active()}</div>
				<p class="mt-2 text-xs text-muted-foreground">{m.table_semester()} 2026-1</p>
			</CardContent>
		</Card>

		<!-- Current Time -->
		<Card class="transition-all hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium text-muted-foreground"
					>{m.dashboard_stats_time()}</CardTitle
				>
				<div class="rounded-full bg-purple-100 p-2">
					<Clock class="h-4 w-4 text-purple-600" />
				</div>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">
					{new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
				</div>
				<p class="mt-2 text-xs text-muted-foreground">
					{new Date().toLocaleDateString('id-ID', {
						weekday: 'long',
						day: 'numeric',
						month: 'short'
					})}
				</p>
			</CardContent>
		</Card>
	</div>

	<!-- Recent Classes -->
	{#if data.recentClasses && data.recentClasses.length > 0}
		<Card>
			<CardHeader class="flex flex-row items-center justify-between">
				<CardTitle>{m.dashboard_recent_classes()}</CardTitle>
				<Button variant="ghost" size="sm" href="/lms/classes">{m.dashboard_view_all()}</Button>
			</CardHeader>
			<CardContent>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{#each data.recentClasses as item (item.class_id)}
						<a
							href="/lms/classes/{item.class_id}"
							class="group block rounded-lg border bg-card p-4 transition-all hover:border-primary hover:shadow-sm"
						>
							<div class="flex items-center gap-3">
								<div
									class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
								>
									<BookOpen class="h-5 w-5" />
								</div>
								<div>
									<p class="font-medium transition-colors group-hover:text-primary">
										{item.course_code}
									</p>
									<p class="line-clamp-1 text-sm text-muted-foreground">{item.course_name}</p>
								</div>
							</div>
						</a>
					{/each}
				</div>
			</CardContent>
		</Card>
	{/if}

	<!-- Student Profile Card -->
	{#if data.studentProfile}
		<Card>
			<CardHeader>
				<CardTitle>{m.dashboard_profile_title()}</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="flex items-center gap-4">
					<div
						class="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-purple-600 text-xl font-bold text-white shadow"
					>
						{data.studentProfile.name?.charAt(0).toUpperCase() || 'S'}
					</div>
					<div class="space-y-1">
						<p class="text-lg leading-none font-medium">{data.studentProfile.name}</p>
						<div class="flex gap-2 text-sm text-muted-foreground">
							<span>ID: {data.studentProfile.platform_student_number || 'N/A'}</span>
							<span>•</span>
							<span>{data.user?.email}</span>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	{/if}
</div>
