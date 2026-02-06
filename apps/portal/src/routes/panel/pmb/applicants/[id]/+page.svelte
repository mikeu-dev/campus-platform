<script lang="ts">
	import {
		ArrowLeft,
		CheckCircle2,
		XCircle,
		FileText,
		User,
		MapPin,
		Phone,
		Mail,
		School,
		Calendar,
		Download,
		ShieldCheck,
		Eye
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';

	let { data } = $props();
	const { applicant } = $derived(data);

	function getStatusBadge(status: string) {
		switch (status) {
			case 'REGISTERED':
				return { label: 'Terdaftar', class: 'bg-blue-100 text-blue-700' };
			case 'VERIFIED':
				return { label: 'Terverifikasi', class: 'bg-indigo-100 text-indigo-700' };
			case 'PASSED':
				return { label: 'Lolos', class: 'bg-green-100 text-green-700' };
			case 'REJECTED':
				return { label: 'Ditolak', class: 'bg-red-100 text-red-700' };
			case 'FAILED':
				return { label: 'Tidak Lolos', class: 'bg-gray-100 text-gray-700' };
			default:
				return { label: status, class: 'bg-gray-100 text-gray-700' };
		}
	}

	function formatDate(date: string) {
		if (!date) return '-';
		return new Date(date).toLocaleDateString('id-ID', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

{#if !applicant}
	<div class="flex h-64 flex-col items-center justify-center space-y-4">
		<p class="text-muted-foreground italic">Memuat data pendaftar...</p>
		<Button variant="outline" href="/panel/pmb/applicants">Kembali ke Daftar</Button>
	</div>
{:else}
	<div class="space-y-6">
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-4">
				<Button variant="ghost" size="icon" href="/panel/pmb/applicants">
					<ArrowLeft class="h-4 w-4" />
				</Button>
				<div>
					<div class="flex items-center gap-2">
						<h2 class="text-3xl font-bold tracking-tight">{applicant.full_name}</h2>
						<Badge class={getStatusBadge(applicant.status).class} variant="secondary">
							{getStatusBadge(applicant.status).label}
						</Badge>
					</div>
					<p class="font-mono text-sm text-muted-foreground">{applicant.registration_number}</p>
				</div>
			</div>
			<div class="flex gap-2">
				<form action="?/updateStatus" method="POST">
					<input type="hidden" name="status" value="PASSED" />
					<Button class="bg-green-600 hover:bg-green-700">Terima (Lolos)</Button>
				</form>
				<form action="?/updateStatus" method="POST">
					<input type="hidden" name="status" value="REJECTED" />
					<Button variant="destructive">Tolak</Button>
				</form>
			</div>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			<div class="space-y-6 md:col-span-2">
				<Card>
					<CardHeader>
						<CardTitle>Data Pribadi & Akademik</CardTitle>
					</CardHeader>
					<CardContent class="grid gap-6">
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-1">
								<Label class="text-xs text-muted-foreground uppercase">Email</Label>
								<div class="flex items-center gap-2 text-sm font-medium">
									<Mail class="h-3 w-3 text-muted-foreground" />
									{applicant.email}
								</div>
							</div>
							<div class="space-y-1">
								<Label class="text-xs text-muted-foreground uppercase">Telepon</Label>
								<div class="flex items-center gap-2 text-sm font-medium">
									<Phone class="h-3 w-3 text-muted-foreground" />
									{applicant.phone_number || '-'}
								</div>
							</div>
							<div class="space-y-1">
								<Label class="text-xs text-muted-foreground uppercase">NIK</Label>
								<div class="text-sm font-medium">{applicant.identity_number || '-'}</div>
							</div>
							<div class="space-y-1">
								<Label class="text-xs text-muted-foreground uppercase">Tempat/Tgl Lahir</Label>
								<div class="text-sm font-medium">
									{applicant.birth_place || '-'}, {formatDate(applicant.birth_date)}
								</div>
							</div>
							<div class="space-y-1">
								<Label class="text-xs text-muted-foreground uppercase">Asal Sekolah</Label>
								<div class="flex items-center gap-2 text-sm font-medium">
									<School class="h-3 w-3 text-muted-foreground" />
									{applicant.previous_school || '-'}
								</div>
							</div>
							<div class="space-y-1">
								<Label class="text-xs text-muted-foreground uppercase">Pilihan Prodi 1</Label>
								<div class="text-sm font-bold text-indigo-600">Teknik Informatika (Contoh)</div>
							</div>
						</div>

						<div class="space-y-1">
							<Label class="text-xs text-muted-foreground uppercase">Alamat</Label>
							<div class="flex items-start gap-2 text-sm font-medium">
								<MapPin class="mt-1 h-3 w-3 text-muted-foreground" />
								{applicant.address || '-'}
							</div>
						</div>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle>Dokumen Pendukung</CardTitle>
						<CardDescription>Verifikasi berkas digital yang diunggah pendaftar.</CardDescription>
					</CardHeader>
					<CardContent>
						<div class="space-y-4">
							{#each applicant.documents as doc}
								<div class="flex items-center justify-between rounded-lg border p-4">
									<div class="flex items-center gap-4">
										<div class="rounded-bg flex h-10 w-10 items-center justify-center bg-muted">
											<FileText class="h-5 w-5 text-muted-foreground" />
										</div>
										<div>
											<p class="text-sm font-bold capitalize">
												{doc.document_type.replace('_', ' ')}
											</p>
											<Badge variant="outline" class="text-[10px]">
												{doc.status}
											</Badge>
										</div>
									</div>
									<div class="flex items-center gap-2">
										<Button variant="outline" size="sm" href={doc.file_url} target="_blank">
											<Eye class="mr-2 h-4 w-4" /> Lihat
										</Button>
										{#if doc.status === 'PENDING'}
											<form action="?/verifyDocument" method="POST">
												<input type="hidden" name="docId" value={doc.id} />
												<input type="hidden" name="status" value="APPROVED" />
												<Button size="sm" class="bg-green-600 hover:bg-green-700">Terima</Button>
											</form>
										{/if}
									</div>
								</div>
							{:else}
								<p class="text-sm text-muted-foreground italic">Belum ada dokumen yang diunggah.</p>
							{/each}
						</div>
					</CardContent>
				</Card>
			</div>

			<div class="space-y-6">
				<Card class="border-indigo-100 bg-indigo-50/30">
					<CardHeader>
						<CardTitle class="text-sm font-bold tracking-wider text-indigo-900 uppercase"
							>Penilaian Seleksi</CardTitle
						>
					</CardHeader>
					<CardContent>
						<form action="?/updateStatus" method="POST" class="space-y-4">
							<div class="space-y-2">
								<Label for="selection_score">Skor Seleksi (0-100)</Label>
								<Input
									id="selection_score"
									name="selection_score"
									type="number"
									step="0.01"
									value={applicant.selection_score || ''}
									placeholder="Masukkan hasil tes/skor berkas"
								/>
							</div>
							<div class="space-y-2">
								<Label for="admin_notes">Catatan Verifikasi</Label>
								<Textarea id="admin_notes" placeholder="Tulis catatan jika ada kekurangan..." />
							</div>
							<input type="hidden" name="status" value={applicant.status} />
							<Button type="submit" class="w-full">Simpan Penilaian</Button>
						</form>
					</CardContent>
				</Card>

				<Card>
					<CardHeader>
						<CardTitle class="text-sm font-bold tracking-wider uppercase">Log Aktivitas</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="space-y-4">
							<div class="flex gap-3 text-xs">
								<div class="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100">
									<CheckCircle2 class="h-3 w-3 text-blue-600" />
								</div>
								<div>
									<p class="font-bold">Terdaftar</p>
									<p class="text-muted-foreground">{formatDate(applicant.created_at)}</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	</div>
{/if}
