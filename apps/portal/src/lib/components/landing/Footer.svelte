<script lang="ts">
	import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-svelte';
</script>

<footer class="bg-gray-900 text-white">
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Brand Info -->
			<div class="space-y-4">
				<div class="flex items-center gap-2">
					<div
						class="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="h-6 w-6"
						>
							<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
							<path d="M6 12v5c3 3 9 3 12 0v-5" />
						</svg>
					</div>
					<span class="text-2xl font-bold tracking-tight text-white">
						Campus<span class="text-indigo-400">App</span>
					</span>
				</div>
				<p class="text-sm text-gray-400">
					Membangun generasi unggul yang siap bersaing di kancah global dengan integritas dan
					inovasi.
				</p>
				<div class="flex space-x-4">
					<a href="/" class="text-gray-400 hover:text-white">
						<Facebook class="h-5 w-5" />
					</a>
					<a href="/" class="text-gray-400 hover:text-white">
						<Twitter class="h-5 w-5" />
					</a>
					<a href="/" class="text-gray-400 hover:text-white">
						<Instagram class="h-5 w-5" />
					</a>
					<a href="/" class="text-gray-400 hover:text-white">
						<Linkedin class="h-5 w-5" />
					</a>
				</div>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">Akademik</h3>
				<ul class="space-y-3 text-sm text-gray-400">
					<li><a href="/" class="hover:text-white">Fakultas Teknik</a></li>
					<li><a href="/" class="hover:text-white">Fakultas Ekonomi</a></li>
					<li><a href="/" class="hover:text-white">Fakultas Ilmu Komputer</a></li>
					<li><a href="/" class="hover:text-white">Pascasarjana</a></li>
					<li><a href="/" class="hover:text-white">Kalender Akademik</a></li>
				</ul>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">Informasi</h3>
				<ul class="space-y-3 text-sm text-gray-400">
					<li><a href="/" class="hover:text-white">Pendaftaran Mahasiswa Baru</a></li>
					<li><a href="/" class="hover:text-white">Beasiswa</a></li>
					<li><a href="/" class="hover:text-white">Karir</a></li>
					<li><a href="/" class="hover:text-white">Pengumuman</a></li>
					<li><a href="/" class="hover:text-white">Unduh Brosur</a></li>
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h3 class="mb-4 text-sm font-semibold tracking-wider text-gray-200 uppercase">
					Hubungi Kami
				</h3>
				<ul class="space-y-3 text-sm text-gray-400">
					<li class="flex items-start gap-3">
						<MapPin class="mt-0.5 h-5 w-5 shrink-0 text-indigo-400" />
						<span>Jl. Pendidikan No. 123<br />Kota Pelajar, Indonesia 54321</span>
					</li>
					<li class="flex items-center gap-3">
						<Phone class="h-5 w-5 shrink-0 text-indigo-400" />
						<span>+62 21 1234 5678</span>
					</li>
					<li class="flex items-center gap-3">
						<Mail class="h-5 w-5 shrink-0 text-indigo-400" />
						<span>info@campusapp.ac.id</span>
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-12 border-t border-gray-800 pt-8 text-center">
			<p class="text-sm text-gray-400">
				&copy; {new Date().getFullYear()} CampusApp University. All rights reserved.
			</p>
		</div>
	</div>
</footer>
