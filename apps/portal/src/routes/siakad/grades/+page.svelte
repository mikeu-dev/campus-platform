<script lang="ts">
	import { Award, TrendingUp, BarChart3, CheckCircle, Lock, Calendar } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();

	// Mock period status - this would come from the server in a real scenario
	const gradePeriod = $derived({
		isOpen: data.grades && data.grades.length > 0, // If we have grades, period is open. Otherwise, period might be closed.
		message: m.siakad_grades_period_closed_desc()
	});

	function getScoreVariant(score: number): 'default' | 'secondary' | 'destructive' | 'outline' {
		if (score >= 80) return 'default';
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
		<h2 class="text-3xl font-bold tracking-tight">{m.grades_title()}</h2>
		<p class="text-muted-foreground">{m.grades_desc()}</p>
	</div>

	<!-- Period Check -->
	{#if !gradePeriod.isOpen}
		<div
			class="relative w-full rounded-lg border bg-background p-4 text-foreground [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7"
		>
			<Lock class="h-4 w-4" />
			<h5 class="mb-1 leading-none font-medium tracking-tight">
				{m.siakad_grades_period_closed_title()}
			</h5>
			<div class="text-sm opacity-90">{gradePeriod.message}</div>
		</div>

		<Card>
			<CardContent class="flex flex-col items-center justify-center py-12 text-center">
				<Calendar class="h-12 w-12 text-muted-foreground/50" />
				<h3 class="mt-4 text-lg font-semibold">{m.siakad_grades_period_closed_title()}</h3>
				<p class="max-w-md text-muted-foreground">
					{m.siakad_grades_period_closed_note()}
				</p>
			</CardContent>
		</Card>
	{:else}
		<!-- Stats Cards -->
		{#if data.stats}
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle class="text-sm font-medium">{m.grades_avg_score()}</CardTitle>
						<TrendingUp class="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div class="text-2xl font-bold">{data.stats.averageScore || '--'}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle class="text-sm font-medium">{m.grades_highest_score()}</CardTitle>
						<Award class="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div class="text-2xl font-bold">{data.stats.highestScore || '--'}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle class="text-sm font-medium">{m.grades_graded()}</CardTitle>
						<CheckCircle class="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div class="text-2xl font-bold">{data.stats.gradedCount}</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle class="text-sm font-medium">{m.grades_submissions()}</CardTitle>
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
				<CardTitle>{m.grades_history_title()}</CardTitle>
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
						{#each data.grades as item}
							<TableRow>
								<TableCell class="font-medium">{item.assignment_title}</TableCell>
								<TableCell>
									<div
										class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none ${getScoreColorClass(item.score)}`}
									>
										{item.score}
									</div>
								</TableCell>
								<TableCell class="font-bold">{getScoreLabel(item.score)}</TableCell>
								<TableCell class="max-w-xs truncate text-muted-foreground"
									>{item.feedback || '-'}</TableCell
								>
								<TableCell class="text-muted-foreground">
									{new Date(item.submitted_at).toLocaleDateString()}
								</TableCell>
							</TableRow>
						{:else}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center">
									{m.grades_no_data()}
								</TableCell>
							</TableRow>
						{/each}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	{/if}
</div>
