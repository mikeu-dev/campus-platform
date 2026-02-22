<script lang="ts">
	import { User, Wallet, Calendar, GraduationCap, Bell, BookOpen, Users } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	// Role handling
	const isLecturer = $derived(data.role === 'lecturer');

	// Use data from load function or fallback to empty/default
	const userInfo = $derived(
		data.userInfo || {
			name: isLecturer ? 'Dosen' : 'Mahasiswa',
			nim: '-',
			program: '-',
			semester: '-',
			status: '-'
		}
	);

	const finance = $derived(data.finance || { bill: 0, status: '-' });
	const gpaData = $derived(data.gpaData || { gpa: 0.0, totalCredits: 0 });
	const announcements = $derived(data.announcements || []);
	const schedules = $derived(data.schedules || []);
	const lecturerStats = $derived(data.lecturerStats || { totalClasses: 0, totalStudents: 0 });
</script>

<div class="space-y-8">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.siakad_dashboard_title()}</h2>
			<p class="text-muted-foreground">
				{isLecturer ? m.dashboard_welcome_lecturer() : m.dashboard_welcome_student()}
			</p>
		</div>
		<div class="flex items-center gap-2">
			<Badge variant="outline" class="px-3 py-1">
				<div class="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
				{m.dashboard_stats_active()}
			</Badge>
			<span class="text-sm text-muted-foreground"
				>{m.dashboard_stats_time()}: {new Date().toLocaleTimeString('id-ID', {
					hour: '2-digit',
					minute: '2-digit'
				})}</span
			>
		</div>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
		<!-- User Info Card -->
		<Card class="lg:col-span-2">
			<CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
					<User class="h-6 w-6 text-primary" />
				</div>
				<div class="flex flex-col">
					<CardTitle class="text-lg">{userInfo.name}</CardTitle>
					<span class="text-sm text-muted-foreground">
						{isLecturer
							? userInfo.platform_lecturer_number || '-'
							: userInfo.platform_student_number || userInfo.nim}
					</span>
				</div>
			</CardHeader>
			<CardContent>
				<div class="grid gap-2 text-sm">
					{#if !isLecturer}
						<div class="flex justify-between border-b py-1">
							<span class="text-muted-foreground">{m.siakad_user_program()}</span>
							<span class="text-right font-medium"
								>{userInfo.program || userInfo.study_program}</span
							>
						</div>
						<div class="flex justify-between border-b py-1">
							<span class="text-muted-foreground">{m.siakad_user_semester()}</span>
							<span class="text-right text-sm font-medium">Semester {userInfo.semester || '-'}</span
							>
						</div>
					{:else}
						<div class="flex justify-between border-b py-1">
							<span class="text-muted-foreground">{m.siakad_lecturer_number()}</span>
							<span class="text-right font-medium">{userInfo.platform_lecturer_number || '-'}</span>
						</div>
						<div class="flex justify-between border-b py-1">
							<span class="text-muted-foreground">Jabatan Fungsional</span>
							<span class="text-right text-sm font-medium">Dosen Tetap</span>
						</div>
					{/if}
					<div class="flex justify-between py-1">
						<span class="text-muted-foreground">{m.siakad_user_status()}</span>
						<Badge
							variant="outline"
							class="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
							>{userInfo.status || m.dashboard_stats_active()}</Badge
						>
					</div>
				</div>
			</CardContent>
		</Card>

		{#if !isLecturer}
			<!-- Student Cards -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">{m.siakad_finance_title()}</CardTitle>
					<Wallet class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">
						{finance.bill === 0
							? m.siakad_finance_paid()
							: `Rp ${finance.bill.toLocaleString('id-ID')}`}
					</div>
					<p class="text-xs text-muted-foreground">
						{m.siakad_finance_status()}: {finance.status}
					</p>
					{#if finance.bill > 0}
						<button
							class="mt-4 w-full rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
						>
							{m.siakad_finance_pay()}
						</button>
					{/if}
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">{m.siakad_gpa_title()}</CardTitle>
					<GraduationCap class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{gpaData.gpa.toFixed(2)}</div>
					<p class="text-xs text-muted-foreground">{m.siakad_gpa_desc()}</p>
					<div class="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
						<div class="h-full bg-primary" style="width: {(gpaData.gpa / 4) * 100}%"></div>
					</div>
					<p class="mt-2 text-[10px] text-muted-foreground">
						Total SKS: {gpaData.totalCredits}
					</p>
				</CardContent>
			</Card>
		{:else}
			<!-- Lecturer Stats -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">{m.siakad_lecturer_classes()}</CardTitle>
					<BookOpen class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{lecturerStats.totalClasses}</div>
					<p class="text-xs text-muted-foreground">Kelas Semester Ini</p>
					<Button variant="link" size="sm" class="mt-2 h-auto p-0" href="/siakad/teaching">
						Lihat Semua Kelas
					</Button>
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">{m.siakad_lecturer_students()}</CardTitle>
					<Users class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{lecturerStats.totalStudents}</div>
					<p class="text-xs text-muted-foreground">Mahasiswa Terdaftar</p>
				</CardContent>
			</Card>
		{/if}
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
		<!-- Announcements -->
		<Card class="lg:col-span-4">
			<CardHeader>
				<CardTitle>{m.siakad_announcements_title()}</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each announcements as announcement (announcement.id)}
						<div class="flex items-start gap-4 border-b pb-4 last:border-0 last:pb-0">
							<div
								class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded bg-blue-50 text-blue-600"
							>
								<Bell class="h-4 w-4" />
							</div>
							<div class="space-y-1">
								<h4 class="text-sm font-semibold">{announcement.title}</h4>
								<p class="line-clamp-2 text-xs text-muted-foreground">
									{announcement.content}
								</p>
								<span class="text-[10px] text-muted-foreground"
									>{new Date(announcement.created_at).toLocaleDateString('id-ID')}</span
								>
							</div>
						</div>
					{:else}
						<div
							class="flex flex-col items-center justify-center py-6 text-center text-muted-foreground"
						>
							<p class="text-sm">{m.chat_no_conversations()}</p>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Role Based Lists -->
		<Card class="lg:col-span-3">
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Calendar class="h-5 w-5 text-primary" />
					{isLecturer ? m.siakad_lecturer_teaching_schedule() : 'Jadwal Kuliah'}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each schedules as item (item.id)}
						<div class="flex items-center justify-between rounded-lg border p-3">
							<div class="space-y-1">
								<p class="text-sm font-bold">
									{isLecturer ? item.course_name : item.course_name}
								</p>
								<div class="flex items-center gap-2 text-[10px] text-muted-foreground">
									<span>{item.day || (isLecturer ? 'Reguler' : '-')}</span>
									<Separator orientation="vertical" class="h-2" />
									<span>
										{#if item.start_time}
											{item.start_time.substring(0, 5)} - {item.end_time.substring(0, 5)}
										{:else}
											Sesuai Jadwal
										{/if}
									</span>
								</div>
							</div>
							<Badge variant="secondary" class="text-[10px]">{item.room || 'TBA'}</Badge>
						</div>
					{:else}
						<div
							class="flex flex-col items-center justify-center py-6 text-center text-muted-foreground"
						>
							<p class="text-sm">
								{isLecturer ? 'Tidak ada jadwal mengajar.' : 'Tidak ada jadwal kuliah.'}
							</p>
							{#if !isLecturer}
								<Button variant="link" size="sm" href="/siakad/krs">Isi KRS Sekarang</Button>
							{/if}
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>
	</div>
</div>
