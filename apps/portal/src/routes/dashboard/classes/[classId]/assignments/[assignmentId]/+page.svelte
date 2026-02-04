<script lang="ts">
	import { enhance } from '$app/forms';
	import { Clock, CheckCircle } from 'lucide-svelte';
	export let data;
	export let form;
</script>

<div class="space-y-6">
	<div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
		<div class="-mt-2 -ml-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="mt-2 ml-4">
				<h3 class="text-lg leading-6 font-medium text-gray-900">
					{data.assignment?.title || 'Assignment Details'}
				</h3>
				<div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
					<div class="mt-2 flex items-center text-sm text-gray-500">
						<Clock class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
						Due {data.assignment?.deadline
							? new Date(data.assignment.deadline).toLocaleDateString()
							: 'N/A'}
					</div>
				</div>
			</div>
		</div>

		<div class="mt-4 text-sm text-gray-600">
			{data.assignment?.description || ''}
		</div>
	</div>

	<!-- Submission Status -->
	{#if data.submission}
		<div class="rounded-md border border-green-200 bg-green-50 p-4">
			<div class="flex">
				<div class="flex-shrink-0">
					<CheckCircle class="h-5 w-5 text-green-400" />
				</div>
				<div class="ml-3">
					<h3 class="text-sm font-medium text-green-800">Submitted</h3>
					<div class="mt-2 text-sm text-green-700">
						<p>Submitted on {new Date(data.submission.submitted_at).toLocaleString()}</p>
						<p class="mt-2 rounded border border-green-100 bg-white p-2 font-mono">
							{data.submission.content}
						</p>
						{#if data.submission.score !== null}
							<p class="mt-2 font-bold">Score: {data.submission.score}</p>
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Submission Form -->
	<div class="bg-white shadow sm:rounded-lg">
		<div class="px-4 py-5 sm:p-6">
			<h3 class="text-lg leading-6 font-medium text-gray-900">Submit Work</h3>
			<div class="mt-2 max-w-xl text-sm text-gray-500">
				<p>Type your answer below (Text only for now).</p>
			</div>

			<form method="POST" use:enhance class="mt-5 sm:flex sm:items-center">
				<div class="w-full sm:max-w-xs">
					<label for="content" class="sr-only">Answer</label>
					<textarea
						id="content"
						name="content"
						rows="3"
						class="block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						placeholder="My answer is..."
					></textarea>
				</div>
				<button
					type="submit"
					class="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				>
					{data.submission ? 'Resubmit' : 'Submit'}
				</button>
			</form>

			{#if form?.error}
				<p class="mt-2 text-sm text-red-600">{form.error}</p>
			{/if}
			{#if form?.success}
				<p class="mt-2 text-sm text-green-600">Submitted successfully!</p>
			{/if}
		</div>
	</div>
</div>
