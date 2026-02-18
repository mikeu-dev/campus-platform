<script lang="ts">
	import {
		Save,
		Globe,
		Share2,
		UserCircle,
		Facebook,
		Instagram,
		Twitter,
		Youtube
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import Editor from '$lib/components/Editor.svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription,
		CardFooter
	} from '$lib/components/ui/card';
	import { Tabs, TabsContent, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

	let { data } = $props();

	interface SiteSettings {
		app_name?: string;
		app_suffix?: string;
		address?: string;
		phone?: string;
		email?: string;
		facebook_url?: string;
		instagram_url?: string;
		twitter_url?: string;
		youtube_url?: string;
		director_name?: string;
		director_title?: string;
		director_image?: string;
		director_message?: string;
	}

	const settings: SiteSettings = $derived(data.settings || {});
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Pengaturan Konten</h2>
			<p class="text-muted-foreground">
				Konfigurasi identitas kampus, media sosial, dan sambutan pimpinan.
			</p>
		</div>
	</div>

	<form method="POST" action="?/save">
		<Tabs defaultValue="identity" class="space-y-4">
			<TabsList>
				<TabsTrigger value="identity" class="gap-2">
					<Globe class="h-4 w-4" />
					Identitas Kampus
				</TabsTrigger>
				<TabsTrigger value="social" class="gap-2">
					<Share2 class="h-4 w-4" />
					Media Sosial
				</TabsTrigger>
				<TabsTrigger value="director" class="gap-2">
					<UserCircle class="h-4 w-4" />
					Sambutan Direktur
				</TabsTrigger>
			</TabsList>

			<TabsContent value="identity">
				<Card>
					<CardHeader>
						<CardTitle>Informasi Dasar</CardTitle>
						<CardDescription>Nama aplikasi, slogan, dan informasi kontak utama.</CardDescription>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="app_name">Nama Kampus / App</Label>
								<Input id="app_name" name="app_name" value={settings.app_name || ''} />
							</div>
							<div class="space-y-2">
								<Label for="app_suffix">Suffix Nama (Highlight)</Label>
								<Input
									id="app_suffix"
									name="app_suffix"
									value={settings.app_suffix || ''}
									placeholder="Contoh: University"
								/>
							</div>
						</div>
						<div class="space-y-2">
							<Label for="address">Alamat Lengkap</Label>
							<Textarea id="address" name="address" value={settings.address || ''} rows={2} />
						</div>
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="phone">Telepon</Label>
								<Input id="phone" name="phone" value={settings.phone || ''} />
							</div>
							<div class="space-y-2">
								<Label for="email">Email Kontak</Label>
								<Input id="email" name="email" value={settings.email || ''} />
							</div>
						</div>
					</CardContent>
				</Card>
			</TabsContent>

			<TabsContent value="social">
				<Card>
					<CardHeader>
						<CardTitle>Tautan Media Sosial</CardTitle>
						<CardDescription>URL lengkap menuju akun media sosial resmi kampus.</CardDescription>
					</CardHeader>
					<CardContent class="grid gap-4 md:grid-cols-2">
						<div class="space-y-2">
							<Label class="flex items-center gap-2">
								<Facebook class="h-4 w-4 text-blue-600" />
								Facebook
							</Label>
							<Input
								name="facebook_url"
								value={settings.facebook_url || ''}
								placeholder="https://facebook.com/..."
							/>
						</div>
						<div class="space-y-2">
							<Label class="flex items-center gap-2">
								<Instagram class="h-4 w-4 text-pink-600" />
								Instagram
							</Label>
							<Input
								name="instagram_url"
								value={settings.instagram_url || ''}
								placeholder="https://instagram.com/..."
							/>
						</div>
						<div class="space-y-2">
							<Label class="flex items-center gap-2">
								<Twitter class="h-4 w-4 text-sky-500" />
								Twitter / X
							</Label>
							<Input
								name="twitter_url"
								value={settings.twitter_url || ''}
								placeholder="https://twitter.com/..."
							/>
						</div>
						<div class="space-y-2">
							<Label class="flex items-center gap-2">
								<Youtube class="h-4 w-4 text-red-600" />
								Youtube
							</Label>
							<Input
								name="youtube_url"
								value={settings.youtube_url || ''}
								placeholder="https://youtube.com/..."
							/>
						</div>
					</CardContent>
				</Card>
			</TabsContent>

			<TabsContent value="director">
				<Card>
					<CardHeader>
						<CardTitle>Sambutan Direktur / Rektor</CardTitle>
						<CardDescription
							>Teks sambutan yang akan muncul di section 'Tentang Kami' beranda.</CardDescription
						>
					</CardHeader>
					<CardContent class="space-y-4">
						<div class="grid grid-cols-2 gap-4">
							<div class="space-y-2">
								<Label for="director_name">Nama Direktur/Rektor</Label>
								<Input
									id="director_name"
									name="director_name"
									value={settings.director_name || ''}
								/>
							</div>
							<div class="space-y-2">
								<Label for="director_title">Jabatan</Label>
								<Input
									id="director_title"
									name="director_title"
									value={settings.director_title || ''}
									placeholder="Misal: Direktur CampusApp University"
								/>
							</div>
						</div>
						<div class="space-y-2">
							<Label for="director_image">URL Foto Direktur</Label>
							<Input
								id="director_image"
								name="director_image"
								value={settings.director_image || ''}
								placeholder="https://..."
							/>
						</div>
						<div class="space-y-2">
							<Label for="director_message">Pesan Sambutan</Label>
							<input
								type="hidden"
								name="director_message"
								value={settings.director_message || ''}
							/>
							<Editor
								content={settings.director_message || ''}
								onchange={(html) => {
									if (data.settings) {
										(data as any).settings.director_message = html;
									}
								}}
							/>
						</div>
					</CardContent>
					<CardFooter class="flex justify-end border-t p-6">
						<Button type="submit" class="gap-2">
							<Save class="h-4 w-4" />
							Simpan Pengaturan
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	</form>
</div>
