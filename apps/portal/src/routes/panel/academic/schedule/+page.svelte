<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Input } from '$lib/components/ui/input';
	import { CalendarDays, Users, Loader2, Search, Clock, MapPin, Award } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let classes: any[] = $state([]);
	let loading = $state(true);
	let search = $state('');

	// Filter state
	let selectedSemester = $state('GANJIL');
	let selectedYear = $state(new Date().getFullYear());

	async function fetchClasses() {
		loading = true;
		try {
			// Fetch detailed profile to get lecturer ID
			const profileRes = await fetch('http://localhost:3002/api/v1/lecturers/me', {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const profileData = await profileRes.json();

			if (profileData.status !== 'success') {
				throw new Error('Gagal memuat profil dosen');
			}
			const lecturerId = profileData.data.id;

			const query = new URLSearchParams({
				lecturer_id: lecturerId,
				semester: selectedSemester,
				year: selectedYear.toString(),
				search: search,
				limit: '100'
			});

			const res = await fetch(`http://localhost:3002/api/v1/classes?${query.toString()}`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});

			const response = await res.json();
			if (response.status === 'success') {
				classes = response.data;
			}
		} catch (error) {
			console.error('Failed to fetch classes:', error);
			toast.error('Gagal memuat jadwal mengajar');
		} finally {
			loading = false;
		}
	}

	function handleSearch(e: Event) {
		search = (e.target as HTMLInputElement).value;
		setTimeout(fetchClasses, 500);
	}

	onMount(() => {
		fetchClasses();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Jadwal Mengajar</h1>
			<p class="text-muted-foreground">Kelola presensi dan perkuliahan.</p>
		</div>
	</div>

	<div class="flex items-center gap-4">
		<div class="grid w-full max-w-sm items-center gap-1.5">
			<select
				class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				bind:value={selectedSemester}
				onchange={fetchClasses}
			>
				<option value="GANJIL">GANJIL</option>
				<option value="GENAP">GENAP</option>
				<option value="PENDEK">PENDEK</option>
			</select>
		</div>
		<div class="grid w-full max-w-[100px] items-center gap-1.5">
			<Input type="number" bind:value={selectedYear} onchange={fetchClasses} />
		</div>
		<div class="relative flex-1">
			<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
			<Input placeholder="Cari mata kuliah..." class="pl-8" oninput={handleSearch} />
		</div>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Kode</TableHead>
							<TableHead>Mata Kuliah</TableHead>
							<TableHead>SKS</TableHead>
							<TableHead>Jadwal</TableHead>
							<TableHead>Kapasitas</TableHead>
							<TableHead class="text-right">Aksi</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={6} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if classes.length === 0}
							<TableRow>
								<TableCell colspan={6} class="h-24 text-center text-muted-foreground">
									Tidak ada jadwal mengajar.
								</TableCell>
							</TableRow>
						{:else}
							{#each classes as cls (cls.id)}
								<TableRow>
									<TableCell>{cls.course_code}</TableCell>
									<TableCell>
										<div class="font-medium">{cls.course_name}</div>
										<div class="text-xs text-muted-foreground">Kelas {cls.name || 'A'}</div>
									</TableCell>
									<TableCell>{cls.credits}</TableCell>
									<TableCell>
										{#if cls.day}
											<div class="flex items-center text-sm">
												<Clock class="mr-1 h-3 w-3" />
												{cls.day}, {cls.start_time?.slice(0, 5)}-{cls.end_time?.slice(0, 5)}
											</div>
											<div class="mt-1 flex items-center text-xs text-muted-foreground">
												<MapPin class="mr-1 h-3 w-3" />
												{cls.room || 'Online'}
											</div>
										{:else}
											<span class="text-muted-foreground">-</span>
										{/if}
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-2">
											<Users class="h-4 w-4 text-muted-foreground" />
											<span>{cls.total_students || 0} / {cls.capacity}</span>
										</div>
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button
												size="sm"
												variant="outline"
												href={`/panel/academic/schedule/${cls.id}/attendance`}
											>
												<CalendarDays class="mr-2 h-4 w-4" />
												Presensi
											</Button>
											<Button
												size="sm"
												variant="outline"
												href={`/panel/academic/schedule/${cls.id}/grades`}
											>
												<Award class="mr-2 h-4 w-4" />
												Nilai
											</Button>
										</div>
									</TableCell>
								</TableRow>
							{/each}
						{/if}
					</TableBody>
				</Table>
			</div>
		</div>
	</div>
</div>
