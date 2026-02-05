<script lang="ts">
	import {
		Wallet,
		CreditCard,
		History,
		AlertCircle,
		CheckCircle2,
		Download,
		Printer
	} from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
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
	import { Separator } from '$lib/components/ui/separator';
	import * as m from '$lib/paraglide/messages.js';

	interface Bill {
		id: string;
		title: string;
		amount: number;
		due_date: string;
		is_paid: boolean;
		created_at: string;
		updated_at: string | null;
	}

	let { data }: { data: any } = $props();
	const financeData = $derived(data.financeData);

	const unpaidBills = $derived((financeData.bills as Bill[]).filter((b) => !b.is_paid));
	const paidBills = $derived((financeData.bills as Bill[]).filter((b) => b.is_paid));

	function formatCurrency(amount: number) {
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0
		}).format(amount);
	}
</script>

<div class="space-y-8">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.siakad_finance_title() || 'Keuangan'}</h2>
			<p class="text-muted-foreground">Kelola tagihan dan riwayat pembayaran Anda.</p>
		</div>
		<div class="flex gap-2">
			<Button variant="outline" size="sm" class="gap-2">
				<Printer class="h-4 w-4" />
				Cetak Bukti
			</Button>
		</div>
	</div>

	<div class="grid gap-6 md:grid-cols-12">
		<!-- Summary Card -->
		<Card class="bg-primary text-primary-foreground md:col-span-4">
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-lg">
					<Wallet class="h-5 w-5" />
					Total Tagihan
				</CardTitle>
				<CardDescription class="text-primary-foreground/70"
					>Jumlah yang harus dibayar</CardDescription
				>
			</CardHeader>
			<CardContent class="space-y-6">
				<div class="text-4xl font-black">
					{formatCurrency(financeData.totalUnpaid)}
				</div>

				<div class="space-y-2 pt-4">
					<Button
						class="w-full bg-white font-bold text-primary hover:bg-white/90"
						disabled={financeData.totalUnpaid === 0}
					>
						Bayar Sekarang
					</Button>
					<p class="text-center text-[10px] text-primary-foreground/60 italic">
						Metode pembayaran tersedia: VA, E-Wallet, Retail
					</p>
				</div>
			</CardContent>
		</Card>

		<!-- Bill Status -->
		<div class="grid gap-4 md:col-span-8">
			<div class="grid grid-cols-2 gap-4">
				<Card>
					<CardHeader class="pb-2">
						<CardTitle class="text-sm font-medium">Tagihan Aktif</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="text-2xl font-bold">{unpaidBills.length}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader class="pb-2">
						<CardTitle class="text-sm font-medium">Sudah Dibayar</CardTitle>
					</CardHeader>
					<CardContent>
						<div class="text-2xl font-bold">{paidBills.length}</div>
					</CardContent>
				</Card>
			</div>

			<Card>
				<CardHeader class="pb-3">
					<CardTitle class="flex items-center gap-2 text-sm">
						<AlertCircle class="h-4 w-4 text-orange-500" />
						Informasi Penting
					</CardTitle>
				</CardHeader>
				<CardContent class="space-y-2 text-xs text-muted-foreground">
					<p>• Pembayaran setelah jatuh tempo akan dikenakan denda keterlambatan.</p>
					<p>• Proses verifikasi pembayaran otomatis maksimal 15 menit.</p>
					<p>• Simpan bukti bayar Anda untuk keperluan rekonsiliasi jika terjadi kendala.</p>
				</CardContent>
			</Card>
		</div>
	</div>

	<div class="grid gap-6">
		<!-- Unpaid Bills Table -->
		<Card>
			<CardHeader class="flex flex-row items-center justify-between">
				<CardTitle class="flex items-center gap-2 text-xl">
					<CreditCard class="h-5 w-5 text-primary" />
					Tagihan Aktif
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Deskripsi</TableHead>
							<TableHead>Jatuh Tempo</TableHead>
							<TableHead>Jumlah</TableHead>
							<TableHead>Status</TableHead>
							<TableHead class="text-right">Aksi</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#each unpaidBills as bill}
							<TableRow>
								<TableCell class="font-medium">{bill.title}</TableCell>
								<TableCell>{new Date(bill.due_date).toLocaleDateString('id-ID')}</TableCell>
								<TableCell>{formatCurrency(bill.amount)}</TableCell>
								<TableCell>
									<Badge variant="outline" class="border-orange-200 bg-orange-50 text-orange-700"
										>Menunggu</Badge
									>
								</TableCell>
								<TableCell class="text-right">
									<Button size="sm">Bayar</Button>
								</TableCell>
							</TableRow>
						{:else}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground italic">
									Tidak ada tagihan aktif.
								</TableCell>
							</TableRow>
						{/each}
					</TableBody>
				</Table>
			</CardContent>
		</Card>

		<!-- Payment History -->
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2 text-xl">
					<History class="h-5 w-5 text-primary" />
					Riwayat Pembayaran
				</CardTitle>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Deskripsi</TableHead>
							<TableHead>Tanggal Bayar</TableHead>
							<TableHead>Jumlah</TableHead>
							<TableHead>Status</TableHead>
							<TableHead class="text-right">Bukti</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#each paidBills as bill}
							<TableRow>
								<TableCell class="font-medium">{bill.title}</TableCell>
								<TableCell
									>{new Date(bill.updated_at || bill.created_at).toLocaleDateString(
										'id-ID'
									)}</TableCell
								>
								<TableCell>{formatCurrency(bill.amount)}</TableCell>
								<TableCell>
									<Badge variant="outline" class="border-green-200 bg-green-50 text-green-700"
										>Lunas</Badge
									>
								</TableCell>
								<TableCell class="text-right">
									<Button variant="ghost" size="icon">
										<Download class="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
						{:else}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground italic">
									Belum ada riwayat pembayaran.
								</TableCell>
							</TableRow>
						{/each}
					</TableBody>
				</Table>
			</CardContent>
		</Card>
	</div>
</div>
