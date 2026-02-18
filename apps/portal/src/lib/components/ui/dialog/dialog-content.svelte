<script lang="ts">
	import { cn } from '$lib/utils';
	let { children, class: className = '' } = $props();
</script>

<div class={cn('grid gap-4 py-4', className)}>
	{@render children()}
</div>
