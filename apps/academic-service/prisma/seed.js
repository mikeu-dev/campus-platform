require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

    console.log('Seeding AMIK-YPAT PURWAKARTA Academic Data...');

    // ═══════════════════════════════════════════
    // 1. LECTURERS (5 dosen)
    // ═══════════════════════════════════════════
    const lecturerData = [
        { userId: 'b2222222-2222-2222-2222-222222222222', name: 'Dr. Ahmad Fauzi, M.Kom.', nidn: '0401018501', number: 'LP001' },
        { userId: 'b2222222-2222-2222-2222-222222222233', name: 'Siti Nurhaliza, S.Kom., M.T.', nidn: '0512039002', number: 'LP002' },
        { userId: 'b2222222-2222-2222-2222-222222222244', name: 'Bambang Purnomo, S.T., M.Cs.', nidn: '0623058803', number: 'LP003' },
        { userId: 'b2222222-2222-2222-2222-222222222255', name: 'Dewi Sartika, S.Si., M.Kom.', nidn: '0715079104', number: 'LP004' },
        { userId: 'b2222222-2222-2222-2222-222222222266', name: 'Rudi Hartono, S.Kom., M.M.', nidn: '0830068705', number: 'LP005' },
    ];

    const lecturers = [];
    for (const l of lecturerData) {
        const lecturer = await prisma.lecturers.upsert({
            where: { tenant_id_user_id: { tenant_id: tenantId, user_id: l.userId } },
            update: { name: l.name, platform_lecturer_number: l.number },
            create: {
                tenant_id: tenantId,
                user_id: l.userId,
                name: l.name,
                platform_lecturer_number: l.number
            }
        });
        lecturers.push(lecturer);
        console.log(`Lecturer '${l.name}' Ready.`);
    }

    // ═══════════════════════════════════════════
    // 2. STUDENTS (11 mahasiswa)
    // ═══════════════════════════════════════════
    const studentData = [
        { userId: 'c3333333-3333-3333-3333-333333333333', name: 'Budi Santoso', program: 'Manajemen Informatika dan Komputer (D3)', year: 2024, number: '24001' },
        { userId: 'c3333333-3333-3333-3333-333333333344', name: 'Agus Pratama', program: 'Manajemen Informatika dan Komputer (D3)', year: 2024, number: '24002' },
        { userId: 'c3333333-3333-3333-3333-333333333355', name: 'Rina Wulandari', program: 'Manajemen Informatika dan Komputer (D3)', year: 2024, number: '24003' },
        { userId: 'c3333333-3333-3333-3333-333333333366', name: 'Dedi Kurniawan', program: 'Manajemen Informatika dan Komputer (D3)', year: 2023, number: '23001' },
        { userId: 'c3333333-3333-3333-3333-333333333377', name: 'Fitri Handayani', program: 'Manajemen Informatika dan Komputer (D3)', year: 2023, number: '23002' },
        { userId: 'c3333333-3333-3333-3333-333333333388', name: 'Yusuf Ramadhan', program: 'Manajemen Informatika dan Komputer (D3)', year: 2023, number: '23003' },
        { userId: 'c3333333-3333-3333-3333-333333333399', name: 'Nina Safitri', program: 'Manajemen Informatika dan Komputer (D3)', year: 2025, number: '25001' },
        { userId: 'c3333333-3333-3333-3333-3333333333aa', name: 'Hendra Wijaya', program: 'Manajemen Informatika dan Komputer (D3)', year: 2025, number: '25002' },
        { userId: 'c3333333-3333-3333-3333-3333333333bb', name: 'Mega Putri Lestari', program: 'Manajemen Informatika dan Komputer (D3)', year: 2025, number: '25003' },
        { userId: 'c3333333-3333-3333-3333-3333333333cc', name: 'Rizky Maulana', program: 'Manajemen Informatika dan Komputer (D3)', year: 2024, number: '24004' },
    ];

    const students = [];
    for (const s of studentData) {
        const student = await prisma.students.upsert({
            where: { tenant_id_user_id: { tenant_id: tenantId, user_id: s.userId } },
            update: { name: s.name, study_program: s.program, entry_year: s.year },
            create: {
                tenant_id: tenantId,
                user_id: s.userId,
                name: s.name,
                study_program: s.program,
                entry_year: s.year,
                platform_student_number: s.number,
                status: 'active'
            }
        });
        students.push(student);
        console.log(`Student '${s.name}' Ready.`);
    }

    // ═══════════════════════════════════════════
    // 3. COURSES (12 mata kuliah)
    // ═══════════════════════════════════════════
    const coursesToSeed = [
        { code: 'MI101', name: 'Dasar-dasar Komputer', credits: 3 },
        { code: 'MI102', name: 'Algoritma & Pemrograman', credits: 4 },
        { code: 'MI103', name: 'Matematika Diskrit', credits: 3 },
        { code: 'MI104', name: 'Bahasa Inggris Teknik', credits: 2 },
        { code: 'MI201', name: 'Sistem Operasi', credits: 3 },
        { code: 'MI202', name: 'Basis Data', credits: 3 },
        { code: 'MI203', name: 'Pemrograman Web', credits: 4 },
        { code: 'MI204', name: 'Jaringan Komputer', credits: 3 },
        { code: 'MI301', name: 'Rekayasa Perangkat Lunak', credits: 3 },
        { code: 'MI302', name: 'Keamanan Sistem Informasi', credits: 3 },
        { code: 'MI303', name: 'Cloud Computing', credits: 3 },
        { code: 'MI304', name: 'Proyek Akhir', credits: 6 },
    ];

    const courseMap = {};
    for (const c of coursesToSeed) {
        const course = await prisma.courses.upsert({
            where: { tenant_id_code: { tenant_id: tenantId, code: c.code } },
            update: { name: c.name, credits: c.credits },
            create: {
                tenant_id: tenantId,
                code: c.code,
                name: c.name,
                credits: c.credits
            }
        });
        courseMap[c.code] = course.id;
        console.log(`Course '${c.name}' Ready.`);
    }

    // ═══════════════════════════════════════════
    // 4. CLASSES (12 kelas — Ganjil 2026)
    // ═══════════════════════════════════════════
    const currentYear = 2026;
    const semester = 'Ganjil';
    const classMap = {};

    // Assign lecturers to courses in round-robin
    const courseKeys = Object.keys(courseMap);
    for (let i = 0; i < courseKeys.length; i++) {
        const code = courseKeys[i];
        const lecturerIdx = i % lecturers.length;

        const cls = await prisma.classes.upsert({
            where: {
                tenant_id_course_id_semester_year: {
                    tenant_id: tenantId,
                    course_id: courseMap[code],
                    semester,
                    year: currentYear
                }
            },
            update: { lecturer_id: lecturers[lecturerIdx].id },
            create: {
                tenant_id: tenantId,
                course_id: courseMap[code],
                lecturer_id: lecturers[lecturerIdx].id,
                semester,
                year: currentYear,
                capacity: 40
            }
        });
        classMap[code] = cls.id;
        console.log(`Class '${code}' (${semester} ${currentYear}) Ready.`);
    }

    // ═══════════════════════════════════════════
    // 5. ENROLLMENTS — Enroll students to various classes
    // ═══════════════════════════════════════════
    // Semester 1 courses for 2024 students
    const sem1Codes = ['MI101', 'MI102', 'MI103', 'MI104'];
    // Semester 3 courses for 2023 students
    const sem3Codes = ['MI201', 'MI202', 'MI203', 'MI204'];
    // Semester 5 courses for 2025 students (accelerated/new)
    const sem5Codes = ['MI301', 'MI302', 'MI303'];

    const enrollmentPlan = [
        // 2024 batch — take sem1 courses
        ...students.filter((_, i) => [0, 1, 2, 9].includes(i)).flatMap(s => sem1Codes.map(code => ({ studentId: s.id, code }))),
        // 2023 batch — take sem3 courses
        ...students.filter((_, i) => [3, 4, 5].includes(i)).flatMap(s => sem3Codes.map(code => ({ studentId: s.id, code }))),
        // 2025 batch — take sem1 courses
        ...students.filter((_, i) => [6, 7, 8].includes(i)).flatMap(s => sem1Codes.map(code => ({ studentId: s.id, code }))),
    ];

    let enrollCount = 0;
    for (const enr of enrollmentPlan) {
        if (!classMap[enr.code]) continue;
        try {
            await prisma.enrollments.upsert({
                where: {
                    student_id_class_id: {
                        student_id: enr.studentId,
                        class_id: classMap[enr.code]
                    }
                },
                update: {},
                create: {
                    tenant_id: tenantId,
                    student_id: enr.studentId,
                    class_id: classMap[enr.code],
                    status: 'enrolled'
                }
            });
            enrollCount++;
        } catch (e) {
            // skip duplicates
        }
    }
    console.log(`${enrollCount} Enrollments Ready.`);

    // ═══════════════════════════════════════════
    // 6. FINANCIAL BILLS (one per student)
    // ═══════════════════════════════════════════
    const billData = students.map((s, i) => ({
        tenant_id: tenantId,
        student_id: s.id,
        title: 'SPP Semester Ganjil 2026',
        amount: 2500000,
        is_paid: i < 5, // first 5 paid
        due_date: new Date('2026-08-30')
    }));

    // Additional bill for praktikum
    const praktikumBills = students.slice(0, 6).map(s => ({
        tenant_id: tenantId,
        student_id: s.id,
        title: 'Biaya Praktikum Komputer',
        amount: 500000,
        is_paid: true,
        due_date: new Date('2026-02-15')
    }));

    await prisma.financial_bills.createMany({
        data: [...billData, ...praktikumBills],
        skipDuplicates: true
    });
    console.log(`Financial Bills Ready (${billData.length + praktikumBills.length} bills).`);

    // ═══════════════════════════════════════════
    // 7. ANNOUNCEMENTS (5)
    // ═══════════════════════════════════════════
    const announcements = [
        { title: 'Selamat Datang di Portal AMIK-YPAT', content: 'Gunakan portal ini untuk KRS, melihat nilai, dan perkuliahan online.', type: 'general' },
        { title: 'Jadwal UTS Semester Ganjil 2026', content: 'UTS akan dilaksanakan pada tanggal 15-22 Oktober 2026. Pastikan kartu ujian sudah dicetak.', type: 'academic' },
        { title: 'Workshop Cloud Computing', content: 'Workshop gratis bagi mahasiswa aktif pada Sabtu, 20 Maret 2026 di Lab 3.', type: 'event' },
        { title: 'Pembayaran SPP Semester Ganjil', content: 'Batas pembayaran SPP semester ganjil 2026 adalah 30 Agustus 2026.', type: 'financial' },
        { title: 'Perubahan Jadwal Kuliah Pengganti', content: 'Kuliah Basis Data dipindahkan ke hari Selasa jam 10.00 WIB mulai minggu depan.', type: 'academic' },
    ];

    for (const a of announcements) {
        await prisma.announcements.create({
            data: {
                tenant_id: tenantId,
                title: a.title,
                content: a.content,
                type: a.type
            }
        });
    }
    console.log(`${announcements.length} Announcements Ready.`);

    console.log('Academic Seeding Completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
