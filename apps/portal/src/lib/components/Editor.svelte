<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Underline from '@tiptap/extension-underline';
	import Link from '@tiptap/extension-link';
	import {
		Bold,
		Italic,
		Underline as UnderlineIcon,
		List,
		ListOrdered,
		Quote,
		Heading1,
		Heading2,
		Heading3,
		Link as LinkIcon,
		Undo,
		Redo,
		Code
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';

	interface Props {
		content?: string;
		onchange?: (content: string) => void;
		placeholder?: string;
	}

	let { content = '', onchange, placeholder = 'Tulis konten di sini...' }: Props = $props();

	let element: HTMLElement;
	let editor: Editor | null = $state(null);

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Underline,
				Link.configure({
					openOnClick: false,
					HTMLAttributes: {
						class: 'text-primary underline'
					}
				})
			],
			content: content,
			onUpdate: ({ editor }) => {
				onchange?.(editor.getHTML());
			},
			editorProps: {
				attributes: {
					class:
						'prose prose-sm sm:prose-base dark:prose-invert focus:outline-none min-h-[300px] max-h-[600px] overflow-y-auto px-4 py-3'
				}
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});

	// Sync content from outside if changed
	$effect(() => {
		if (editor && content !== editor.getHTML()) {
			editor.commands.setContent(content, { emitUpdate: false });
		}
	});

	const toggleBold = () => editor?.chain().focus().toggleBold().run();
	const toggleItalic = () => editor?.chain().focus().toggleItalic().run();
	const toggleUnderline = () => editor?.chain().focus().toggleUnderline().run();
	const toggleBulletList = () => editor?.chain().focus().toggleBulletList().run();
	const toggleOrderedList = () => editor?.chain().focus().toggleOrderedList().run();
	const toggleBlockquote = () => editor?.chain().focus().toggleBlockquote().run();
	const toggleHeading = (level: 1 | 2 | 3) =>
		editor?.chain().focus().toggleHeading({ level }).run();
	const setLink = () => {
		const previousUrl = editor?.getAttributes('link').href;
		const url = window.prompt('URL:', previousUrl);

		if (url === null) return;
		if (url === '') {
			editor?.chain().focus().extendMarkRange('link').unsetLink().run();
			return;
		}

		editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	};
</script>

<div class="overflow-hidden rounded-md border border-input bg-background">
	<div class="flex flex-wrap items-center gap-1 border-b bg-muted/50 p-1">
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('bold') && 'bg-muted text-primary')}
			onclick={toggleBold}
			title="Bold"
		>
			<Bold class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('italic') && 'bg-muted text-primary')}
			onclick={toggleItalic}
			title="Italic"
		>
			<Italic class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('underline') && 'bg-muted text-primary')}
			onclick={toggleUnderline}
			title="Underline"
		>
			<UnderlineIcon class="h-4 w-4" />
		</Button>

		<div class="mx-1 h-4 w-px bg-border"></div>

		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('heading', { level: 1 }) && 'bg-muted text-primary')}
			onclick={() => toggleHeading(1)}
			title="Heading 1"
		>
			<Heading1 class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('heading', { level: 2 }) && 'bg-muted text-primary')}
			onclick={() => toggleHeading(2)}
			title="Heading 2"
		>
			<Heading2 class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('heading', { level: 3 }) && 'bg-muted text-primary')}
			onclick={() => toggleHeading(3)}
			title="Heading 3"
		>
			<Heading3 class="h-4 w-4" />
		</Button>

		<div class="mx-1 h-4 w-px bg-border"></div>

		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('bulletList') && 'bg-muted text-primary')}
			onclick={toggleBulletList}
			title="Bullet List"
		>
			<List class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('orderedList') && 'bg-muted text-primary')}
			onclick={toggleOrderedList}
			title="Ordered List"
		>
			<ListOrdered class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('blockquote') && 'bg-muted text-primary')}
			onclick={toggleBlockquote}
			title="Blockquote"
		>
			<Quote class="h-4 w-4" />
		</Button>

		<div class="mx-1 h-4 w-px bg-border"></div>

		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('link') && 'bg-muted text-primary')}
			onclick={setLink}
			title="Insert Link"
		>
			<LinkIcon class="h-4 w-4" />
		</Button>

		<div class="ml-auto flex items-center gap-1">
			<Button
				variant="ghost"
				size="icon"
				class="h-8 w-8"
				onclick={() => editor?.chain().focus().undo().run()}
				title="Undo"
			>
				<Undo class="h-4 w-4" />
			</Button>
			<Button
				variant="ghost"
				size="icon"
				class="h-8 w-8"
				onclick={() => editor?.chain().focus().redo().run()}
				title="Redo"
			>
				<Redo class="h-4 w-4" />
			</Button>
		</div>
	</div>

	<div bind:this={element} class="tiptap-editor"></div>
</div>

<style>
	:global(.tiptap-editor .prose) {
		max-width: none;
	}
	:global(.tiptap-editor .prose:focus) {
		outline: none;
	}
</style>
