<script lang="ts">
	import { cn } from '$lib/utils';
	let { value = 0, class: className = '' } = $props();
</script>

<div class={cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', className)}>
	<div
		class="h-full w-full flex-1 bg-primary transition-all"
		style={`transform: translateX(-${100 - (value || 0)}%)`}
	></div>
</div>
