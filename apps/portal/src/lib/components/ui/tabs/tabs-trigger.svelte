<script lang="ts">
	import { getContext } from 'svelte';
	import { cn } from '$lib/utils';
	import type { Writable } from 'svelte/store';

	let { value, class: className, children, ...rest } = $props();

	const tabsContext = getContext('tabs') as {
		activeTab: Writable<string>;
		select: (v: string) => void;
	};
	const { activeTab, select } = tabsContext;
</script>

<button
	type="button"
	class={cn(
		'inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
		className
	)}
	data-state={$activeTab === value ? 'active' : 'inactive'}
	onclick={() => select(value)}
	{...rest}
>
	{@render children?.()}
</button>
