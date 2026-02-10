<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages.js';
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
		DialogFooter
	} from '$lib/components/ui/dialog';

	let { data, form } = $props();
	let profile = $derived(data.profile || {});

	let activeTab = $state('general');
	let photoDialogOpen = $state(false);

	// Edit Mode States
	let editGeneral = $state(false);
	let editContact = $state(false);
	let editJob = $state(false);
	let editKtp = $state(false);
	let editCurrent = $state(false);
	let editCitizenship = $state(false);
	let editFather = $state(false);
	let editMother = $state(false);
	let editSchool = $state(false);
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Profil Mahasiswa</h2>
		<p class="text-muted-foreground">Kelola informasi lengkap data diri, akademik, dan keluarga.</p>
	</div>

	<!-- HEADER / ACADEMIC INFO -->
	<Card>
		<CardContent class="p-6">
			<div class="flex flex-col gap-6 md:flex-row">
				<!-- PHOTO -->
				<div class="flex flex-col items-center gap-4">
					<div class="flex h-40 w-32 items-center justify-center rounded-lg border bg-muted">
						{#if profile.photo_url}
							<img
								src={profile.photo_url}
								alt="Foto Profil"
								class="h-full w-full rounded-lg object-cover"
							/>
						{:else}
							<span class="text-xs text-muted-foreground">No Photo</span>
						{/if}
					</div>
					<!-- Upload Button -> Opens Dialog -->
					<Dialog bind:open={photoDialogOpen}>
						<DialogTrigger>
							<Button variant="outline" size="sm" class="w-full">Upload Foto</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Upload Foto Profil</DialogTitle>
								<DialogDescription>Format: JPG, PNG. Maksimal 2MB.</DialogDescription>
							</DialogHeader>
							<form
								method="POST"
								action="?/uploadPhoto"
								enctype="multipart/form-data"
								use:enhance={() => {
									return async ({ result }) => {
										if (result.type === 'success') {
											photoDialogOpen = false;
										}
										await applyAction(result);
									};
								}}
								class="space-y-4"
							>
								<div class="grid w-full max-w-sm items-center gap-1.5">
									<Label for="photo">File Foto</Label>
									<Input id="photo" name="photo" type="file" accept="image/*" required />
								</div>
								<DialogFooter>
									<Button type="submit">Upload</Button>
								</DialogFooter>
							</form>
						</DialogContent>
					</Dialog>
				</div>

				<!-- ACADEMIC INFO (READ ONLY) -->
				<div class="flex-1">
					<!-- No Form wrapper needed for read-only display -->
					<div class="space-y-4">
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
							<div class="space-y-2">
								<Label>Nama Lengkap</Label>
								<Input value={profile.name} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label>NIM</Label>
								<Input value={profile.platform_student_number} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label for="study_program">Prodi</Label>
								<Input id="study_program" value={profile.study_program} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label for="current_semester">Semester</Label>
								<Input
									id="current_semester"
									value={profile.current_semester}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="class_program">Program Kelas</Label>
								<Input id="class_program" value={profile.class_program} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label for="entry_year">Tahun Masuk</Label>
								<Input id="entry_year" value={profile.entry_year} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label for="entry_path">Jalur Pendaftaran</Label>
								<Input id="entry_path" value={profile.entry_path} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label for="entry_batch">Gelombang</Label>
								<Input id="entry_batch" value={profile.entry_batch} disabled class="bg-muted" />
							</div>
							<div class="space-y-2">
								<Label for="status">Status</Label>
								<Input id="status" value={profile.status} disabled class="bg-muted capitalize" />
							</div>
							<div class="space-y-2">
								<Label for="academic_group">Group Akademik</Label>
								<Input
									id="academic_group"
									value={profile.academic_group}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="academic_advisor">Pembimbing Akademik</Label>
								<Input
									id="academic_advisor"
									value={profile.academic_advisor}
									disabled
									class="bg-muted"
								/>
							</div>
						</div>
						<!-- BUTTON REMOVED -->
					</div>
				</div>
			</div>
		</CardContent>
	</Card>

	<Tabs value={activeTab} onValueChange={(v: string) => (activeTab = v)} class="space-y-4">
		<TabsList class="grid h-auto w-full grid-cols-2 lg:grid-cols-6">
			<TabsTrigger value="general">Umum</TabsTrigger>
			<TabsTrigger value="job">Pekerjaan</TabsTrigger>
			<TabsTrigger value="domicile">Domisili</TabsTrigger>
			<TabsTrigger value="citizenship">Kewarganegaraan</TabsTrigger>
			<TabsTrigger value="parents">Orang Tua</TabsTrigger>
			<TabsTrigger value="school">Sekolah Asal</TabsTrigger>
		</TabsList>

		<!-- GENERAL -->
		<!-- GENERAL -->
		<TabsContent value="general" class="space-y-4">
			<!-- Informasi Umum -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Informasi Umum</CardTitle>
						<CardDescription>Data pribadi</CardDescription>
					</div>
					{#if !editGeneral}
						<Button variant="ghost" size="sm" onclick={() => (editGeneral = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editGeneral}
						<!-- READ ONLY VIEW -->
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nama Lengkap</p>
								<p>{profile.name || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">NIM</p>
								<p>{profile.platform_student_number || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Jenis Kelamin</p>
								<p>{profile.gender || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Agama</p>
								<p>{profile.religion || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tempat Lahir</p>
								<p>{profile.place_of_birth || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tanggal Lahir</p>
								<p>
									{profile.date_of_birth
										? new Date(profile.date_of_birth).toLocaleDateString('id-ID')
										: '-'}
								</p>
							</div>
						</div>
					{:else}
						<!-- EDIT FORM -->
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editGeneral = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<Label>Nama Lengkap</Label>
									<Input value={profile.name} disabled />
								</div>
								<div class="space-y-2">
									<Label>NIM</Label>
									<Input value={profile.platform_student_number} disabled />
								</div>
								<div class="space-y-2">
									<Label for="gender">Jenis Kelamin</Label>
									<Input
										id="gender"
										name="gender"
										value={profile.gender}
										placeholder="Laki-laki / Perempuan"
									/>
								</div>
								<div class="space-y-2">
									<Label for="religion">Agama</Label>
									<Input
										id="religion"
										name="religion"
										value={profile.religion}
										placeholder="Islam, Kristen, dll"
									/>
								</div>
								<div class="space-y-2">
									<Label for="place_of_birth">Tempat Lahir</Label>
									<Input id="place_of_birth" name="place_of_birth" value={profile.place_of_birth} />
								</div>
								<div class="space-y-2">
									<Label for="date_of_birth">Tanggal Lahir</Label>
									<Input
										id="date_of_birth"
										name="date_of_birth"
										type="date"
										value={profile.date_of_birth
											? new Date(profile.date_of_birth).toISOString().split('T')[0]
											: ''}
									/>
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editGeneral = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>

			<!-- Kontak -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Kontak</CardTitle>
						<CardDescription>Informasi kontak</CardDescription>
					</div>
					{#if !editContact}
						<Button variant="ghost" size="sm" onclick={() => (editContact = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editContact}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
							<div>
								<p class="text-sm font-medium text-muted-foreground">No. HP 1</p>
								<p>{profile.phone_1 || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">No. HP 2</p>
								<p>{profile.phone_2 || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">WhatsApp</p>
								<p>{profile.whatsapp || '-'}</p>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editContact = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
								<div class="space-y-2">
									<Label for="phone_1">No. HP 1</Label>
									<Input id="phone_1" name="phone_1" value={profile.phone_1} />
								</div>
								<div class="space-y-2">
									<Label for="phone_2">No. HP 2</Label>
									<Input id="phone_2" name="phone_2" value={profile.phone_2} />
								</div>
								<div class="space-y-2">
									<Label for="whatsapp">WhatsApp</Label>
									<Input id="whatsapp" name="whatsapp" value={profile.whatsapp} />
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editContact = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>
		</TabsContent>

		<!-- JOB -->
		<TabsContent value="job">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Data Pekerjaan</CardTitle>
						<CardDescription>Informasi mengenai status pekerjaan saat ini.</CardDescription>
					</div>
					{#if !editJob}
						<Button variant="ghost" size="sm" onclick={() => (editJob = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editJob}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="text-sm font-medium text-muted-foreground">Status Pekerjaan</p>
								<p>{profile.job_status || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nama Perusahaan</p>
								<p>{profile.company_name || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tahun Mulai</p>
								<p>{profile.job_start_year || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Penghasilan</p>
								<p>{profile.income_range || '-'}</p>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editJob = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<Label for="job_status">Status Pekerjaan</Label>
									<Input
										id="job_status"
										name="job_status"
										value={profile.job_status}
										placeholder="Bekerja / Tidak Bekerja"
									/>
								</div>
								<div class="space-y-2">
									<Label for="company_name">Nama Perusahaan</Label>
									<Input id="company_name" name="company_name" value={profile.company_name} />
								</div>
								<div class="space-y-2">
									<Label for="job_start_year">Tahun Mulai</Label>
									<Input
										id="job_start_year"
										name="job_start_year"
										type="number"
										value={profile.job_start_year}
									/>
								</div>
								<div class="space-y-2">
									<Label for="income_range">Penghasilan</Label>
									<Input
										id="income_range"
										name="income_range"
										value={profile.income_range}
										placeholder="< 5 Juta"
									/>
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editJob = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>
		</TabsContent>

		<!-- DOMICILE -->
		<!-- DOMICILE -->
		<TabsContent value="domicile" class="space-y-4">
			<!-- KTP -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Domisili KTP</CardTitle>
						<CardDescription>Alamat sesuai KTP/Identitas</CardDescription>
					</div>
					{#if !editKtp}
						<Button variant="ghost" size="sm" onclick={() => (editKtp = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editKtp}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div class="md:col-span-2">
								<p class="text-sm font-medium text-muted-foreground">Alamat Lengkap</p>
								<p>{profile.ktp_address || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Provinsi</p>
								<p>{profile.ktp_province || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kota/Kabupaten</p>
								<p>{profile.ktp_city || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kecamatan</p>
								<p>{profile.ktp_district || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kelurahan</p>
								<p>{profile.ktp_subdistrict || '-'}</p>
							</div>
							<div class="grid grid-cols-3 gap-2">
								<div>
									<p class="text-sm font-medium text-muted-foreground">RT</p>
									<p>{profile.ktp_rt || '-'}</p>
								</div>
								<div>
									<p class="text-sm font-medium text-muted-foreground">RW</p>
									<p>{profile.ktp_rw || '-'}</p>
								</div>
								<div>
									<p class="text-sm font-medium text-muted-foreground">Kode Pos</p>
									<p>{profile.ktp_postal_code || '-'}</p>
								</div>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editKtp = false;
									await applyAction(result);
								};
							}}
							class="space-y-6"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2 md:col-span-2">
									<Label for="ktp_address">Alamat Lengkap</Label>
									<Input id="ktp_address" name="ktp_address" value={profile.ktp_address} />
								</div>
								<div class="space-y-2">
									<Label for="ktp_province">Provinsi</Label>
									<Input id="ktp_province" name="ktp_province" value={profile.ktp_province} />
								</div>
								<div class="space-y-2">
									<Label for="ktp_city">Kota/Kabupaten</Label>
									<Input id="ktp_city" name="ktp_city" value={profile.ktp_city} />
								</div>
								<div class="space-y-2">
									<Label for="ktp_district">Kecamatan</Label>
									<Input id="ktp_district" name="ktp_district" value={profile.ktp_district} />
								</div>
								<div class="space-y-2">
									<Label for="ktp_subdistrict">Kelurahan</Label>
									<Input
										id="ktp_subdistrict"
										name="ktp_subdistrict"
										value={profile.ktp_subdistrict}
									/>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div class="space-y-2">
										<Label for="ktp_rt">RT</Label>
										<Input id="ktp_rt" name="ktp_rt" value={profile.ktp_rt} />
									</div>
									<div class="space-y-2">
										<Label for="ktp_rw">RW</Label>
										<Input id="ktp_rw" name="ktp_rw" value={profile.ktp_rw} />
									</div>
									<div class="space-y-2">
										<Label for="ktp_postal_code">Kode Pos</Label>
										<Input
											id="ktp_postal_code"
											name="ktp_postal_code"
											value={profile.ktp_postal_code}
										/>
									</div>
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editKtp = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>

			<!-- DOMISILI SAAT INI -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Domisili Saat Ini</CardTitle>
						<CardDescription>Tempat tinggal sekarang</CardDescription>
					</div>
					{#if !editCurrent}
						<Button variant="ghost" size="sm" onclick={() => (editCurrent = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editCurrent}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div class="md:col-span-2">
								<p class="text-sm font-medium text-muted-foreground">Alamat Lengkap</p>
								<p>{profile.current_address || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Provinsi</p>
								<p>{profile.current_province || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kota/Kabupaten</p>
								<p>{profile.current_city || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kecamatan</p>
								<p>{profile.current_district || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kelurahan</p>
								<p>{profile.current_subdistrict || '-'}</p>
							</div>
							<div class="grid grid-cols-3 gap-2">
								<div>
									<p class="text-sm font-medium text-muted-foreground">RT</p>
									<p>{profile.current_rt || '-'}</p>
								</div>
								<div>
									<p class="text-sm font-medium text-muted-foreground">RW</p>
									<p>{profile.current_rw || '-'}</p>
								</div>
								<div>
									<p class="text-sm font-medium text-muted-foreground">Kode Pos</p>
									<p>{profile.current_postal_code || '-'}</p>
								</div>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editCurrent = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2 md:col-span-2">
									<Label for="current_address">Alamat Lengkap</Label>
									<Input
										id="current_address"
										name="current_address"
										value={profile.current_address}
									/>
								</div>
								<div class="space-y-2">
									<Label for="current_province">Provinsi</Label>
									<Input
										id="current_province"
										name="current_province"
										value={profile.current_province}
									/>
								</div>
								<div class="space-y-2">
									<Label for="current_city">Kota/Kabupaten</Label>
									<Input id="current_city" name="current_city" value={profile.current_city} />
								</div>
								<div class="space-y-2">
									<Label for="current_district">Kecamatan</Label>
									<Input
										id="current_district"
										name="current_district"
										value={profile.current_district}
									/>
								</div>
								<div class="space-y-2">
									<Label for="current_subdistrict">Kelurahan</Label>
									<Input
										id="current_subdistrict"
										name="current_subdistrict"
										value={profile.current_subdistrict}
									/>
								</div>
								<div class="grid grid-cols-3 gap-2">
									<div class="space-y-2">
										<Label for="current_rt">RT</Label>
										<Input id="current_rt" name="current_rt" value={profile.current_rt} />
									</div>
									<div class="space-y-2">
										<Label for="current_rw">RW</Label>
										<Input id="current_rw" name="current_rw" value={profile.current_rw} />
									</div>
									<div class="space-y-2">
										<Label for="current_postal_code">Kode Pos</Label>
										<Input
											id="current_postal_code"
											name="current_postal_code"
											value={profile.current_postal_code}
										/>
									</div>
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editCurrent = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>
		</TabsContent>

		<!-- CITIZENSHIP -->
		<!-- CITIZENSHIP -->
		<TabsContent value="citizenship">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Kewarganegaraan</CardTitle>
						<CardDescription
							>Informasi status kewarganegaraan dan dokumen kependudukan.</CardDescription
						>
					</div>
					{#if !editCitizenship}
						<Button variant="ghost" size="sm" onclick={() => (editCitizenship = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editCitizenship}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="text-sm font-medium text-muted-foreground">Kewarganegaraan</p>
								<p>{profile.citizenship || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">NIK</p>
								<p>{profile.nik || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nomor KK</p>
								<p>{profile.kk_number || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Status Hidup</p>
								<p>{profile.living_status || '-'}</p>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editCitizenship = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<Label for="citizenship">Kewarganegaraan</Label>
									<Input
										id="citizenship"
										name="citizenship"
										value={profile.citizenship}
										placeholder="WNI / WNA"
									/>
								</div>
								<div class="space-y-2">
									<Label for="nik">NIK (Nomor Induk Kependudukan)</Label>
									<Input id="nik" name="nik" value={profile.nik} />
								</div>
								<div class="space-y-2">
									<Label for="kk_number">Nomor KK</Label>
									<Input id="kk_number" name="kk_number" value={profile.kk_number} />
								</div>
								<div class="space-y-2">
									<Label for="living_status">Status Hidup</Label>
									<Input
										id="living_status"
										name="living_status"
										value={profile.living_status}
										placeholder="Hidup"
									/>
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editCitizenship = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>
		</TabsContent>

		<!-- PARENTS -->
		<!-- PARENTS -->
		<TabsContent value="parents" class="space-y-4">
			<!-- FATHER -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Ayah Kandung</CardTitle>
						<CardDescription>Informasi mengenai Ayah kandung.</CardDescription>
					</div>
					{#if !editFather}
						<Button variant="ghost" size="sm" onclick={() => (editFather = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editFather}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nama Lengkap</p>
								<p>{profile.father_name || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">NIK</p>
								<p>{profile.father_nik || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Status Hidup</p>
								<p>{profile.father_living_status || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">No. HP</p>
								<p>{profile.father_phone || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tempat Lahir</p>
								<p>{profile.father_place_of_birth || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tanggal Lahir</p>
								<p>
									{profile.father_date_of_birth
										? new Date(profile.father_date_of_birth).toLocaleDateString('id-ID')
										: '-'}
								</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Agama</p>
								<p>{profile.father_religion || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Pekerjaan</p>
								<p>{profile.father_job || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Penghasilan</p>
								<p>{profile.father_income_range || '-'}</p>
							</div>
							<div class="md:col-span-2">
								<p class="text-sm font-medium text-muted-foreground">Alamat</p>
								<p>{profile.father_address || '-'}</p>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editFather = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<Label for="father_name">Nama Lengkap</Label>
									<Input id="father_name" name="father_name" value={profile.father_name} />
								</div>
								<div class="space-y-2">
									<Label for="father_nik">NIK</Label>
									<Input id="father_nik" name="father_nik" value={profile.father_nik} />
								</div>
								<div class="space-y-2">
									<Label for="father_living_status">Status Hidup</Label>
									<Input
										id="father_living_status"
										name="father_living_status"
										value={profile.father_living_status}
									/>
								</div>
								<div class="space-y-2">
									<Label for="father_phone">No. HP</Label>
									<Input id="father_phone" name="father_phone" value={profile.father_phone} />
								</div>
								<div class="space-y-2">
									<Label for="father_place_of_birth">Tempat Lahir</Label>
									<Input
										id="father_place_of_birth"
										name="father_place_of_birth"
										value={profile.father_place_of_birth}
									/>
								</div>
								<div class="space-y-2">
									<Label for="father_date_of_birth">Tanggal Lahir</Label>
									<Input
										id="father_date_of_birth"
										name="father_date_of_birth"
										type="date"
										value={profile.father_date_of_birth
											? new Date(profile.father_date_of_birth).toISOString().split('T')[0]
											: ''}
									/>
								</div>
								<div class="space-y-2">
									<Label for="father_job">Pekerjaan</Label>
									<Input id="father_job" name="father_job" value={profile.father_job} />
								</div>
								<div class="space-y-2">
									<Label for="father_income_range">Penghasilan</Label>
									<Input
										id="father_income_range"
										name="father_income_range"
										value={profile.father_income_range}
									/>
								</div>
								<div class="space-y-2">
									<Label for="father_religion">Agama</Label>
									<Input
										id="father_religion"
										name="father_religion"
										value={profile.father_religion}
									/>
								</div>
								<div class="space-y-2 md:col-span-2">
									<Label for="father_address">Alamat</Label>
									<Input id="father_address" name="father_address" value={profile.father_address} />
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editFather = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>

			<!-- MOTHER -->
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Ibu Kandung</CardTitle>
						<CardDescription>Informasi mengenai Ibu kandung.</CardDescription>
					</div>
					{#if !editMother}
						<Button variant="ghost" size="sm" onclick={() => (editMother = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editMother}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nama Lengkap</p>
								<p>{profile.mother_name || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">NIK</p>
								<p>{profile.mother_nik || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Status Hidup</p>
								<p>{profile.mother_living_status || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">No. HP</p>
								<p>{profile.mother_phone || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tempat Lahir</p>
								<p>{profile.mother_place_of_birth || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tanggal Lahir</p>
								<p>
									{profile.mother_date_of_birth
										? new Date(profile.mother_date_of_birth).toLocaleDateString('id-ID')
										: '-'}
								</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Agama</p>
								<p>{profile.mother_religion || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Pekerjaan</p>
								<p>{profile.mother_job || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Penghasilan</p>
								<p>{profile.mother_income_range || '-'}</p>
							</div>
							<div class="md:col-span-2">
								<p class="text-sm font-medium text-muted-foreground">Alamat</p>
								<p>{profile.mother_address || '-'}</p>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editMother = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<Label for="mother_name">Nama Lengkap</Label>
									<Input id="mother_name" name="mother_name" value={profile.mother_name} />
								</div>
								<div class="space-y-2">
									<Label for="mother_nik">NIK</Label>
									<Input id="mother_nik" name="mother_nik" value={profile.mother_nik} />
								</div>
								<div class="space-y-2">
									<Label for="mother_living_status">Status Hidup</Label>
									<Input
										id="mother_living_status"
										name="mother_living_status"
										value={profile.mother_living_status}
									/>
								</div>
								<div class="space-y-2">
									<Label for="mother_phone">No. HP</Label>
									<Input id="mother_phone" name="mother_phone" value={profile.mother_phone} />
								</div>
								<div class="space-y-2">
									<Label for="mother_place_of_birth">Tempat Lahir</Label>
									<Input
										id="mother_place_of_birth"
										name="mother_place_of_birth"
										value={profile.mother_place_of_birth}
									/>
								</div>
								<div class="space-y-2">
									<Label for="mother_date_of_birth">Tanggal Lahir</Label>
									<Input
										id="mother_date_of_birth"
										name="mother_date_of_birth"
										type="date"
										value={profile.mother_date_of_birth
											? new Date(profile.mother_date_of_birth).toISOString().split('T')[0]
											: ''}
									/>
								</div>
								<div class="space-y-2">
									<Label for="mother_job">Pekerjaan</Label>
									<Input id="mother_job" name="mother_job" value={profile.mother_job} />
								</div>
								<div class="space-y-2">
									<Label for="mother_income_range">Penghasilan</Label>
									<Input
										id="mother_income_range"
										name="mother_income_range"
										value={profile.mother_income_range}
									/>
								</div>
								<div class="space-y-2">
									<Label for="mother_religion">Agama</Label>
									<Input
										id="mother_religion"
										name="mother_religion"
										value={profile.mother_religion}
									/>
								</div>
								<div class="space-y-2 md:col-span-2">
									<Label for="mother_address">Alamat</Label>
									<Input id="mother_address" name="mother_address" value={profile.mother_address} />
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editMother = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>
		</TabsContent>

		<!-- SCHOOL -->
		<!-- SCHOOL -->
		<TabsContent value="school">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
					<div class="space-y-1">
						<CardTitle>Sekolah Asal</CardTitle>
						<CardDescription
							>Informasi mengenai pendidikan terakhir sebelum masuk universitas.</CardDescription
						>
					</div>
					{#if !editSchool}
						<Button variant="ghost" size="sm" onclick={() => (editSchool = true)}>Edit</Button>
					{/if}
				</CardHeader>
				<CardContent>
					{#if !editSchool}
						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nama Sekolah</p>
								<p>{profile.school_name || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Jurusan</p>
								<p>{profile.school_major || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">NISN</p>
								<p>{profile.nisn || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Nomor Ijazah</p>
								<p>{profile.diploma_number || '-'}</p>
							</div>
							<div>
								<p class="text-sm font-medium text-muted-foreground">Tahun Lulus</p>
								<p>{profile.graduation_year || '-'}</p>
							</div>
						</div>
					{:else}
						<form
							method="POST"
							action="?/update"
							use:enhance={() => {
								return async ({ result }) => {
									if (result.type === 'success') editSchool = false;
									await applyAction(result);
								};
							}}
							class="space-y-4"
						>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
									<Label for="school_name">Nama Sekolah</Label>
									<Input
										id="school_name"
										name="school_name"
										value={profile.school_name}
										placeholder="SMA Negeri 1 ..."
									/>
								</div>
								<div class="space-y-2">
									<Label for="school_major">Jurusan</Label>
									<Input
										id="school_major"
										name="school_major"
										value={profile.school_major}
										placeholder="IPA / IPS / TKJ"
									/>
								</div>
								<div class="space-y-2">
									<Label for="nisn">NISN</Label>
									<Input id="nisn" name="nisn" value={profile.nisn} />
								</div>
								<div class="space-y-2">
									<Label for="diploma_number">Nomor Ijazah</Label>
									<Input id="diploma_number" name="diploma_number" value={profile.diploma_number} />
								</div>
								<div class="space-y-2">
									<Label for="graduation_year">Tahun Lulus</Label>
									<Input
										id="graduation_year"
										name="graduation_year"
										type="number"
										value={profile.graduation_year}
									/>
								</div>
							</div>
							<div class="flex justify-end gap-2">
								<Button type="button" variant="outline" onclick={() => (editSchool = false)}
									>Batal</Button
								>
								<Button type="submit">Simpan</Button>
							</div>
						</form>
					{/if}
				</CardContent>
			</Card>
		</TabsContent>
	</Tabs>
</div>
