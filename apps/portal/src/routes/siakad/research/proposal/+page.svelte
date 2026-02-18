<script lang="ts">
	import { Send, AlertCircle, CheckCircle2, Info } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Loader2 } from 'lucide-svelte';
	import { enhance } from '$app/forms';
	import * as m from '$lib/paraglide/messages.js';

	let { data, form } = $props();

	// Derived from data
	const eligibility = $derived(
		data.eligibility || {
			totalSks: 0,
			requiredSks: 100,
			isEligible: false
		}
	);

	let formData = $state({
		title: '',
		type: '',
		description: '',
		supervisor: ''
	});

	let isSubmitting = $state(false);

	const researchTypes = [
		{ value: 'skripsi', label: 'Skripsi / Tugas Akhir' },
		{ value: 'pkm', label: 'Program Kreativitas Mahasiswa (PKM)' },
		{ value: 'internship', label: 'Laporan Magang' }
	];

	$effect(() => {
		if (form?.success) {
			// Redirect or show success
			// For now just reset
			formData = { title: '', type: '', description: '', supervisor: '' };
		}
	});
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">{m.siakad_research_proposal_title()}</h2>
		<p class="text-muted-foreground">{m.siakad_research_proposal_desc()}</p>
	</div>

	<!-- Eligibility Check -->
	{#if !eligibility.isEligible}
		<div
			class="relative w-full rounded-lg border border-destructive/50 p-4 text-destructive dark:border-destructive [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-destructive [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7"
		>
			<AlertCircle class="h-4 w-4" />
			<h5 class="mb-1 leading-none font-medium tracking-tight">
				{m.siakad_research_ineligible_title()}
			</h5>
			<div class="text-sm opacity-90">
				{m.siakad_research_ineligible_desc({
					required: eligibility.requiredSks,
					current: eligibility.totalSks
				})}
			</div>
		</div>
	{:else}
		<div
			class="relative w-full rounded-lg border border-green-200 bg-green-50/50 p-4 text-green-700 dark:border-green-900/50 dark:bg-green-900/10 dark:text-green-400 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7"
		>
			<CheckCircle2 class="h-4 w-4" />
			<h5 class="mb-1 leading-none font-medium tracking-tight">
				{m.siakad_research_eligible_title()}
			</h5>
			<div class="text-sm opacity-90">
				{m.siakad_research_eligible_desc({ current: eligibility.totalSks })}
			</div>
		</div>

		<Card>
			<CardHeader>
				<CardTitle>{m.siakad_research_form_title()}</CardTitle>
				<CardDescription>{m.siakad_research_form_desc()}</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					method="POST"
					action="?/submit"
					use:enhance={() => {
						isSubmitting = true;
						return async ({ update }) => {
							await update();
							isSubmitting = false;
						};
					}}
					class="space-y-6"
				>
					<div class="space-y-2">
						<Label for="title">{m.siakad_research_form_title_label()}</Label>
						<Input
							id="title"
							name="title"
							placeholder={m.siakad_research_form_title_placeholder()}
							bind:value={formData.title}
						/>
					</div>

					<div class="space-y-2">
						<Label for="type">{m.siakad_research_form_type_label()}</Label>
						<select
							id="type"
							name="type"
							bind:value={formData.type}
							class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						>
							<option value="" disabled selected>{m.siakad_research_form_type_placeholder()}</option
							>
							{#each researchTypes as type (type.value)}
								<option value={type.value}>{type.label}</option>
							{/each}
						</select>
					</div>

					<div class="space-y-2">
						<Label for="description">{m.siakad_research_form_desc_label()}</Label>
						<textarea
							id="description"
							name="description"
							placeholder={m.siakad_research_form_desc_placeholder()}
							rows={5}
							bind:value={formData.description}
							class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						></textarea>
					</div>

					<div class="space-y-2">
						<Label for="supervisor"
							>{m.siakad_research_form_supervisor_label()} ({m.siakad_form_optional()})</Label
						>
						<Input
							id="supervisor"
							name="supervisor"
							placeholder={m.siakad_research_form_supervisor_placeholder()}
							bind:value={formData.supervisor}
						/>
						<p class="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
							<Info class="h-3 w-3" />
							{m.siakad_research_form_supervisor_note()}
						</p>
					</div>

					<Button type="submit" class="w-full md:w-auto" disabled={isSubmitting}>
						{#if isSubmitting}
							<Loader2 class="mr-2 h-4 w-4 animate-spin" />
						{:else}
							<Send class="mr-2 h-4 w-4" />
						{/if}
						{m.siakad_form_submit()}
					</Button>
				</form>
			</CardContent>
		</Card>
	{/if}
</div>
