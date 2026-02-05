<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
	class={cn(
		'bg-card text-card-foreground rounded-xl border shadow',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
