<script lang="ts">
	import { User, Megaphone, Wallet, TrendingUp, AlertTriangle, Calendar } from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as m from '$lib/paraglide/messages.js';

	// Mock data for initial implementation
	const userInfo = {
		name: 'Budi Santoso',
		nim: '10123456',
		program: 'Teknik Informatika',
		semester: 5,
		status: 'Aktif'
	};

	const announcements = [
		{
			id: 1,
			title: 'Jadwal Pengisian KRS',
			date: '2024-08-20',
			content: 'Pengisian KRS dimulai tanggal 25 Agustus 2024'
		},
		{
			id: 2,
			title: 'Libur Nasional',
			date: '2024-08-17',
			content: 'Kampus libur memperingati HUT RI'
		}
	];

	const finance = {
		status: 'Lunas',
		bill: 0,
		virtualAccount: '888899990000'
	};

	const gpa = {
		current: 3.55,
		target: 3.75,
		history: [3.2, 3.4, 3.5, 3.55]
	};

	const alerts: { type: string; title: string; message: string }[] = [
		// Example alert, uncomment to test
		// { type: "destructive", title: "Suspend Keuangan", message: "Mahasiswa terkena Suspend Keuangan, silahkan hubungi PUSLIA untuk informasi lebih lanjut" },
	];
</script>

<div class="flex flex-col gap-6">
	<!-- Alerts Section -->
	{#if alerts.length > 0}
		<div class="space-y-4">
			{#each alerts as alert}
				<div
					class="relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:top-4 [&>svg]:left-4 [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7 {alert.type ===
					'destructive'
						? 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive'
						: 'bg-background text-foreground'}"
				>
					<AlertTriangle class="h-4 w-4" />
					<h5 class="mb-1 leading-none font-medium tracking-tight">{alert.title}</h5>
					<div class="text-sm opacity-90">{alert.message}</div>
				</div>
			{/each}
		</div>
	{/if}

	<!-- User Info & Quick Stats -->
	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
		<!-- User Profile Card -->
		<Card class="col-span-2">
			<CardHeader class="flex flex-row items-center gap-4 space-y-0 pb-2">
				<div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
					<User class="h-6 w-6 text-primary" />
				</div>
				<div class="flex flex-col">
					<CardTitle class="text-lg">{userInfo.name}</CardTitle>
					<span class="text-sm text-muted-foreground">{userInfo.nim}</span>
				</div>
			</CardHeader>
			<CardContent>
				<div class="grid gap-2 text-sm">
					<div class="flex justify-between">
						<span class="text-muted-foreground">{m.siakad_user_program()}</span>
						<span class="font-medium">{userInfo.program}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">{m.siakad_user_semester()}</span>
						<span class="font-medium">{userInfo.semester}</span>
					</div>
					<div class="flex justify-between">
						<span class="text-muted-foreground">{m.siakad_user_status()}</span>
						<Badge
							variant="outline"
							class="bg-green-50 text-green-700 hover:bg-green-50 hover:text-green-700"
							>{userInfo.status}</Badge
						>
					</div>
				</div>
			</CardContent>
		</Card>

		<!-- Finance Card -->
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">{m.siakad_finance_title()}</CardTitle>
				<Wallet class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">
					{finance.bill === 0
						? m.siakad_finance_paid()
						: `Rp ${finance.bill.toLocaleString('id-ID')}`}
				</div>
				<p class="text-xs text-muted-foreground">
					{m.siakad_finance_status()}: {finance.status}
				</p>
				{#if finance.bill > 0}
					<Button size="sm" class="mt-4 w-full">{m.siakad_finance_pay()}</Button>
				{/if}
			</CardContent>
		</Card>

		<!-- IPK Monitoring -->
		<Card>
			<CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle class="text-sm font-medium">{m.siakad_gpa_title()}</CardTitle>
				<TrendingUp class="h-4 w-4 text-muted-foreground" />
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">{gpa.current}</div>
				<p class="text-xs text-muted-foreground">{m.siakad_gpa_desc()}</p>
				<!-- Simple progress bar visual -->
				<div class="mt-4 h-2 w-full rounded-full bg-secondary">
					<div
						class="h-full rounded-full bg-primary"
						style="width: {(gpa.current / 4) * 100}%"
					></div>
				</div>
			</CardContent>
		</Card>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		<!-- Announcements -->
		<Card class="h-full">
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Megaphone class="h-5 w-5" />
					{m.siakad_announcements_title()}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					{#each announcements as announcement}
						<div class="flex flex-col gap-1 border-b pb-3 last:border-0 last:pb-0">
							<span class="font-medium">{announcement.title}</span>
							<span class="text-sm text-muted-foreground">{announcement.content}</span>
							<div class="flex items-center gap-1 text-xs text-muted-foreground">
								<Calendar class="h-3 w-3" />
								{announcement.date}
							</div>
						</div>
					{/each}
				</div>
			</CardContent>
		</Card>

		<!-- Quick Access / Other Info could go here -->
		<Card
			class="flex h-full flex-col items-center justify-center border-dashed p-6 text-center text-muted-foreground"
		>
			<p>{m.siakad_widget_placeholder()}</p>
			<span class="text-xs">Widget lainnya dapat ditambahkan di sini</span>
		</Card>
	</div>
</div>
