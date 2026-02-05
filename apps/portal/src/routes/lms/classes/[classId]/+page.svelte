<script lang="ts">
	import {
		User,
		CheckCircle2,
		FileText,
		MessageSquare,
		BookOpen,
		Download,
		Send,
		AlertCircle,
		PenLine,
		Upload
	} from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription,
		CardFooter
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();
	const { classInfo, attendances, materials, assignments, attendanceSummary, studentId, user } =
		data;

	let activeMeeting = $state(1);

	const meetings = Array.from({ length: 16 }, (_, i) => i + 1);

	const filteredMaterials = $derived(
		(materials || []).filter((m: any) => m.meeting_number === activeMeeting)
	);
	const filteredAssignments = $derived(
		(assignments || []).filter((a: any) => a.meeting_number === activeMeeting)
	);
	const currentAttendance = $derived(
		(attendances || []).find((a: any) => a.meeting_number === activeMeeting)
	);

	function getAttendanceStatus(meeting: number) {
		const att = (attendances || []).find((a: any) => a.meeting_number === meeting);
		return att?.status || 'Belum Presensi';
	}

	function getAttendanceBadgeVariant(status: string) {
		switch (status) {
			case 'hadir':
				return 'default';
			case 'alfa':
				return 'destructive';
			case 'izin':
				return 'secondary';
			case 'sakit':
				return 'secondary';
			default:
				return 'outline';
		}
	}
</script>

<div class="grid grid-cols-1 gap-6 lg:grid-cols-4">
	<!-- Sidebar: Meeting Navigator -->
	<div class="space-y-6 lg:col-span-1">
		<Card class="border-none bg-muted/30 shadow-sm">
			<CardHeader class="px-4 pb-3">
				<CardTitle class="text-sm font-bold tracking-wider text-muted-foreground uppercase"
					>Log Perkuliahan</CardTitle
				>
			</CardHeader>
			<CardContent class="px-2 pb-2">
				<div class="grid grid-cols-4 gap-2 lg:grid-cols-2">
					{#each meetings as item}
						<button
							onclick={() => (activeMeeting = item)}
							class={cn(
								'flex flex-col items-center justify-center rounded-xl border-2 p-3 transition-all',
								activeMeeting === item
									? 'scale-105 border-primary bg-primary text-primary-foreground shadow-md'
									: 'border-transparent bg-background hover:bg-muted'
							)}
						>
							<span class="text-[10px] font-bold uppercase opacity-70">Pert</span>
							<span class="text-lg font-bold">{item}</span>
							<div
								class={cn(
									'mt-1 h-1 w-1 rounded-full',
									getAttendanceStatus(item) === 'hadir' ? 'bg-green-400' : 'bg-muted-foreground/30'
								)}
							></div>
						</button>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Stats Card -->
		<Card class="overflow-hidden border-none shadow-sm">
			<div class="border-b bg-primary/10 p-4">
				<h3 class="flex items-center gap-2 font-bold">
					<User class="h-4 w-4 text-primary" />
					Info Dosen
				</h3>
			</div>
			<CardContent class="space-y-3 p-4">
				<div>
					<p class="text-xs font-bold text-muted-foreground uppercase">Lecturer Name</p>
					<p class="font-semibold text-primary">{classInfo?.lecturer_name || 'TBA'}</p>
				</div>
				<Separator />
				<div class="grid grid-cols-2 gap-4">
					<div>
						<p class="text-[10px] font-bold text-muted-foreground uppercase">Presensi</p>
						<p class="text-xl font-bold">{attendanceSummary?.hadir || 0}/16</p>
					</div>
					<div>
						<p class="text-[10px] font-bold text-muted-foreground uppercase">Tugas</p>
						<p class="text-xl font-bold">{assignments?.length || 0}</p>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- Attendance Summary Small -->
		<Card class="border-none shadow-sm">
			<CardHeader class="pb-2">
				<CardTitle class="text-sm">Ringkasan Kehadiran</CardTitle>
			</CardHeader>
			<CardContent class="grid grid-cols-2 gap-2 text-xs">
				<div class="flex items-center gap-1">
					<div class="h-2 w-2 rounded-full bg-green-500"></div>
					Hadir: {attendanceSummary?.hadir || 0}
				</div>
				<div class="flex items-center gap-1">
					<div class="h-2 w-2 rounded-full bg-red-500"></div>
					Alfa: {attendanceSummary?.alfa || 0}
				</div>
				<div class="flex items-center gap-1">
					<div class="h-2 w-2 rounded-full bg-yellow-500"></div>
					Izin: {attendanceSummary?.izin || 0}
				</div>
				<div class="flex items-center gap-1">
					<div class="h-2 w-2 rounded-full bg-blue-500"></div>
					Sakit: {attendanceSummary?.sakit || 0}
				</div>
			</CardContent>
			<CardFooter class="pt-0">
				<Button variant="outline" size="sm" class="h-8 w-full bg-muted/50 text-[10px]"
					>Detail Presensi</Button
				>
			</CardFooter>
		</Card>
	</div>

	<!-- Main Content: Meeting Details -->
	<div class="space-y-6 lg:col-span-3">
		<div class="flex items-center justify-between">
			<div>
				<h2 class="text-3xl font-extrabold tracking-tight">Pertemuan {activeMeeting}</h2>
				<div class="mt-2 flex items-center gap-2">
					<Badge
						variant={getAttendanceBadgeVariant(getAttendanceStatus(activeMeeting))}
						class="px-3 py-1 capitalize"
					>
						Status: {getAttendanceStatus(activeMeeting)}
					</Badge>
				</div>
			</div>
			<div class="hidden gap-2 sm:flex">
				<Button variant="outline" size="sm" class="gap-2">
					<FileText class="h-4 w-4" />
					Unduh RPS
				</Button>
			</div>
		</div>

		<div class="grid gap-6">
			<!-- Rencana & Materi -->
			<Card class="border-none shadow-sm">
				<CardHeader class="bg-muted/30 pb-3">
					<CardTitle class="flex items-center gap-2 text-lg">
						<BookOpen class="h-5 w-5 text-primary" />
						Rencana Materi & Pembelajaran
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-4 pt-6">
					<div>
						<h4 class="mb-2 text-sm font-bold tracking-wider text-muted-foreground uppercase">
							Topik Pembahasan
						</h4>
						{#if filteredMaterials.length > 0}
							<p class="text-lg leading-relaxed font-medium">{filteredMaterials[0].title}</p>
						{:else}
							<div
								class="flex items-center gap-2 rounded-xl bg-muted/20 p-4 text-muted-foreground italic"
							>
								<AlertCircle class="h-4 w-4" />
								Rencana perkuliahan belum dibuat oleh dosen
							</div>
						{/if}
					</div>

					<div>
						<h4 class="mb-2 text-sm font-bold tracking-wider text-muted-foreground uppercase">
							Metode Pembelajaran
						</h4>
						<Badge
							variant="secondary"
							class="border-primary/20 bg-primary/10 px-4 py-1 text-sm text-primary"
						>
							{classInfo?.type || 'Hybrid Learning'}
						</Badge>
					</div>

					<Separator />

					<div>
						<h4 class="mb-3 text-sm font-bold tracking-wider text-muted-foreground uppercase">
							Materi Belajar
						</h4>
						<div class="grid gap-3">
							{#each filteredMaterials as mat}
								<div
									class="flex items-center justify-between rounded-xl border bg-card p-4 transition-all hover:border-primary"
								>
									<div class="flex items-center gap-3 overflow-hidden">
										<div
											class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-100"
										>
											<FileText class="h-6 w-6 text-orange-600" />
										</div>
										<div class="overflow-hidden">
											<p class="truncate font-bold">{mat.title}</p>
											<p class="text-xs text-muted-foreground">{mat.type || 'Dokumen'}</p>
										</div>
									</div>
									<Button variant="ghost" size="icon" class="text-primary hover:bg-primary/10">
										<Download class="h-5 w-5" />
									</Button>
								</div>
							{:else}
								<p class="text-sm text-muted-foreground italic">
									Belum ada materi untuk pertemuan ini
								</p>
							{/each}
						</div>
					</div>
				</CardContent>
			</Card>

			<!-- Assignments -->
			<Card class="overflow-hidden border-none shadow-sm">
				<CardHeader
					class="border-b border-indigo-100 bg-indigo-50 pb-3 dark:border-indigo-800 dark:bg-indigo-900/20"
				>
					<CardTitle class="flex items-center gap-2 text-lg text-indigo-700 dark:text-indigo-400">
						<PenLine class="h-5 w-5" />
						Tugas Pertemuan
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-6 pt-6">
					{#each filteredAssignments as task}
						<div class="space-y-4">
							<div class="flex flex-col gap-1">
								<h3 class="text-xl font-bold">{task.title}</h3>
								<p class="text-sm text-muted-foreground">{task.description}</p>
							</div>

							<div class="grid gap-4 sm:grid-cols-2">
								<div class="space-y-1 rounded-xl border bg-muted/10 p-4">
									<p class="text-[10px] font-bold text-muted-foreground uppercase">Tenggat Waktu</p>
									<p class="font-semibold">{new Date(task.deadline).toLocaleString('id-ID')}</p>
								</div>
								<div class="space-y-1 rounded-xl border bg-muted/10 p-4">
									<p class="text-[10px] font-bold text-muted-foreground uppercase">
										Status Pengerjaan
									</p>
									<Badge variant={task.is_submitted ? 'default' : 'destructive'}>
										{task.is_submitted ? 'Sudah Dikumpulkan' : 'Belum Dikumpulkan'}
									</Badge>
								</div>
							</div>

							{#if task.is_submitted && task.grade}
								<div
									class="flex items-center justify-between rounded-2xl border-2 border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/10"
								>
									<div>
										<p class="text-xs font-bold text-green-700 uppercase dark:text-green-400">
											Nilai Tugas
										</p>
										<h4 class="text-4xl font-black text-green-600 dark:text-green-400">
											{task.grade}
										</h4>
									</div>
									<div class="text-right">
										<p class="text-xs font-bold text-green-700 uppercase dark:text-green-400">
											Status
										</p>
										<Badge class="bg-green-500">Tuntas</Badge>
									</div>
								</div>
							{/if}

							<div class="flex gap-3">
								{#if !task.is_submitted}
									<Button class="h-12 flex-1 gap-2 rounded-xl">
										<Upload class="h-5 w-5" />
										Upload Jawaban
									</Button>
								{:else}
									<Button variant="outline" class="h-12 flex-1 gap-2 rounded-xl">
										<Download class="h-5 w-5" />
										Unduh File Saya
									</Button>
									<Button variant="secondary" class="h-12 gap-2 rounded-xl">Re-Upload</Button>
								{/if}
							</div>
						</div>
						<Separator class="my-4" />
					{:else}
						<div
							class="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2"
						>
							<CheckCircle2 class="h-10 w-10 opacity-30" />
							<p class="font-medium italic">Tidak ada tugas untuk pertemuan ini</p>
						</div>
					{/each}
				</CardContent>
			</Card>

			<!-- Community / Discussion -->
			<Card class="border-none shadow-sm">
				<CardHeader class="bg-muted/30 pb-3">
					<CardTitle class="flex items-center gap-2 text-lg">
						<MessageSquare class="h-5 w-5 text-primary" />
						Forum Diskusi Pertemuan
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-4 p-6">
					<div class="flex gap-4">
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-md"
						>
							{user?.email?.charAt(0).toUpperCase() || 'U'}
						</div>
						<div class="flex-1 space-y-4">
							<div class="relative">
								<textarea
									placeholder="Tulis tanggapan atau pertanyaan tentang materi hari ini..."
									class="min-h-[120px] w-full resize-none rounded-2xl border-2 bg-background p-4 shadow-inner transition-all focus:border-primary focus:ring-primary"
								></textarea>
								<Button class="absolute right-4 bottom-4 gap-2 rounded-xl" size="sm">
									<Send class="h-4 w-4" />
									Post Tanggapan
								</Button>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</div>
