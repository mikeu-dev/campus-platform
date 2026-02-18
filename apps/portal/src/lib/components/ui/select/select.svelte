<script lang="ts">
	import { cn } from '$lib/utils';
	let { children, value = $bindable(''), ...rest } = $props();
</script>

<div class="relative">
	<select
		bind:value
		class={cn(
			'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
			rest.class
		)}
		{...rest}
	>
		{@render children()}
	</select>
</div>
