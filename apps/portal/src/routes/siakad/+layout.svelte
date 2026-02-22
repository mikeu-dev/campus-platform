<script lang="ts">
	import { page } from '$app/state';
	import {
		LayoutDashboard,
		BookOpen,
		LogOut,
		GraduationCap,
		Menu,
		MessageSquare,
		Calendar,
		Users,
		UserCircle,
		ChevronsUpDown
	} from 'lucide-svelte';
	import NotificationBell from '$lib/components/NotificationBell.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Avatar, AvatarFallback } from '$lib/components/ui/avatar';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		children?: import('svelte').Snippet;
		data: { token?: string };
	}

	let { children, data }: Props = $props();

	/* Navigation Config */
	interface NavItem {
		href: string;
		label: string;
		icon: any;
		roles?: string[];
	}

	interface NavGroup {
		label?: string;
		roles?: string[];
		items: NavItem[];
	}

	const navGroups: NavGroup[] = [
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
				},
				{
					href: '/siakad/profile',
					label: 'Profil',
					icon: UserCircle,
					roles: ['student', 'lecturer']
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
			items: [
				{ href: '/siakad/teaching', label: m.nav_teaching(), icon: BookOpen },
				{ href: '/siakad/advising', label: m.nav_advising(), icon: Users },
				{ href: '/siakad/research-service', label: m.nav_research_service(), icon: BookOpen },
				{ href: '/siakad/profile', label: 'Profil Dosen', icon: UserCircle }
			]
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
					{@const filteredItems = group.items.filter((item: NavItem) => {
						if (!item.roles)
							return !group.roles || group.roles.some((r: string) => userRoles.includes(r));
						return item.roles.some((r: string) => userRoles.includes(r));
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
		<!-- Profile Dropdown Menu -->
		<div class="mt-auto p-4">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="w-full outline-none">
					<div
						class="flex w-full cursor-pointer items-center gap-3 rounded-xl border bg-card p-3 text-card-foreground shadow-sm transition-colors hover:bg-accent"
					>
						<Avatar class="h-9 w-9">
							<AvatarFallback class="text-xs uppercase">
								{page.data.user?.email?.substring(0, 2) || 'US'}
							</AvatarFallback>
						</Avatar>
						<div class="flex-1 overflow-hidden text-left">
							<p class="truncate text-sm font-medium">{page.data.user?.email}</p>
							<p class="text-xs text-muted-foreground capitalize">{page.data.user?.roles?.[0]}</p>
						</div>
						<ChevronsUpDown class="h-4 w-4 shrink-0 text-muted-foreground" />
					</div>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="w-56" side="top" align="start">
					<DropdownMenu.Label>
						<div class="flex flex-col space-y-1">
							<p class="text-sm font-medium">{page.data.user?.email}</p>
							<p class="text-xs text-muted-foreground capitalize">{page.data.user?.roles?.[0]}</p>
						</div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<a href="/siakad/profile">
						<DropdownMenu.Item class="cursor-pointer gap-2">
							<UserCircle class="h-4 w-4" />
							Profil Saya
						</DropdownMenu.Item>
					</a>
					<a href="/lms">
						<DropdownMenu.Item class="cursor-pointer gap-2">
							<BookOpen class="h-4 w-4" />
							LMS
						</DropdownMenu.Item>
					</a>
					<DropdownMenu.Separator />
					<form action="/logout" method="POST">
						<button type="submit" class="w-full">
							<DropdownMenu.Item
								class="cursor-pointer gap-2 text-destructive focus:text-destructive"
							>
								<LogOut class="h-4 w-4" />
								{m.auth_sign_out()}
							</DropdownMenu.Item>
						</button>
					</form>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
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
