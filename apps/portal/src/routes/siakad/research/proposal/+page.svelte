<script lang="ts">
	import { FileText, AlertTriangle, Check, Info } from 'lucide-svelte';
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

	// Mock eligibility check
	const studentCredits = 100; // Total SKS completed
	const minimumCreditsRequired = 110;
	const isEligible = studentCredits >= minimumCreditsRequired;

	let formData = $state({
		title: '',
		type: '',
		description: '',
		supervisor: ''
	});

	const researchTypes = [
		{ value: 'skripsi', label: 'Skripsi' },
		{ value: 'thesis', label: 'Thesis' },
		{ value: 'kerja-praktek', label: 'Kerja Praktek' },
		{ value: 'penelitian-mandiri', label: 'Penelitian Mandiri' }
	];

	const supervisors = [
		{ value: 'dosen1', label: 'Dr. Budi Santoso, M.Kom' },
		{ value: 'dosen2', label: 'Siti Aminah, S.T., M.T.' },
		{ value: 'dosen3', label: 'Prof. Dr. Ir. Eko Purnomo' },
		{ value: 'dosen4', label: 'Dedi Kurniawan, S.Kom., M.Kom' }
	];

	function handleSubmit() {
		// Handle form submission
		console.log('Form submitted:', formData);
	}
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Pengajuan Penelitian</h2>
		<p class="text-muted-foreground">
			Ajukan proposal penelitian skripsi, thesis, atau kerja praktek.
		</p>
	</div>

	{#if !isEligible}
		<div
			class="relative w-full rounded-lg border border-destructive/50 p-4 text-destructive dark:border-destructive [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg]:text-destructive [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7"
		>
			<AlertTriangle class="h-4 w-4" />
			<h5 class="mb-1 leading-none font-medium tracking-tight">Tidak Memenuhi Syarat</h5>
			<div class="text-sm opacity-90">
				Anda belum memenuhi syarat untuk mengajukan penelitian. SKS yang sudah ditempuh: <strong
					>{studentCredits} SKS</strong
				>
				dari minimal <strong>{minimumCreditsRequired} SKS</strong> yang dibutuhkan.
			</div>
		</div>

		<Card>
			<CardContent class="flex flex-col items-center justify-center py-12 text-center">
				<FileText class="h-12 w-12 text-muted-foreground/50" />
				<h3 class="mt-4 text-lg font-semibold">Pengajuan Tidak Tersedia</h3>
				<p class="text-muted-foreground">
					Selesaikan minimal {minimumCreditsRequired} SKS untuk dapat mengajukan penelitian.
				</p>
			</CardContent>
		</Card>
	{:else}
		<div
			class="relative w-full rounded-lg border bg-background p-4 text-foreground [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7"
		>
			<Info class="h-4 w-4" />
			<h5 class="mb-1 leading-none font-medium tracking-tight">Informasi</h5>
			<div class="text-sm opacity-90">
				Anda memenuhi syarat untuk mengajukan penelitian. Silakan isi form di bawah ini dengan
				lengkap dan benar.
			</div>
		</div>

		<Card>
			<CardHeader>
				<CardTitle>Form Pengajuan Penelitian</CardTitle>
				<CardDescription
					>Lengkapi data berikut untuk mengajukan proposal penelitian.</CardDescription
				>
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
						<Label for="type">Jenis Penelitian</Label>
						<div class="relative">
							<select
								id="type"
								name="type"
								bind:value={formData.type}
								class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
							>
								<option value="" disabled selected>Pilih jenis penelitian</option>
								{#each researchTypes as type}
									<option value={type.value}>{type.label}</option>
								{/each}
							</select>
						</div>
					</div>

					<div class="space-y-2">
						<Label for="title">Judul Penelitian</Label>
						<Input
							id="title"
							placeholder="Masukkan judul penelitian Anda"
							bind:value={formData.title}
						/>
					</div>

					<div class="space-y-2">
						<Label for="description">Deskripsi / Abstrak</Label>
						<textarea
							id="description"
							placeholder="Jelaskan secara singkat tentang penelitian yang akan Anda lakukan..."
							rows={5}
							bind:value={formData.description}
							class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
						></textarea>
					</div>

					<div class="space-y-2">
						<Label for="supervisor">Dosen Pembimbing (Pilihan)</Label>
						<div class="relative">
							<select
								id="supervisor"
								name="supervisor"
								bind:value={formData.supervisor}
								class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
							>
								<option value="" disabled selected>Pilih dosen pembimbing</option>
								{#each supervisors as supervisor}
									<option value={supervisor.value}>{supervisor.label}</option>
								{/each}
							</select>
						</div>
						<p class="text-xs text-muted-foreground">
							Jika tidak memilih, pembimbing akan ditentukan oleh prodi.
						</p>
					</div>

					<div class="flex justify-end gap-4">
						<Button type="button" variant="outline">Batal</Button>
						<Button type="submit">
							<Check class="mr-2 h-4 w-4" />
							Ajukan Proposal
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	{/if}
</div>
