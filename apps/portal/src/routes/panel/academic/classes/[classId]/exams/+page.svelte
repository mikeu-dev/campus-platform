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
	import { ArrowLeft, Plus, Pencil, Trash2, Loader2, Calendar, Clock, MapPin } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let classId = $page.params.classId;
	let exams: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	// Form state
	let openDialog = $state(false);
	let editingId: string | null = $state(null);
	let formType = $state('UTS');
	let formDate = $state('');
	let formStartTime = $state('08:00');
	let formEndTime = $state('10:00');
	let formRoom = $state('');

	async function fetchExams() {
		loading = true;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/classes/${classId}/exams`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				exams = response.data;
			}
		} catch (error) {
			console.error('Failed to fetch exams:', error);
			toast.error('Gagal memuat data ujian');
		} finally {
			loading = false;
		}
	}

	function resetForm() {
		editingId = null;
		formType = 'UTS';
		formDate = '';
		formStartTime = '08:00';
		formEndTime = '10:00';
		formRoom = '';
	}

	function openCreate() {
		resetForm();
		openDialog = true;
	}

	function openEdit(exam: any) {
		editingId = exam.id;
		formType = exam.type;
		formDate = exam.date?.slice(0, 10) || '';
		formStartTime = exam.start_time?.slice(0, 5) || '08:00';
		formEndTime = exam.end_time?.slice(0, 5) || '10:00';
		formRoom = exam.room || '';
		openDialog = true;
	}

	async function handleSave() {
		if (!formDate) {
			toast.error('Tanggal ujian wajib diisi');
			return;
		}
		saving = true;
		try {
			const body: any = {
				type: formType,
				date: formDate,
				start_time: formStartTime,
				end_time: formEndTime,
				room: formRoom
			};

			let res: Response;
			if (editingId) {
				res = await fetch(`http://localhost:3002/api/v1/exams/${editingId}`, {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${data.token}`
					},
					body: JSON.stringify(body)
				});
			} else {
				body.class_id = classId;
				res = await fetch('http://localhost:3002/api/v1/exams', {
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
				toast.success(editingId ? 'Ujian berhasil diperbarui' : 'Ujian berhasil ditambahkan');
				openDialog = false;
				fetchExams();
			} else {
				throw new Error(response.message || 'Gagal menyimpan');
			}
		} catch (error: any) {
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			saving = false;
		}
	}

	async function handleDelete(examId: string) {
		if (!confirm('Apakah Anda yakin ingin menghapus ujian ini?')) return;
		try {
			const res = await fetch(`http://localhost:3002/api/v1/exams/${examId}`, {
				method: 'DELETE',
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Ujian berhasil dihapus');
				fetchExams();
			} else {
				throw new Error(response.message);
			}
		} catch (error: any) {
			toast.error(error.message || 'Gagal menghapus ujian');
		}
	}

	function getTypeBadge(type: string) {
		return type === 'UAS' ? 'destructive' : 'default';
	}

	onMount(() => {
		fetchExams();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-4">
		<Button variant="outline" size="icon" href="/panel/academic/classes">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<div class="flex-1">
			<h1 class="text-3xl font-bold tracking-tight">Kelola Ujian</h1>
			<p class="text-muted-foreground">Atur jadwal UTS dan UAS untuk kelas ini.</p>
		</div>
		<Dialog bind:open={openDialog}>
			<DialogTrigger>
				<Button onclick={openCreate}>
					<Plus class="mr-2 h-4 w-4" />
					Tambah Ujian
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{editingId ? 'Edit Ujian' : 'Tambah Ujian'}</DialogTitle>
					<DialogDescription>
						{editingId ? 'Perbarui jadwal ujian.' : 'Tambahkan jadwal ujian baru.'}
					</DialogDescription>
				</DialogHeader>

				<div class="grid gap-4 py-4">
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Tipe</Label>
						<select
							class="col-span-3 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
							bind:value={formType}
						>
							<option value="UTS">UTS (Ujian Tengah Semester)</option>
							<option value="UAS">UAS (Ujian Akhir Semester)</option>
						</select>
					</div>
					<div class="grid grid-cols-4 items-center gap-4">
						<Label class="text-right">Tanggal</Label>
						<Input type="date" bind:value={formDate} class="col-span-3" />
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
						<Input bind:value={formRoom} placeholder="Contoh: Lab Komputer 1" class="col-span-3" />
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
							<TableHead>Tipe</TableHead>
							<TableHead>Tanggal</TableHead>
							<TableHead>Waktu</TableHead>
							<TableHead>Ruangan</TableHead>
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
						{:else if exams.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Belum ada jadwal ujian. Klik "Tambah Ujian" untuk menambahkan.
								</TableCell>
							</TableRow>
						{:else}
							{#each exams as exam}
								<TableRow>
									<TableCell>
										<Badge variant={getTypeBadge(exam.type)}>
											{exam.type}
										</Badge>
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-1">
											<Calendar class="h-3 w-3 text-muted-foreground" />
											{new Date(exam.date).toLocaleDateString('id-ID', {
												weekday: 'long',
												year: 'numeric',
												month: 'long',
												day: 'numeric'
											})}
										</div>
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-1">
											<Clock class="h-3 w-3 text-muted-foreground" />
											{exam.start_time?.slice(0, 5)} - {exam.end_time?.slice(0, 5)}
										</div>
									</TableCell>
									<TableCell>
										<div class="flex items-center gap-1">
											<MapPin class="h-3 w-3 text-muted-foreground" />
											{exam.room || 'Belum ditentukan'}
										</div>
									</TableCell>
									<TableCell class="text-right">
										<div class="flex items-center justify-end gap-2">
											<Button size="sm" variant="ghost" onclick={() => openEdit(exam)}>
												<Pencil class="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="ghost"
												class="text-destructive"
												onclick={() => handleDelete(exam.id)}
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
