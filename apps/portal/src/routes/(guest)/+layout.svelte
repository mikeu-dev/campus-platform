<script lang="ts">
	import Header from '$lib/components/landing/Header.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	let { data, children } = $props();
</script>

<Header pages={data.pages} settings={data.settings} />

{@render children()}

<Footer settings={data.settings} />
