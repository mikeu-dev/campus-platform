<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3 class={cn('leading-none font-semibold tracking-tight', className)} {...rest}>
	{@render children?.()}
</h3>
