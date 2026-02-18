<script lang="ts">
	import { Users, TrendingUp, Eye, Activity } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';

	interface DailyStat {
		date: string;
		visit_count: string;
	}

	interface RouteStat {
		route: string;
		visit_count: string;
		unique_visitors: string;
	}

	interface Stats {
		daily: DailyStat[];
		byRoute: RouteStat[];
	}

	let { data } = $props();
	const stats: Stats = $derived(data.stats || { daily: [], byRoute: [] });

	const totalVisits = $derived(
		stats.daily.reduce((acc: number, curr) => acc + parseInt(curr.visit_count), 0)
	);
	const uniqueVisitors = $derived(
		stats.byRoute.reduce((acc: number, curr) => acc + parseInt(curr.unique_visitors), 0)
	);
</script>

<div class="space-y-6">
	<div class="flex flex-col gap-2">
		<h2 class="text-3xl font-bold tracking-tight">Dasbor CMS</h2>
		<p class="text-muted-foreground">
			Monitor statistik pengunjung dan performa konten publik Anda.
		</p>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Total Kunjungan (7 Hari)</CardTitle>
				<Eye class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{totalVisits}</div>
				<p class="text-xs text-muted-foreground">
					+{Math.round(totalVisits / 7)} rata-rata per hari
				</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Pengunjung Unik</CardTitle>
				<Users class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{uniqueVisitors}</div>
				<p class="text-xs text-muted-foreground">Berdasarkan alamat IP unik</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Halaman Terpopuler</CardTitle>
				<TrendingUp class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{stats.byRoute[0]?.visit_count || 0}</div>
				<p class="truncate text-xs text-muted-foreground">{stats.byRoute[0]?.route || '-'}</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">Skor Aktivitas</CardTitle>
				<Activity class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">Tinggi</div>
				<Progress value={75} class="mt-2" />
			</CardContent>
		</Card>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
		<Card class="lg:col-span-4">
			<CardHeader>
				<CardTitle>Statistik Kunjungan Harian</CardTitle>
				<CardDescription>Jumlah kunjungan dalam 7 hari terakhir.</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each stats.daily as day (day.date)}
						<div class="flex items-center gap-4">
							<div class="w-24 text-sm font-medium">
								{new Date(day.date).toLocaleDateString('id-ID', {
									weekday: 'short',
									day: 'numeric',
									month: 'short'
								})}
							</div>
							<div class="flex-1">
								<Progress
									value={(parseInt(day.visit_count) /
										Math.max(...stats.daily.map((d: any) => parseInt(d.visit_count)), 1)) *
										100}
								/>
							</div>
							<div class="w-12 text-right text-sm font-bold">{day.visit_count}</div>
						</div>
					{:else}
						<p class="py-10 text-center text-muted-foreground italic">
							Belum ada data statistik harian.
						</p>
					{/each}
				</div>
			</CardContent>
		</Card>
		<Card class="lg:col-span-3">
			<CardHeader>
				<CardTitle>Distribusi Halaman</CardTitle>
				<CardDescription>Kunjungan per rute halaman.</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each stats.byRoute.slice(0, 5) as route (route.route)}
						<div class="flex flex-col gap-1">
							<div class="flex justify-between text-sm font-medium">
								<span class="truncate">{route.route}</span>
								<span>{route.visit_count} klik</span>
							</div>
							<Progress
								value={(parseInt(route.visit_count) / totalVisits) * 100}
								class="h-1 shadow-xs"
							/>
						</div>
					{:else}
						<p class="py-10 text-center text-muted-foreground italic">
							Belum ada data distribusi halaman.
						</p>
					{/each}
				</div>
			</CardContent>
		</Card>
	</div>
</div>
