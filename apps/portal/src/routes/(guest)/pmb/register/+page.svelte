<script lang="ts">
	import {
		User,
		Mail,
		Phone,
		MapPin,
		School,
		GraduationCap,
		ChevronRight,
		ChevronLeft,
		CheckCircle2,
		AlertCircle
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectValue
	} from '$lib/components/ui/select';
	import { Progress } from '$lib/components/ui/progress';
	import { Separator } from '$lib/components/ui/separator';

	let { data, form } = $props();
	const { periods, prodis } = $derived(data);

	let currentStep = $state(1);
	const totalSteps = 4;

	function nextStep() {
		if (currentStep < totalSteps) currentStep += 1;
	}
	function prevStep() {
		if (currentStep > 1) currentStep -= 1;
	}

	const progress = $derived((currentStep / totalSteps) * 100);
</script>

<div class="min-h-screen bg-gray-50 py-12">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
		<div class="mb-8 space-y-4">
			<div class="flex items-center justify-between">
				<h1 class="text-3xl font-bold text-gray-900">Formulir Pendaftaran PMB</h1>
				<span class="text-sm font-medium text-muted-foreground"
					>Langkah {currentStep} dari {totalSteps}</span
				>
			</div>
			<Progress value={progress} class="h-2" />
		</div>

		{#if form?.message}
			<div
				class="mb-6 flex items-center gap-2 rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-700"
			>
				<AlertCircle class="h-4 w-4" />
				{form.message}
			</div>
		{/if}

		<form method="POST" class="space-y-6">
			<!-- Step 1: Jalur Pendaftaran -->
			{#if currentStep === 1}
				<Card>
					<CardHeader>
						<CardTitle>Pilih Jalur & Gelombang</CardTitle>
						<CardDescription>Tentukan periode pendaftaran yang ingin Anda ikuti.</CardDescription>
					</CardHeader>
					<CardContent class="grid gap-4">
						<div class="grid gap-2">
							<Label for="period_id">Gelombang Pendaftaran</Label>
							<Select name="period_id" required>
								<SelectTrigger>
									<SelectValue placeholder="Pilih Gelombang" />
								</SelectTrigger>
								<SelectContent>
									{#each periods as p}
										<SelectItem value={p.id}>{p.name}</SelectItem>
									{/each}
								</SelectContent>
							</Select>
						</div>
					</CardContent>
					<div class="flex justify-end p-6 pt-0">
						<Button type="button" onclick={nextStep}>
							Lanjut <ChevronRight class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</Card>
			{/if}

			<!-- Step 2: Biodata Diri -->
			{#if currentStep === 2}
				<Card>
					<CardHeader>
						<CardTitle>Data Pribadi</CardTitle>
						<CardDescription>Lengkapi identitas sesuai dengan KTP/Kartu Keluarga.</CardDescription>
					</CardHeader>
					<CardContent class="grid gap-4">
						<div class="grid gap-2">
							<Label for="full_name">Nama Lengkap</Label>
							<Input id="full_name" name="full_name" placeholder="Sesuai Ijazah" required />
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="grid gap-2">
								<Label for="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="example@mail.com"
									required
								/>
							</div>
							<div class="grid gap-2">
								<Label for="phone_number">No. Telepon/WA</Label>
								<Input id="phone_number" name="phone_number" placeholder="0812..." required />
							</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="grid gap-2">
								<Label for="identity_number">NIK (Sesuai KTP)</Label>
								<Input
									id="identity_number"
									name="identity_number"
									placeholder="16 Digit"
									required
								/>
							</div>
							<div class="grid gap-2">
								<Label for="gender">Jenis Kelamin</Label>
								<Select name="gender" required>
									<SelectTrigger>
										<SelectValue placeholder="Pilih..." />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="MALE">Laki-laki</SelectItem>
										<SelectItem value="FEMALE">Perempuan</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="grid gap-2">
								<Label for="birth_place">Tempat Lahir</Label>
								<Input id="birth_place" name="birth_place" required />
							</div>
							<div class="grid gap-2">
								<Label for="birth_date">Tanggal Lahir</Label>
								<Input id="birth_date" name="birth_date" type="date" required />
							</div>
						</div>
						<div class="grid gap-2">
							<Label for="address">Alamat Lengkap</Label>
							<Textarea
								id="address"
								name="address"
								placeholder="Jalan, RT/RW, Kec, Kota..."
								required
							/>
						</div>
					</CardContent>
					<div class="flex justify-between p-6 pt-0">
						<Button type="button" variant="ghost" onclick={prevStep}>
							<ChevronLeft class="mr-2 h-4 w-4" /> Kembali
						</Button>
						<Button type="button" onclick={nextStep}>
							Lanjut <ChevronRight class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</Card>
			{/if}

			<!-- Step 3: Pilihan Prodi & Sekolah -->
			{#if currentStep === 3}
				<Card>
					<CardHeader>
						<CardTitle>Data Akademik & Pilihan Prodi</CardTitle>
						<CardDescription>Tentukan pilihan masa depan Anda.</CardDescription>
					</CardHeader>
					<CardContent class="grid gap-4">
						<div class="grid gap-2">
							<Label for="prodi1">Prioritas Pilihan 1</Label>
							<Select name="prodi1" required>
								<SelectTrigger>
									<SelectValue placeholder="Pilih Program Studi" />
								</SelectTrigger>
								<SelectContent>
									{#each prodis as p}
										<SelectItem value={p.id}>{p.name}</SelectItem>
									{/each}
								</SelectContent>
							</Select>
						</div>
						<div class="grid gap-2">
							<Label for="prodi2">Prioritas Pilihan 2</Label>
							<Select name="prodi2" required>
								<SelectTrigger>
									<SelectValue placeholder="Pilih Program Studi" />
								</SelectTrigger>
								<SelectContent>
									{#each prodis as p}
										<SelectItem value={p.id}>{p.name}</SelectItem>
									{/each}
								</SelectContent>
							</Select>
						</div>
						<Separator class="my-2" />
						<div class="grid gap-2">
							<Label for="previous_school">Nama Sekolah Asal</Label>
							<Input
								id="previous_school"
								name="previous_school"
								placeholder="SMA/SMK/MA..."
								required
							/>
						</div>
						<div class="grid gap-2">
							<Label for="graduation_year">Tahun Lulus</Label>
							<Input
								id="graduation_year"
								name="graduation_year"
								type="number"
								min="2000"
								max="2026"
								required
							/>
						</div>
					</CardContent>
					<div class="flex justify-between p-6 pt-0">
						<Button type="button" variant="ghost" onclick={prevStep}>
							<ChevronLeft class="mr-2 h-4 w-4" /> Kembali
						</Button>
						<Button type="button" onclick={nextStep}>
							Lanjut <ChevronRight class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</Card>
			{/if}

			<!-- Step 4: Konfirmasi -->
			{#if currentStep === 4}
				<Card class="border-indigo-100 bg-indigo-50/30">
					<CardHeader>
						<CardTitle>Pernyataan & Konfirmasi</CardTitle>
						<CardDescription>Pastikan semua data yang Anda masukkan sudah benar.</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="rounded-lg border bg-white p-4">
							<div class="flex gap-3 text-sm text-gray-700">
								<CheckCircle2 class="h-5 w-5 shrink-0 text-indigo-600" />
								<p>
									Saya menyatakan bahwa seluruh data yang diberikan adalah benar dan dapat
									dipertanggungjawabkan. Saya bersedia menerima sanksi apabila di kemudian hari
									ditemukan ketidakbenaran data.
								</p>
							</div>
						</div>

						<div class="grid gap-2">
							<p class="text-center text-xs text-muted-foreground italic">
								Nomor registrasi akan diterbitkan setelah Anda mengklik tombol "Kirim Pendaftaran".
							</p>
						</div>
					</CardContent>
					<div class="flex justify-between p-6 pt-0">
						<Button type="button" variant="ghost" onclick={prevStep}>
							<ChevronLeft class="mr-2 h-4 w-4" /> Kembali
						</Button>
						<Button type="submit" class="bg-indigo-600 hover:bg-indigo-700">
							Kirim Pendaftaran <GraduationCap class="ml-2 h-4 w-4" />
						</Button>
					</div>
				</Card>
			{/if}
		</form>
	</div>
</div>
