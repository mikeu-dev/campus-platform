<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLTableCellElement> & { colspan?: number; rowspan?: number } = $props();
</script>

<th
	class={cn(
		'h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
		className
	)}
	{...rest}
>
	{@render children?.()}
</th>
