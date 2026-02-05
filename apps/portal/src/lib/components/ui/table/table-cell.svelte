<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		class: className,
		children,
		...rest
	}: HTMLAttributes<HTMLTableCellElement> & { colspan?: number; rowspan?: number } = $props();
</script>

<td
	class={cn('p-2 align-middle [&:has([role=checkbox])]:pr-0', className)}
	{...rest}
>
	{@render children?.()}
</td>
