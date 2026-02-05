<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { cn } from '$lib/utils';

	let { value = $bindable(), class: className, children, ...rest } = $props();

	const activeTab = writable(value);
	setContext('tabs', {
		activeTab,
		select: (v: string) => {
			activeTab.set(v);
			value = v;
		}
	});

	$effect(() => {
		activeTab.set(value);
	});
</script>

<div class={cn('w-full', className)} {...rest}>
	{@render children?.()}
</div>
