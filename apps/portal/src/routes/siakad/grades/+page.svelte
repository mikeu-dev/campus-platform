<script lang="ts">
	import { Award, TrendingUp, BarChart3, CheckCircle } from 'lucide-svelte';
	import DataTable from '$lib/components/DataTable.svelte';
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
	<!-- Grades Table -->
	<DataTable
		data={data.grades}
		key="submission_id"
		columns={[
			{ key: 'assignment_title', label: 'Assignment' },
			{ key: 'score', label: 'Score' },
			{ key: 'grade_label', label: 'Grade' },
			{ key: 'feedback', label: 'Feedback', class: 'max-w-xs' },
			{ key: 'submitted_at', label: 'Date' }
		]}
	>
		{#snippet header()}
			<h3 class="text-lg font-semibold text-gray-900">Grade History</h3>
		{/snippet}

		{#snippet cell(item: any, columnKey: string)}
			{#if columnKey === 'assignment_title'}
				<p class="text-sm font-medium text-gray-900">{item.assignment_title}</p>
			{:else if columnKey === 'score'}
				<span
					class={`inline-flex items-center rounded-full px-2.5 py-0.5 text-sm font-semibold ${getScoreColor(item.score)}`}
				>
					{item.score}
				</span>
			{:else if columnKey === 'grade_label'}
				<span class="text-lg font-bold text-gray-900">{getScoreLabel(item.score)}</span>
			{:else if columnKey === 'feedback'}
				<p class="truncate text-sm text-gray-500">{item.feedback || '-'}</p>
			{:else if columnKey === 'submitted_at'}
				<div class="text-sm text-gray-500">
					{new Date(item.submitted_at).toLocaleDateString()}
				</div>
			{/if}
		{/snippet}

		{#snippet empty()}
			<tr>
				<td colspan="5" class="px-6 py-12 text-center">
					<BarChart3 class="mx-auto h-12 w-12 text-gray-300" />
					<p class="mt-2 text-gray-500">No graded assignments yet</p>
				</td>
			</tr>
		{/snippet}
	</DataTable>
</div>
