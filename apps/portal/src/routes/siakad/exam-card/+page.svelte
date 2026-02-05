<script lang="ts">
	import { Printer, Download, BookOpen, User, Calendar } from 'lucide-svelte';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import {
		Table,
		TableBody,
		TableCell,
		TableHead,
		TableHeader,
		TableRow
	} from '$lib/components/ui/table';
	import * as m from '$lib/paraglide/messages.js';

	// Mock data for exam card
	const examCard = {
		student: {
			name: 'Budi Santoso',
			nim: '10123456',
			program: 'Teknik Informatika',
			semester: 'Semester Ganjil 2024/2025'
		},
		exams: [
			{
				id: 1,
				code: 'IF101',
				name: 'Algoritma dan Pemrograman',
				date: '2024-10-15',
				time: '08:00 - 10:00',
				room: 'Ruang 301',
				status: 'Hadir'
			},
			{
				id: 2,
				code: 'IF102',
				name: 'Matematika Diskrit',
				date: '2024-10-16',
				time: '10:30 - 12:30',
				room: 'Ruang 302',
				status: 'Hadir'
			},
			{
				id: 3,
				code: 'IF103',
				name: 'Arsitektur Komputer',
				date: '2024-10-17',
				time: '13:00 - 15:00',
				room: 'Ruang 401',
				status: 'Hadir'
			}
		]
	};

	function handlePrint() {
		window.print();
	}
</script>

<div class="space-y-6">
	<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
		<div>
			<h2 class="text-3xl font-bold tracking-tight">{m.siakad_exam_card_title()}</h2>
			<p class="text-muted-foreground">{m.siakad_exam_card_desc()}</p>
		</div>
		<div class="flex gap-2">
			<Button variant="outline" size="sm" onclick={handlePrint}>
				<Printer class="mr-2 h-4 w-4" />
				{m.siakad_exam_card_print()}
			</Button>
			<Button variant="outline" size="sm">
				<Download class="mr-2 h-4 w-4" />
				{m.siakad_exam_card_download()}
			</Button>
		</div>
	</div>

	<Card class="print:border-none print:shadow-none">
		<CardHeader class="border-b bg-muted/30">
			<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div class="space-y-2">
					<div class="flex items-center gap-2 text-sm">
						<span class="w-20 text-muted-foreground">{m.siakad_exam_card_nim()}</span>
						<span class="font-medium">: {examCard.student.nim}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span class="w-20 text-muted-foreground">{m.siakad_exam_card_name()}</span>
						<span class="font-medium">: {examCard.student.name}</span>
					</div>
				</div>
				<div class="space-y-2">
					<div class="flex items-center gap-2 text-sm">
						<span class="w-20 text-muted-foreground">{m.siakad_user_program()}</span>
						<span class="font-medium">: {examCard.student.program}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span class="w-20 text-muted-foreground">{m.siakad_user_semester()}</span>
						<span class="font-medium">: {examCard.student.semester}</span>
					</div>
				</div>
			</div>
		</CardHeader>
		<CardContent class="p-0">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead class="w-[80px]">{m.table_no()}</TableHead>
						<TableHead class="w-[120px]">{m.table_code()}</TableHead>
						<TableHead>{m.table_course_name()}</TableHead>
						<TableHead>{m.table_date()}</TableHead>
						<TableHead>{m.table_time()}</TableHead>
						<TableHead>{m.table_room()}</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{#each examCard.exams as exam, i}
						<TableRow>
							<TableCell>{i + 1}</TableCell>
							<TableCell class="font-mono">{exam.code}</TableCell>
							<TableCell>{exam.name}</TableCell>
							<TableCell>{exam.date}</TableCell>
							<TableCell>{exam.time}</TableCell>
							<TableCell>{exam.room}</TableCell>
						</TableRow>
					{/each}
				</TableBody>
			</Table>
		</CardContent>
	</Card>

	<!-- Note for Student -->
	<div
		class="rounded-lg border bg-blue-50/50 p-4 text-sm text-blue-700 dark:bg-blue-900/10 dark:text-blue-400"
	>
		<h4 class="mb-2 font-semibold">{m.siakad_exam_card_note_title()}</h4>
		<ul class="list-inside list-disc space-y-1">
			<li>{m.siakad_exam_card_note_1()}</li>
			<li>{m.siakad_exam_card_note_2()}</li>
			<li>{m.siakad_exam_card_note_3()}</li>
		</ul>
	</div>
</div>
