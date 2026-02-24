<script lang="ts">
	import { page } from '$app/stores';
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
	import { Input } from '$lib/components/ui/input';

	import { ArrowLeft, Save, Loader2 } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import { PUBLIC_ACADEMIC_API_URL } from '$env/static/public';

	interface Props {
		data: { token?: string };
	}

	let { data }: Props = $props();

	let classId = $page.params.classId;
	let students: any[] = $state([]);
	let loading = $state(true);
	let saving = $state(false);

	// Grade data: Map enrollment_id -> { score, grade }
	let gradeData: Record<string, { score: number | null; grade: string }> = $state({});

	function scoreToGrade(score: number | null): string {
		if (score === null || score === undefined) return '';
		if (score >= 80) return 'A';
		if (score >= 70) return 'B';
		if (score >= 60) return 'C';
		if (score >= 50) return 'D';
		return 'E';
	}

	function getGradeBadgeVariant(
		grade: string
	): 'default' | 'secondary' | 'destructive' | 'outline' {
		if (grade === 'A' || grade === 'B') return 'default';
		if (grade === 'C') return 'secondary';
		if (grade === 'D' || grade === 'E') return 'destructive';
		return 'outline';
	}

	async function fetchGrades() {
		loading = true;
		try {
			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/classes/${classId}/grades`, {
				headers: { Authorization: `Bearer ${data.token}` }
			});
			const response = await res.json();

			if (response.status === 'success') {
				students = response.data;
				// Initialize grade data
				const initial: Record<string, { score: number | null; grade: string }> = {};
				students.forEach((s) => {
					initial[s.enrollment_id] = {
						score: s.score !== null && s.score !== undefined ? s.score : null,
						grade: s.grade || ''
					};
				});
				gradeData = initial;
			}
		} catch (error) {
			console.error('Failed to fetch grades:', error);
			toast.error('Gagal memuat data nilai');
		} finally {
			loading = false;
		}
	}

	function handleScoreChange(enrollmentId: string, value: string) {
		const score = value === '' ? null : parseFloat(value);
		const grade = scoreToGrade(score);
		gradeData[enrollmentId] = { score, grade };
	}

	async function handleSave() {
		saving = true;
		try {
			const grades = Object.entries(gradeData)
				.filter((entry) => entry[1].score !== null)
				.map(([enrollmentId, v]) => ({
					enrollment_id: enrollmentId,
					score: v.score,
					grade: v.grade
				}));

			if (grades.length === 0) {
				toast.error('Tidak ada nilai untuk disimpan');
				saving = false;
				return;
			}

			const res = await fetch(`${PUBLIC_ACADEMIC_API_URL}/grades/batch`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${data.token}`
				},
				body: JSON.stringify({
					class_id: classId,
					grades
				})
			});

			const response = await res.json();
			if (response.status === 'success') {
				toast.success('Nilai berhasil disimpan');
			} else {
				throw new Error(response.message || 'Gagal menyimpan nilai');
			}
		} catch (error: any) {
			console.error('Save error:', error);
			toast.error(error.message || 'Terjadi kesalahan');
		} finally {
			saving = false;
		}
	}

	onMount(() => {
		fetchGrades();
	});
</script>

<div class="flex flex-col gap-6">
	<div class="flex items-center gap-4">
		<Button variant="outline" size="icon" href="/panel/academic/schedule">
			<ArrowLeft class="h-4 w-4" />
		</Button>
		<div>
			<h1 class="text-3xl font-bold tracking-tight">Input Nilai</h1>
			<p class="text-muted-foreground">Masukkan skor (0-100), huruf mutu akan otomatis dihitung.</p>
		</div>
	</div>

	<!-- Legend -->
	<div class="flex items-center gap-4 rounded-xl border bg-card p-4 shadow-sm">
		<div class="flex items-center gap-6 text-sm">
			<span><Badge variant="default">A</Badge> ≥ 80</span>
			<span><Badge variant="default">B</Badge> ≥ 70</span>
			<span><Badge variant="secondary">C</Badge> ≥ 60</span>
			<span><Badge variant="destructive">D</Badge> ≥ 50</span>
			<span><Badge variant="destructive">E</Badge> &lt; 50</span>
		</div>
		<div class="ml-auto">
			<Button onclick={handleSave} disabled={saving}>
				{#if saving}
					<Loader2 class="mr-2 h-4 w-4 animate-spin" />
				{/if}
				<Save class="mr-2 h-4 w-4" />
				Simpan Nilai
			</Button>
		</div>
	</div>

	<div class="rounded-xl border bg-card text-card-foreground shadow">
		<div class="p-6">
			<div class="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead class="w-[50px]">No</TableHead>
							<TableHead>NIM</TableHead>
							<TableHead>Nama Mahasiswa</TableHead>
							<TableHead class="w-[150px]">Skor (0-100)</TableHead>
							<TableHead class="w-[100px] text-center">Huruf Mutu</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{#if loading}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center">
									<Loader2 class="mx-auto h-6 w-6 animate-spin text-muted-foreground" />
								</TableCell>
							</TableRow>
						{:else if students.length === 0}
							<TableRow>
								<TableCell colspan={5} class="h-24 text-center text-muted-foreground">
									Belum ada mahasiswa di kelas ini.
								</TableCell>
							</TableRow>
						{:else}
							{#each students as student, i (student.enrollment_id || i)}
								<TableRow>
									<TableCell>{i + 1}</TableCell>
									<TableCell class="font-mono text-sm">{student.student_number}</TableCell>
									<TableCell class="font-medium">{student.student_name}</TableCell>
									<TableCell>
										<Input
											type="number"
											min="0"
											max="100"
											step="0.1"
											value={gradeData[student.enrollment_id]?.score ?? ''}
											oninput={(e) =>
												handleScoreChange(
													student.enrollment_id,
													(e.target as HTMLInputElement).value
												)}
											class="w-24"
										/>
									</TableCell>
									<TableCell class="text-center">
										{#if gradeData[student.enrollment_id]?.grade}
											<Badge variant={getGradeBadgeVariant(gradeData[student.enrollment_id].grade)}>
												{gradeData[student.enrollment_id].grade}
											</Badge>
										{:else}
											<span class="text-muted-foreground">-</span>
										{/if}
									</TableCell>
								</TableRow>
							{/each}
						{/if}
					</TableBody>
				</Table>
			</div>
		</div>
	</div>
</div>
