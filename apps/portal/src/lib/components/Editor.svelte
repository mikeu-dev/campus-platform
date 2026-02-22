<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Underline from '@tiptap/extension-underline';
	import Link from '@tiptap/extension-link';
	import { TextAlign } from '@tiptap/extension-text-align';
	import { Highlight } from '@tiptap/extension-highlight';
	import { Image } from '@tiptap/extension-image';
	import { Table } from '@tiptap/extension-table';
	import { TableRow } from '@tiptap/extension-table-row';
	import { TableCell } from '@tiptap/extension-table-cell';
	import { TableHeader } from '@tiptap/extension-table-header';

	import {
		Bold,
		Italic,
		Underline as UnderlineIcon,
		Strikethrough,
		List,
		ListOrdered,
		Quote,
		Heading1,
		Heading2,
		Heading3,
		Link as LinkIcon,
		Undo,
		Redo,
		AlignLeft,
		AlignCenter,
		AlignRight,
		AlignJustify,
		Highlighter,
		Minus,
		Image as ImageIcon,
		Table as TableIcon,
		Eraser
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import {
		DropdownMenu,
		DropdownMenuContent,
		DropdownMenuItem,
		DropdownMenuTrigger
	} from '$lib/components/ui/dropdown-menu';

	interface Props {
		content?: string;
		onchange?: (content: string) => void;
	}

	let { content = '', onchange }: Props = $props();

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
				}),
				TextAlign.configure({
					types: ['heading', 'paragraph']
				}),
				Highlight,
				Image,
				Table.configure({
					resizable: true
				}),
				TableRow,
				TableHeader,
				TableCell
			],
			content: content,
			onUpdate: ({ editor }) => {
				onchange?.(editor.getHTML());
			},
			editorProps: {
				attributes: {
					class:
						'prose prose-sm sm:prose-base dark:prose-invert focus:outline-none min-h-[400px] max-h-[700px] overflow-y-auto px-4 py-3 pb-20'
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
	const toggleStrike = () => editor?.chain().focus().toggleStrike().run();
	const toggleBulletList = () => editor?.chain().focus().toggleBulletList().run();
	const toggleOrderedList = () => editor?.chain().focus().toggleOrderedList().run();
	const toggleBlockquote = () => editor?.chain().focus().toggleBlockquote().run();
	const toggleHeading = (level: 1 | 2 | 3) =>
		editor?.chain().focus().toggleHeading({ level }).run();
	const setTextAlign = (align: string) => editor?.chain().focus().setTextAlign(align).run();
	const toggleHighlight = () => editor?.chain().focus().toggleHighlight().run();
	const setHorizontalRule = () => editor?.chain().focus().setHorizontalRule().run();
	const clearFormatting = () => editor?.chain().focus().unsetAllMarks().clearNodes().run();

	const addImage = () => {
		const url = window.prompt('URL Gambar:');
		if (url) {
			editor?.chain().focus().setImage({ src: url }).run();
		}
	};

	const addTable = () =>
		editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();

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

<div class="relative flex flex-col overflow-hidden rounded-md border border-input bg-background">
	<div class="sticky top-0 z-10 flex flex-wrap items-center gap-1 border-b bg-muted/50 p-1">
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
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('strike') && 'bg-muted text-primary')}
			onclick={toggleStrike}
			title="Strikethrough"
		>
			<Strikethrough class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive('highlight') && 'bg-muted text-primary')}
			onclick={toggleHighlight}
			title="Highlight"
		>
			<Highlighter class="h-4 w-4" />
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
			class={cn('h-8 w-8', editor?.isActive({ textAlign: 'left' }) && 'bg-muted text-primary')}
			onclick={() => setTextAlign('left')}
			title="Align Left"
		>
			<AlignLeft class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive({ textAlign: 'center' }) && 'bg-muted text-primary')}
			onclick={() => setTextAlign('center')}
			title="Align Center"
		>
			<AlignCenter class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive({ textAlign: 'right' }) && 'bg-muted text-primary')}
			onclick={() => setTextAlign('right')}
			title="Align Right"
		>
			<AlignRight class="h-4 w-4" />
		</Button>
		<Button
			variant="ghost"
			size="icon"
			class={cn('h-8 w-8', editor?.isActive({ textAlign: 'justify' }) && 'bg-muted text-primary')}
			onclick={() => setTextAlign('justify')}
			title="Justify"
		>
			<AlignJustify class="h-4 w-4" />
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
			class="h-8 w-8"
			onclick={setHorizontalRule}
			title="Horizontal Rule"
		>
			<Minus class="h-4 w-4" />
		</Button>
		<Button variant="ghost" size="icon" class="h-8 w-8" onclick={addImage} title="Add Image">
			<ImageIcon class="h-4 w-4" />
		</Button>

		<DropdownMenu>
			<DropdownMenuTrigger>
				{#snippet child({ props })}
					<Button
						{...props}
						variant="ghost"
						size="icon"
						class={cn('h-8 w-8', editor?.isActive('table') && 'bg-muted text-primary')}
						title="Table"
					>
						<TableIcon class="h-4 w-4" />
					</Button>
				{/snippet}
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start">
				<DropdownMenuItem onclick={addTable}>Insert Table</DropdownMenuItem>
				{#if editor?.isActive('table')}
					<DropdownMenuItem onclick={() => editor?.chain().focus().addColumnBefore().run()}
						>Add Column Before</DropdownMenuItem
					>
					<DropdownMenuItem onclick={() => editor?.chain().focus().addColumnAfter().run()}
						>Add Column After</DropdownMenuItem
					>
					<DropdownMenuItem onclick={() => editor?.chain().focus().deleteColumn().run()}
						>Delete Column</DropdownMenuItem
					>
					<DropdownMenuItem onclick={() => editor?.chain().focus().addRowBefore().run()}
						>Add Row Before</DropdownMenuItem
					>
					<DropdownMenuItem onclick={() => editor?.chain().focus().addRowAfter().run()}
						>Add Row After</DropdownMenuItem
					>
					<DropdownMenuItem onclick={() => editor?.chain().focus().deleteRow().run()}
						>Delete Row</DropdownMenuItem
					>
					<DropdownMenuItem onclick={() => editor?.chain().focus().deleteTable().run()}
						>Delete Table</DropdownMenuItem
					>
				{/if}
			</DropdownMenuContent>
		</DropdownMenu>

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

		<Button
			variant="ghost"
			size="icon"
			class="h-8 w-8"
			onclick={clearFormatting}
			title="Clear Formatting"
		>
			<Eraser class="h-4 w-4" />
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

	<div bind:this={element} class="tiptap-editor flex-1"></div>
</div>

<style>
	:global(.tiptap-editor .prose) {
		max-width: none;
	}
	:global(.tiptap-editor .prose:focus) {
		outline: none;
	}
	:global(.tiptap-editor table) {
		border-collapse: collapse;
		table-layout: fixed;
		width: 100%;
		margin: 0;
		overflow: hidden;
	}
	:global(.tiptap-editor table td, .tiptap-editor table th) {
		min-width: 1em;
		border: 1px solid #ced4da;
		padding: 3px 5px;
		vertical-align: top;
		box-sizing: border-box;
		position: relative;
	}
	:global(.tiptap-editor table th) {
		font-weight: bold;
		text-align: left;
		background-color: #f8f9fa;
	}
	:global(.tiptap-editor img) {
		max-width: 100%;
		height: auto;
		display: block;
		margin: 1rem auto;
	}
</style>
