<script lang="ts">
	import {
		Users,
		GraduationCap,
		BookOpen,
		Calendar,
		TrendingUp,
		UserCheck,
		UserX,
		Clock,
		BarChart3,
		PieChart
	} from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	let { data } = $props();
	const { pmbStats, academicStats, userStats } = $derived(data);

	// Calculate conversion rate
	const conversionRate = $derived(
		pmbStats.total > 0 ? ((pmbStats.passed / pmbStats.total) * 100).toFixed(1) : '0'
	);
</script>

<div class="space-y-6">
	<div>
		<h1 class="flex items-center gap-2 text-3xl font-bold tracking-tight">
			<BarChart3 class="h-8 w-8 text-primary" />
			Dashboard Analitik
		</h1>
		<p class="text-muted-foreground">Ringkasan statistik platform kampus.</p>
	</div>

	<!-- Overview Stats -->
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		<Card>
			<CardHeader class="flex flex-row items-center justify-between pb-2">
				<CardTitle class="text-sm font-medium">Total Pengguna</CardTitle>
				<Users class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{userStats.totalUsers}</div>
				<p class="text-xs text-muted-foreground">Akun terdaftar</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center justify-between pb-2">
				<CardTitle class="text-sm font-medium">Mahasiswa Aktif</CardTitle>
				<GraduationCap class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{academicStats.totalStudents}</div>
				<p class="text-xs text-muted-foreground">Profil di sistem akademik</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center justify-between pb-2">
				<CardTitle class="text-sm font-medium">Mata Kuliah</CardTitle>
				<BookOpen class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{academicStats.totalCourses}</div>
				<p class="text-xs text-muted-foreground">Dalam database master</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center justify-between pb-2">
				<CardTitle class="text-sm font-medium">Kelas Aktif</CardTitle>
				<Calendar class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{academicStats.totalClasses}</div>
				<p class="text-xs text-muted-foreground">Semester ini</p>
			</CardContent>
		</Card>
	</div>

	<div class="grid gap-6 lg:grid-cols-2">
		<!-- PMB Stats -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<PieChart class="h-5 w-5 text-primary" />
					Statistik PMB
				</CardTitle>
				<CardDescription>Ringkasan pendaftaran mahasiswa baru.</CardDescription>
			</CardHeader>
			<CardContent class="space-y-6">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-4xl font-bold">{pmbStats.total}</p>
						<p class="text-sm text-muted-foreground">Total Pendaftar</p>
					</div>
					<div class="text-right">
						<p class="text-2xl font-bold text-green-600">{conversionRate}%</p>
						<p class="text-xs text-muted-foreground">Tingkat Kelulusan</p>
					</div>
				</div>

				<Separator />

				<div class="grid grid-cols-3 gap-4 text-center">
					<div class="rounded-lg bg-yellow-50 p-4">
						<Clock class="mx-auto mb-1 h-5 w-5 text-yellow-600" />
						<p class="text-2xl font-bold text-yellow-700">{pmbStats.pending}</p>
						<p class="text-[10px] tracking-wider text-yellow-600 uppercase">Pending</p>
					</div>
					<div class="rounded-lg bg-green-50 p-4">
						<UserCheck class="mx-auto mb-1 h-5 w-5 text-green-600" />
						<p class="text-2xl font-bold text-green-700">{pmbStats.passed}</p>
						<p class="text-[10px] tracking-wider text-green-600 uppercase">Lolos</p>
					</div>
					<div class="rounded-lg bg-red-50 p-4">
						<UserX class="mx-auto mb-1 h-5 w-5 text-red-600" />
						<p class="text-2xl font-bold text-red-700">{pmbStats.rejected}</p>
						<p class="text-[10px] tracking-wider text-red-600 uppercase">Ditolak</p>
					</div>
				</div>

				<!-- Visual Bar -->
				<div class="space-y-2">
					<p class="text-xs font-medium text-muted-foreground">Distribusi Status</p>
					<div class="flex h-4 w-full overflow-hidden rounded-full bg-muted">
						{#if pmbStats.total > 0}
							<div
								class="bg-yellow-500 transition-all"
								style="width: {(pmbStats.pending / pmbStats.total) * 100}%"
							></div>
							<div
								class="bg-green-500 transition-all"
								style="width: {(pmbStats.passed / pmbStats.total) * 100}%"
							></div>
							<div
								class="bg-red-500 transition-all"
								style="width: {(pmbStats.rejected / pmbStats.total) * 100}%"
							></div>
						{/if}
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- User Distribution -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Users class="h-5 w-5 text-primary" />
					Distribusi Pengguna
				</CardTitle>
				<CardDescription>Breakdown pengguna berdasarkan peran.</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<div class="h-3 w-3 rounded-full bg-blue-500"></div>
							<span class="text-sm">Mahasiswa</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="font-bold">{userStats.students}</span>
							<Badge variant="outline" class="text-[10px]">
								{userStats.totalUsers > 0
									? ((userStats.students / userStats.totalUsers) * 100).toFixed(0)
									: 0}%
							</Badge>
						</div>
					</div>
					<div class="h-2 w-full rounded-full bg-muted">
						<div
							class="h-full rounded-full bg-blue-500"
							style="width: {userStats.totalUsers > 0
								? (userStats.students / userStats.totalUsers) * 100
								: 0}%"
						></div>
					</div>
				</div>

				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<div class="h-3 w-3 rounded-full bg-purple-500"></div>
							<span class="text-sm">Dosen</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="font-bold">{userStats.lecturers}</span>
							<Badge variant="outline" class="text-[10px]">
								{userStats.totalUsers > 0
									? ((userStats.lecturers / userStats.totalUsers) * 100).toFixed(0)
									: 0}%
							</Badge>
						</div>
					</div>
					<div class="h-2 w-full rounded-full bg-muted">
						<div
							class="h-full rounded-full bg-purple-500"
							style="width: {userStats.totalUsers > 0
								? (userStats.lecturers / userStats.totalUsers) * 100
								: 0}%"
						></div>
					</div>
				</div>

				<div class="space-y-3">
					<div class="flex items-center justify-between">
						<div class="flex items-center gap-2">
							<div class="h-3 w-3 rounded-full bg-orange-500"></div>
							<span class="text-sm">Admin</span>
						</div>
						<div class="flex items-center gap-2">
							<span class="font-bold">{userStats.admins}</span>
							<Badge variant="outline" class="text-[10px]">
								{userStats.totalUsers > 0
									? ((userStats.admins / userStats.totalUsers) * 100).toFixed(0)
									: 0}%
							</Badge>
						</div>
					</div>
					<div class="h-2 w-full rounded-full bg-muted">
						<div
							class="h-full rounded-full bg-orange-500"
							style="width: {userStats.totalUsers > 0
								? (userStats.admins / userStats.totalUsers) * 100
								: 0}%"
						></div>
					</div>
				</div>
			</CardContent>
		</Card>
	</div>
</div>
