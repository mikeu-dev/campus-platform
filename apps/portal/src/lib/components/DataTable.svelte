<script lang="ts">
	import { type Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Search, ChevronLeft, ChevronRight } from 'lucide-svelte';

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
		empty,
		meta = { page: 1, limit: 10, total: 0, totalPages: 1 },
		loading = false
	}: {
		data: any[];
		columns: Column[];
		key?: string;
		emptyMessage?: string;
		cell?: Snippet<[any, string]>;
		header?: Snippet;
		empty?: Snippet;
		meta?: { page: number; limit: number; total: number; totalPages: number };
		loading?: boolean;
	} = $props();

	let searchText = $state($page.url.searchParams.get('search') || '');
	let timeout: any;

	function handleSearch(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		searchText = value;
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			updateQuery({ search: value, page: 1 });
		}, 300);
	}

	function changePage(newPage: number) {
		if (newPage >= 1 && newPage <= meta.totalPages) {
			updateQuery({ page: newPage });
		}
	}

	function updateQuery(newParams: Record<string, any>) {
		const url = new URL($page.url);
		Object.entries(newParams).forEach(([k, v]) => {
			if (v) url.searchParams.set(k, String(v));
			else url.searchParams.delete(k);
		});
		goto(url, { keepFocus: true, noScroll: true });
	}
</script>

{#snippet defaultCell(item: any, columnKey: string)}
	{item[columnKey]}
{/snippet}

<div class="space-y-4">
	<!-- Top Bar -->
	<div class="flex items-center justify-between">
		<div class="relative w-full max-w-xs">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
				<Search class="h-5 w-5 text-gray-400" />
			</div>
			<input
				type="text"
				class="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
				placeholder="Search..."
				value={searchText}
				oninput={handleSearch}
			/>
		</div>
	</div>

	<div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
		{#if header}
			<div class="border-b border-gray-200 bg-gray-50 px-6 py-4">
				{@render header()}
			</div>
		{/if}
		<div class="relative">
			{#if loading}
				<div class="absolute inset-0 z-10 flex items-center justify-center bg-white/50">
					<div
						class="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent"
					></div>
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
		<!-- Pagination -->
		<div
			class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
		>
			<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p class="text-sm text-gray-700">
						Showing
						<span class="font-medium">{(meta.page - 1) * meta.limit + 1}</span>
						to
						<span class="font-medium">{Math.min(meta.page * meta.limit, meta.total)}</span>
						of
						<span class="font-medium">{meta.total}</span>
						results
					</p>
				</div>
				<div>
					<nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
						<button
							onclick={() => changePage(meta.page - 1)}
							disabled={meta.page === 1}
							class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
						>
							<span class="sr-only">Previous</span>
							<ChevronLeft class="h-5 w-5" />
						</button>

						<!-- Simple Page Info (Current of Total) -->
						<span
							class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset focus:outline-offset-0"
						>
							{meta.page} / {meta.totalPages}
						</span>

						<button
							onclick={() => changePage(meta.page + 1)}
							disabled={meta.page === meta.totalPages}
							class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
						>
							<span class="sr-only">Next</span>
							<ChevronRight class="h-5 w-5" />
						</button>
					</nav>
				</div>
			</div>
		</div>
	</div>
</div>
