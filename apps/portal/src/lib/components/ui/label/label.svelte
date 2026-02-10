<script lang="ts">
	import { Label as BitsLabel } from 'bits-ui';
	import { cn } from '$lib/utils';

	let { class: className, children, ...rest }: BitsLabel.RootProps = $props();
</script>

<BitsLabel.Root
	class={cn(
		'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
		className
	)}
	{...rest}
>
	{@render children?.()}
</BitsLabel.Root>
