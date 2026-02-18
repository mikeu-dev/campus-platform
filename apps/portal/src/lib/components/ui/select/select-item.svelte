<script lang="ts">
	let {
		children,
		value,
		class: className = ''
	}: { children?: import('svelte').Snippet; value: string; class?: string } = $props();
</script>

<option
	{value}
	class="relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none {className}"
>
	{@render children?.()}
</option>
