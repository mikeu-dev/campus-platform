<script lang="ts">
	import Header from '$lib/components/landing/Header.svelte';
	import Footer from '$lib/components/landing/Footer.svelte';
	import {
		ArrowRight,
		GraduationCap,
		Users,
		BookOpen,
		Award,
		Calendar,
		ChevronRight
	} from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	// Stats Data
	const stats = [
		{
			label: 'Mahasiswa Aktif',
			value: '15.000+',
			icon: Users,
			color: 'text-blue-600',
			bg: 'bg-blue-100'
		},
		{
			label: 'Dosen & Staf',
			value: '750+',
			icon: GraduationCap,
			color: 'text-indigo-600',
			bg: 'bg-indigo-100'
		},
		{
			label: 'Program Studi',
			value: '45+',
			icon: BookOpen,
			color: 'text-purple-600',
			bg: 'bg-purple-100'
		},
		{
			label: 'Akreditasi A',
			value: '90%',
			icon: Award,
			color: 'text-green-600',
			bg: 'bg-green-100'
		}
	];

	// Faculties Data
	const faculties = [
		{
			name: 'Fakultas Teknik',
			desc: 'Mencetak insinyur handal dengan teknologi terkini.',
			color: 'from-blue-500 to-cyan-500'
		},
		{
			name: 'Fakultas Ekonomi & Bisnis',
			desc: 'Pusat pengembangan pemimpin bisnis masa depan.',
			color: 'from-emerald-500 to-teal-500'
		},
		{
			name: 'Fakultas Ilmu Komputer',
			desc: 'Inovasi digital dan pengembangan perangkat lunak.',
			color: 'from-indigo-500 to-purple-500'
		},
		{
			name: 'Fakultas Kedokteran',
			desc: 'Dedikasi untuk kesehatan dan kemanusiaan.',
			color: 'from-rose-500 to-pink-500'
		},
		{
			name: 'Fakultas Hukum',
			desc: 'Menegakkan keadilan dengan integritas tinggi.',
			color: 'from-amber-500 to-orange-500'
		},
		{
			name: 'Fakultas Sastra & Budaya',
			desc: 'Melestarikan budaya dan mengembangkan bahasa.',
			color: 'from-fuchsia-500 to-pink-500'
		}
	];

	// News Data
	const news = [
		{
			title: 'Mahasiswa FIK Juara 1 Hackathon Nasional 2026',
			date: '12 Agustus 2026',
			cat: 'Prestasi',
			img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400'
		},
		{
			title: 'Visiting Professor dari Harvard University',
			date: '10 Agustus 2026',
			cat: 'Akademik',
			img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b955?auto=format&fit=crop&q=80&w=400'
		},
		{
			title: 'Penerimaan Mahasiswa Baru Gelombang 3 Dibuka',
			date: '05 Agustus 2026',
			cat: 'Pendaftaran',
			img: 'https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&q=80&w=400'
		}
	];
</script>

<div class="min-h-screen bg-gray-50 font-sans text-gray-900">
	<Header />

	<main>
		<!-- HERO SECTION -->
		<section class="relative h-[600px] w-full overflow-hidden bg-gray-900 text-white lg:h-[700px]">
			<!-- Background Image with Overlay -->
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
					<span
						class="mb-4 inline-block rounded-full bg-indigo-600/90 px-4 py-1 text-sm font-semibold tracking-wide text-white backdrop-blur-sm"
					>
						Pendaftaran Mahasiswa Baru 2026/2027 Telah Dibuka
					</span>
					<h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
						Membangun Masa Depan Gemilang Bersama Kami
					</h1>
					<p class="mt-6 text-lg text-gray-200 sm:text-xl lg:max-w-2xl">
						Bergabunglah dengan komunitas akademik terbaik yang berdedikasi menciptakan pemimpin
						masa depan melalui inovasi, integritas, dan keunggulan.
					</p>
					<div class="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href="/auth/siakad/login"
							class="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30"
						>
							Daftar Sekarang
							<ArrowRight class="ml-2 h-5 w-5" />
						</a>
						<a
							href="#academic"
							class="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-8 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
						>
							Jelajahi Program Studi
						</a>
					</div>
				</div>
			</div>
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

		<!-- ABOUT / WELCOME SECTION -->
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
								src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
								alt="University Rector"
								class="h-full w-full object-cover"
							/>
						</div>
						<!-- Badge -->
						<div class="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl">
							<p class="text-sm font-semibold text-gray-500">Berdiri Sejak</p>
							<p class="text-3xl font-bold text-indigo-600">1985</p>
						</div>
					</div>
					<div>
						<span class="font-semibold tracking-wider text-indigo-600 uppercase"
							>Tentang Kampus</span
						>
						<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Menjadi Pusat Keunggulan Pendidikan & Riset
						</h2>
						<p class="mt-6 text-lg leading-relaxed text-gray-600">
							CampusApp University berkomitmen untuk menyelenggarakan pendidikan berkualitas tinggi
							yang relevan dengan tantangan global. Kami memadukan kurikulum berbasis industri
							dengan nilai-nilai etika untuk mencetak lulusan yang tidak hanya cerdas secara
							intelektual, tetapi juga matang secara emosional dan spiritual.
						</p>
						<div class="mt-8 space-y-4">
							<div class="flex gap-4">
								<div
									class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600"
								>
									<Award class="h-6 w-6" />
								</div>
								<div>
									<h4 class="text-lg font-bold text-gray-900">Terakreditasi Unggul</h4>
									<p class="text-gray-600">
										Diakui secara nasional dengan standar pendidikan tertinggi.
									</p>
								</div>
							</div>
							<div class="flex gap-4">
								<div
									class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600"
								>
									<Users class="h-6 w-6" />
								</div>
								<div>
									<h4 class="text-lg font-bold text-gray-900">Jaringan Alumni Luas</h4>
									<p class="text-gray-600">
										Terhubung dengan ribuan alumni sukses di berbagai industri global.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ACADEMIC FACULTIES -->
		<section id="academic" class="bg-gray-900 py-20 text-white lg:py-28">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-16 text-center">
					<span class="font-semibold tracking-wider text-indigo-400 uppercase">Akademik</span>
					<h2 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Fakultas & Program Studi
					</h2>
					<p class="mx-auto mt-4 max-w-2xl text-xl text-gray-400">
						Pilih jalur pendidikan yang sesuai dengan minat dan bakat Anda di berbagai fakultas
						unggulan kami.
					</p>
				</div>

				<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each faculties as faculty}
						<div
							class="group hover:bg-gray-750 relative overflow-hidden rounded-2xl bg-gray-800 p-8 transition-all"
						>
							<div
								class={`absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-linear-to-br ${faculty.color} opacity-10 transition-opacity group-hover:opacity-20`}
							></div>
							<div
								class={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br ${faculty.color} text-white shadow-lg`}
							>
								<BookOpen class="h-7 w-7" />
							</div>
							<h3 class="text-xl font-bold text-white">{faculty.name}</h3>
							<p class="mt-4 text-gray-400">{faculty.desc}</p>
							<a
								href="/"
								class="mt-6 inline-flex items-center text-sm font-semibold text-indigo-400 transition-colors group-hover:text-indigo-300"
							>
								Selengkapnya <ChevronRight class="ml-1 h-4 w-4" />
							</a>
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- NEWS SECTION -->
		<section id="news" class="py-20 lg:py-28">
			<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div class="mb-12 flex items-end justify-between">
					<div>
						<span class="font-semibold tracking-wider text-indigo-600 uppercase"
							>Berita Terbaru</span
						>
						<h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
							Kabar Kampus
						</h2>
					</div>
					<a
						href="/"
						class="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
					>
						Lihat Semua Berita &rarr;
					</a>
				</div>

				<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{#each news as item}
						<article
							class="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl"
						>
							<div class="relative h-48 w-full overflow-hidden">
								<img
									src={item.img}
									alt={item.title}
									class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
								/>
								<div
									class="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 backdrop-blur-sm"
								>
									{item.cat}
								</div>
							</div>
							<div class="flex flex-1 flex-col p-6">
								<div class="flex items-center gap-2 text-sm text-gray-500">
									<Calendar class="h-4 w-4" />
									<time>{item.date}</time>
								</div>
								<h3 class="mt-3 text-xl leading-snug font-bold text-gray-900">
									<a href="/" class="hover:text-indigo-600">{item.title}</a>
								</h3>
								<div class="mt-auto pt-6">
									<a href="/" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
										Baca Selengkapnya
									</a>
								</div>
							</div>
						</article>
					{/each}
				</div>

				<div class="mt-8 text-center sm:hidden">
					<a href="/" class="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
						Lihat Semua Berita &rarr;
					</a>
				</div>
			</div>
		</section>

		<!-- CALL TO ACTION -->
		<section class="bg-indigo-600 py-16">
			<div class="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
				<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
					Siap Memulai Perjalanan Anda?
				</h2>
				<p class="mx-auto mt-4 max-w-2xl text-lg text-indigo-100">
					Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan mengenai pendaftaran atau
					program studi.
				</p>
				<div class="mt-8 flex justify-center gap-4">
					<a
						href="/auth/siakad/login"
						class="rounded-full bg-white px-8 py-3 text-base font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50"
					>
						Daftar Sekarang
					</a>
					<a
						href="/contact"
						class="rounded-full border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10"
					>
						Hubungi Kami
					</a>
				</div>
			</div>
		</section>
	</main>

	<Footer />
</div>
