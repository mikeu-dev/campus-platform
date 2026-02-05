<script lang="ts">
	import { 
		User, 
		CheckCircle2, 
		FileText, 
		MessageSquare, 
		BookOpen, 
		Download, 
		Send,
		AlertCircle,
		PenLine,
		Upload,
		HelpCircle,
		Loader2
	} from 'lucide-svelte';
	import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
    import * as m from '$lib/paraglide/messages.js';
    import { enhance } from '$app/forms';

	let { data, form } = $props();
	const { classInfo, attendances, materials, assignments, attendanceSummary, studentId, user, quizzes, discussions, classId } = data;

	let activeMeeting = $state(1);
    let commentText = $state('');
    let isPosting = $state(false);

	const meetings = Array.from({ length: 16 }, (_, i) => i + 1);

    const filteredMaterials = $derived((materials || []).filter((mat: any) => mat.meeting_number === activeMeeting));
    const filteredAssignments = $derived((assign: any) => (assignments || []).filter((a: any) => a.meeting_number === activeMeeting));
    const filteredQuizzes = $derived((quizzes || []).filter((q: any) => q.meeting_number === activeMeeting));
    const filteredDiscussions = $derived(discussions || []); 

    function getAttendanceStatus(meeting: number) {
        const att = (attendances || []).find((a: any) => a.meeting_number === meeting);
        return att?.status || 'Belum Presensi';
    }

    function getAttendanceBadgeVariant(status: string) {
        switch (status) {
            case 'hadir': return 'default';
            case 'alfa': return 'destructive';
            case 'izin': return 'secondary';
            case 'sakit': return 'secondary';
            default: return 'outline';
        }
    }
</script>

<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
    <!-- Sidebar: Meeting Navigator -->
    <div class="lg:col-span-1 space-y-6">
        <Card class="shadow-sm border-none bg-muted/30">
            <CardHeader class="pb-3 px-4">
                <CardTitle class="text-sm font-bold uppercase tracking-wider text-muted-foreground">Log Perkuliahan</CardTitle>
            </CardHeader>
            <CardContent class="px-2 pb-2">
                <div class="grid grid-cols-4 lg:grid-cols-2 gap-2">
                    {#each meetings as item}
                        <button
                            onclick={() => activeMeeting = item}
                            class={cn(
                                "flex flex-col items-center justify-center p-3 rounded-xl transition-all border-2",
                                activeMeeting === item 
                                    ? "bg-primary text-primary-foreground border-primary shadow-md scale-105" 
                                    : "bg-background hover:bg-muted border-transparent"
                            )}
                        >
                            <span class="text-[10px] uppercase font-bold opacity-70">Pert</span>
                            <span class="text-lg font-bold">{item}</span>
                            <div class={cn(
                                "h-1 w-1 rounded-full mt-1",
                                getAttendanceStatus(item) === 'hadir' ? "bg-green-400" : "bg-muted-foreground/30"
                            )}></div>
                        </button>
                    {/each}
                </div>
            </CardContent>
        </Card>

        <!-- Stats Card -->
        <Card class="border-none shadow-sm overflow-hidden">
            <div class="bg-primary/10 p-4 border-b">
                <h3 class="font-bold flex items-center gap-2">
                    <User class="h-4 w-4 text-primary" />
                    Info Dosen
                </h3>
            </div>
            <CardContent class="p-4 space-y-3">
                <div>
                    <p class="text-xs text-muted-foreground font-bold uppercase">Lecturer Name</p>
                    <p class="font-semibold text-primary">{classInfo?.lecturer_name || 'TBA'}</p>
                </div>
                <Separator />
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <p class="text-[10px] text-muted-foreground uppercase font-bold">Presensi</p>
                        <p class="text-xl font-bold">{attendanceSummary?.hadir || 0}/16</p>
                    </div>
                    <div>
                        <p class="text-[10px] text-muted-foreground uppercase font-bold">Tugas</p>
                        <p class="text-xl font-bold">{assignments?.length || 0}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
        
        <!-- Attendance Summary Small -->
        <Card class="border-none shadow-sm">
            <CardHeader class="pb-2">
                <CardTitle class="text-sm">Ringkasan Kehadiran</CardTitle>
            </CardHeader>
            <CardContent class="grid grid-cols-2 gap-2 text-xs">
                <div class="flex items-center gap-1"><div class="h-2 w-2 rounded-full bg-green-500"></div> Hadir: {attendanceSummary?.hadir || 0}</div>
                <div class="flex items-center gap-1"><div class="h-2 w-2 rounded-full bg-red-500"></div> Alfa: {attendanceSummary?.alfa || 0}</div>
                <div class="flex items-center gap-1"><div class="h-2 w-2 rounded-full bg-yellow-500"></div> Izin: {attendanceSummary?.izin || 0}</div>
                <div class="flex items-center gap-1"><div class="h-2 w-2 rounded-full bg-blue-500"></div> Sakit: {attendanceSummary?.sakit || 0}</div>
            </CardContent>
            <CardFooter class="pt-0">
                <Button variant="outline" size="sm" class="w-full text-[10px] h-8 bg-muted/50">Detail Presensi</Button>
            </CardFooter>
        </Card>
    </div>

    <!-- Main Content: Meeting Details -->
    <div class="lg:col-span-3 space-y-6">
        <div class="flex items-center justify-between">
            <div>
                <h2 class="text-3xl font-extrabold tracking-tight">Pertemuan {activeMeeting}</h2>
                <div class="flex items-center gap-2 mt-2">
                    <Badge variant={getAttendanceBadgeVariant(getAttendanceStatus(activeMeeting))} class="capitalize py-1 px-3">
                        Status: {getAttendanceStatus(activeMeeting)}
                    </Badge>
                </div>
            </div>
            <div class="hidden sm:flex gap-2">
                <Button variant="outline" size="sm" class="gap-2">
                    <FileText class="h-4 w-4" />
                    Unduh RPS
                </Button>
            </div>
        </div>

        <div class="grid gap-6">
            <!-- Rencana & Materi -->
            <Card class="border-none shadow-sm">
                <CardHeader class="bg-muted/30 pb-3">
                    <CardTitle class="text-lg flex items-center gap-2">
                        <BookOpen class="h-5 w-5 text-primary" />
                        Rencana Materi & Pembelajaran
                    </CardTitle>
                </CardHeader>
                <CardContent class="pt-6 space-y-4">
                    <div>
                        <h4 class="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">Topik Pembahasan</h4>
                        {#if filteredMaterials.length > 0}
                            <p class="text-lg font-medium leading-relaxed">{filteredMaterials[0].title}</p>
                        {:else}
                            <div class="flex items-center gap-2 text-muted-foreground italic bg-muted/20 p-4 rounded-xl">
                                <AlertCircle class="h-4 w-4" />
                                Rencana perkuliahan belum dibuat oleh dosen
                            </div>
                        /if}
                    </div>
                    
                    <div>
                        <h4 class="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-2">Metode Pembelajaran</h4>
                        <Badge variant="secondary" class="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
                            {classInfo?.type || 'Hybrid Learning'}
                        </Badge>
                    </div>

                    <Separator />

                    <div>
                        <h4 class="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-3">Materi Belajar</h4>
                        <div class="grid gap-3">
                            {#each filteredMaterials as mat}
                                <div class="flex items-center justify-between p-4 rounded-xl border bg-card hover:border-primary transition-all">
                                    <div class="flex items-center gap-3 overflow-hidden">
                                        <div class="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center shrink-0">
                                            <FileText class="h-6 w-6 text-orange-600" />
                                        </div>
                                        <div class="overflow-hidden">
                                            <p class="font-bold truncate">{mat.title}</p>
                                            <p class="text-xs text-muted-foreground">{mat.type || 'Dokumen'}</p>
                                        </div>
                                    </div>
                                    <Button variant="ghost" size="icon" class="text-primary hover:bg-primary/10">
                                        <Download class="h-5 w-5" />
                                    </Button>
                                </div>
                            {:else}
                                <p class="text-sm text-muted-foreground italic">Belum ada materi untuk pertemuan ini</p>
                            {/each}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div class="grid md:grid-cols-2 gap-6">
                <!-- Assignments -->
                <Card class="border-none shadow-sm overflow-hidden flex flex-col h-full">
                    <CardHeader class="bg-indigo-50 dark:bg-indigo-900/20 pb-3 border-b border-indigo-100 dark:border-indigo-800">
                        <CardTitle class="text-lg flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                            <PenLine class="h-5 w-5" />
                            Tugas Pertemuan
                        </CardTitle>
                    </CardHeader>
                    <CardContent class="pt-6 space-y-6 flex-1">
                        {#each (assignments || []).filter((a: any) => a.meeting_number === activeMeeting) as task}
                            <div class="space-y-4">
                                <div class="flex flex-col gap-1">
                                    <h3 class="text-xl font-bold">{task.title}</h3>
                                    <p class="text-sm text-muted-foreground">{task.description}</p>
                                </div>

                                <div class="grid grid-cols-1 gap-2">
                                    <div class="p-3 rounded-xl border bg-muted/10 space-y-1">
                                        <p class="text-[10px] font-bold uppercase text-muted-foreground">Tenggat Waktu</p>
                                        <p class="text-sm font-semibold">{new Date(task.deadline).toLocaleString('id-ID')}</p>
                                    </div>
                                    <div class="p-3 rounded-xl border bg-muted/10 space-y-1">
                                        <p class="text-[10px] font-bold uppercase text-muted-foreground">Status</p>
                                        <Badge variant={task.is_submitted ? "default" : "destructive"}>
                                            {task.is_submitted ? "Sudah Dikumpulkan" : "Belum Dikumpulkan"}
                                        </Badge>
                                    </div>
                                </div>

                                {#if task.is_submitted && task.grade}
                                    <div class="p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-800 flex items-center justify-between">
                                        <div>
                                            <p class="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase">Nilai</p>
                                            <h4 class="text-2xl font-black text-green-600 dark:text-green-400">{task.grade}</h4>
                                        </div>
                                        <Badge class="bg-green-500">Tuntas</Badge>
                                    </div>
                                {/if}

                                <form method="POST" action="?/uploadAssignment" use:enhance>
                                    <input type="hidden" name="assignmentId" value={task.id} />
                                    <div class="flex gap-3">
                                        {#if !task.is_submitted}
                                            <Button type="submit" class="rounded-xl gap-2 flex-1 h-10">
                                                <Upload class="h-4 w-4" />
                                                Kirim Tugas
                                            </Button>
                                        {:else}
                                            <Button variant="outline" class="rounded-xl gap-2 flex-1 h-10">
                                                <Download class="h-4 w-4" />
                                                File Saya
                                            </Button>
                                        {/if}
                                    </div>
                                </form>
                            </div>
                            <Separator class="my-4" />
                        {:else}
                            <div class="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
                                <CheckCircle2 class="h-10 w-10 opacity-30" />
                                <p class="font-medium italic text-sm">Tidak ada tugas</p>
                            </div>
                        {/each}
                    </CardContent>
                </Card>

                <!-- Quizzes -->
                <Card class="border-none shadow-sm overflow-hidden flex flex-col h-full">
                    <CardHeader class="bg-purple-50 dark:bg-purple-900/20 pb-3 border-b border-purple-100 dark:border-purple-800">
                        <CardTitle class="text-lg flex items-center gap-2 text-purple-700 dark:text-purple-400">
                            <HelpCircle class="h-5 w-5" />
                            Kuis Pertemuan
                        </CardTitle>
                    </CardHeader>
                    <CardContent class="pt-6 space-y-6 flex-1">
                        {#each filteredQuizzes as quiz}
                            <div class="space-y-4">
                                <div class="flex flex-col gap-1">
                                    <h3 class="text-xl font-bold">{quiz.title}</h3>
                                    <p class="text-sm text-muted-foreground">Kuis daring untuk pertemuan {activeMeeting}</p>
                                </div>

                                <div class="p-4 rounded-xl border bg-purple-50/50 dark:bg-purple-900/10 flex items-center justify-between">
                                    <div class="flex items-center gap-3">
                                        <div class="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
                                            <HelpCircle class="h-6 w-6 text-purple-600 dark:text-purple-300" />
                                        </div>
                                        <div>
                                            <p class="font-bold text-sm">Mulai Kuis Sekarang</p>
                                        </div>
                                    </div>
                                </div>

                                <Button class="w-full rounded-xl h-10 bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all">
                                    Mulai Kuis
                                </Button>
                            </div>
                            <Separator class="my-4" />
                        {:else}
                            <div class="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
                                <HelpCircle class="h-10 w-10 opacity-30" />
                                <p class="font-medium italic text-sm">Tidak ada kuis</p>
                            </div>
                        {/each}
                    </CardContent>
                </Card>
            </div>

            <!-- Community / Discussion -->
            <Card class="border-none shadow-sm overflow-hidden">
                <CardHeader class="bg-muted/30 pb-3">
                    <CardTitle class="text-lg flex items-center gap-2">
                        <MessageSquare class="h-5 w-5 text-primary" />
                        Forum Diskusi Kelas
                    </CardTitle>
                </CardHeader>
                <CardContent class="p-6 space-y-8">
                    <!-- Post Form -->
                    <form 
                        method="POST" 
                        action="?/postComment" 
                        use:enhance={() => {
                            isPosting = true;
                            return async ({ update }) => {
                                await update();
                                isPosting = false;
                                commentText = '';
                            };
                        }}
                        class="flex gap-4"
                    >
                        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0 shadow-md">
                            {user?.email?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div class="flex-1 space-y-3">
                            <div class="relative">
                                <textarea 
                                    name="content"
                                    bind:value={commentText}
                                    placeholder="Tulis tanggapan atau pertanyaan tentang materi hari ini..."
                                    class="w-full min-h-[100px] rounded-2xl border-2 p-4 focus:border-primary focus:ring-primary transition-all resize-none bg-background shadow-inner text-sm"
                                ></textarea>
                                <Button 
                                    type="submit"
                                    disabled={!commentText.trim() || isPosting}
                                    class="absolute bottom-4 right-4 gap-2 rounded-xl" 
                                    size="sm"
                                >
                                    {#if isPosting}
                                        <Loader2 class="h-4 w-4 animate-spin" />
                                    {:else}
                                        <Send class="h-4 w-4" />
                                    {/if}
                                    Post Tanggapan
                                </Button>
                            </div>
                        </div>
                    </form>

                    <Separator />

                    <!-- Comments List -->
                    <div class="space-y-6">
                        {#each filteredDiscussions as disc}
                            <div class="flex gap-4">
                                <div class="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold shrink-0 text-xs">
                                    {disc.user_email?.charAt(0).toUpperCase() || 'U'}
                                </div>
                                <div class="flex-1 space-y-1">
                                    <div class="flex items-center gap-2">
                                        <span class="font-bold text-sm">{disc.user_email?.split('@')[0]}</span>
                                        <span class="text-[10px] text-muted-foreground uppercase tracking-tight">{new Date(disc.created_at).toLocaleString('id-ID')}</span>
                                    </div>
                                    <div class="p-4 rounded-2xl bg-muted/30 text-sm leading-relaxed border">
                                        {disc.content}
                                    </div>
                                </div>
                            </div>
                        {:else}
                            <div class="text-center py-10 text-muted-foreground italic text-sm">
                                Belum ada diskusi. Jadilah yang pertama bertanya!
                            </div>
                        {/each}
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
</div>
