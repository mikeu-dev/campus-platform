<script lang="ts">
	import { enhance } from '$app/forms';
	import { Plus } from 'lucide-svelte';
	import DataTable from '$lib/components/DataTable.svelte';
	import * as m from '$lib/paraglide/messages.js';

	let { data, form } = $props();

	let showForm = $state(false);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<h2 class="text-2xl font-bold text-gray-900">{m.classes_mgmt_title()}</h2>
		<button
			onclick={() => (showForm = !showForm)}
			class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
		>
			<Plus class="mr-2 h-5 w-5" />
			{m.classes_open_button()}
		</button>
	</div>

	{#if showForm}
		<div class="rounded-lg border border-gray-200 bg-gray-50 p-6">
			<h3 class="mb-4 text-lg font-medium text-gray-900">{m.classes_open_title()}</h3>
			<form method="POST" action="?/create" use:enhance onsubmit={() => (showForm = false)}>
				<div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
					<div>
						<label for="course_id" class="block text-sm font-medium text-gray-700"
							>{m.classes_form_course()}</label
						>
						<select
							id="course_id"
							name="course_id"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
						>
							{#each data.courses as course (course.id)}
								<option value={course.id}>{course.code} - {course.name}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="lecturer_id" class="block text-sm font-medium text-gray-700"
							>{m.classes_form_lecturer()}</label
						>
						<select
							id="lecturer_id"
							name="lecturer_id"
							class="mt-1 block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none sm:text-sm"
						>
							<option value="">{m.classes_form_no_lecturer()}</option>
							{#each data.lecturers as lecturer (lecturer.id)}
								<option value={lecturer.id}>{lecturer.name}</option>
							{/each}
						</select>
					</div>
					<div>
						<label for="semester" class="block text-sm font-medium text-gray-700"
							>{m.classes_form_semester()}</label
						>
						<input
							type="text"
							name="semester"
							id="semester"
							placeholder="e.g. 1"
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
					<div>
						<label for="year" class="block text-sm font-medium text-gray-700"
							>{m.classes_form_year()}</label
						>
						<input
							type="number"
							name="year"
							id="year"
							value={new Date().getFullYear()}
							required
							class="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
					</div>
				</div>
				<div class="mt-6 flex justify-end">
					<button
						type="button"
						onclick={() => (showForm = false)}
						class="mr-3 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
						>{m.courses_cancel()}</button
					>
					<button
						type="submit"
						class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
						>{m.classes_open_submit()}</button
					>
				</div>
			</form>
			{#if form?.error}
				<div class="relative mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-red-700">
					<span class="block sm:inline">{form.error}</span>
				</div>
			{/if}
			{#if form?.success}
				<div
					class="relative mt-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-green-700"
				>
					<span class="block sm:inline">{m.classes_mgmt_success()}</span>
				</div>
			{/if}
		</div>
	{/if}

	<div class="flex flex-col">
		<DataTable
			data={data.classes}
			meta={data.meta}
			columns={[
				{ key: 'course', label: m.classes_table_course() },
				{ key: 'period', label: m.classes_table_period() },
				{ key: 'lecturer', label: m.classes_table_lecturer() }
			]}
		>
			{#snippet cell(item: any, columnKey: string)}
				{#if columnKey === 'course'}
					<div class="text-sm font-medium text-indigo-600">{item.course_code}</div>
					<div class="text-sm text-gray-500">{item.course_name}</div>
				{:else if columnKey === 'period'}
					<div class="text-sm text-gray-900">{item.semester}/{item.year}</div>
				{:else if columnKey === 'lecturer'}
					{#if item.lecturer_id}
						<!-- Finding lecturer name from loaded data might change item structure or need lookup -->
						<div class="text-sm text-gray-500">
							{data.lecturers.find((l: any) => l.id === item.lecturer_id)?.name ||
								m.classes_unknown()}
						</div>
					{:else}
						<span
							class="inline-flex rounded-full bg-yellow-100 px-2 text-xs leading-5 font-semibold text-yellow-800"
						>
							{m.classes_unassigned()}
						</span>
					{/if}
				{/if}
			{/snippet}
		</DataTable>
	</div>
</div>
