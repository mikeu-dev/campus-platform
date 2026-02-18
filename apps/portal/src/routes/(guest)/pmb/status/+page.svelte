<script lang="ts">
	import {
		Search,
		CheckCircle2,
		Clock,
		AlertTriangle,
		FileUp,
		Eye,
		XCircle,
		ArrowLeft
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';

	let { data } = $props();
	const { applicant, searchParams } = $derived(data);

	function getStatusInfo(status: string) {
		switch (status) {
			case 'REGISTERED':
				return {
					label: 'Terdaftar',
					color: 'blue',
					icon: Clock,
					desc: 'Pendaftaran Anda telah diterima. Silakan lengkapi berkas jika belum.'
				};
			case 'VERIFIED':
				return {
					label: 'Terverifikasi',
					color: 'indigo',
					icon: CheckCircle2,
					desc: 'Berkas Anda telah diverifikasi oleh tim admin.'
				};
			case 'PASSED':
				return {
					label: 'LOLOS SELEKSI',
					color: 'green',
					icon: CheckCircle2,
					desc: 'Selamat! Anda dinyatakan LOLOS SELEKSI mahasiswa baru.'
				};
			case 'REJECTED':
				return {
					label: 'Ditolak',
					color: 'red',
					icon: XCircle,
					desc: 'Mohon maaf, pendaftaran Anda ditolak. Periksa catatan admin.'
				};
			case 'FAILED':
				return {
					label: 'Tidak Lolos',
					color: 'gray',
					icon: AlertTriangle,
					desc: 'Mohon maaf, Anda belum berhasil pada periode ini.'
				};
			default:
				return { label: status, color: 'gray', icon: Clock, desc: '' };
		}
	}

	const docTypes = [
		{ id: 'PAS_FOTO', label: 'Pas Foto 3x4' },
		{ id: 'IJAZAH', label: 'Ijazah / SKL' },
		{ id: 'KTP', label: 'KTP / Kartu Keluarga' },
		{ id: 'RAPOR', label: 'Rapor Semester 1-5' }
	];
</script>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8">
			<Button variant="ghost" href="/pmb" class="mb-4">
				<ArrowLeft class="mr-2 h-4 w-4" /> Kembali ke Beranda PMB
			</Button>
			<h1 class="text-3xl font-bold text-gray-900">Cek Status Pendaftaran</h1>
		</div>

		{#if !applicant}
			<Card class="shadow-lg">
				<CardHeader>
					<CardTitle>Temukan Pendaftaran Anda</CardTitle>
					<CardDescription
						>Masukkan nomor registrasi yang Anda dapatkan saat mendaftar.</CardDescription
					>
				</CardHeader>
				<CardContent>
					<form method="GET" class="flex flex-col gap-4 sm:flex-row">
						<div class="flex-1 space-y-2">
							<Label for="reg">Nomor Registrasi</Label>
							<div class="relative">
								<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									id="reg"
									name="reg"
									placeholder="Contoh: PMB-2026-XXXX"
									class="pl-8"
									value={searchParams.reg || ''}
									required
								/>
							</div>
						</div>
						<Button type="submit" class="mt-8">Cari Pendaftaran</Button>
					</form>
				</CardContent>
			</Card>
		{:else}
			{@const info = getStatusInfo(applicant.status)}
			<div class="grid gap-6 md:grid-cols-3">
				<!-- Main Status -->
				<div class="space-y-6 md:col-span-2">
					<Card class={`border-${info.color}-100 bg-${info.color}-50/30 overflow-hidden`}>
						<div class={`h-2 bg-${info.color}-600`}></div>
						<CardHeader>
							<div class="flex items-center gap-3">
								<div class={`rounded-full p-2 bg-${info.color}-100`}>
									<info.icon class={`h-6 w-6 text-${info.color}-600`} />
								</div>
								<div>
									<CardTitle class="text-xl">Status: {info.label}</CardTitle>
									<CardDescription class={`text-${info.color}-700 font-medium`}>
										{info.desc}
									</CardDescription>
								</div>
							</div>
						</CardHeader>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Data Anda</CardTitle>
						</CardHeader>
						<CardContent class="grid gap-4 text-sm">
							<div class="grid grid-cols-2 gap-x-10 gap-y-4">
								<div class="space-y-1">
									<p class="text-[10px] font-bold text-muted-foreground uppercase">Nama Lengkap</p>
									<p class="font-bold">{applicant.full_name}</p>
								</div>
								<div class="space-y-1">
									<p class="text-[10px] font-bold text-muted-foreground uppercase">
										No. Registrasi
									</p>
									<p class="font-mono font-bold text-indigo-600">{applicant.registration_number}</p>
								</div>
								<div class="space-y-1">
									<p class="text-[10px] font-bold text-muted-foreground uppercase">Email</p>
									<p>{applicant.email}</p>
								</div>
								<div class="space-y-1">
									<p class="text-[10px] font-bold text-muted-foreground uppercase">
										Pilihan Prodi 1
									</p>
									<p class="font-medium">Teknik Informatika (Contoh)</p>
								</div>
							</div>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle>Kelengkapan Berkas</CardTitle>
							<CardDescription>Pastikan semua dokumen wajib telah terdaftar.</CardDescription>
						</CardHeader>
						<CardContent>
							<div class="space-y-4">
								{#each docTypes as docType (docType.id)}
									{@const existingDoc = applicant.documents.find(
										(d: any) => d.document_type === docType.id
									)}
									<div class="flex items-center justify-between rounded-lg border p-3">
										<div class="flex items-center gap-3">
											{#if existingDoc}
												<CheckCircle2 class="h-5 w-5 text-green-600" />
											{:else}
												<AlertTriangle class="h-5 w-5 text-amber-500" />
											{/if}
											<div>
												<p class="text-sm font-bold">{docType.label}</p>
												<p class="text-[10px] text-muted-foreground italic">
													{existingDoc ? `Status: ${existingDoc.status}` : 'Belum diunggah'}
												</p>
											</div>
										</div>

										{#if existingDoc}
											<Button variant="ghost" size="sm" href={existingDoc.file_url} target="_blank">
												<Eye class="mr-2 h-4 w-4" /> Lihat
											</Button>
										{:else}
											<form action="?/uploadDocument" method="POST">
												<input type="hidden" name="applicant_id" value={applicant.id} />
												<input type="hidden" name="document_type" value={docType.id} />
												<Button variant="outline" size="sm" type="submit">
													<FileUp class="mr-2 h-4 w-4" /> Unggah
												</Button>
											</form>
										{/if}
									</div>
								{/each}
							</div>
						</CardContent>
					</Card>
				</div>

				<!-- Sidebar Info -->
				<div class="space-y-6">
					<Card class="bg-indigo-900 text-white">
						<CardHeader>
							<CardTitle class="text-sm font-bold tracking-wider uppercase"
								>Butuh Bantuan?</CardTitle
							>
						</CardHeader>
						<CardContent class="grid gap-4">
							<p class="text-xs text-indigo-100 italic">
								Hubungi kami jika Anda mengalami kendala saat pendaftaran atau proses verifikasi.
							</p>
							<Button
								variant="outline"
								class="w-full border-white/20 bg-white/10 text-white hover:bg-white/20"
							>
								WhatsApp Call Center
							</Button>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<CardTitle class="text-sm font-bold tracking-wider uppercase"
								>Timeline Berikutnya</CardTitle
							>
						</CardHeader>
						<CardContent class="space-y-4">
							<div class="flex gap-3 text-xs opacity-50">
								<div class="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
								<p>Verifikasi Berkas (1-3 hari kerja)</p>
							</div>
							<div class="flex gap-3 text-xs opacity-50">
								<div class="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
								<p>Ujian Seleksi Online</p>
							</div>
							<div class="flex gap-3 text-xs opacity-50">
								<div class="mt-1 h-2 w-2 rounded-full bg-indigo-600"></div>
								<p>Pengumuman Kelulusan</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		{/if}
	</div>
</div>
