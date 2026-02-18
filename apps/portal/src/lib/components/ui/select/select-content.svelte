<script lang="ts">
	let { children, class: className = '' }: { children?: import('svelte').Snippet; class?: string } =
		$props();
</script>

<div
	class="relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md {className}"
>
	{@render children?.()}
</div>
