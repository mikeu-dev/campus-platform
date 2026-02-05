<script lang="ts">
	import { FileText, Send, Check, Clock, X, Download } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import * as m from '$lib/paraglide/messages.js';

	import { enhance } from '$app/forms';

	let { data, form } = $props();

	// Derived history from data
	const requestHistory = $derived(data.requestHistory || []);

	// Mock data for types (could be moved to backend later)
	const certificateTypes = [
		{ value: 'aktif-kuliah', label: 'Surat Keterangan Aktif Kuliah' },
		{ value: 'belum-menikah', label: 'Surat Keterangan Belum Menikah' },
		{ value: 'berkelakuan-baik', label: 'Surat Keterangan Berkelakuan Baik' },
		{ value: 'mahasiswa', label: 'Surat Keterangan Mahasiswa' },
		{ value: 'lulus', label: 'Surat Keterangan Lulus (SKL)' },
		{ value: 'transkrip-sementara', label: 'Transkrip Nilai Sementara' },
		{ value: 'rekomendasi', label: 'Surat Rekomendasi' },
		{ value: 'lainnya', label: 'Lainnya' }
	];

	let formData = $state({
		type: '',
		purpose: '',
		notes: '',
		quantity: '1'
	});

	let activeTab = $state('form');
	let isSubmitting = $state(false);

	function getStatusInfo(status: string) {
		switch (status?.toLowerCase()) {
			case 'finished':
			case 'selesai':
				return { class: 'bg-green-100 text-green-700 hover:bg-green-100', icon: Check };
			case 'processing':
			case 'dalam proses':
				return { class: 'bg-blue-100 text-blue-700 hover:bg-blue-100', icon: Clock };
			case 'rejected':
			case 'ditolak':
				return { class: 'bg-red-100 text-red-700 hover:bg-red-100', icon: X };
			default:
				return { class: 'bg-gray-100 text-gray-700 hover:bg-gray-100', icon: Clock };
		}
	}

	$effect(() => {
		if (form?.success) {
			activeTab = 'history';
			formData = { type: '', purpose: '', notes: '', quantity: '1' };
		}
	});
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">{m.siakad_certificates_title()}</h2>
		<p class="text-muted-foreground">{m.siakad_certificates_desc()}</p>
	</div>

	<div class="w-full">
		<div
			class="mb-4 grid w-full grid-cols-2 rounded-md bg-muted p-1 text-muted-foreground lg:w-[400px]"
		>
			<button
				class="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {activeTab ===
				'form'
					? 'bg-background text-foreground shadow-sm'
					: ''}"
				onclick={() => (activeTab = 'form')}
			>
				{m.siakad_certificates_tab_form()}
			</button>
			<button
				class="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {activeTab ===
				'history'
					? 'bg-background text-foreground shadow-sm'
					: ''}"
				onclick={() => (activeTab = 'history')}
			>
				{m.siakad_certificates_tab_history()}
			</button>
		</div>

		{#if activeTab === 'form'}
			<Card>
				<CardHeader>
					<CardTitle>{m.siakad_certificates_form_title()}</CardTitle>
					<CardDescription>{m.siakad_certificates_form_desc()}</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						method="POST"
						action="?/request"
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
							<Label for="type">{m.siakad_certificates_form_type_label()}</Label>
							<div class="relative">
								<select
									id="type"
									name="type"
									bind:value={formData.type}
									class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								>
									<option value="" disabled selected
										>{m.siakad_certificates_form_type_placeholder()}</option
									>
									{#each certificateTypes as type}
										<option value={type.value}>{type.label}</option>
									{/each}
								</select>
							</div>
						</div>

						<div class="space-y-2">
							<Label for="purpose">{m.siakad_certificates_form_purpose_label()}</Label>
							<Input
								id="purpose"
								name="purpose"
								placeholder={m.siakad_certificates_form_purpose_placeholder()}
								bind:value={formData.purpose}
							/>
						</div>

						<div class="space-y-2">
							<Label for="quantity">{m.siakad_certificates_form_qty_label()}</Label>
							<Input
								id="quantity"
								name="quantity"
								type="number"
								min="1"
								max="5"
								bind:value={formData.quantity}
							/>
							<p class="text-xs text-muted-foreground">{m.siakad_certificates_form_qty_note()}</p>
						</div>

						<div class="space-y-2">
							<Label for="notes"
								>{m.siakad_certificates_form_notes_label()} ({m.siakad_form_optional()})</Label
							>
							<textarea
								id="notes"
								name="notes"
								placeholder={m.siakad_certificates_form_notes_placeholder()}
								rows={3}
								bind:value={formData.notes}
								class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
							></textarea>
						</div>

						<div class="flex justify-end gap-4">
							<Button
								type="button"
								variant="outline"
								onclick={() => (formData = { type: '', purpose: '', notes: '', quantity: '1' })}
								>{m.siakad_form_reset()}</Button
							>
							<Button type="submit" disabled={isSubmitting}>
								{#if isSubmitting}
									<X class="mr-2 h-4 w-4 animate-spin" />
								{:else}
									<Send class="mr-2 h-4 w-4" />
								{/if}
								{m.siakad_certificates_form_submit()}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		{:else if activeTab === 'history'}
			{#if requestHistory.length === 0}
				<Card>
					<CardContent class="flex flex-col items-center justify-center py-12 text-center">
						<FileText class="h-12 w-12 text-muted-foreground/50" />
						<h3 class="mt-4 text-lg font-semibold">{m.siakad_certificates_history_empty()}</h3>
						<p class="text-muted-foreground">{m.siakad_certificates_history_empty_desc()}</p>
					</CardContent>
				</Card>
			{:else}
				<div class="grid gap-4">
					{#each requestHistory as request}
						{@const statusInfo = getStatusInfo(request.status)}
						{@const Icon = statusInfo.icon}
						<Card>
							<CardContent class="p-4">
								<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
									<div class="space-y-1">
										<div class="flex items-center gap-2">
											<FileText class="h-4 w-4 text-primary" />
											<span class="font-medium">{request.type}</span>
										</div>
										<p class="text-sm text-muted-foreground">{request.purpose}</p>
										<p class="text-xs text-muted-foreground">
											{m.siakad_certificates_history_date()}: {new Date(
												request.requestedDate
											).toLocaleDateString('id-ID', {
												day: 'numeric',
												month: 'long',
												year: 'numeric'
											})}
										</p>
										{#if request.rejectionReason}
											<p class="text-xs text-destructive">
												{m.siakad_certificates_history_reason()}: {request.rejectionReason}
											</p>
										{/if}
									</div>
									<div class="flex items-center gap-3">
										<Badge class={statusInfo.class} variant="secondary">
											<Icon class="mr-1 h-3 w-3" />
											{request.status}
										</Badge>
										{#if request.status === 'Selesai' && request.downloadUrl}
											<Button size="sm" variant="outline">
												<Download class="mr-2 h-4 w-4" />
												{m.siakad_certificates_history_download()}
											</Button>
										{/if}
									</div>
								</div>
							</CardContent>
						</Card>
					{/each}
				</div>
			{/if}
		{/if}
	</div>
</div>
