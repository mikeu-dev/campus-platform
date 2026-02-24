<script lang="ts">
	import { onMount } from 'svelte';
	import { checkHealth, services, type ServiceHealth } from '$lib/services/health-check-service';

	let healthStates: (ServiceHealth & { details?: any })[] = services.map((s) => ({
		...s,
		status: 'loading'
	}));

	async function runHealthChecks() {
		const checks = healthStates.map(async (service, index) => {
			const result = await checkHealth(service.url);
			healthStates[index].status = result.status;
			healthStates[index].message = result.message;
			healthStates[index].details = result.details;
		});

		await Promise.all(checks);
		healthStates = [...healthStates];
	}

	onMount(() => {
		runHealthChecks();
	});
</script>

<svelte:head>
	<title>Monitoring Dashboard | Campus Platform</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 p-8">
	<div class="mx-auto max-w-4xl">
		<header class="mb-10 flex items-center justify-between">
			<div>
				<h1 class="mb-2 text-3xl font-bold text-slate-900">Service Monitoring Dashboard</h1>
				<p class="text-slate-600">
					Verifikasi konektivitas dan status setiap microservice di infrastruktur Anda.
				</p>
			</div>
			<button
				on:click={runHealthChecks}
				class="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm transition hover:bg-indigo-700"
			>
				Refresh All
			</button>
		</header>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			{#each healthStates as service (service.url)}
				<div
					class="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
				>
					<div class="mt-1">
						{#if service.status === 'loading'}
							<div
								class="h-6 w-6 animate-spin rounded-full border-4 border-slate-200 border-t-indigo-600"
							></div>
						{:else if service.status === 'up'}
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg
								>
							</div>
						{:else}
							<div
								class="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-600"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
									><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"
									></line></svg
								>
							</div>
						{/if}
					</div>

					<div class="flex-1">
						<div class="mb-1 flex items-center justify-between">
							<h3 class="font-bold text-slate-800">{service.name}</h3>
							<span class="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs text-slate-500"
								>{service.status.toUpperCase()}</span
							>
						</div>
						<p class="mb-3 font-mono text-sm break-all text-slate-500">{service.url}</p>
						<div class="border-t border-slate-100 pt-3 text-sm">
							{#if service.status === 'loading'}
								<span class="text-slate-400">Checking...</span>
							{:else}
								<div class="space-y-1">
									<div
										class={service.status === 'up'
											? 'font-medium text-emerald-600'
											: 'font-medium text-rose-600'}
									>
										{service.message}
									</div>
									{#if service.details && service.details.database}
										<div class="flex items-center gap-2">
											<span
												class="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-bold text-slate-600 uppercase"
												>DB</span
											>
											<span
												class={service.details.database === 'connected'
													? 'text-emerald-600'
													: 'text-rose-600'}
											>
												{service.details.database.toUpperCase()}
											</span>
										</div>
									{/if}
									{#if service.details && service.details.error}
										<div
											class="mt-2 rounded border border-rose-100 bg-rose-50 p-2 font-mono text-xs text-rose-500 italic"
										>
											Error: {service.details.error}
										</div>
									{/if}
								</div>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if healthStates.some((s) => s.status === 'down')}
			<div class="mt-10 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
				<p class="mb-1 font-bold">Peringatan: Beberapa layanan tidak dapat diakses.</p>
				<ul class="ml-5 list-disc space-y-1">
					<li>Pastikan layanan backend di Vercel sudah dideploy dengan benar.</li>
					<li>Periksa tab "Environment Variables" di Vercel Dashboard untuk rute API.</li>
					<li>Jika menggunakan domain kustom, pastikan DNS sudah terpropagasi.</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
