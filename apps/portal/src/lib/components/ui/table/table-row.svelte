<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLTableRowElement> = $props();
</script>

<tr
	class={cn(
		'data-[state=selected]:bg-muted border-b transition-colors hover:bg-muted/50',
		className
	)}
	{...rest}
>
	{@render children?.()}
</tr>
