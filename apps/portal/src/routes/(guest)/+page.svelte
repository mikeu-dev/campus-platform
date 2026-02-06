<script lang="ts">
	import { onMount } from 'svelte';
	import {
		ArrowRight,
		GraduationCap,
		Users,
		BookOpen,
		Award,
		Calendar,
		ChevronRight,
		Play,
		MapPin
	} from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import * as m from '$lib/paraglide/messages.js';
	import { PUBLIC_PUBLIC_API_URL } from '$env/static/public';

	let { data } = $props();

	const { sliders, settings, posts, agendas, videos } = $derived(data);

	// Stats Data (keep hardcoded or move to settings later)
	const stats = [
		{
			label: m.stats_active_students(),
			value: '15.000+',
			icon: Users,
			color: 'text-blue-600',
			bg: 'bg-blue-100'
		},
		{
			label: m.stats_lecturers(),
			value: '750+',
			icon: GraduationCap,
			color: 'text-indigo-600',
			bg: 'bg-indigo-100'
		},
		{
			label: m.stats_study_programs(),
			value: '45+',
			icon: BookOpen,
			color: 'text-purple-600',
			bg: 'bg-purple-100'
		},
		{
			label: m.stats_accreditation(),
			value: '90%',
			icon: Award,
			color: 'text-green-600',
			bg: 'bg-green-100'
		}
	];

	// Slider logic
	let currentSliderIndex = $state(0);
	onMount(() => {
		if (sliders.length > 1) {
			const interval = setInterval(() => {
				currentSliderIndex = (currentSliderIndex + 1) % sliders.length;
			}, 5000);
			return () => clearInterval(interval);
		}

		// Track Visitor
		fetch(`${PUBLIC_PUBLIC_API_URL}/public/track`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				tenantId: '00000000-0000-0000-0000-000000000000',
				route: '/'
			})
		}).catch(console.error);
	});
</script>

<div class="min-h-screen bg-gray-50 font-sans text-gray-900">
	<main>
		<!-- HERO SECTION (Slider) -->
		<section class="relative h-[600px] w-full overflow-hidden bg-gray-900 text-white lg:h-[700px]">
			{#if sliders && sliders.length > 0}
				{#each sliders as slider, i}
					{#if i === currentSliderIndex}
						<div class="absolute inset-0" transition:fade={{ duration: 1000 }}>
							<!-- Background Image with Overlay -->
							<img
								src={slider.image_url}
								alt={slider.title}
								class="h-full w-full object-cover opacity-60"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"
							></div>

							<div
								class="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
							>
								<div class="max-w-3xl" in:fly={{ y: 50, duration: 1000 }}>
									<span
										class="mb-4 inline-block rounded-full bg-indigo-600/90 px-4 py-1 text-sm font-semibold tracking-wide text-white backdrop-blur-sm"
									>
										{m.hero_badge()}
									</span>
									<h1
										class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl"
									>
										{slider.title || m.hero_title()}
									</h1>
									<p class="mt-6 text-lg text-gray-200 sm:text-xl lg:max-w-2xl">
										{slider.description || m.hero_description()}
									</p>
									<div class="mt-8 flex flex-col gap-4 sm:flex-row">
										<a
											href="/auth/siakad/login"
											class="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
										>
											{m.hero_cta_register()}
											<ArrowRight class="ml-2 h-5 w-5" />
										</a>
										<a
											href="#academic"
											class="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
										>
											{m.hero_cta_explore()}
										</a>
									</div>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			{:else}
				<!-- Fallback static hero -->
				<div class="absolute inset-0">
					<img
						src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920"
						alt="Campus Atmosphere"
						class="h-full w-full object-cover opacity-60"
					/>
					<div
						class="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"
					></div>
				</div>
				<div
					class="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
				>
					<div class="max-w-3xl" in:fly={{ y: 50, duration: 1000 }}>
						<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
							{m.hero_title()}
						</h1>
					</div>
				</div>
			{/if}
		</section>

		<!-- STATS SECTION -->
		<section class="relative z-10 -mt-20 px-4 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-7xl rounded-2xl bg-white p-8 shadow-xl lg:p-12">
				<div class="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
					{#each stats as stat}
						<div class="flex flex-col items-center text-center">
							<div
								class={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg} ${stat.color}`}
							>
								<stat.icon class="h-8 w-8" />
							</div>
							<dd class="text-3xl font-bold tracking-tight text-gray-900 lg:text-4xl">
								{stat.value}
							</dd>
							<dt class="mt-1 text-base font-medium text-gray-500">{stat.label}</dt>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- ABOUT / WELCOME SECTION (Director Welcome) -->
		<section id="about" class="py-20 lg:py-28">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
					<div class="relative">
						<div class="absolute -top-4 -left-4 h-72 w-72 rounded-full bg-indigo-50 blur-3xl"></div>
						<div
							class="absolute -right-4 -bottom-4 h-72 w-72 rounded-full bg-purple-50 blur-3xl"
						></div>
						<div class="relative overflow-hidden rounded-2xl shadow-2xl">
							<img
								src={settings.director_photo ||
									'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800'}
								alt="Director"
								class="h-full w-full object-cover"
							/>
						</div>
					</div>
					<div>
						<span class="font-semibold tracking-wider text-indigo-600 uppercase"
							>{m.nav_about()}</span
						>
						<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							{settings.director_welcome_title || m.about_title()}
						</h2>
						<p class="mt-6 text-lg leading-relaxed text-gray-600">
							{settings.director_welcome_text || m.about_description()}
						</p>
						<div class="mt-8">
							<a
								href="/profile/welcome"
								class="inline-flex items-center font-bold text-indigo-600 hover:underline"
							>
								Lihat Selengkapnya <ChevronRight class="ml-1 h-5 w-5" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- NEWS/POSTS SECTION -->
		<section id="news" class="bg-white py-20 lg:py-28">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 flex items-end justify-between">
					<div>
						<span class="font-semibold tracking-wider text-indigo-600 uppercase"
							>Informasi Kampus Kita</span
						>
						<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Berita Terkini
						</h2>
					</div>
					<a
						href="/posts"
						class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Semua Berita &rarr;
					</a>
				</div>

				<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{#each posts as post}
						<article
							class="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:shadow-md"
						>
							<div class="relative h-48 w-full overflow-hidden">
								<img
									src={post.image_url ||
										'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400'}
									alt={post.title}
									class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
								/>
							</div>
							<div class="flex flex-1 flex-col p-6">
								<div class="flex items-center gap-2 text-xs text-gray-500">
									<Calendar class="h-3 w-3" />
									<time>{new Date(post.created_at).toLocaleDateString('id-ID')}</time>
								</div>
								<h3 class="mt-3 text-lg leading-snug font-bold text-gray-900">
									<a href={`/posts/${post.slug}`} class="line-clamp-2 hover:text-indigo-600"
										>{post.title}</a
									>
								</h3>
								<div class="mt-auto pt-4">
									<a
										href={`/posts/${post.slug}`}
										class="text-xs font-semibold text-indigo-600 hover:text-indigo-500"
									>
										{m.news_read_more()}
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<!-- AGENDA SECTION -->
		<section id="agenda" class="bg-gray-50 py-20 lg:py-28">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12">
					<span class="font-semibold tracking-wider text-indigo-600 uppercase">Agenda Terdekat</span
					>
					<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Jangan Lewatkan
					</h2>
				</div>

				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each agendas as agenda}
						<div
							class="rounded-2xl border-l-4 border-indigo-600 bg-white p-6 shadow-sm transition-all hover:shadow-md"
						>
							<div class="mb-3 flex items-center gap-2 font-bold text-indigo-600">
								<Calendar class="h-5 w-5" />
								<span
									>{new Date(agenda.date).toLocaleDateString('id-ID', {
										day: 'numeric',
										month: 'long',
										year: 'numeric'
									})}</span
								>
							</div>
							<h3 class="mb-2 text-xl font-bold text-gray-900">{agenda.title}</h3>
							<div class="mb-4 flex items-center gap-2 text-sm text-gray-500">
								<MapPin class="h-4 w-4" />
								<span>{agenda.location || 'Kampus'}</span>
							</div>
							<p class="mb-4 line-clamp-3 text-sm text-gray-600">{agenda.description}</p>
							<a
								href={`/agenda/${agenda.id}`}
								class="inline-flex items-center text-sm font-semibold text-indigo-600 hover:underline"
							>
								Detail Agenda <ChevronRight class="ml-1 h-4 w-4" />
							</a>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- VIDEO SECTION -->
		<section id="videos" class="bg-gray-900 py-20 text-white lg:py-28">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 text-center">
					<span class="font-semibold tracking-wider text-indigo-400 uppercase"
						>Kanal Video Kampus</span
					>
					<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Video Terbaru
					</h2>
				</div>

				<div class="grid gap-8 lg:grid-cols-2">
					{#each videos as video}
						<div class="group relative overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
							<div class="aspect-video w-full">
								<iframe
									class="h-full w-full"
									src={`https://www.youtube.com/embed/${video.youtube_id}`}
									title={video.title}
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
							<div class="p-6">
								<h3
									class="text-xl font-bold text-white transition-colors group-hover:text-indigo-400"
								>
									{video.title}
								</h3>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- CALL TO ACTION -->
		<section class="bg-indigo-600 py-16">
			<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					{m.cta_title()}
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
					{m.cta_desc()}
				</p>
				<div class="mt-8 flex justify-center gap-4">
					<a
						href="/auth/siakad/login"
						class="rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
					>
						{m.cta_register()}
					</a>
					<a
						href="/contact"
						class="rounded-full border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
					>
						{m.cta_contact()}
					</a>
				</div>
			</div>
		</section>
	</main>
</div>
