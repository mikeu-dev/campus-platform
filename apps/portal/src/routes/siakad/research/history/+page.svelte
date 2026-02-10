<script lang="ts">
	import { FileText, Clock, CheckCircle2, XCircle, ChevronRight, Search } from 'lucide-svelte';
	import { Card, CardContent } from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$lib/paraglide/messages.js';

	let { data } = $props();
	const researchHistory = $derived(data.researchHistory || []);

	function getStatusInfo(status: string) {
		switch (status) {
			case 'Disetujui':
				return { color: 'bg-green-100 text-green-700', icon: CheckCircle2 };
			case 'Ditolak':
				return { color: 'bg-red-100 text-red-700', icon: XCircle };
			default:
				return { color: 'bg-yellow-100 text-yellow-700', icon: Clock };
		}
	}
</script>

<div class="space-y-6">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.siakad_research_history_title()}</h2>
			<p class="text-muted-foreground">{m.siakad_research_history_desc()}</p>
		</div>
	</div>

	<!-- Filter/Search -->
	<div class="relative w-full md:max-w-sm">
		<Search class="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
		<Input placeholder={m.siakad_research_history_search()} class="pl-9" />
	</div>

	<div class="grid gap-4">
		{#each researchHistory as item (item.id)}
			{@const statusInfo = getStatusInfo(item.status)}
			<Card class="group cursor-pointer transition-colors hover:border-primary/50">
				<CardContent class="p-6">
					<div class="flex flex-col justify-between gap-4 md:flex-row md:items-center">
						<div class="flex-grow space-y-2">
							<div class="flex items-center gap-2">
								<Badge variant="secondary" class="font-mono text-[10px]">{item.id}</Badge>
								<Badge variant="outline">{item.type}</Badge>
							</div>
							<h3
								class="text-lg leading-tight font-bold transition-colors group-hover:text-primary"
							>
								{item.title}
							</h3>
							<div
								class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground"
							>
								<div class="flex items-center gap-1">
									<Clock class="h-3 w-3" />
									{item.date}
								</div>
								<div class="flex items-center gap-1">
									<FileText class="h-3 w-3" />
									{item.supervisor}
								</div>
							</div>
						</div>

						<div class="flex shrink-0 items-center gap-4">
							<Badge class="{statusInfo.color} pointer-events-none border-none">
								<statusInfo.icon class="mr-1.5 h-3 w-3" />
								{item.status}
							</Badge>
							<ChevronRight
								class="h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary"
							/>
						</div>
					</div>
				</CardContent>
			</Card>
		{/each}

		{#if researchHistory.length === 0}
			<div
				class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed py-20 text-center text-muted-foreground"
			>
				<FileText class="mb-4 h-12 w-12 opacity-20" />
				<h3 class="text-lg font-medium">{m.siakad_research_history_empty()}</h3>
				<p class="max-w-xs text-sm">{m.siakad_research_history_empty_desc()}</p>
			</div>
		{/if}
	</div>
</div>
