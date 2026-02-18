<script lang="ts">
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
	import {
		Dialog,
		DialogContent,
		DialogDescription,
		DialogHeader,
		DialogTitle,
		DialogTrigger,
		DialogFooter
	} from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { ArrowLeft, Plus, Pencil, Trash2, Loader2, Clock, MapPin } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let classId = $page.params.classId;
	let schedules: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	// Form state
	let openDialog = $state(false);
	let editingId: string | null = $state(null);
	let formDay = $state('Senin');
	let formStartTime = $state('08:00');
	let formEndTime = $state('09:40');
	let formRoom = $state('');
	let formType = $state('offline');

	const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

	async function fetchSchedules() {
		loading = true;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/classes/${classId}/schedules`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				schedules = response.data;
			}
		} catch (error) {
			console.error('Failed to fetch schedules:', error);
			toast.error('Gagal memuat jadwal');
		} finally {
			loading = false;
		}
	}

	function resetForm() {
		editingId = null;
		formDay = 'Senin';
		formStartTime = '08:00';
		formEndTime = '09:40';
		formRoom = '';
		formType = 'offline';
	}

	function openCreate() {
		resetForm();
		openDialog = true;
	}

	function openEdit(schedule: any) {
		editingId = schedule.id;
		formDay = schedule.day;
		formStartTime = schedule.start_time?.slice(0, 5) || '08:00';
		formEndTime = schedule.end_time?.slice(0, 5) || '09:40';
		formRoom = schedule.room || '';
		formType = schedule.type || 'offline';
		openDialog = true;
	}

	async function handleSave() {
		saving = true;
		try {
			const body: any = {
				day: formDay,
				start_time: formStartTime,
				end_time: formEndTime,
				room: formRoom,
				type: formType
			};

			let res: Response;
			if (editingId) {
				res = await fetch(`http://localhost:3002/api/v1/schedules/${editingId}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${data.token}`
					},
					body: JSON.stringify(body)
				});
			} else {
				body.class_id = classId;
				res = await fetch('http://localhost:3002/api/v1/schedules', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${data.token}`
					},
					body: JSON.stringify(body)
				});
			}

			const response = await res.json();
			if (response.status === 'success') {
				toast.success(editingId ? 'Jadwal berhasil diperbarui' : 'Jadwal berhasil ditambahkan');
				openDialog = false;
				fetchSchedules();
			} else {
				throw new Error(response.message || 'Gagal menyimpan jadwal');
			}
		} catch (error: any) {
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			saving = false;
		}
	}

	async function handleDelete(scheduleId: string) {
		if (!confirm('Apakah Anda yakin ingin menghapus jadwal ini?')) return;

		try {
			const res = await fetch(`http://localhost:3002/api/v1/schedules/${scheduleId}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Jadwal berhasil dihapus');
				fetchSchedules();
			} else {
				throw new Error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal menghapus jadwal');
		}
	}

	function getTypeBadge(type: string) {
		if (type === 'online') return 'secondary';
		if (type === 'hybrid') return 'outline';
		return 'default';
	}

	onMount(() => {
		fetchSchedules();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-4">
		<Button variant="outline" size="icon" href="/panel/academic/classes">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<div class="flex-1">
			<h1 class="text-3xl font-bold tracking-tight">Kelola Jadwal Kelas</h1>
			<p class="text-muted-foreground">Atur jadwal perkuliahan untuk kelas ini.</p>
		</div>
		<Dialog bind:open={openDialog}>
			<DialogTrigger>
				<Button onclick={openCreate}>
					<Plus class="mr-2 h-4 w-4" />
					Tambah Jadwal
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{editingId ? 'Edit Jadwal' : 'Tambah Jadwal'}</DialogTitle>
					<DialogDescription>
						{editingId ? 'Perbarui jadwal perkuliahan.' : 'Tambahkan jadwal baru.'}
					</DialogDescription>
				</DialogHeader>

				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Hari</Label>
						<select
							class="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
							bind:value={formDay}
						>
							{#each days as day (day)}
								<option value={day}>{day}</option>
							{/each}
						</select>
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Mulai</Label>
						<Input type="time" bind:value={formStartTime} class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Selesai</Label>
						<Input type="time" bind:value={formEndTime} class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Ruangan</Label>
						<Input bind:value={formRoom} placeholder="Contoh: R.301" class="col-span-3" />
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Tipe</Label>
						<select
							class="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
							bind:value={formType}
						>
							<option value="offline">Offline</option>
							<option value="online">Online</option>
							<option value="hybrid">Hybrid</option>
						</select>
					</div>
				</div>

				<DialogFooter>
					<Button variant="outline" onclick={() => (openDialog = false)}>Batal</Button>
					<Button onclick={handleSave} disabled={saving}>
						{#if saving}
							<Loader2 class="mr-2 h-4 w-4 animate-spin" />
						{/if}
						{editingId ? 'Perbarui' : 'Simpan'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Hari</TableHead>
							<TableHead>Waktu</TableHead>
							<TableHead>Ruangan</TableHead>
							<TableHead>Tipe</TableHead>
							<TableHead class="text-right">Aksi</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if schedules.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Belum ada jadwal. Klik "Tambah Jadwal" untuk menambahkan.
								</TableCell>
							</TableRow>
						{:else}
							{#each schedules as schedule (schedule.id)}
								<TableRow>
									<TableCell class="font-medium">{schedule.day}</TableCell>
									<TableCell>
										<div class="flex items-center gap-1">
											<Clock class="h-3 w-3 text-muted-foreground" />
											{schedule.start_time?.slice(0, 5)} - {schedule.end_time?.slice(0, 5)}
										</div>
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-1">
											<MapPin class="h-3 w-3 text-muted-foreground" />
											{schedule.room || 'Belum ditentukan'}
										</div>
									</TableCell>
									<TableCell>
										<Badge variant={getTypeBadge(schedule.type)}>
											{schedule.type}
										</Badge>
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button size="sm" variant="ghost" onclick={() => openEdit(schedule)}>
												<Pencil class="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="ghost"
												class="text-destructive"
												onclick={() => handleDelete(schedule.id)}
											>
												<Trash2 class="h-4 w-4" />
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
