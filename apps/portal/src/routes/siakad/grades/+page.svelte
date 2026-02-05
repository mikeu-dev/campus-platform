<script lang="ts">
	import { Award, TrendingUp, BarChart3, CheckCircle } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';

	let { data } = $props();

	function getScoreVariant(score: number): "default" | "secondary" | "destructive" | "outline" {
		if (score >= 80) return 'default'; // Greenish in theme usually, or we use custom class.
		// For standard shadcn badges, we might just use 'secondary' or 'outline' with custom classes if we want specific colors.
		// Let's stick to standard variants or use custom classes if strict colors needed.
		if (score >= 60) return 'secondary';
		return 'destructive';
	}
	
	function getScoreColorClass(score: number): string {
		if (score >= 80) return 'bg-green-100 text-green-700 hover:bg-green-100/80';
		if (score >= 60) return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100/80';
		return 'bg-red-100 text-red-700 hover:bg-red-100/80';
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
	<div>
		<h2 class="text-3xl font-bold tracking-tight">My Grades</h2>
		<p class="text-muted-foreground">Track your academic performance and progress.</p>
	</div>

	<!-- Stats Cards -->
	{#if data.stats}
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Average Score</CardTitle>
					<TrendingUp class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{data.stats.averageScore || '--'}</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Highest Score</CardTitle>
					<Award class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{data.stats.highestScore || '--'}</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Graded</CardTitle>
					<CheckCircle class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{data.stats.gradedCount}</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle class="text-sm font-medium">Submissions</CardTitle>
					<BarChart3 class="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div class="text-2xl font-bold">{data.stats.totalSubmissions}</div>
				</CardContent>
			</Card>
		</div>
	{/if}

	<!-- Grades Table -->
	<Card>
		<CardHeader>
			<CardTitle>Grade History</CardTitle>
		</CardHeader>
		<CardContent>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Assignment</TableHead>
						<TableHead>Score</TableHead>
						<TableHead>Grade</TableHead>
						<TableHead>Feedback</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each data.grades as item}
						<TableRow>
							<TableCell class="font-medium">{item.assignment_title}</TableCell>
							<TableCell>
								<div class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${getScoreColorClass(item.score)}`}>
									{item.score}
								</div>
							</TableCell>
							<TableCell class="font-bold">{getScoreLabel(item.score)}</TableCell>
							<TableCell class="max-w-xs truncate text-muted-foreground">{item.feedback || '-'}</TableCell>
							<TableCell class="text-muted-foreground">
								{new Date(item.submitted_at).toLocaleDateString()}
							</TableCell>
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={5} class="h-24 text-center">
								No graded assignments yet.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
