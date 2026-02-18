<script lang="ts">
	import { cn } from '$lib/utils';
	let { open = $bindable(false), children, class: className = '' } = $props();
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center p-4">
		<!-- Backdrop -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="fixed inset-0 bg-black/50 transition-opacity" onclick={() => (open = false)}></div>

		<!-- Content -->
		<div
			class={cn(
				'relative z-50 w-full max-w-lg rounded-xl bg-background p-6 shadow-2xl ring-1 ring-black/5 transition-all',
				className
			)}
		>
			{@render children()}
		</div>
	</div>
{/if}
