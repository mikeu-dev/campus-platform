<script lang="ts">
	import {
		Plus,
		BookOpen,
		CheckCircle2,
		AlertTriangle,
		GraduationCap,
		Trash2,
		CalendarDays
	} from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';

	let { data, form } = $props();
	const { availableClasses = [], myEnrollments = [], student } = $derived(data);

	const totalSks = $derived(
		myEnrollments.reduce((sum: number, en: any) => sum + (en.credits || 0), 0)
	);

	function isEnrolled(classId: string) {
		return myEnrollments.some((en: any) => en.class_id === classId);
	}
</script>

<div class="space-y-6">
	<div class="flex items-center justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">Kartu Rencana Studi (KRS)</h2>
			<p class="text-muted-foreground">Pilih mata kuliah untuk semester aktif.</p>
		</div>
		<div class="text-right">
			<div class="text-2xl font-bold text-primary">{totalSks} / 24</div>
			<div class="text-[10px] tracking-wider text-muted-foreground uppercase">
				Total SKS Diambil
			</div>
		</div>
	</div>

	{#if form?.message}
		<div class="rounded-lg border border-red-100 bg-red-50 p-4 text-sm text-red-700">
			{form.message}
		</div>
	{/if}

	<div class="grid gap-6 lg:grid-cols-3">
		<!-- KRS List (Current Enrollments) -->
		<div class="space-y-4 lg:col-span-2">
			<Card>
				<CardHeader class="flex flex-row items-center justify-between">
					<CardTitle>Mata Kuliah Diambil</CardTitle>
					<Badge variant="outline">Semester Ganjil 2026</Badge>
				</CardHeader>
				<CardContent>
					<div class="space-y-4">
						{#each myEnrollments as en}
							<div class="flex items-center justify-between rounded-lg border p-4 shadow-sm">
								<div class="flex items-center gap-4">
									<div
										class="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100"
									>
										<BookOpen class="h-5 w-5 text-indigo-600" />
									</div>
									<div>
										<p class="text-sm font-bold">{en.course_name}</p>
										<div class="flex items-center gap-2 text-xs text-muted-foreground">
											<span>{en.course_code}</span>
											<Separator orientation="vertical" class="h-3" />
											<span>{en.credits} SKS</span>
										</div>
									</div>
								</div>
								<div class="flex items-center gap-3">
									<Badge class="border-none bg-green-100 text-green-700 hover:bg-green-100"
										>Terdaftar</Badge
									>
									<Button variant="ghost" size="icon" class="h-8 w-8 text-destructive">
										<Trash2 class="h-4 w-4" />
									</Button>
								</div>
							</div>
						{:else}
							<div
								class="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-dashed"
							>
								<AlertTriangle class="mb-2 h-8 w-8 text-muted-foreground/50" />
								<p class="text-sm text-muted-foreground italic">
									Anda belum mengambil mata kuliah apa pun.
								</p>
							</div>
						{/each}
					</div>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Panduan Pengisian KRS</CardTitle>
				</CardHeader>
				<CardContent class="space-y-2 text-sm text-muted-foreground">
					<p>
						1. Mahasiswa wajib mengambil minimal 12 SKS dan maksimal 24 SKS sesuai IPK semester
						sebelumnya.
					</p>
					<p>2. Pastikan jadwal mata kuliah yang dipilih tidak bentrok satu sama lain.</p>
					<p>3. Mata Kuliah yang sudah penuh (kuota habis) tidak dapat dipilih.</p>
				</CardContent>
			</Card>
		</div>

		<!-- Available Classes to Pick -->
		<div class="space-y-4">
			<Card class="bg-muted/30">
				<CardHeader>
					<CardTitle class="text-sm font-bold tracking-wider uppercase"
						>Pilihan Mata Kuliah</CardTitle
					>
					<CardDescription>Pilih berdasarkan ketersediaan kuota.</CardDescription>
				</CardHeader>
				<CardContent class="space-y-3">
					{#each availableClasses as cls}
						<div
							class="rounded-lg border bg-card p-3 shadow-sm {isEnrolled(cls.id)
								? 'opacity-50 ring-2 ring-primary/20'
								: ''}"
						>
							<div class="mb-2 flex items-start justify-between">
								<div>
									<p class="font-mono text-xs font-bold text-primary">{cls.course_code}</p>
									<p class="text-sm leading-tight font-bold">{cls.course_name}</p>
								</div>
								<Badge variant="outline" class="text-[10px]">{cls.capacity} Kuota</Badge>
							</div>
							<div class="mt-3 flex items-center justify-between border-t border-dashed pt-2">
								<div class="text-[10px] text-muted-foreground">
									Dosen: {cls.lecturer_name || 'TBA'}
								</div>
								{#if isEnrolled(cls.id)}
									<span class="flex items-center gap-1 text-xs font-bold text-green-600">
										<CheckCircle2 class="h-3 w-3" /> Terpilih
									</span>
								{:else}
									<form action="?/enroll" method="POST">
										<input type="hidden" name="class_id" value={cls.id} />
										<input type="hidden" name="student_id" value={student?.id} />
										<Button size="sm" class="h-7 px-3 text-[10px]">
											<Plus class="mr-1 h-3 w-3" /> Ambil
										</Button>
									</form>
								{/if}
							</div>
						</div>
					{:else}
						<p class="text-xs text-muted-foreground italic text-center py-4">
							Tidak ada kelas tersedia saat ini.
						</p>
					{/each}
				</CardContent>
			</Card>
		</div>
	</div>
</div>
