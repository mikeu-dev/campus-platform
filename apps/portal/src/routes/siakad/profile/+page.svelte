<script lang="ts">
	import { enhance } from '$app/forms';
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

	let { data, form } = $props();
	let profile = $derived(data.profile || {});

	let activeTab = $state('general');
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
					<!-- Upload Placeholder -->
					<Button variant="outline" size="sm" class="w-full">Upload Foto</Button>
				</div>

				<!-- ACADEMIC INFO FORM -->
				<div class="flex-1">
					<form method="POST" action="?/update" use:enhance class="space-y-4">
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
								<Input
									id="study_program"
									name="study_program"
									value={profile.study_program}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="current_semester">Semester</Label>
								<Input
									id="current_semester"
									name="current_semester"
									type="number"
									value={profile.current_semester}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="class_program">Program Kelas</Label>
								<Input
									id="class_program"
									name="class_program"
									value={profile.class_program}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="entry_year">Tahun Masuk</Label>
								<Input
									id="entry_year"
									name="entry_year"
									type="number"
									value={profile.entry_year}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="entry_path">Jalur Pendaftaran</Label>
								<Input
									id="entry_path"
									name="entry_path"
									value={profile.entry_path}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="entry_batch">Gelombang</Label>
								<Input
									id="entry_batch"
									name="entry_batch"
									value={profile.entry_batch}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="status">Status</Label>
								<Input id="status" value={profile.status} disabled class="bg-muted capitalize" />
							</div>
							<div class="space-y-2">
								<Label for="academic_group">Group Akademik</Label>
								<Input
									id="academic_group"
									name="academic_group"
									value={profile.academic_group}
									disabled
									class="bg-muted"
								/>
							</div>
							<div class="space-y-2">
								<Label for="academic_advisor">Pembimbing Akademik</Label>
								<Input
									id="academic_advisor"
									name="academic_advisor"
									value={profile.academic_advisor}
									disabled
									class="bg-muted"
								/>
							</div>
						</div>
						<div class="flex justify-end">
							<Button type="submit" size="sm">Simpan Data Akademik</Button>
						</div>
					</form>
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
		<TabsContent value="general">
			<Card>
				<CardHeader>
					<CardTitle>Informasi Umum & Kontak</CardTitle>
					<CardDescription>Data pribadi dan informasi kontak yang dapat dihubungi.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-4">
					<form method="POST" action="?/update" use:enhance class="space-y-4">
						<input type="hidden" name="section" value="general" />

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

						<Separator />
						<h3 class="text-lg font-medium">Kontak</h3>

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

						<div class="flex justify-end">
							<Button type="submit">Simpan Perubahan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</TabsContent>

		<!-- JOB -->
		<TabsContent value="job">
			<Card>
				<CardHeader>
					<CardTitle>Data Pekerjaan</CardTitle>
					<CardDescription>Informasi mengenai status pekerjaan saat ini.</CardDescription>
				</CardHeader>
				<CardContent>
					<form method="POST" action="?/update" use:enhance class="space-y-4">
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
						<div class="flex justify-end">
							<Button type="submit">Simpan Perubahan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</TabsContent>

		<!-- DOMICILE -->
		<TabsContent value="domicile">
			<Card>
				<CardHeader>
					<CardTitle>Data Domisili</CardTitle>
					<CardDescription>Alamat sesuai KTP dan tempat tinggal saat ini.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-6">
					<form method="POST" action="?/update" use:enhance class="space-y-6">
						<div class="space-y-4">
							<h3 class="text-lg font-medium">Domisili KTP</h3>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
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
						</div>

						<Separator />

						<div class="space-y-4">
							<h3 class="text-lg font-medium">Domisili Saat Ini</h3>
							<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
								<div class="space-y-2">
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
						</div>

						<div class="flex justify-end">
							<Button type="submit">Simpan Perubahan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</TabsContent>

		<!-- CITIZENSHIP -->
		<TabsContent value="citizenship">
			<Card>
				<CardHeader>
					<CardTitle>Kewarganegaraan</CardTitle>
					<CardDescription
						>Informasi status kewarganegaraan dan dokumen kependudukan.</CardDescription
					>
				</CardHeader>
				<CardContent>
					<form method="POST" action="?/update" use:enhance class="space-y-4">
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
						<div class="flex justify-end">
							<Button type="submit">Simpan Perubahan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</TabsContent>

		<!-- PARENTS -->
		<TabsContent value="parents">
			<Card>
				<CardHeader>
					<CardTitle>Data Orang Tua</CardTitle>
					<CardDescription>Informasi mengenai Ayah dan Ibu kandung.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-6">
					<form method="POST" action="?/update" use:enhance class="space-y-6">
						<div class="space-y-4">
							<h3 class="text-lg font-medium">Ayah Kandung</h3>
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
							</div>
						</div>

						<Separator />

						<div class="space-y-4">
							<h3 class="text-lg font-medium">Ibu Kandung</h3>
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
							</div>
						</div>

						<div class="flex justify-end">
							<Button type="submit">Simpan Perubahan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</TabsContent>

		<!-- SCHOOL -->
		<TabsContent value="school">
			<Card>
				<CardHeader>
					<CardTitle>Sekolah Asal</CardTitle>
					<CardDescription
						>Informasi mengenai pendidikan terakhir sebelum masuk universitas.</CardDescription
					>
				</CardHeader>
				<CardContent>
					<form method="POST" action="?/update" use:enhance class="space-y-4">
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
						<div class="flex justify-end">
							<Button type="submit">Simpan Perubahan</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</TabsContent>
	</Tabs>
</div>
