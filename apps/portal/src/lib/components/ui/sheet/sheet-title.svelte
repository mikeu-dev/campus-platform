<script lang="ts">
	import { Dialog as SheetPrimitive } from 'bits-ui';
	import { cn } from '$lib/utils';

	let {
		class: className,
		children,
		...rest
	}: SheetPrimitive.TitleProps = $props();
</script>

<SheetPrimitive.Title
	class={cn('text-foreground text-lg font-semibold', className)}
	{...rest}
>
	{@render children?.()}
</SheetPrimitive.Title>
