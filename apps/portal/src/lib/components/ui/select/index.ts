import Select from './select.svelte';
import SelectTrigger from './select-trigger.svelte';
import SelectValue from './select-value.svelte';

// For simplified usage in this workspace
export const SelectContent = ({ children }: { children: any }) => children;
export const SelectItem = ({ children, value }: { children: any, value: string }) => {
    // This is a bit of a hack since we are using native select underneath
    // but the component expects this structure
    return children;
};

export { Select, SelectTrigger, SelectValue };
