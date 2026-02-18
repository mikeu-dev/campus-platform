<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import {
		Calendar,
		CheckCircle2,
		Clock,
		LayoutDashboard,
		MessageSquare,
		ArrowRight,
		Megaphone
	} from 'lucide-svelte';
	import {
		Sheet,
		SheetContent,
		SheetHeader,
		SheetTitle,
		SheetDescription
	} from '$lib/components/ui/sheet';

	let { data } = $props();

	// Reference data directly in derived or effects if needed to avoid state_referenced_locally
	const announcements = $derived(data.announcements || []);
	const deadlines = $derived(data.deadlines || []);
	const stats = $derived(data.stats || {});
	const user = $derived(data.user);

	let selectedAnnouncement = $state<any>(null);
	let isAnnouncementOpen = $state(false);

	function openAnnouncement(ann: any) {
		selectedAnnouncement = ann;
		isAnnouncementOpen = true;
	}

	function getGreeting() {
		const hour = new Date().getHours();
		if (hour < 12) return m.dashboard_greeting_morning();
		if (hour < 18) return m.dashboard_greeting_afternoon();
		return m.dashboard_greeting_evening();
	}
</script>

<svelte:head>
	<title>{m.nav_lms_home()} | CampusApp</title>
</svelte:head>

<div class="space-y-8">
	<!-- Welcome Section -->
	<div
		class="relative overflow-hidden rounded-2xl bg-primary px-8 py-12 text-primary-foreground shadow-lg"
	>
		<div class="relative z-10 flex flex-col gap-4">
			<Badge
				variant="secondary"
				class="w-fit border-none bg-primary-foreground/20 text-primary-foreground"
			>
				LMS Dashboard
			</Badge>
			<h1 class="text-4xl font-bold tracking-tight">
				{getGreeting()}, {user?.email?.split('@')[0]}!
			</h1>
			<p class="max-w-xl text-lg opacity-90">
				{m.dashboard_welcome_student()}
			</p>
			<div class="mt-4 flex gap-4">
				<Button variant="secondary" href="/lms/classes" class="gap-2">
					<LayoutDashboard class="h-4 w-4" />
					{m.nav_classes()}
				</Button>
			</div>
		</div>
		<!-- Decorative blobs -->
		<div class="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
		<div class="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<!-- Summary Stats -->
		<Card class="transition-shadow hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Progress Tugas</CardTitle>
				<CheckCircle2 class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">
					{stats?.gradedCount || 0} / {stats?.totalSubmissions || 0}
				</div>
				<p class="text-xs text-muted-foreground">Tugas telah dinilai</p>
				<div class="mt-4 h-2 w-full rounded-full bg-muted">
					<div
						class="h-full rounded-full bg-primary"
						style="width: {(stats?.gradedCount / stats?.totalSubmissions) * 100 || 0}%"
					></div>
				</div>
			</CardContent>
		</Card>

		<Card class="transition-shadow hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Deadline Terdekat</CardTitle>
				<Clock class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{deadlines.filter((d: any) => !d.is_submitted).length}</div>
				<p class="text-xs text-muted-foreground">Tugas belum dikumpulkan</p>
			</CardContent>
		</Card>

		<Card class="transition-shadow hover:shadow-md">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Aktivitas Forum</CardTitle>
				<MessageSquare class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">Aktif</div>
				<p class="text-xs text-muted-foreground">Lihat diskusi terbaru di kelas Anda</p>
			</CardContent>
		</Card>
	</div>

	<div class="grid gap-6 lg:grid-cols-2">
		<!-- Announcements Section -->
		<div class="space-y-4">
			<div class="flex items-center justify-between px-2">
				<h2 class="flex items-center gap-2 text-2xl font-bold tracking-tight">
					<Megaphone class="h-6 w-6 text-primary" />
					Pengumuman
				</h2>
			</div>

			<div class="space-y-4">
				{#if announcements && announcements.length > 0}
					{#each announcements as ann (ann.id)}
						<button
							onclick={() => openAnnouncement(ann)}
							class="flex w-full flex-col gap-2 rounded-xl border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-sm"
						>
							<div class="flex items-center justify-between">
								<Badge
									variant={ann.type === 'academic' ? 'default' : 'secondary'}
									class="capitalize"
								>
									{ann.type}
								</Badge>
								<span class="text-xs text-muted-foreground">
									{new Date(ann.created_at).toLocaleDateString('id-ID', {
										day: 'numeric',
										month: 'long'
									})}
								</span>
							</div>
							<h3 class="text-lg font-semibold">{ann.title}</h3>
							<p class="line-clamp-2 text-sm text-muted-foreground">
								{ann.content}
							</p>
							<div class="flex items-center gap-1 text-sm font-medium text-primary">
								Selengkapnya <ArrowRight class="h-4 w-4" />
							</div>
						</button>
					{/each}
				{:else}
					<div
						class="flex h-40 items-center justify-center rounded-xl border border-dashed text-muted-foreground"
					>
						Belum ada pengumuman terbaru
					</div>
				{/if}
			</div>
		</div>

		<!-- My Activity Section -->
		<div class="space-y-4">
			<div class="flex items-center justify-between px-2">
				<h2 class="text-2xl font-bold tracking-tight">Aktivitas Saya</h2>
			</div>

			<Card>
				<CardHeader class="pb-3">
					<CardTitle class="text-lg">Daftar Tugas</CardTitle>
					<CardDescription>Tugas yang akan datang sesuai tenggat waktu.</CardDescription>
				</CardHeader>
				<CardContent class="grid gap-4">
					{#if deadlines && deadlines.length > 0}
						{#each deadlines as task (task.id)}
							<div class="flex items-center justify-between gap-4 rounded-lg border p-3">
								<div class="flex flex-col gap-1 overflow-hidden">
									<h4 class="truncate font-medium">{task.title}</h4>
									<div class="flex items-center gap-2 text-xs text-muted-foreground">
										<Calendar class="h-3 w-3" />
										{new Date(task.deadline).toLocaleString('id-ID')}
									</div>
								</div>
								<Badge variant={task.is_submitted ? 'secondary' : 'destructive'}>
									{task.is_submitted ? 'Selesai' : 'Belum'}
								</Badge>
							</div>
						{/each}
					{:else}
						<p class="py-8 text-center text-sm text-muted-foreground italic">
							Tidak ada tugas mendatang
						</p>
					{/if}
				</CardContent>
			</Card>
		</div>
	</div>
</div>

<!-- Announcement Detail Modal (using Sheet) -->
<Sheet bind:open={isAnnouncementOpen}>
	<SheetContent side="right" class="w-full overflow-y-auto sm:max-w-lg">
		<SheetHeader>
			<Badge variant="outline" class="mb-2 w-fit capitalize">{selectedAnnouncement?.type}</Badge>
			<SheetTitle class="text-2xl font-bold">{selectedAnnouncement?.title}</SheetTitle>
			<SheetDescription>
				Diterbitkan pada {selectedAnnouncement
					? new Date(selectedAnnouncement.created_at).toLocaleDateString('id-ID', {
							day: 'numeric',
							month: 'long',
							year: 'numeric'
						})
					: ''}
			</SheetDescription>
		</SheetHeader>
		<Separator class="my-6" />
		<div class="space-y-4">
			<div class="prose prose-sm dark:prose-invert">
				{#each (selectedAnnouncement?.content || '').split('\n') as paragraph, i (i)}
					<p>{paragraph}</p>
				{/each}
			</div>
		</div>
	</SheetContent>
</Sheet>
