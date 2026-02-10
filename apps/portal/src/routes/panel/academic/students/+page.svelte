<script lang="ts">
	import * as m from '$lib/paraglide/messages.js';
	import { page } from '$app/state';
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import { Search, Loader2, Eye, FileEdit } from 'lucide-svelte';
	import { onMount } from 'svelte';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let students: any[] = $state([]);
	let loading = $state(true);
	let search = $state('');
	let pagination = $state({
		page: 1,
		limit: 10,
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
				search: search
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

	function goToPage(newPage: number) {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			pagination.page = newPage;
			fetchStudents();
		}
	}

	onMount(() => {
		fetchStudents();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Data Mahasiswa</h1>
			<p class="text-muted-foreground">Kelola data dan profil mahasiswa.</p>
		</div>
		<Button href="/panel/academic/students/report" variant="outline">Laporan</Button>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="mb-4 flex items-center justify-between gap-4">
				<div class="relative max-w-sm flex-1">
					<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
					<Input
						type="search"
						placeholder="Cari nama atau NIM..."
						class="pl-8"
						value={search}
						oninput={handleSearch}
					/>
				</div>
			</div>

			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>NIM (Platform)</TableHead>
							<TableHead>Nama</TableHead>
							<TableHead>Status</TableHead>
							<TableHead>Terdaftar</TableHead>
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
						{:else if students.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Tidak ada data mahasiswa.
								</TableCell>
							</TableRow>
						{:else}
							{#each students as student}
								<TableRow>
									<TableCell class="font-medium">{student.platform_student_number || '-'}</TableCell
									>
									<TableCell>{student.name}</TableCell>
									<TableCell>
										<Badge variant="outline" class="capitalize">{student.status || 'Active'}</Badge>
									</TableCell>
									<TableCell>
										{new Date(student.created_at).toLocaleDateString('id-ID')}
									</TableCell>
									<TableCell class="text-right">
										<Button
											variant="ghost"
											size="icon"
											href={`/panel/academic/students/${student.id}`}
										>
											<FileEdit class="h-4 w-4" />
											<span class="sr-only">Edit</span>
										</Button>
									</TableCell>
								</TableRow>
							{/each}
						{/if}
					</TableBody>
				</Table>
			</div>

			<div class="mt-4 flex items-center justify-between">
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
	</div>
</div>
