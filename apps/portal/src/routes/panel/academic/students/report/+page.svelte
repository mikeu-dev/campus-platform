<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectValue
	} from '$lib/components/ui/select';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import { Search, Loader2, FileDown, Printer, ArrowLeft } from 'lucide-svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let students: any[] = $state([]);
	let loading = $state(true);

	// Filters
	let search = $state('');
	let studyProgram = $state('');
	let entryYear = $state('');
	let status = $state('');

	let pagination = $state({
		page: 1,
		limit: 20, // Higher limit for report view
		total: 0,
		totalPages: 1
	});
	let debounceTimer: NodeJS.Timeout;

	async function fetchStudents() {
		loading = true;
		try {
			const query = new URLSearchParams({
				page: pagination.page.toString(),
				limit: pagination.limit.toString(),
				search: search,
				study_program: studyProgram,
				entry_year: entryYear,
				status: status
			});

			const res = await fetch(`http://localhost:3002/api/v1/students?${query.toString()}`, {
				headers: {
					Authorization: `Bearer ${data.token}`
				}
			});

			const response = await res.json();
			if (response.status === 'success') {
				students = response.data;
				pagination = response.meta;
			}
		} catch (error) {
			console.error('Failed to fetch students:', error);
		} finally {
			loading = false;
		}
	}

	function handleSearch(e: Event) {
		const value = (e.target as HTMLInputElement).value;
		search = value;
		pagination.page = 1;
		clearTimeout(debounceTimer);
		debounceTimer = setTimeout(() => {
			fetchStudents();
		}, 500);
	}

	function handleFilterChange() {
		pagination.page = 1;
		fetchStudents();
	}

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			pagination.page = newPage;
			fetchStudents();
		}
	}

	// Export to CSV
	async function exportToCSV() {
		// Fetch ALL data for export (or a very large limit)
		// For MVP, we'll fetch with a high limit based on current filters
		try {
			const query = new URLSearchParams({
				page: '1',
				limit: '10000', // High limit for export
				search: search,
				study_program: studyProgram,
				entry_year: entryYear,
				status: status
			});

			const res = await fetch(`http://localhost:3002/api/v1/students?${query.toString()}`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();

			if (response.status === 'success') {
				const data = response.data;
				const headers = ['NIM', 'Nama', 'Prodi', 'Semester', 'Status', 'Tahun Masuk'];
				const csvContent = [
					headers.join(','),
					...data.map((s: any) =>
						[
							s.platform_student_number,
							`"${s.name}"`, // Quote name to handle commas
							s.study_program || '',
							s.current_semester || '',
							s.status || '',
							s.entry_year || ''
						].join(',')
					)
				].join('\n');

				const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
				const link = document.createElement('a');
				const url = URL.createObjectURL(blob);
				link.setAttribute('href', url);
				link.setAttribute(
					'download',
					`laporan_mahasiswa_${new Date().toISOString().split('T')[0]}.csv`
				);
				link.style.visibility = 'hidden';
				document.body.appendChild(link);
				link.click();
				document.body.removeChild(link);
			}
		} catch (e) {
			console.error('Export failed', e);
			alert('Gagal mengekspor data.');
		}
	}

	onMount(() => {
		fetchStudents();
	});
</script>

<div class="space-y-6">
	<div class="no-print flex items-center gap-4">
		<Button variant="ghost" size="icon" href="/panel/academic/students">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Laporan Data Mahasiswa</h1>
			<p class="text-muted-foreground">Unduh laporan atau cetak data mahasiswa.</p>
		</div>
	</div>

	<div class="no-print rounded-xl border bg-card text-card-foreground shadow">
		<div class="space-y-4 p-6">
			<!-- FILTERS -->
			<div class="grid grid-cols-1 gap-4 md:grid-cols-4">
				<div class="space-y-2">
					<Label>Pencarian</Label>
					<div class="relative">
						<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
						<Input
							type="search"
							placeholder="Nama atau NIM..."
							class="pl-8"
							value={search}
							oninput={handleSearch}
						/>
					</div>
				</div>

				<div class="space-y-2">
					<Label>Program Studi</Label>
					<Select type="single" bind:value={studyProgram} onValueChange={handleFilterChange}>
						<SelectTrigger>
							<SelectValue placeholder="Semua Prodi" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="">Semua Prodi</SelectItem>
							<SelectItem value="Teknik Informatika">Teknik Informatika</SelectItem>
							<SelectItem value="Sistem Informasi">Sistem Informasi</SelectItem>
							<!-- Add more hardcoded or fetch dyncamically -->
						</SelectContent>
					</Select>
				</div>

				<div class="space-y-2">
					<Label>Tahun Masuk</Label>
					<Input
						type="number"
						placeholder="Contoh: 2024"
						bind:value={entryYear}
						oninput={handleFilterChange}
					/>
				</div>

				<div class="space-y-2">
					<Label>Status</Label>
					<Select type="single" bind:value={status} onValueChange={handleFilterChange}>
						<SelectTrigger>
							<SelectValue placeholder="Semua Status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="">Semua Status</SelectItem>
							<SelectItem value="active">Aktif</SelectItem>
							<SelectItem value="inactive">Tidak Aktif</SelectItem>
							<SelectItem value="graduated">Lulus</SelectItem>
							<SelectItem value="loa">Cuti</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</div>

			<!-- ACTIONS -->
			<div class="flex justify-end gap-2">
				<Button variant="outline" onclick={() => window.print()}>
					<Printer class="mr-2 h-4 w-4" />
					Cetak
				</Button>
				<Button variant="default" onclick={exportToCSV}>
					<FileDown class="mr-2 h-4 w-4" />
					Export CSV
				</Button>
			</div>
		</div>
	</div>

	<!-- DATA TABLE -->
	<div class="rounded-md border bg-white">
		<div class="print-block hidden p-4">
			<h2 class="mb-4 text-center text-xl font-bold">Laporan Data Mahasiswa</h2>
		</div>
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>NIM</TableHead>
					<TableHead>Nama</TableHead>
					<TableHead>Prodi</TableHead>
					<TableHead>Semester</TableHead>
					<TableHead>Angkatan</TableHead>
					<TableHead>Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#if loading}
					<TableRow>
						<TableCell colspan={6} class="h-24 text-center">
							<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
						</TableCell>
					</TableRow>
				{:else if students.length === 0}
					<TableRow>
						<TableCell colspan={6} class="h-24 text-center text-muted-foreground">
							Tidak ada data mahasiswa.
						</TableCell>
					</TableRow>
				{:else}
					{#each students as student (student.id || student.platform_student_number)}
						<TableRow>
							<TableCell class="font-medium">{student.platform_student_number || '-'}</TableCell>
							<TableCell>{student.name}</TableCell>
							<TableCell>{student.study_program || '-'}</TableCell>
							<TableCell>{student.current_semester || '-'}</TableCell>
							<TableCell>{student.entry_year || '-'}</TableCell>
							<TableCell>
								<Badge variant="outline" class="capitalize">{student.status || 'Active'}</Badge>
							</TableCell>
						</TableRow>
					{/each}
				{/if}
			</TableBody>
		</Table>
	</div>

	<!-- PAGINATION (No Print) -->
	<div class="no-print flex items-center justify-between">
		<div class="text-sm text-muted-foreground">
			Menampilkan {(pagination.page - 1) * pagination.limit + 1} sampai {Math.min(
				pagination.page * pagination.limit,
				pagination.total
			)} dari {pagination.total} data
		</div>
		<div class="flex items-center gap-2">
			<Button
				variant="outline"
				size="sm"
				onclick={() => goToPage(pagination.page - 1)}
				disabled={pagination.page === 1}
			>
				Sebelumnya
			</Button>
			<Button
				variant="outline"
				size="sm"
				onclick={() => goToPage(pagination.page + 1)}
				disabled={pagination.page === pagination.totalPages}
			>
				Selanjutnya
			</Button>
		</div>
	</div>
</div>

<style>
	@media print {
		:global(header),
		:global(aside),
		.no-print {
			display: none !important;
		}
		.print-block {
			display: block !important;
		}
	}
</style>
