<script lang="ts">
	import { page } from '$app/state';
	import {
		LayoutDashboard,
		BookOpen,
		LogOut,
		GraduationCap,
		Menu,
		MessageSquare,
		Calendar
	} from 'lucide-svelte';
	import NotificationBell from '$lib/components/NotificationBell.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		children?: import('svelte').Snippet;
		data: { token?: string };
	}

	let { children, data }: Props = $props();

	/* Navigation Config */
	const navGroups = [
		{
			items: [
				{
					href: '/siakad',
					label: m.siakad_dashboard_title(),
					icon: LayoutDashboard,
					roles: ['student', 'lecturer']
				},
				{
					href: '/siakad/schedule',
					label: m.siakad_schedule_title(),
					icon: Calendar,
					roles: ['student']
				},
				{
					href: '/siakad/grades',
					label: m.siakad_grades_title(),
					icon: GraduationCap,
					roles: ['student']
				},
				{
					href: '/siakad/certificates',
					label: m.siakad_certificates_title(),
					icon: MessageSquare,
					roles: ['student']
				}
			]
		},
		{
			label: m.siakad_academic_group(),
			roles: ['student'],
			items: [
				{ href: '/siakad/enrollment', label: m.siakad_enrollment_title(), icon: BookOpen },
				{ href: '/siakad/krs/history', label: m.siakad_krs_history_title(), icon: BookOpen },
				{ href: '/siakad/exam-card', label: m.siakad_exam_card_title(), icon: BookOpen }
			]
		},
		{
			label: m.siakad_research_group(),
			roles: ['student'],
			items: [
				{
					href: '/siakad/research/proposal',
					label: m.siakad_research_proposal_title(),
					icon: BookOpen
				},
				{
					href: '/siakad/research/history',
					label: m.siakad_research_history_title(),
					icon: BookOpen
				}
			]
		},
		{
			label: m.nav_section_lecturer(),
			roles: ['lecturer'],
			items: [{ href: '/siakad/teaching', label: m.nav_teaching(), icon: BookOpen }]
		},
		{
			label: 'Administrator',
			roles: ['admin'],
			items: [{ href: '/panel', label: 'Admin Panel', icon: LayoutDashboard }]
		}
	];

	const userRoles = $derived(page.data.user?.roles || []);
</script>

{#snippet SidebarContent()}
	<div class="flex h-full flex-col gap-2">
		<div class="flex h-14 items-center border-b px-6">
			<a href="/" class="flex items-center gap-2 font-semibold">
				<span class="text-xl font-bold text-primary">{m.brand_name()}</span>
			</a>
		</div>
		<div class="flex-1 overflow-auto py-2">
			<nav class="grid items-start px-4 text-sm font-medium">
				{#each navGroups as group (group.label || 'main')}
					{@const filteredItems = group.items.filter((item) => {
						if (!item.roles) return !group.roles || group.roles.some((r) => userRoles.includes(r));
						return item.roles.some((r) => userRoles.includes(r));
					})}

					{#if filteredItems.length > 0}
						{#if group.label}
							<div class="mt-4 mb-2 px-3">
								<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
									{group.label}
								</p>
							</div>
						{/if}

						{#each filteredItems as item (item.href)}
							<a
								href={item.href}
								class={cn(
									'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
									(page.url.pathname === item.href ||
										(item.href !== '/siakad' && page.url.pathname.startsWith(item.href))) &&
										'bg-muted text-primary'
								)}
							>
								<item.icon class="h-4 w-4" />
								{item.label}
							</a>
						{/each}
					{/if}
				{/each}
			</nav>
		</div>
		<div class="mt-auto p-4">
			<div
				class="flex items-center gap-4 rounded-xl border bg-card p-4 text-card-foreground shadow-sm"
			>
				<Avatar>
					<AvatarFallback class="uppercase">
						{page.data.user?.email?.substring(0, 2) || 'US'}
					</AvatarFallback>
				</Avatar>
				<a href="/siakad/profile" class="flex-1 overflow-hidden hover:underline">
					<p class="truncate text-sm font-medium">{page.data.user?.email}</p>
					<p class="text-xs text-muted-foreground capitalize">{page.data.user?.roles?.[0]}</p>
				</a>
				<form action="/logout" method="POST">
					<Button
						variant="ghost"
						size="icon"
						type="submit"
						class="h-8 w-8 text-destructive hover:text-destructive"
					>
						<LogOut class="h-4 w-4" />
						<span class="sr-only">{m.auth_sign_out()}</span>
					</Button>
				</form>
			</div>
		</div>
	</div>
{/snippet}

<div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
	<!-- Desktop Sidebar -->
	<div class="hidden border-r bg-muted/40 md:block">
		{@render SidebarContent()}
	</div>

	<!-- Main Content Info -->
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
			<!-- Mobile Sidebar Trigger -->
			<Sheet>
				<SheetTrigger>
					{#snippet child({ props })}
						<Button variant="outline" size="icon" class="shrink-0 md:hidden" {...props}>
							<Menu class="h-5 w-5" />
							<span class="sr-only">{m.menu_toggle()}</span>
						</Button>
					{/snippet}
				</SheetTrigger>
				<SheetContent side="left" class="flex w-72 flex-col p-0">
					{@render SidebarContent()}
				</SheetContent>
			</Sheet>

			<div class="w-full flex-1">
				<h1 class="text-lg font-semibold text-primary capitalize md:text-xl">
					{page.url.pathname.split('/').pop()?.replace('-', ' ') || m.nav_academic()}
				</h1>
			</div>
			<NotificationBell token={data.token || ''} />
		</header>
		<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			{@render children?.()}
		</main>
	</div>
</div>
