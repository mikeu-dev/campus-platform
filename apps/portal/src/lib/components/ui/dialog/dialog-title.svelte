<script lang="ts">
	import { cn } from '$lib/utils';
	let { children, class: className = '' } = $props();
</script>

<h3 class={cn('text-lg leading-none font-semibold tracking-tight', className)}>
	{@render children()}
</h3>
