<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';
	import { Label } from '$lib/components/ui/label';
	import { ArrowLeft, Save, Loader2, CheckCircle2 } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let classId = $page.params.classId;
	let students: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	let meetingNumber = $state(1);
	// Attendance state: Map studentId -> status
	let attendanceData: Record<string, string> = $state({});

	async function fetchData() {
		loading = true;
		try {
			// Fetch students first
			const resStudents = await fetch(`http://localhost:3002/api/v1/classes/${classId}/students`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const responseStudents = await resStudents.json();

			if (responseStudents.status === 'success') {
				students = responseStudents.data;
				// Initialize attendance data with default 'hadir' or existing data
				initializeAttendance();
			}

			// Fetch existing attendance for this meeting
			await fetchAttendance();
		} catch (error) {
			console.error('Failed to fetch class data:', error);
			toast.error('Gagal memuat data kelas');
		} finally {
			loading = false;
		}
	}

	function initializeAttendance() {
		const initial: Record<string, string> = {};
		students.forEach((s) => {
			initial[s.id] = 'hadir'; // Default to Present
		});
		attendanceData = initial;
	}

	async function fetchAttendance() {
		try {
			const res = await fetch(
				`http://localhost:3002/api/v1/classes/${classId}/attendance?meeting=${meetingNumber}`,
				{
					headers: { Authorization: `Bearer ${data.token}` }
				}
			);
			const response = await res.json();

			if (response.status === 'success' && response.data.length > 0) {
				// Update local state with existing records
				const existing: Record<string, string> = {};
				response.data.forEach((rec: any) => {
					existing[rec.student_id] = rec.status;
				});
				// Merge with initialized (so new students still have default)
				attendanceData = { ...attendanceData, ...existing };
			} else {
				// Reset to default if no data for this meeting
				initializeAttendance();
			}
		} catch (error) {
			console.error('Failed to fetch attendance:', error);
		}
	}

	async function handleSave() {
		saving = true;
		try {
			const attendances = Object.entries(attendanceData).map(([studentId, status]) => ({
				student_id: studentId,
				status
			}));

			const res = await fetch('http://localhost:3002/api/v1/attendance/batch', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					class_id: classId,
					meeting_number: meetingNumber,
					attendances
				})
			});

			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Presensi berhasil disimpan');
			} else {
				throw new Error(response.message || 'Gagal menyimpan presensi');
			}
		} catch (error: any) {
			console.error('Save error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			saving = false;
		}
	}

	onMount(() => {
		fetchData();
	});

	function handleMeetingChange() {
		fetchAttendance();
	}
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-4">
		<Button variant="outline" size="icon" href="/panel/academic/schedule">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Input Presensi</h1>
			<p class="text-muted-foreground">Pertemuan ke-{meetingNumber}</p>
		</div>
	</div>

	<!-- Toolbar -->
	<div class="flex items-center justify-between rounded-xl border bg-card p-4 shadow-sm">
		<div class="flex items-center gap-4">
			<Label>Pertemuan Ke:</Label>
			<select
				class="flex h-10 w-20 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
				bind:value={meetingNumber}
				onchange={handleMeetingChange}
			>
				{#each Array(16) as _, i}
					<option value={i + 1}>{i + 1}</option>
				{/each}
			</select>
		</div>
		<Button onclick={handleSave} disabled={saving}>
			{#if saving}
				<Loader2 class="mr-2 h-4 w-4 animate-spin" />
			{/if}
			<Save class="mr-2 h-4 w-4" />
			Simpan Presensi
		</Button>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead class="w-[50px]">No</TableHead>
							<TableHead>NIM</TableHead>
							<TableHead>Nama Mahasiswa</TableHead>
							<TableHead>Status Kehadiran</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={4} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if students.length === 0}
							<TableRow>
								<TableCell colspan={4} class="h-24 text-center text-muted-foreground">
									Belum ada mahasiswa di kelas ini.
								</TableCell>
							</TableRow>
						{:else}
							{#each students as student, i}
								<TableRow>
									<TableCell>{i + 1}</TableCell>
									<TableCell>{student.student_number}</TableCell>
									<TableCell class="font-medium">{student.name}</TableCell>
									<TableCell>
										<div class="flex items-center gap-4">
											<div class="flex items-center space-x-2">
												<input
													type="radio"
													id={`h-${student.id}`}
													name={`status-${student.id}`}
													value="hadir"
													class="radio-button"
													bind:group={attendanceData[student.id]}
												/>
												<Label
													for={`h-${student.id}`}
													class="cursor-pointer font-medium text-green-600">Hadir</Label
												>
											</div>
											<div class="flex items-center space-x-2">
												<input
													type="radio"
													id={`s-${student.id}`}
													name={`status-${student.id}`}
													value="sakit"
													class="radio-button"
													bind:group={attendanceData[student.id]}
												/>
												<Label for={`s-${student.id}`} class="cursor-pointer text-yellow-600"
													>Sakit</Label
												>
											</div>
											<div class="flex items-center space-x-2">
												<input
													type="radio"
													id={`i-${student.id}`}
													name={`status-${student.id}`}
													value="izin"
													class="radio-button"
													bind:group={attendanceData[student.id]}
												/>
												<Label for={`i-${student.id}`} class="cursor-pointer text-blue-600"
													>Izin</Label
												>
											</div>
											<div class="flex items-center space-x-2">
												<input
													type="radio"
													id={`a-${student.id}`}
													name={`status-${student.id}`}
													value="alfa"
													class="radio-button"
													bind:group={attendanceData[student.id]}
												/>
												<Label for={`a-${student.id}`} class="cursor-pointer text-red-600"
													>Alfa</Label
												>
											</div>
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

<style>
	/* Simple radio button styling if unthemed */
	.radio-button {
		width: 1.2rem;
		height: 1.2rem;
		cursor: pointer;
	}
</style>
