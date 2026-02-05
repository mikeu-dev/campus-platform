<script lang="ts">
	import { FileText, Send, Check, Clock, X, Eye, Download } from 'lucide-svelte';
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
	import { Separator } from '$lib/components/ui/separator';

	// Mock data
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

	const requestHistory = [
		{
			id: 1,
			type: 'Surat Keterangan Aktif Kuliah',
			purpose: 'Keperluan beasiswa',
			requestedDate: '2024-01-15',
			status: 'Selesai',
			downloadUrl: '#'
		},
		{
			id: 2,
			type: 'Transkrip Nilai Sementara',
			purpose: 'Keperluan magang',
			requestedDate: '2024-01-20',
			status: 'Dalam Proses'
		},
		{
			id: 3,
			type: 'Surat Keterangan Belum Menikah',
			purpose: 'Keperluan CPNS',
			requestedDate: '2024-01-10',
			status: 'Ditolak',
			rejectionReason: 'Data tidak lengkap'
		}
	];

	let formData = $state({
		type: '',
		purpose: '',
		notes: '',
		quantity: '1'
	});

	let activeTab = $state('form');

	function handleSubmit() {
		console.log('Certificate request submitted:', formData);
	}

	function getStatusInfo(status: string) {
		switch (status) {
			case 'Selesai':
				return { class: 'bg-green-100 text-green-700 hover:bg-green-100', icon: Check };
			case 'Dalam Proses':
				return { class: 'bg-blue-100 text-blue-700 hover:bg-blue-100', icon: Clock };
			case 'Ditolak':
				return { class: 'bg-red-100 text-red-700 hover:bg-red-100', icon: X };
			default:
				return { class: 'bg-gray-100 text-gray-700 hover:bg-gray-100', icon: Clock };
		}
	}
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Pengajuan Surat Keterangan</h2>
		<p class="text-muted-foreground">Ajukan berbagai jenis surat keterangan dari kampus.</p>
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
				Ajukan Baru
			</button>
			<button
				class="inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap ring-offset-background transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 {activeTab ===
				'history'
					? 'bg-background text-foreground shadow-sm'
					: ''}"
				onclick={() => (activeTab = 'history')}
			>
				Riwayat Pengajuan
			</button>
		</div>

		{#if activeTab === 'form'}
			<Card>
				<CardHeader>
					<CardTitle>Form Pengajuan Surat</CardTitle>
					<CardDescription>Isi form berikut untuk mengajukan surat keterangan.</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						class="space-y-6"
						onsubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
					>
						<div class="space-y-2">
							<Label for="type">Jenis Surat</Label>
							<div class="relative">
								<select
									id="type"
									name="type"
									bind:value={formData.type}
									class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
								>
									<option value="" disabled selected>Pilih jenis surat</option>
									{#each certificateTypes as type}
										<option value={type.value}>{type.label}</option>
									{/each}
								</select>
							</div>
						</div>

						<div class="space-y-2">
							<Label for="purpose">Keperluan / Tujuan</Label>
							<Input
								id="purpose"
								placeholder="Contoh: Keperluan beasiswa, magang, dll."
								bind:value={formData.purpose}
							/>
						</div>

						<div class="space-y-2">
							<Label for="quantity">Jumlah Rangkap</Label>
							<Input id="quantity" type="number" min="1" max="5" bind:value={formData.quantity} />
							<p class="text-xs text-muted-foreground">Maksimal 5 rangkap per pengajuan.</p>
						</div>

						<div class="space-y-2">
							<Label for="notes">Catatan Tambahan (Opsional)</Label>
							<textarea
								id="notes"
								placeholder="Tambahkan catatan jika diperlukan..."
								rows={3}
								bind:value={formData.notes}
								class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
							></textarea>
						</div>

						<div class="flex justify-end gap-4">
							<Button type="button" variant="outline">Reset</Button>
							<Button type="submit">
								<Send class="mr-2 h-4 w-4" />
								Ajukan Surat
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
						<h3 class="mt-4 text-lg font-semibold">Belum ada riwayat pengajuan</h3>
						<p class="text-muted-foreground">Anda belum pernah mengajukan surat keterangan.</p>
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
											Diajukan: {new Date(request.requestedDate).toLocaleDateString('id-ID', {
												day: 'numeric',
												month: 'long',
												year: 'numeric'
											})}
										</p>
										{#if request.rejectionReason}
											<p class="text-xs text-destructive">Alasan: {request.rejectionReason}</p>
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
												Download
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
