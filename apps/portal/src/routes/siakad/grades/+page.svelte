<script lang="ts">
	import {
		Award,
		TrendingUp,
		BarChart3,
		CheckCircle,
		Lock,
		Calendar,
		BookOpen,
		GraduationCap,
		Download,
		FileText
	} from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();
	const grades = $derived(data.grades);
	const stats = $derived(data.stats);
	const gpaData = $derived(data.gpaData);
	const academicGrades = $derived(data.academicGrades);

	// Mock period status - this would come from the server in a real scenario
	const gradePeriod = $derived({
		isOpen: true, // Forcing open for Phase 3 demo
		message: m.siakad_grades_period_closed_desc()
	});

	function getScoreColorClass(score: number): string {
		if (score >= 80) return 'bg-green-100 text-green-700';
		if (score >= 60) return 'bg-yellow-100 text-yellow-700';
		return 'bg-red-100 text-red-700';
	}

	function getScoreLabel(score: number): string {
		if (score >= 90) return 'A';
		if (score >= 80) return 'B';
		if (score >= 70) return 'C';
		if (score >= 60) return 'D';
		return 'F';
	}
</script>

<div class="space-y-8">
	<!-- Header -->
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.grades_title()}</h2>
			<p class="text-muted-foreground">{m.grades_desc()}</p>
		</div>
		<div class="flex gap-2">
			<Button variant="outline" size="sm" class="gap-2">
				<Download class="h-4 w-4" />
				Unduh KHS
			</Button>
		</div>
	</div>

	<!-- Stats Cards -->
	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		<Card class="border-primary/20 bg-primary/5">
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">IPK Kumulatif</CardTitle>
				<GraduationCap class="h-4 w-4 text-primary" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-black text-primary">{gpaData?.gpa?.toFixed(2) || '0.00'}</div>
				<p class="mt-1 text-[10px] text-muted-foreground">Skala 4.0</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Total SKS</CardTitle>
				<BookOpen class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{gpaData?.totalCredits || 0}</div>
				<p class="mt-1 text-[10px] text-muted-foreground">SKS Tempuh</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Rata-rata Tugas</CardTitle>
				<TrendingUp class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{stats?.averageScore || '--'}</div>
				<p class="mt-1 text-[10px] text-muted-foreground">Hanya Tugas LMS</p>
			</CardContent>
		</Card>

		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Tugas Dinilai</CardTitle>
				<CheckCircle class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-3xl font-bold">{stats?.gradedCount || 0}</div>
				<p class="mt-1 text-[10px] text-muted-foreground">
					Total {stats?.totalSubmissions || 0} Pengumpulan
				</p>
			</CardContent>
		</Card>
	</div>

	<Tabs value="khs" class="w-full">
		<TabsList class="mb-6 grid w-full max-w-md grid-cols-2">
			<TabsTrigger value="khs" class="gap-2">
				<FileText class="h-4 w-4" />
				Kartu Hasil Studi
			</TabsTrigger>
			<TabsTrigger value="assignments" class="gap-2">
				<Award class="h-4 w-4" />
				Detail Tugas LMS
			</TabsTrigger>
		</TabsList>

		<TabsContent value="khs" class="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>Kartu Hasil Studi (KHS)</CardTitle>
					<CardDescription>Daftar nilai mata kuliah semester ini.</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead class="w-[100px]">Kode</TableHead>
								<TableHead>Mata Kuliah</TableHead>
								<TableHead class="text-center">SKS</TableHead>
								<TableHead class="text-center">Nilai</TableHead>
								<TableHead class="text-center">Bobot</TableHead>
								<TableHead class="text-center">Status</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{#each academicGrades as item}
								<TableRow>
									<TableCell class="font-mono text-xs">{item.course_code}</TableCell>
									<TableCell class="font-medium">{item.course_name}</TableCell>
									<TableCell class="text-center">{item.credits}</TableCell>
									<TableCell class="text-center font-bold">
										{item.grade || 'TBA'}
									</TableCell>
									<TableCell class="text-center">
										{item.grade === 'A'
											? 4
											: item.grade === 'B'
												? 3
												: item.grade === 'C'
													? 2
													: item.grade === 'D'
														? 1
														: 0}
									</TableCell>
									<TableCell class="text-center">
										<Badge variant={item.status === 'completed' ? 'default' : 'outline'}>
											{item.status || 'Aktif'}
										</Badge>
									</TableCell>
								</TableRow>
							{:else}
								<TableRow>
									<TableCell colspan={6} class="h-24 text-center text-muted-foreground">
										Tidak ada data mata kuliah.
									</TableCell>
								</TableRow>
							{/each}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</TabsContent>

		<TabsContent value="assignments" class="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>{m.grades_history_title()}</CardTitle>
					<CardDescription>Rincian nilai untuk setiap tugas yang dikerjakan di LMS.</CardDescription
					>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>{m.grades_assignment()}</TableHead>
								<TableHead>{m.grades_score()}</TableHead>
								<TableHead>{m.grades_grade()}</TableHead>
								<TableHead>{m.grades_feedback()}</TableHead>
								<TableHead>{m.grades_date()}</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{#each grades as item}
								<TableRow>
									<TableCell class="font-medium">{item.assignment_title}</TableCell>
									<TableCell>
										<div
											class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${getScoreColorClass(item.score)}`}
										>
											{item.score}
										</div>
									</TableCell>
									<TableCell class="font-bold">{getScoreLabel(item.score)}</TableCell>
									<TableCell class="max-w-xs truncate text-muted-foreground"
										>{item.feedback || '-'}</TableCell
									>
									<TableCell class="text-xs text-muted-foreground">
										{new Date(item.submitted_at).toLocaleDateString('id-ID')}
									</TableCell>
								</TableRow>
							{:else}
								<TableRow>
									<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
										{m.grades_no_data()}
									</TableCell>
								</TableRow>
							{/each}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</TabsContent>
	</Tabs>
</div>
