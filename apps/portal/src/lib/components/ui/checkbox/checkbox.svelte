<script lang="ts">
	import { cn } from '$lib/utils';
	let { checked = $bindable(false), class: className = '', ...rest } = $props();
</script>

<input
	type="checkbox"
	bind:checked
	class={cn(
		'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
		className
	)}
	{...rest}
/>
