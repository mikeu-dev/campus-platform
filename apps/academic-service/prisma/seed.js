require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';
    const lecturerUserId = 'b2222222-2222-2222-2222-222222222222';
    const studentUserId = 'c3333333-3333-3333-3333-333333333333';

    console.log('Seeding AMIK-YPAT PURWAKARTA Academic Data...');

    // 1. Create Lecturer
    const lecturer = await prisma.lecturers.upsert({
        where: { tenant_id_user_id: { tenant_id: tenantId, user_id: lecturerUserId } },
        update: { name: 'Dosen Informatika YPAT' },
        create: {
            tenant_id: tenantId,
            user_id: lecturerUserId,
            name: 'Dosen Informatika YPAT',
            platform_lecturer_number: 'LP001'
        }
    });
    console.log('Lecturer Ready.');

    // 2. Create Student
    const student = await prisma.students.upsert({
        where: { tenant_id_user_id: { tenant_id: tenantId, user_id: studentUserId } },
        update: {
            name: 'Budi Mahasiswa',
            study_program: 'Manajemen Informatika dan Komputer (D3)',
            entry_year: 2024
        },
        create: {
            tenant_id: tenantId,
            user_id: studentUserId,
            name: 'Budi Mahasiswa',
            study_program: 'Manajemen Informatika dan Komputer (D3)',
            entry_year: 2024,
            platform_student_number: '24001',
            status: 'active'
        }
    });
    console.log('Student Ready.');

    // 3. Create Courses
    const coursesToSeed = [
        { code: 'MI101', name: 'Dasar-dasar Komputer', credits: 3 },
        { code: 'MI102', name: 'Algoritma & Pemrograman', credits: 4 },
        { code: 'MI201', name: 'Sistem Operasi', credits: 3 },
        { code: 'MI202', name: 'Basis Data', credits: 3 }
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

    // 4. Create Classes for Current Year (2026)
    const currentYear = 2026;
    const semester = 'Ganjil';
    const classMap = {};

    for (const code in courseMap) {
        let classId = undefined;
        if (code === 'MI101') classId = 'c1c1c1c1-1111-1111-1111-111111111111';

        const cls = await prisma.classes.upsert({
            where: {
                tenant_id_course_id_semester_year: {
                    tenant_id: tenantId,
                    course_id: courseMap[code],
                    semester,
                    year: currentYear
                }
            },
            update: { lecturer_id: lecturer.id },
            create: {
                id: classId,
                tenant_id: tenantId,
                course_id: courseMap[code],
                lecturer_id: lecturer.id,
                semester,
                year: currentYear,
                capacity: 40
            }
        });
        classMap[code] = cls.id;
        console.log(`Class for '${code}' Ready.`);
    }

    // 5. Enroll Student to All Classes
    for (const code in classMap) {
        await prisma.enrollments.upsert({
            where: {
                student_id_class_id: {
                    student_id: student.id,
                    class_id: classMap[code]
                }
            },
            update: {},
            create: {
                tenant_id: tenantId,
                student_id: student.id,
                class_id: classMap[code],
                status: 'enrolled'
            }
        });
        console.log(`Student Enrolled to '${code}'.`);
    }

    // 6. Create Financial Bills
    await prisma.financial_bills.createMany({
        data: [
            {
                tenant_id: tenantId,
                student_id: student.id,
                title: 'SPP Semester Ganjil 2026',
                amount: 2500000,
                is_paid: false,
                due_date: new Date('2026-08-30')
            },
            {
                tenant_id: tenantId,
                student_id: student.id,
                title: 'Biaya Praktikum Komputer',
                amount: 500000,
                is_paid: true,
                due_date: new Date('2026-02-15')
            }
        ],
        skipDuplicates: true
    });
    console.log('Financial Bills Ready.');

    // 7. Announcements
    await prisma.announcements.create({
        data: {
            tenant_id: tenantId,
            title: 'Selamat Datang di Portal AMIK-YPAT',
            content: 'Gunakan portal ini untuk KRS, melihat nilai, dan perkuliahan online.',
            type: 'general'
        }
    });

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
