<script lang="ts">
	import { cn } from '$lib/utils';
	import type { HTMLAttributes } from 'svelte/elements';

	let { class: className, children, ...rest }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span class={cn('ml-auto text-xs tracking-widest opacity-60', className)} {...rest}>
	{@render children?.()}
</span>
