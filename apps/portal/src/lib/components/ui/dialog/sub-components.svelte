<script lang="ts" module>
	import { cn } from '$lib/utils';
</script>

<script lang="ts">
	let { children, class: className = '' } = $props();
</script>

{#snippet DialogHeader({ children, class: className = '' })}
	<div class={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)}>
		{@render children()}
	</div>
{/snippet}

{#snippet DialogFooter({ children, class: className = '' })}
	<div class={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)}>
		{@render children()}
	</div>
{/snippet}

{#snippet DialogTitle({ children, class: className = '' })}
	<h3 class={cn('text-lg leading-none font-semibold tracking-tight', className)}>
		{@render children()}
	</h3>
{/snippet}

{#snippet DialogDescription({ children, class: className = '' })}
	<p class={cn('text-sm text-muted-foreground', className)}>
		{@render children()}
	</p>
{/snippet}

{@render children()}
