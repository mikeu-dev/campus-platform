<script lang="ts">
	import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	let {
		children,
		class: className,
		sideOffset = 4,
		...rest
	}: DropdownMenuPrimitive.ContentProps = $props();
</script>

<DropdownMenuPrimitive.Content
	{sideOffset}
	class={cn(
		'bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border p-1 shadow-md focus:outline-none',
		className
	)}
	{...rest}
>
	{@render children?.()}
</DropdownMenuPrimitive.Content>
