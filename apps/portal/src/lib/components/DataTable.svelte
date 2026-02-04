<script lang="ts">
	import { type Snippet } from 'svelte';

	type Column = {
		key: string;
		label: string;
		class?: string;
	};

	let {
		data,
		columns,
		key = 'id',
		emptyMessage = 'No data found.',
		cell = defaultCell,
		header,
		empty
	}: {
		data: any[];
		columns: Column[];
		key?: string;
		emptyMessage?: string;
		cell?: Snippet<[any, string]>;
		header?: Snippet;
		empty?: Snippet;
	} = $props();
</script>

{#snippet defaultCell(item: any, columnKey: string)}
	{item[columnKey]}
{/snippet}

<div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
	{#if header}
		<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
			{@render header()}
		</div>
	{/if}
	<table class="min-w-full divide-y divide-gray-200">
		<thead class="bg-gray-50">
			<tr>
				{#each columns as col}
					<th
						scope="col"
						class="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase {col.class ||
							''}"
					>
						{col.label}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-200 bg-white">
			{#each data as item (item[key])}
				<tr>
					{#each columns as col}
						<td class="px-6 py-4 whitespace-nowrap">
							{@render cell(item, col.key)}
						</td>
					{/each}
				</tr>
			{:else}
				{#if empty}
					{@render empty()}
				{:else}
					<tr>
						<td colspan={columns.length} class="px-6 py-4 text-center text-gray-500">
							{emptyMessage}
						</td>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
</div>
