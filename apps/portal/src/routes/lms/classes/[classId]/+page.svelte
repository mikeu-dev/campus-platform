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
		Upload,
		HelpCircle,
		Loader2,
		Plus
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
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Dialog,
		DialogContent,
		DialogHeader,
		DialogTitle,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import { cn } from '$lib/utils';
	import * as m from '$lib/paraglide/messages.js';
	import { enhance } from '$app/forms';

	let { data, form } = $props();
	const {
		classInfo,
		attendances,
		materials,
		assignments,
		attendanceSummary,
		studentId,
		user,
		quizzes,
		discussions,
		classId,
		isLecturer
	} = data;

	let activeMeeting = $state(1);
	let commentText = $state('');
	let isPosting = $state(false);

	// Lecturer dialogs
	let isAddMaterialOpen = $state(false);
	let isAddAssignmentOpen = $state(false);

	const meetings = Array.from({ length: 16 }, (_, i) => i + 1);

	const filteredMaterials = $derived(
		(materials || []).filter((mat: any) => mat.meeting_number === activeMeeting)
	);
	const filteredAssignments = $derived((assign: any) =>
		(assignments || []).filter((a: any) => a.meeting_number === activeMeeting)
	);
	const filteredQuizzes = $derived(
		(quizzes || []).filter((q: any) => q.meeting_number === activeMeeting)
	);
	const filteredDiscussions = $derived(discussions || []);

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
				{#if isLecturer}
					<Button size="sm" class="gap-2" onclick={() => (isAddMaterialOpen = true)}>
						<Plus class="h-4 w-4" />
						Tambah Materi
					</Button>
					<Button
						variant="secondary"
						size="sm"
						class="gap-2"
						onclick={() => (isAddAssignmentOpen = true)}
					>
						<Plus class="h-4 w-4" />
						Buat Tugas
					</Button>
				{/if}
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

			<div class="grid gap-6 md:grid-cols-2">
				<!-- Assignments -->
				<Card class="flex h-full flex-col overflow-hidden border-none shadow-sm">
					<CardHeader
						class="border-b border-indigo-100 bg-indigo-50 pb-3 dark:border-indigo-800 dark:bg-indigo-900/20"
					>
						<CardTitle class="flex items-center gap-2 text-lg text-indigo-700 dark:text-indigo-400">
							<PenLine class="h-5 w-5" />
							Tugas Pertemuan
						</CardTitle>
					</CardHeader>
					<CardContent class="flex-1 space-y-6 pt-6">
						{#each (assignments || []).filter((a: any) => a.meeting_number === activeMeeting) as task}
							<div class="space-y-4">
								<div class="flex flex-col gap-1">
									<h3 class="text-xl font-bold">{task.title}</h3>
									<p class="text-sm text-muted-foreground">{task.description}</p>
								</div>

								<div class="grid grid-cols-1 gap-2">
									<div class="space-y-1 rounded-xl border bg-muted/10 p-3">
										<p class="text-[10px] font-bold text-muted-foreground uppercase">
											Tenggat Waktu
										</p>
										<p class="text-sm font-semibold">
											{new Date(task.deadline).toLocaleString('id-ID')}
										</p>
									</div>
									<div class="space-y-1 rounded-xl border bg-muted/10 p-3">
										<p class="text-[10px] font-bold text-muted-foreground uppercase">Status</p>
										<Badge variant={task.is_submitted ? 'default' : 'destructive'}>
											{task.is_submitted ? 'Sudah Dikumpulkan' : 'Belum Dikumpulkan'}
										</Badge>
									</div>
								</div>

								{#if task.is_submitted && task.grade}
									<div
										class="flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/10"
									>
										<div>
											<p class="text-[10px] font-bold text-green-700 uppercase dark:text-green-400">
												Nilai
											</p>
											<h4 class="text-2xl font-black text-green-600 dark:text-green-400">
												{task.grade}
											</h4>
										</div>
										<Badge class="bg-green-500">Tuntas</Badge>
									</div>
								{/if}

								<form method="POST" action="?/uploadAssignment" use:enhance>
									<input type="hidden" name="assignmentId" value={task.id} />
									<div class="flex gap-3">
										{#if !task.is_submitted}
											<Button type="submit" class="h-10 flex-1 gap-2 rounded-xl">
												<Upload class="h-4 w-4" />
												Kirim Tugas
											</Button>
										{:else}
											<Button variant="outline" class="h-10 flex-1 gap-2 rounded-xl">
												<Download class="h-4 w-4" />
												File Saya
											</Button>
										{/if}
									</div>
								</form>
							</div>
							<Separator class="my-4" />
						{:else}
							<div
								class="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2"
							>
								<CheckCircle2 class="h-10 w-10 opacity-30" />
								<p class="font-medium italic text-sm">Tidak ada tugas</p>
							</div>
						{/each}
					</CardContent>
				</Card>

				<!-- Quizzes -->
				<Card class="flex h-full flex-col overflow-hidden border-none shadow-sm">
					<CardHeader
						class="border-b border-purple-100 bg-purple-50 pb-3 dark:border-purple-800 dark:bg-purple-900/20"
					>
						<CardTitle class="flex items-center gap-2 text-lg text-purple-700 dark:text-purple-400">
							<HelpCircle class="h-5 w-5" />
							Kuis Pertemuan
						</CardTitle>
					</CardHeader>
					<CardContent class="flex-1 space-y-6 pt-6">
						{#each filteredQuizzes as quiz}
							<div class="space-y-4">
								<div class="flex flex-col gap-1">
									<h3 class="text-xl font-bold">{quiz.title}</h3>
									<p class="text-sm text-muted-foreground">
										Kuis daring untuk pertemuan {activeMeeting}
									</p>
								</div>

								<div
									class="flex items-center justify-between rounded-xl border bg-purple-50/50 p-4 dark:bg-purple-900/10"
								>
									<div class="flex items-center gap-3">
										<div
											class="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800"
										>
											<HelpCircle class="h-6 w-6 text-purple-600 dark:text-purple-300" />
										</div>
										<div>
											<p class="text-sm font-bold">Mulai Kuis Sekarang</p>
										</div>
									</div>
								</div>

								<Button
									class="h-10 w-full rounded-xl bg-purple-600 text-white shadow-lg transition-all hover:bg-purple-700"
								>
									Mulai Kuis
								</Button>
							</div>
							<Separator class="my-4" />
						{:else}
							<div
								class="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2"
							>
								<HelpCircle class="h-10 w-10 opacity-30" />
								<p class="font-medium italic text-sm">Tidak ada kuis</p>
							</div>
						{/each}
					</CardContent>
				</Card>
			</div>

			<!-- Community / Discussion -->
			<Card class="overflow-hidden border-none shadow-sm">
				<CardHeader class="bg-muted/30 pb-3">
					<CardTitle class="flex items-center gap-2 text-lg">
						<MessageSquare class="h-5 w-5 text-primary" />
						Forum Diskusi Kelas
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-8 p-6">
					<!-- Post Form -->
					<form
						method="POST"
						action="?/postComment"
						use:enhance={() => {
							isPosting = true;
							return async ({ update }) => {
								await update();
								isPosting = false;
								commentText = '';
							};
						}}
						class="flex gap-4"
					>
						<div
							class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground shadow-md"
						>
							{user?.email?.charAt(0).toUpperCase() || 'U'}
						</div>
						<div class="flex-1 space-y-3">
							<div class="relative">
								<textarea
									name="content"
									bind:value={commentText}
									placeholder="Tulis tanggapan atau pertanyaan tentang materi hari ini..."
									class="min-h-[100px] w-full resize-none rounded-2xl border-2 bg-background p-4 text-sm shadow-inner transition-all focus:border-primary focus:ring-primary"
								></textarea>
								<Button
									type="submit"
									disabled={!commentText.trim() || isPosting}
									class="absolute right-4 bottom-4 gap-2 rounded-xl"
									size="sm"
								>
									{#if isPosting}
										<Loader2 class="h-4 w-4 animate-spin" />
									{:else}
										<Send class="h-4 w-4" />
									{/if}
									Post Tanggapan
								</Button>
							</div>
						</div>
					</form>

					<Separator />

					<!-- Comments List -->
					<div class="space-y-6">
						{#each filteredDiscussions as disc}
							<div class="flex gap-4">
								<div
									class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold"
								>
									{disc.user_email?.charAt(0).toUpperCase() || 'U'}
								</div>
								<div class="flex-1 space-y-1">
									<div class="flex items-center gap-2">
										<span class="text-sm font-bold">{disc.user_email?.split('@')[0]}</span>
										<span class="text-[10px] tracking-tight text-muted-foreground uppercase"
											>{new Date(disc.created_at).toLocaleString('id-ID')}</span
										>
									</div>
									<div class="rounded-2xl border bg-muted/30 p-4 text-sm leading-relaxed">
										{disc.content}
									</div>
								</div>
							</div>
						{:else}
							<div class="text-center py-10 text-muted-foreground italic text-sm">
								Belum ada diskusi. Jadilah yang pertama bertanya!
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>
		</div>
	</div>
</div>

<!-- Lecturer Dialogs -->
{#if isLecturer}
	<!-- Add Material Dialog -->
	<Dialog bind:open={isAddMaterialOpen}>
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Tambah Materi Baru</DialogTitle>
			</DialogHeader>
			<form
				action="?/addMaterial"
				method="POST"
				use:enhance={() => {
					return async ({ update }) => {
						await update();
						isAddMaterialOpen = false;
					};
				}}
				class="space-y-4"
			>
				<input type="hidden" name="meeting_number" value={activeMeeting} />
				<div class="space-y-2">
					<Label for="title">Judul Materi</Label>
					<Input id="title" name="title" required />
				</div>
				<div class="space-y-2">
					<Label for="content">Deskripsi / Konten</Label>
					<textarea
						id="content"
						name="content"
						class="min-h-[100px] w-full rounded-md border p-3 text-sm"
						placeholder="Deskripsikan materi atau tempelkan link..."
					></textarea>
				</div>
				<div class="space-y-2">
					<Label for="type">Tipe Materi</Label>
					<select id="type" name="type" class="w-full rounded-md border p-2 text-sm">
						<option value="text">Teks</option>
						<option value="link">Link</option>
						<option value="video">Video</option>
						<option value="file">File</option>
					</select>
				</div>
				<DialogFooter>
					<Button type="button" variant="ghost" onclick={() => (isAddMaterialOpen = false)}
						>Batal</Button
					>
					<Button type="submit">Simpan</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	</Dialog>

	<!-- Add Assignment Dialog -->
	<Dialog bind:open={isAddAssignmentOpen}>
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Buat Tugas Baru</DialogTitle>
			</DialogHeader>
			<form
				action="?/addAssignment"
				method="POST"
				use:enhance={() => {
					return async ({ update }) => {
						await update();
						isAddAssignmentOpen = false;
					};
				}}
				class="space-y-4"
			>
				<input type="hidden" name="meeting_number" value={activeMeeting} />
				<div class="space-y-2">
					<Label for="asn_title">Judul Tugas</Label>
					<Input id="asn_title" name="title" required />
				</div>
				<div class="space-y-2">
					<Label for="description">Deskripsi</Label>
					<textarea
						id="description"
						name="description"
						class="min-h-[80px] w-full rounded-md border p-3 text-sm"
						placeholder="Instruksi pengerjaan tugas..."
					></textarea>
				</div>
				<div class="space-y-2">
					<Label for="deadline">Deadline</Label>
					<Input id="deadline" name="deadline" type="datetime-local" required />
				</div>
				<DialogFooter>
					<Button type="button" variant="ghost" onclick={() => (isAddAssignmentOpen = false)}
						>Batal</Button
					>
					<Button type="submit">Buat Tugas</Button>
				</DialogFooter>
			</form>
		</DialogContent>
	</Dialog>
{/if}
