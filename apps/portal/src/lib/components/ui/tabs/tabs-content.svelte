<script lang="ts">
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils';
	import type { Writable } from 'svelte/store';

	let { value, class: className, children, ...rest } = $props();

	const tabsContext = getContext('tabs') as { activeTab: Writable<string> };
	const { activeTab } = tabsContext;
</script>

{#if $activeTab === value}
	<div
		class={cn(
			'mt-2 ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none',
			className
		)}
		{...rest}
	>
		{@render children?.()}
	</div>
{/if}
