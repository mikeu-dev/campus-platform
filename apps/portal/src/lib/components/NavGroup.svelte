<script lang="ts">
	import { slide } from 'svelte/transition';
	import { ChevronDown } from 'lucide-svelte';
	import { cn } from '$lib/utils';
	import type { Component } from 'svelte';

	interface Props {
		label: string;
		icon: any; // Lucide icon component
		active?: boolean;
		open?: boolean;
		children?: import('svelte').Snippet;
	}

	let { label, icon: Icon, active = false, open: propOpen = false, children }: Props = $props();

	/* svelte-ignore state_referenced_locally */
	let isOpen = $state(active || propOpen);

	$effect(() => {
		if (active) isOpen = true;
	});

	function toggle() {
		isOpen = !isOpen;
	}
</script>

<div class="flex flex-col gap-1">
	<button
		onclick={toggle}
		class={cn(
			'flex w-full items-center justify-between rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary focus:outline-none',
			active && 'text-primary'
		)}
	>
		<div class="flex items-center gap-3">
			<Icon class="h-4 w-4" />
			<span class="text-sm font-medium">{label}</span>
		</div>
		<ChevronDown class={cn('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')} />
	</button>

	{#if isOpen}
		<div transition:slide={{ duration: 200 }} class="flex flex-col gap-1 pr-2 pl-9">
			{@render children?.()}
		</div>
	{/if}
</div>
