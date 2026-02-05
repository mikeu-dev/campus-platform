<script lang="ts">
	import { FileText, Calendar, Clock, Check, X, Eye, AlertTriangle } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';

	// Mock research history
	const researchHistory = [
		{
			id: 1,
			title: 'Analisis Sentimen Media Sosial Menggunakan Machine Learning',
			type: 'Skripsi',
			supervisor: 'Dr. Budi Santoso, M.Kom',
			submittedDate: '2024-06-15',
			status: 'Dalam Proses',
			progress: 65
		},
		{
			id: 2,
			title: 'Implementasi Sistem Informasi',
			type: 'Kerja Praktek',
			supervisor: 'Siti Aminah, S.T., M.T.',
			submittedDate: '2023-12-01',
			status: 'Selesai',
			progress: 100
		}
	];

	function getStatusBadge(status: string) {
		switch (status) {
			case 'Selesai':
				return { class: 'bg-green-100 text-green-700 hover:bg-green-100', icon: Check };
			case 'Dalam Proses':
				return { class: 'bg-blue-100 text-blue-700 hover:bg-blue-100', icon: Clock };
			case 'Ditolak':
				return { class: 'bg-red-100 text-red-700 hover:bg-red-100', icon: X };
			default:
				return { class: 'bg-gray-100 text-gray-700 hover:bg-gray-100', icon: Clock };
		}
	}
</script>

<div class="space-y-6">
	<div>
		<h2 class="text-3xl font-bold tracking-tight">Riwayat Penelitian</h2>
		<p class="text-muted-foreground">Daftar semua penelitian yang pernah diajukan.</p>
	</div>

	{#if researchHistory.length === 0}
		<Card>
			<CardContent class="flex flex-col items-center justify-center py-12 text-center">
				<FileText class="h-12 w-12 text-muted-foreground/50" />
				<h3 class="mt-4 text-lg font-semibold">Belum ada riwayat penelitian</h3>
				<p class="text-muted-foreground">Anda belum pernah mengajukan penelitian.</p>
			</CardContent>
		</Card>
	{:else}
		<div class="grid gap-4">
			{#each researchHistory as research}
				{@const statusInfo = getStatusBadge(research.status)}
				{@const StatusIcon = statusInfo.icon}
				<Card class="overflow-hidden">
					<CardContent class="p-0">
						<div class="grid gap-4 p-6 md:grid-cols-[1fr_auto]">
							<div class="space-y-3">
								<div class="flex items-start gap-3">
									<div class="shrink-0 rounded-lg bg-primary/10 p-2">
										<FileText class="h-5 w-5 text-primary" />
									</div>
									<div class="min-w-0">
										<h3 class="leading-tight font-semibold">{research.title}</h3>
										<div class="mt-2 flex flex-wrap gap-2">
											<Badge variant="outline">{research.type}</Badge>
											<Badge class={statusInfo.class} variant="secondary">
												<StatusIcon class="mr-1 h-3 w-3" />
												{research.status}
											</Badge>
										</div>
									</div>
								</div>

								<div class="grid gap-1 text-sm text-muted-foreground">
									<div class="flex items-center gap-2">
										<span class="font-medium text-foreground">Pembimbing:</span>
										{research.supervisor}
									</div>
									<div class="flex items-center gap-2">
										<Calendar class="h-4 w-4" />
										Diajukan: {new Date(research.submittedDate).toLocaleDateString('id-ID', {
											day: 'numeric',
											month: 'long',
											year: 'numeric'
										})}
									</div>
								</div>

								<!-- Progress bar -->
								{#if research.status === 'Dalam Proses'}
									<div class="space-y-1">
										<div class="flex justify-between text-xs">
											<span class="text-muted-foreground">Progress</span>
											<span class="font-medium">{research.progress}%</span>
										</div>
										<div class="h-2 w-full rounded-full bg-secondary">
											<div
												class="h-full rounded-full bg-primary transition-all"
												style="width: {research.progress}%"
											></div>
										</div>
									</div>
								{/if}
							</div>

							<div class="flex items-center md:border-l md:pl-6">
								<Button variant="outline" size="sm">
									<Eye class="mr-2 h-4 w-4" />
									Detail
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
			{/each}
		</div>
	{/if}
</div>
