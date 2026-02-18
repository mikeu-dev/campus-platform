import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
import Content from './dropdown-menu-content.svelte';
import Item from './dropdown-menu-item.svelte';
import Label from './dropdown-menu-label.svelte';
import Separator from './dropdown-menu-separator.svelte';
import Shortcut from './dropdown-menu-shortcut.svelte';

const Root = DropdownMenuPrimitive.Root;
const Trigger = DropdownMenuPrimitive.Trigger;
const Group = DropdownMenuPrimitive.Group;
const Sub = DropdownMenuPrimitive.Sub;
const SubTrigger = DropdownMenuPrimitive.SubTrigger;
const SubContent = DropdownMenuPrimitive.SubContent;
const CheckboxItem = DropdownMenuPrimitive.CheckboxItem;
const RadioGroup = DropdownMenuPrimitive.RadioGroup;
const RadioItem = DropdownMenuPrimitive.RadioItem;

export {
	Root,
	Trigger,
	Content,
	Item,
	Label,
	Separator,
	Shortcut,
	Group,
	Sub,
	SubTrigger,
	SubContent,
	CheckboxItem,
	RadioGroup,
	RadioItem,
	//
	Root as DropdownMenu,
	Trigger as DropdownMenuTrigger,
	Content as DropdownMenuContent,
	Item as DropdownMenuItem,
	Label as DropdownMenuLabel,
	Separator as DropdownMenuSeparator,
	Shortcut as DropdownMenuShortcut,
	Group as DropdownMenuGroup,
	Sub as DropdownMenuSub,
	SubTrigger as DropdownMenuSubTrigger,
	SubContent as DropdownMenuSubContent,
	CheckboxItem as DropdownMenuCheckboxItem,
	RadioGroup as DropdownMenuRadioGroup,
	RadioItem as DropdownMenuRadioItem
};
