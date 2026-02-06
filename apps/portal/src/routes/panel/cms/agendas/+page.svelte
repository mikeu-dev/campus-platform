<script lang="ts">
	import { Plus, Pencil, Trash2, Calendar, MapPin, Clock, Pin, Check, X } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Badge } from '$lib/components/ui/badge';
	import { Textarea } from '$lib/components/ui/textarea';
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
		DialogFooter,
		DialogHeader,
		DialogTitle,
		DialogTrigger
	} from '$lib/components/ui/dialog';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { toast } from 'svelte-sonner';

	let { data, form } = $props();
	const { agendas = [] } = $derived(data);

	let isDialogOpen = $state(false);
	let editingAgenda = $state<any>(null);

	function resetForm() {
		editingAgenda = null;
		isDialogOpen = false;
	}

	function handleEdit(agenda: any) {
		editingAgenda = { ...agenda };
		if (editingAgenda.event_date) {
			editingAgenda.event_date = new Date(editingAgenda.event_date).toISOString().split('T')[0];
		}
		isDialogOpen = true;
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Agenda Kampus</h2>
			<p class="text-muted-foreground">
				Kelola jadwal kegiatan, seminar, dan acara kampus lainnya.
			</p>
			<Button
				onclick={() => {
					editingAgenda = null;
					isDialogOpen = true;
				}}
				class="gap-2"
			>
				<Plus class="h-4 w-4" />
				Tambah Agenda
			</Button>
		</div>
		<Dialog bind:open={isDialogOpen}>
			<DialogContent class="sm:max-w-[600px]">
				<form method="POST" action={editingAgenda ? '?/update' : '?/create'} class="space-y-4">
					<DialogHeader>
						<DialogTitle>{editingAgenda ? 'Edit Agenda' : 'Tambah Agenda Baru'}</DialogTitle>
						<DialogDescription>Masukkan detail kegiatan kampus di bawah ini.</DialogDescription>
					</DialogHeader>

					{#if editingAgenda}
						<input type="hidden" name="id" value={editingAgenda.id} />
					{/if}

					<div class="grid gap-4 py-4">
						<div class="space-y-2">
							<Label for="title">Nama Kegiatan</Label>
							<Input
								id="title"
								name="title"
								value={editingAgenda?.title || ''}
								placeholder="Misal: Seminar Nasional Teknologi 2026"
								required
							/>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="event_date">Tanggal Kegiatan</Label>
								<Input
									id="event_date"
									name="event_date"
									type="date"
									value={editingAgenda?.event_date || ''}
									required
								/>
							</div>
							<div class="space-y-2">
								<Label for="event_time">Waktu (Opsional)</Label>
								<Input
									id="event_time"
									name="event_time"
									value={editingAgenda?.event_time || ''}
									placeholder="09:00 - Selesai"
								/>
							</div>
						</div>
						<div class="space-y-2">
							<Label for="location">Lokasi</Label>
							<Input
								id="location"
								name="location"
								value={editingAgenda?.location || ''}
								placeholder="Aula Lantai 3 / Zoom Meeting"
							/>
						</div>
						<div class="space-y-2">
							<Label for="description">Deskripsi Singkat</Label>
							<Textarea
								id="description"
								name="description"
								value={editingAgenda?.description || ''}
								placeholder="Penjelasan tentang acara"
								rows={3}
							/>
						</div>
						<div class="flex items-center space-x-2 pt-2">
							<Checkbox
								id="is_pinned"
								name="is_pinned"
								checked={editingAgenda?.is_pinned || false}
							/>
							<Label for="is_pinned">Sematkan di Beranda</Label>
						</div>
					</div>

					<DialogFooter>
						<Button type="button" variant="outline" onclick={resetForm}>Batal</Button>
						<Button type="submit">{editingAgenda ? 'Simpan Perubahan' : 'Buat Agenda'}</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	</div>

	<Card>
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead class="w-[300px]">Kegiatan</TableHead>
						<TableHead>Waktu & Lokasi</TableHead>
						<TableHead class="text-right">Aksi</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each agendas as agenda}
						<TableRow>
							<TableCell>
								<div class="flex items-center gap-2 font-medium">
									{#if agenda.is_pinned}
										<Pin class="h-3 w-3 fill-indigo-600 text-indigo-600" />
									{/if}
									<span class="max-w-[250px] truncate">{agenda.title}</span>
								</div>
								<div class="line-clamp-1 text-xs text-muted-foreground">
									{agenda.description || '-'}
								</div>
							</TableCell>
							<TableCell>
								<div class="flex flex-col gap-1 text-xs">
									<div class="flex items-center gap-1">
										<Calendar class="h-3 w-3" />
										{new Date(agenda.event_date).toLocaleDateString('id-ID', {
											day: 'numeric',
											month: 'long',
											year: 'numeric'
										})}
									</div>
									<div class="flex items-center gap-1">
										<Clock class="h-3 w-3" />
										{agenda.event_time || 'Waktu tidak ditentukan'}
									</div>
									<div class="flex items-center gap-1">
										<MapPin class="h-3 w-3" />
										{agenda.location || 'Lokasi tidak ditentukan'}
									</div>
								</div>
							</TableCell>
							<TableCell class="text-right">
								<div class="flex justify-end gap-2">
									<Button variant="ghost" size="icon" onclick={() => handleEdit(agenda)}>
										<Pencil class="h-4 w-4" />
									</Button>
									<form method="POST" action="?/delete">
										<input type="hidden" name="id" value={agenda.id} />
										<Button
											variant="ghost"
											size="icon"
											class="text-destructive hover:text-destructive"
											type="submit"
										>
											<Trash2 class="h-4 w-4" />
										</Button>
									</form>
								</div>
							</TableCell>
						</TableRow>
					{:else}
						<TableRow>
							<TableCell colspan={3} class="h-32 text-center text-muted-foreground italic">
								Belum ada agenda kegiatan.
							</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
</div>
