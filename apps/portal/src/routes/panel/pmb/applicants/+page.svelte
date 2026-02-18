<script lang="ts">
	import { Search, Eye } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import { Badge } from '$lib/components/ui/badge';
	import {
		Select,
		SelectContent,
		SelectItem,
		SelectTrigger,
		SelectValue
	} from '$lib/components/ui/select';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	let { data } = $props();
	const { applicants, periods } = $derived(data);

	let searchQuery = $state('');
	let statusFilter = $state(page.url.searchParams.get('status') || 'all');
	let periodFilter = $state(page.url.searchParams.get('period_id') || 'all');

	function applyFilters() {
		// eslint-disable-next-line svelte/prefer-svelte-reactivity
		const params = new URLSearchParams(page.url.searchParams);
		if (statusFilter !== 'all') params.set('status', statusFilter);
		else params.delete('status');

		if (periodFilter !== 'all') params.set('period_id', periodFilter);
		else params.delete('period_id');

		goto(`?${params.toString()}`, { invalidateAll: true });
	}

	function getStatusBadge(status: string) {
		switch (status) {
			case 'REGISTERED':
				return { label: 'Terdaftar', class: 'bg-blue-100 text-blue-700' };
			case 'VERIFIED':
				return { label: 'Terverifikasi', class: 'bg-indigo-100 text-indigo-700' };
			case 'PASSED':
				return { label: 'Lolos', class: 'bg-green-100 text-green-700' };
			case 'REJECTED':
				return { label: 'Ditolak', class: 'bg-red-100 text-red-700' };
			case 'FAILED':
				return { label: 'Tidak Lolos', class: 'bg-gray-100 text-gray-700' };
			default:
				return { label: status, class: 'bg-gray-100 text-gray-700' };
		}
	}

	const filteredApplicants = $derived(
		applicants.filter(
			(a: any) =>
				a.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
				a.registration_number.toLowerCase().includes(searchQuery.toLowerCase())
		)
	);
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Data Pendaftar PMB</h2>
			<p class="text-muted-foreground">Kelola pendaftar, verifikasi dokumen, dan hasil seleksi.</p>
		</div>
	</div>

	<div class="flex flex-col gap-4 md:flex-row md:items-end">
		<div class="grid w-full max-w-sm gap-2">
			<Label class="text-xs font-semibold text-muted-foreground uppercase">Cari Nama/No. Reg</Label>
			<div class="relative">
				<Search class="absolute top-2.5 left-2.5 h-4 w-4 text-muted-foreground" />
				<Input type="search" placeholder="Cari..." class="pl-8" bind:value={searchQuery} />
			</div>
		</div>

		<div class="grid w-full max-w-[200px] gap-2">
			<Label class="text-xs font-semibold text-muted-foreground uppercase">Gelombang</Label>
			<Select bind:value={periodFilter} onValueChange={applyFilters}>
				<SelectTrigger>
					<SelectValue placeholder="Semua Gelombang" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">Semua Gelombang</SelectItem>
					{#each periods as p (p.id)}
						<SelectItem value={p.id}>{p.name}</SelectItem>
					{/each}
				</SelectContent>
			</Select>
		</div>

		<div class="grid w-full max-w-[200px] gap-2">
			<Label class="text-xs font-semibold text-muted-foreground uppercase">Status</Label>
			<Select bind:value={statusFilter} onValueChange={applyFilters}>
				<SelectTrigger>
					<SelectValue placeholder="Pilih Status" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="all">Semua Status</SelectItem>
					<SelectItem value="REGISTERED">Terdaftar</SelectItem>
					<SelectItem value="VERIFIED">Terverifikasi</SelectItem>
					<SelectItem value="PASSED">Lolos</SelectItem>
					<SelectItem value="REJECTED">Ditolak</SelectItem>
					<SelectItem value="FAILED">Tidak Lolos</SelectItem>
				</SelectContent>
			</Select>
		</div>

		<Button
			variant="outline"
			onclick={() => {
				searchQuery = '';
				statusFilter = 'all';
				periodFilter = 'all';
				applyFilters();
			}}
		>
			Reset
		</Button>
	</div>

	<div class="rounded-md border bg-card">
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>No. Registrasi</TableHead>
					<TableHead>Nama Lengkap</TableHead>
					<TableHead>Pilihan Prodi</TableHead>
					<TableHead>Skor</TableHead>
					<TableHead>Status</TableHead>
					<TableHead class="text-right">Aksi</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{#each filteredApplicants as applicant (applicant.id)}
					{@const status = getStatusBadge(applicant.status)}
					<TableRow>
						<TableCell class="font-mono text-xs font-semibold">
							{applicant.registration_number}
						</TableCell>
						<TableCell>
							<div class="font-medium">{applicant.full_name}</div>
							<div class="text-xs text-muted-foreground">{applicant.email}</div>
						</TableCell>
						<TableCell>
							<div class="text-xs">1. {applicant.first_choice_prodi_id ? 'Pilihan 1' : '-'}</div>
							<div class="text-xs text-muted-foreground">
								2. {applicant.second_choice_prodi_id ? 'Pilihan 2' : '-'}
							</div>
						</TableCell>
						<TableCell>
							<span class="font-bold">{applicant.selection_score || '-'}</span>
						</TableCell>
						<TableCell>
							<Badge class={status.class} variant="secondary">
								{status.label}
							</Badge>
						</TableCell>
						<TableCell class="text-right">
							<Button variant="ghost" size="sm" href={`/panel/pmb/applicants/${applicant.id}`}>
								<Eye class="mr-2 h-4 w-4" />
								Detail
							</Button>
						</TableCell>
					</TableRow>
				{:else}
					<TableRow>
						<TableCell colspan={6} class="h-24 text-center text-muted-foreground italic">
							Tidak ada data pendaftar yang ditemukan.
						</TableCell>
					</TableRow>
				{/each}
			</TableBody>
		</Table>
	</div>
</div>
