import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Helper types for svelte-radix / bits-ui
import type { Snippet } from "svelte";
export type WithoutChildrenOrChild<T> = T extends { children: Snippet; child: Snippet }
    ? never
    : T extends { children: Snippet }
    ? Omit<T, "children">
    : T extends { child: Snippet }
    ? Omit<T, "child">
    : T;
