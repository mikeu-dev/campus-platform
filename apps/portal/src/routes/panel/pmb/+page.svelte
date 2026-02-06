<script lang="ts">
	import { Users, UserCheck, UserX, TrendingUp, CalendarDays, ArrowRight } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Progress } from '$lib/components/ui/progress';

	let { data } = $props();
	const { stats } = $derived(data);
	const summary = $derived(stats.summary || { total: 0, verified: 0, passed: 0, rejected: 0 });
	const byPeriod = $derived(stats.byPeriod || []);

	const total = $derived(Number(summary.total) || 0);
	const verified = $derived(Number(summary.verified) || 0);
	const passed = $derived(Number(summary.passed) || 0);
	const rejected = $derived(Number(summary.rejected) || 0);

	const verifiedPercentage = $derived(total > 0 ? (verified / total) * 100 : 0);
	const passedPercentage = $derived(verified > 0 ? (passed / verified) * 100 : 0);
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Dasbor Penerimaan (PMB)</h2>
		<p class="text-muted-foreground">Ringkasan pendaftaran dan seleksi mahasiswa baru.</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Total Pendaftar</CardTitle>
				<Users class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{total}</div>
				<p class="text-xs text-muted-foreground">Akumulasi semua gelombang</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Terverifikasi</CardTitle>
				<UserCheck class="h-4 w-4 text-indigo-600" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{verified}</div>
				<div class="mt-2 flex items-center gap-2">
					<Progress value={verifiedPercentage} class="h-1 flex-1" />
					<span class="text-xs font-medium">{Math.round(verifiedPercentage)}%</span>
				</div>
			</CardContent>
		</Card>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Lolos Seleksi</CardTitle>
				<TrendingUp class="h-4 w-4 text-green-600" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{passed}</div>
				<p class="text-xs text-muted-foreground">
					{Math.round(passedPercentage)}% dari terverifikasi
				</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Ditolak</CardTitle>
				<UserX class="h-4 w-4 text-destructive" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{rejected}</div>
				<p class="text-xs text-muted-foreground">Dokumen tidak valid/tidak lolos</p>
			</CardContent>
		</Card>
	</div>

	<div class="grid gap-4 md:grid-cols-2">
		<Card class="col-span-1">
			<CardHeader>
				<CardTitle>Pendaftar per Gelombang</CardTitle>
				<CardDescription>Distribusi pendaftar berdasarkan periode pendaftaran.</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each byPeriod as period}
						<div class="space-y-2">
							<div class="flex items-center justify-between text-sm">
								<div class="flex items-center gap-2">
									<CalendarDays class="h-4 w-4 text-muted-foreground" />
									<span class="font-medium">{period.name}</span>
								</div>
								<span class="font-bold">{period.count}</span>
							</div>
							<Progress value={(period.count / (total || 1)) * 100} class="h-2" />
						</div>
					{:else}
						<p class="text-sm text-muted-foreground italic">Belum ada data gelombang.</p>
					{/each}
				</div>
			</CardContent>
		</Card>

		<Card class="col-span-1 border-indigo-100 bg-indigo-50/50">
			<CardHeader>
				<CardTitle class="text-indigo-900">Aksi Cepat</CardTitle>
				<CardDescription>Kelola pendaftaran mahasiswa baru.</CardDescription>
			</CardHeader>
			<CardContent class="grid gap-2">
				<Button variant="outline" class="justify-between bg-white" href="/panel/pmb/periods">
					Buka Gelombang Baru
					<ArrowRight class="h-4 w-4 text-indigo-600" />
				</Button>
				<Button variant="outline" class="justify-between bg-white" href="/panel/pmb/applicants">
					Verifikasi Berkas Pending
					<ArrowRight class="h-4 w-4 text-indigo-600" />
				</Button>
				<Button
					variant="outline"
					class="justify-between bg-white"
					href="/panel/pmb/applicants?status=VERIFIED"
				>
					Input Hasil Seleksi
					<ArrowRight class="h-4 w-4 text-indigo-600" />
				</Button>
			</CardContent>
		</Card>
	</div>
</div>
