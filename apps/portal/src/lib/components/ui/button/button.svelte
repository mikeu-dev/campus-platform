<script lang="ts" module>
	import type { WithElementRef } from 'bits-ui';
	import { type VariantProps, cva } from 'class-variance-authority';

	export const buttonVariants = cva(
		'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
		{
			variants: {
				variant: {
					default:
						'bg-primary text-primary-foreground shadow hover:bg-primary/90',
					destructive:
						'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
					outline:
						'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
					secondary:
						'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
					ghost: 'hover:bg-accent hover:text-accent-foreground',
					link: 'text-primary underline-offset-4 hover:underline'
				},
				size: {
					default: 'h-9 px-4 py-2',
					sm: 'h-8 rounded-md px-3 text-xs',
					lg: 'h-10 rounded-md px-8',
					icon: 'h-9 w-9'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);

	export type ButtonVariant = VariantProps<typeof buttonVariants>;
	export type ButtonProps = WithElementRef<BitsButton.RootProps> & ButtonVariant;
</script>

<script lang="ts">
	import { Button as BitsButton } from 'bits-ui';
	import { cn } from '$lib/utils';

	let {
		class: className,
		variant = 'default',
		size = 'default',
		ref = $bindable(null),
		children,
		...rest
	}: ButtonProps = $props();
</script>

<BitsButton.Root
	bind:ref
	class={cn(buttonVariants({ variant, size, className }))}
	{...rest}
>
	{@render children?.()}
</BitsButton.Root>
