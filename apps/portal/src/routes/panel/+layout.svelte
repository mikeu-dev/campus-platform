<script lang="ts">
	import { page } from '$app/state';
	import {
		LayoutDashboard,
		BookOpen,
		LogOut,
		GraduationCap,
		User,
		Menu,
		MessageSquare,
		Image,
		FileText,
		Video,
		CalendarDays,
		Newspaper,
		Settings2,
		ExternalLink,
		UsersRound,
		CalendarRange,
		ClipboardCheck,
		CreditCard,
		Library,
		BarChart3
	} from 'lucide-svelte';
	import NotificationBell from '$lib/components/NotificationBell.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Sheet, SheetContent, SheetTrigger } from '$lib/components/ui/sheet';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';

	interface Props {
		children?: import('svelte').Snippet;
		data: { token?: string };
	}

	let { children, data }: Props = $props();

	/* Navigation Config */
	const coreNavItems = [{ href: '/panel', label: m.nav_dashboard(), icon: LayoutDashboard }];
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
				{#each coreNavItems as item}
					<a
						href={item.href}
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname === item.href && 'bg-muted text-primary'
						)}
					>
						<item.icon class="h-4 w-4" />
						{item.label}
					</a>
				{/each}

				{#if page.data.user?.roles?.includes('admin')}
					<div class="my-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							{m.nav_section_admin()}
						</p>
					</div>
					<a
						href="/panel/users"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/users') && 'bg-muted text-primary'
						)}
					>
						<User class="h-4 w-4" />
						{m.nav_users()}
					</a>
					<a
						href="/panel/courses"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/courses') && 'bg-muted text-primary'
						)}
					>
						<BookOpen class="h-4 w-4" />
						{m.nav_courses()}
					</a>
					<a
						href="/panel/classes"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/classes') && 'bg-muted text-primary'
						)}
					>
						<GraduationCap class="h-4 w-4" />
						{m.nav_classes()}
					</a>

					<Separator class="mx-4 my-4" />
					<div class="my-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							Informasi Publik
						</p>
					</div>
					<a
						href="/panel/cms"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname === '/panel/cms' && 'bg-muted text-primary'
						)}
					>
						<LayoutDashboard class="h-4 w-4" />
						Dasbor CMS
					</a>
					<a
						href="/panel/cms/sliders"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/sliders') && 'bg-muted text-primary'
						)}
					>
						<Image class="h-4 w-4" />
						Slider Hero
					</a>
					<a
						href="/panel/cms/posts"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/posts') && 'bg-muted text-primary'
						)}
					>
						<Newspaper class="h-4 w-4" />
						Berita & Info
					</a>
					<a
						href="/panel/cms/agendas"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/agendas') && 'bg-muted text-primary'
						)}
					>
						<CalendarDays class="h-4 w-4" />
						Agenda Kampus
					</a>
					<a
						href="/panel/cms/videos"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/videos') && 'bg-muted text-primary'
						)}
					>
						<Video class="h-4 w-4" />
						Kanal Video
					</a>
					<a
						href="/panel/cms/pages"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/pages') && 'bg-muted text-primary'
						)}
					>
						<FileText class="h-4 w-4" />
						Halaman Dinamis
					</a>
					<a
						href="/panel/cms/links"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/links') && 'bg-muted text-primary'
						)}
					>
						<ExternalLink class="h-4 w-4" />
						Tautan Terkait
					</a>
					<a
						href="/panel/cms/settings"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/cms/settings') && 'bg-muted text-primary'
						)}
					>
						<Settings2 class="h-4 w-4" />
						Pengaturan Konten
					</a>

					<Separator class="mx-4 my-4" />
					<div class="my-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							Penerimaan (PMB)
						</p>
					</div>
					<a
						href="/panel/pmb"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname === '/panel/pmb' && 'bg-muted text-primary'
						)}
					>
						<LayoutDashboard class="h-4 w-4" />
						Dasbor PMB
					</a>
					<a
						href="/panel/pmb/periods"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/pmb/periods') && 'bg-muted text-primary'
						)}
					>
						<CalendarRange class="h-4 w-4" />
						Gelombang & Jalur
					</a>
					<a
						href="/panel/pmb/prodis"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/pmb/prodis') && 'bg-muted text-primary'
						)}
					>
						<Library class="h-4 w-4" />
						Program Studi
					</a>
					<a
						href="/panel/pmb/applicants"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/pmb/applicants') && 'bg-muted text-primary'
						)}
					>
						<UsersRound class="h-4 w-4" />
						Data Pendaftar
					</a>
					<a
						href="/panel/pmb/verification"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/pmb/verification') && 'bg-muted text-primary'
						)}
					>
						<ClipboardCheck class="h-4 w-4" />
						Verifikasi Dokumen
					</a>

					<Separator class="mx-4 my-4" />
					<div class="my-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							Manajemen Akademik
						</p>
					</div>
					<a
						href="/panel/academic/students"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/academic/students') && 'bg-muted text-primary'
						)}
					>
						<UsersRound class="h-4 w-4" />
						Data Mahasiswa
					</a>
					<a
						href="/panel/academic/lecturers"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/academic/lecturers') && 'bg-muted text-primary'
						)}
					>
						<User class="h-4 w-4" />
						Data Dosen
					</a>
					<a
						href="/panel/academic/courses"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/academic/courses') && 'bg-muted text-primary'
						)}
					>
						<BookOpen class="h-4 w-4" />
						Mata Kuliah (Master)
					</a>
					<a
						href="/panel/academic/classes"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/academic/classes') && 'bg-muted text-primary'
						)}
					>
						<CalendarDays class="h-4 w-4" />
						Jadwal & Kelas
					</a>

					<Separator class="mx-4 my-4" />
					<div class="my-2 px-3">
						<p class="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
							Laporan & Analitik
						</p>
					</div>
					<a
						href="/panel/analytics"
						class={cn(
							'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
							page.url.pathname.includes('/panel/analytics') && 'bg-muted text-primary'
						)}
					>
						<BarChart3 class="h-4 w-4" />
						Dashboard Analitik
					</a>
				{/if}
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
				<div class="flex-1 overflow-hidden">
					<p class="truncate text-sm font-medium">{page.data.user?.email}</p>
					<p class="text-xs text-muted-foreground capitalize">{page.data.user?.roles?.[0]}</p>
				</div>
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
