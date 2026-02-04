<script lang="ts">
	import { Award, TrendingUp, BarChart3, CheckCircle } from 'lucide-svelte';
	let { data } = $props();

	function getScoreColor(score: number): string {
		if (score >= 80) return 'text-green-600 bg-green-100';
		if (score >= 60) return 'text-yellow-600 bg-yellow-100';
		return 'text-red-600 bg-red-100';
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
		<h2 class="text-2xl font-bold text-gray-900">My Grades</h2>
		<p class="mt-1 text-gray-500">Track your academic performance</p>
	</div>

	<!-- Stats Cards -->
	{#if data.stats}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-gray-500">Average Score</p>
						<p class="mt-2 text-3xl font-bold text-indigo-600">
							{data.stats.averageScore || '--'}
						</p>
					</div>
					<div class="rounded-xl bg-indigo-100 p-3 text-indigo-600">
						<TrendingUp class="h-6 w-6" />
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-gray-500">Highest Score</p>
						<p class="mt-2 text-3xl font-bold text-green-600">
							{data.stats.highestScore || '--'}
						</p>
					</div>
					<div class="rounded-xl bg-green-100 p-3 text-green-600">
						<Award class="h-6 w-6" />
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-gray-500">Graded</p>
						<p class="mt-2 text-3xl font-bold text-gray-900">{data.stats.gradedCount}</p>
					</div>
					<div class="rounded-xl bg-gray-100 p-3 text-gray-600">
						<CheckCircle class="h-6 w-6" />
					</div>
				</div>
			</div>

			<div class="rounded-xl border border-gray-100 bg-white p-6 shadow-sm">
				<div class="flex items-center justify-between">
					<div>
						<p class="text-sm font-medium text-gray-500">Submissions</p>
						<p class="mt-2 text-3xl font-bold text-gray-900">{data.stats.totalSubmissions}</p>
					</div>
					<div class="rounded-xl bg-purple-100 p-3 text-purple-600">
						<BarChart3 class="h-6 w-6" />
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Grades Table -->
	<div class="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
		<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
			<h3 class="text-lg font-semibold text-gray-900">Grade History</h3>
		</div>
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="bg-gray-50">
					<tr>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Assignment</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Score</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Grade</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Feedback</th
						>
						<th
							class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Date</th
						>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each data.grades as grade (grade.submission_id)}
						<tr class="hover:bg-gray-50">
							<td class="px-6 py-4 whitespace-nowrap">
								<p class="text-sm font-medium text-gray-900">{grade.assignment_title}</p>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span
									class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-semibold ${getScoreColor(grade.score)}`}
								>
									{grade.score}
								</span>
							</td>
							<td class="px-6 py-4 whitespace-nowrap">
								<span class="text-lg font-bold text-gray-900">{getScoreLabel(grade.score)}</span>
							</td>
							<td class="max-w-xs truncate px-6 py-4">
								<p class="text-sm text-gray-500">{grade.feedback || '-'}</p>
							</td>
							<td class="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{new Date(grade.submitted_at).toLocaleDateString()}
							</td>
						</tr>
					{:else}
						<tr>
							<td colspan="5" class="px-6 py-12 text-center">
								<BarChart3 class="mx-auto h-12 w-12 text-gray-300" />
								<p class="mt-2 text-gray-500">No graded assignments yet</p>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
