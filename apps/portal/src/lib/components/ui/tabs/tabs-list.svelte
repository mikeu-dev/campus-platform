<script lang="ts">
	import { cn } from '$lib/utils';
	let {
		class: className = '',
		children,
		...rest
	}: { class?: string; children?: import('svelte').Snippet; [key: string]: any } = $props();
</script>

<div
	class={cn(
		'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
		className
	)}
	{...rest}
>
	{@render children?.()}
</div>
