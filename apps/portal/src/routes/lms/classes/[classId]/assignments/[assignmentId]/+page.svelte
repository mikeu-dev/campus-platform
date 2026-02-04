<script lang="ts">
	import { enhance } from '$app/forms';
	import { Clock, CheckCircle } from 'lucide-svelte';
	let { data, form } = $props();
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
						<Clock class="mr-1.5 h-5 w-5 shrink-0 text-gray-400" />
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
	{#if data.submission && !data.isLecturer}
		<div class="rounded-md border border-green-200 bg-green-50 p-4">
			<div class="flex">
				<div class="shrink-0">
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
							{#if data.submission.feedback}
								<p class="text-xs italic">Feedback: {data.submission.feedback}</p>
							{/if}
						{/if}
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Views -->
	{#if data.isLecturer}
		<!-- Lecturer View -->
		<div class="overflow-hidden bg-white shadow sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h3 class="text-lg leading-6 font-medium text-gray-900">Student Submissions</h3>
				<ul class="mt-4 divide-y divide-gray-200">
					{#each data.submissions as sub (sub.id)}
						<li class="py-4">
							<div class="flex items-center justify-between">
								<div>
									<p class="text-xs text-gray-500">Stud ID: {sub.student_id}</p>
									<p class="text-xs text-gray-400">
										At: {new Date(sub.submitted_at).toLocaleString()}
									</p>
									<p
										class="mt-1 max-w-md rounded bg-gray-50 p-2 text-sm wrap-break-word text-gray-800"
									>
										{sub.content}
									</p>
								</div>
								<div class="ml-4">
									<form method="POST" action="?/grade" use:enhance class="flex items-end space-x-2">
										<input type="hidden" name="submissionId" value={sub.id} />
										<div>
											<label for="score-{sub.id}" class="sr-only">Score</label>
											<input
												type="number"
												name="score"
												id="score-{sub.id}"
												value={sub.score}
												placeholder="Score"
												class="w-20 rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
										<div>
											<label for="feedback-{sub.id}" class="sr-only">Feedback</label>
											<input
												type="text"
												name="feedback"
												id="feedback-{sub.id}"
												value={sub.feedback || ''}
												placeholder="Feedback"
												class="w-32 rounded-md border border-gray-300 p-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											/>
										</div>
										<button
											type="submit"
											class="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-indigo-700 focus:outline-none"
										>
											Grade
										</button>
									</form>
								</div>
							</div>
						</li>
					{:else}
						<li class="py-4 text-center text-gray-500">No submissions yet.</li>
					{/each}
				</ul>
			</div>
		</div>
	{:else}
		<!-- Student View -->
		<div class="bg-white shadow sm:rounded-lg">
			<div class="px-4 py-5 sm:p-6">
				<h3 class="text-lg leading-6 font-medium text-gray-900">Submit Work</h3>
				<div class="mt-2 max-w-xl text-sm text-gray-500">
					<p>Type your answer below (Text only for now).</p>
				</div>

				<form
					method="POST"
					action="?/submit"
					use:enhance
					class="mt-5"
					enctype="multipart/form-data"
				>
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
					<div class="mt-3">
						<label for="sub-file" class="block text-sm font-medium text-gray-700">Attach File</label
						>
						<input
							type="file"
							name="file"
							id="sub-file"
							class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:rounded-full file:border-0 file:bg-indigo-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-indigo-700 hover:file:bg-indigo-100"
						/>
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
	{/if}
</div>
