<script lang="ts">
	import { page } from '$app/state';
	import {
		LogOut,
		GraduationCap,
		Menu,
		MessageSquare,
		Home,
		Calendar,
		FileText,
		ClipboardCheck,
		ChevronDown,
		BookOpen,
		Users,
		PenTool,
		UserCircle,
		Settings,
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

	/* Role detection */
	const userRoles: string[] = $derived(page.data.user?.roles || []);
	const isLecturer: boolean = $derived(userRoles.includes('lecturer'));

	/* Navigation Items */
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
		collapsible?: boolean;
	}

	const navGroups: NavGroup[] = $derived([
		{
			items: [
				{ href: '/lms', label: m.nav_lms_home(), icon: Home },
				{ href: '/lms/schedule', label: m.nav_lms_schedule(), icon: Calendar },
				{ href: '/lms/classes', label: m.nav_classes(), icon: GraduationCap },
				{ href: '/lms/chat', label: m.nav_messages(), icon: MessageSquare }
			]
		},
		{
			label: m.nav_lms_exams_group(),
			roles: ['student'],
			collapsible: true,
			items: [
				{ href: '/lms/exams', label: m.nav_lms_exams(), icon: FileText },
				{ href: '/lms/exams/permission', label: m.nav_lms_exam_permission(), icon: ClipboardCheck }
			]
		},
		{
			label: 'Dosen',
			roles: ['lecturer'],
			items: [
				{ href: '/lms/grading', label: 'Penilaian', icon: PenTool },
				{ href: '/lms/students', label: 'Mahasiswa Saya', icon: Users }
			]
		}
	]);

	let openGroups = $state<Record<string, boolean>>({});

	function toggleGroup(label: string) {
		openGroups = { ...openGroups, [label]: !openGroups[label] };
	}
</script>

{#snippet SidebarContent()}
	<div class="flex h-full flex-col gap-2">
		<div class="flex h-14 items-center border-b px-6">
			<a href="/" class="flex items-center gap-2 font-semibold">
				<span class="text-xl font-bold text-primary">{m.brand_name()}</span>
			</a>
		</div>
		<div class="flex-1 overflow-auto py-2">
			<nav class="grid items-start gap-1 px-4 text-sm font-medium">
				{#each navGroups as group (group.label || 'main')}
					{@const shouldShow =
						!group.roles || group.roles.some((r: string) => userRoles.includes(r))}
					{#if shouldShow}
						{#if group.label && group.collapsible}
							<div class="space-y-1">
								<button
									onclick={() => toggleGroup(group.label || '')}
									class="flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
								>
									<div class="flex items-center gap-3">
										<FileText class="h-4 w-4" />
										{group.label}
									</div>
									<ChevronDown
										class={cn(
											'h-4 w-4 transition-transform',
											openGroups[group.label || ''] && 'rotate-180'
										)}
									/>
								</button>
								{#if openGroups[group.label || '']}
									<div class="ml-4 flex flex-col gap-1 border-l pl-4">
										{#each group.items as item (item.href)}
											<a
												href={item.href}
												class={cn(
													'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
													page.url.pathname.startsWith(item.href) && 'text-primary'
												)}
											>
												{item.label}
											</a>
										{/each}
									</div>
								{/if}
							</div>
						{:else if group.label}
							<div class="mt-4 mb-2 px-3">
								<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
									{group.label}
								</p>
							</div>
							{#each group.items as item (item.href)}
								<a
									href={item.href}
									class={cn(
										'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
										(item.href === '/lms'
											? page.url.pathname === '/lms'
											: page.url.pathname.startsWith(item.href)) && 'bg-muted text-primary'
									)}
								>
									<item.icon class="h-4 w-4" />
									{item.label}
								</a>
							{/each}
						{:else}
							{#each group.items as item (item.href)}
								<a
									href={item.href}
									class={cn(
										'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
										(item.href === '/lms'
											? page.url.pathname === '/lms'
											: page.url.pathname.startsWith(item.href)) && 'bg-muted text-primary'
									)}
								>
									<item.icon class="h-4 w-4" />
									{item.label}
								</a>
							{/each}
						{/if}
					{/if}
				{/each}

				{#if page.data.user?.roles?.includes('admin')}
					<div class="mt-4 mb-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							Administrator
						</p>
					</div>
					<a
						href="/panel"
						class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
					>
						<Home class="h-4 w-4" />
						Admin Panel
					</a>
				{/if}
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
					<a href="/siakad">
						<DropdownMenu.Item class="cursor-pointer gap-2">
							<Settings class="h-4 w-4" />
							SIAKAD
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

	<!-- Main Content -->
	<div class="flex flex-col">
		<header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
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
					{page.url.pathname.split('/').pop()?.replace('-', ' ') || m.nav_dashboard()}
				</h1>
			</div>
			<NotificationBell token={data.token || ''} />
		</header>
		<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			{@render children?.()}
		</main>
	</div>
</div>
