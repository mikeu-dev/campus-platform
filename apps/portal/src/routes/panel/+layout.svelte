<script lang="ts">
	import { page } from '$app/state';
	import {
		LayoutDashboard,
		BookOpen,
		LogOut,
		GraduationCap,
		User,
		Menu,
		MessageSquare
	} from 'lucide-svelte';
	import NotificationBell from '$lib/components/NotificationBell.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';

	interface Props {
		children?: import('svelte').Snippet;
		data: { token?: string };
	}

	let { children, data }: Props = $props();

	/* Navigation Config */
	const coreNavItems = [
		{ href: '/panel', label: 'Dashboard', icon: LayoutDashboard }
	];
</script>

{#snippet SidebarContent()}
	<div class="flex h-full flex-col gap-2">
		<div class="flex h-14 items-center border-b px-6">
			<a href="/" class="flex items-center gap-2 font-semibold">
				<span class="text-primary text-xl font-bold">CampusApp</span>
			</a>
		</div>
		<div class="flex-1 overflow-auto py-2">
			<nav class="grid items-start px-4 text-sm font-medium">
				{#each coreNavItems as item}
					<a
						href={item.href}
						class={cn(
							'text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all',
							page.url.pathname === item.href && 'bg-muted text-primary'
						)}
					>
						<item.icon class="h-4 w-4" />
						{item.label}
					</a>
				{/each}

				{#if page.data.user?.roles?.includes('admin')}
					<div class="my-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">Admin</p>
					</div>
					<a
						href="/panel/users"
						class={cn(
							'text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all',
							page.url.pathname.includes('/users') && 'bg-muted text-primary'
						)}
					>
						<User class="h-4 w-4" />
						Users
					</a>
					<a
						href="/panel/courses"
						class={cn(
							'text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all',
							page.url.pathname.includes('/courses') && 'bg-muted text-primary'
						)}
					>
						<BookOpen class="h-4 w-4" />
						Courses
					</a>
					<a
						href="/panel/classes"
						class={cn(
							'text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2 transition-all',
							page.url.pathname.includes('/classes') && 'bg-muted text-primary'
						)}
					>
						<GraduationCap class="h-4 w-4" />
						Classes
					</a>
				{/if}
			</nav>
		</div>
		<div class="mt-auto p-4">
			<div class="flex items-center gap-4 rounded-xl border p-4 bg-card text-card-foreground shadow-sm">
				<Avatar>
					<AvatarFallback class="uppercase">
						{page.data.user?.email?.substring(0, 2) || 'US'}
					</AvatarFallback>
				</Avatar>
				<div class="flex-1 overflow-hidden">
					<p class="truncate text-sm font-medium">{page.data.user?.email}</p>
					<p class="text-xs text-muted-foreground capitalize">{page.data.user?.roles?.[0]}</p>
				</div>
                <form action="/logout" method="POST">
                    <Button variant="ghost" size="icon" type="submit" class="h-8 w-8 text-destructive hover:text-destructive">
                        <LogOut class="h-4 w-4" />
                        <span class="sr-only">Sign Out</span>
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
                            <span class="sr-only">Toggle navigation menu</span>
                        </Button>
                    {/snippet}
				</SheetTrigger>
				<SheetContent side="left" class="flex flex-col p-0 w-72">
					{@render SidebarContent()}
				</SheetContent>
			</Sheet>
			
			<div class="w-full flex-1">
				<h1 class="text-lg font-semibold md:text-xl text-primary capitalize">
                    {page.url.pathname.split('/').pop()?.replace('-', ' ') || 'Panel'}
                </h1>
			</div>
			<NotificationBell token={data.token || ''} />
		</header>
		<main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
			{@render children?.()}
		</main>
	</div>
</div>

