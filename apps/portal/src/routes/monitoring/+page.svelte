<script lang="ts">
	import { onMount } from 'svelte';
	import { checkHealth, services, type ServiceHealth } from '$lib/services/health-check-service';

	let healthStates: ServiceHealth[] = services.map((s) => ({
		...s,
		status: 'loading'
	}));

	async function runHealthChecks() {
		const checks = healthStates.map(async (service, index) => {
			const result = await checkHealth(service.url);
			healthStates[index].status = result.status;
			healthStates[index].message = result.message;
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
	<div class="max-w-4xl mx-auto">
		<header class="mb-10 flex justify-between items-center">
			<div>
				<h1 class="text-3xl font-bold text-slate-900 mb-2">Service Monitoring Dashboard</h1>
				<p class="text-slate-600">Verifikasi konektivitas dan status setiap microservice di infrastruktur Anda.</p>
			</div>
			<button 
				on:click={runHealthChecks}
				class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-sm font-medium"
			>
				Refresh All
			</button>
		</header>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			{#each healthStates as service}
				<div class="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex items-start gap-4 hover:shadow-md transition">
					<div class="mt-1">
						{#if service.status === 'loading'}
							<div class="h-6 w-6 border-4 border-slate-200 border-t-indigo-600 rounded-full animate-spin"></div>
						{:else if service.status === 'up'}
							<div class="h-6 w-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
							</div>
						{:else}
							<div class="h-6 w-6 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
							</div>
						{/if}
					</div>
					
					<div class="flex-1">
						<div class="flex justify-between items-center mb-1">
							<h3 class="font-bold text-slate-800">{service.name}</h3>
							<span class="text-xs font-mono px-2 py-0.5 bg-slate-100 rounded text-slate-500">{service.status.toUpperCase()}</span>
						</div>
						<p class="text-sm text-slate-500 font-mono break-all mb-3">{service.url}</p>
						<div class="pt-3 border-t border-slate-100 text-sm">
							{#if service.status === 'loading'}
								<span class="text-slate-400">Checking...</span>
							{:else if service.status === 'up'}
								<span class="text-emerald-600 font-medium">Layanan berfungsi normal: {service.message}</span>
							{:else}
								<span class="text-rose-600 font-medium font-mono text-xs">{service.message}</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		</div>

		{#if healthStates.some(s => s.status === 'down')}
			<div class="mt-10 p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-sm">
				<p class="font-bold mb-1">Peringatan: Beberapa layanan tidak dapat diakses.</p>
				<ul class="list-disc ml-5 space-y-1">
					<li>Pastikan layanan backend di Vercel sudah dideploy dengan benar.</li>
					<li>Periksa tab "Environment Variables" di Vercel Dashboard untuk rute API.</li>
					<li>Jika menggunakan domain kustom, pastikan DNS sudah terpropagasi.</li>
				</ul>
			</div>
		{/if}
	</div>
</div>
