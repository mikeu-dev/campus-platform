require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';
    // We need class IDs from academic-service, but for seeder simplicity, 
    // we'll fetch them or use logic based on tenantId if possible.
    // However, since we used Prisma, we can just findMany.

    console.log('Seeding AMIK-YPAT PURWAKARTA Learning Data (LMS)...');

    // Fetch classes (created by academic seeder)
    // Note: In real life, these wouldn't be accessible directly if DBs are separate.
    // But for this demo setup, we'll assume they are accessible or we mock IDs.
    // Actually, each service has its own DB. So learning-service won't see academic-service's DB.
    // However, the academic seeder creates classes with IDs. 
    // Let's assume we can fetch some IDs or we use a fixed class ID for demo.

    // For demo stability, let's use a deterministic ID pattern for one class.
    const demoClassId = 'c1c1c1c1-1111-1111-1111-111111111111'; // Match what academic service might use
    // Actually, academic seeder used upsert with deterministic conditions but not fixed ID.
    // I should have used fixed IDs in academic seeder too for easy cross-referencing.
    // Let me update academic seeder to use fixed IDs for at least one class.

    // For now, let's just create some materials and assignments.
    const materials = [
        {
            title: 'Kontrak Perkuliahan & Silabus',
            content: 'Selamat datang di mata kuliah Dasar-dasar Komputer...',
            type: 'text'
        },
        {
            title: 'Materi 1: Pengenalan Arsitektur Komputer',
            content: 'Pertemuan pertama membahas tentang CPU, RAM, dan Storage.',
            type: 'text'
        }
    ];

    for (const m of materials) {
        await prisma.materials.create({
            data: {
                tenant_id: tenantId,
                class_id: demoClassId,
                title: m.title,
                content: m.content,
                type: m.type
            }
        });
    }

    const assignments = [
        {
            title: 'Tugas 1: Identifikasi Komponen Hardware',
            description: 'Sebutkan dan jelaskan fungsi dari 5 komponen utama motherboard.',
            deadline: new Date('2026-03-01T23:59:59Z')
        }
    ];

    for (const a of assignments) {
        await prisma.assignments.create({
            data: {
                tenant_id: tenantId,
                class_id: demoClassId,
                title: a.title,
                description: a.description,
                deadline: a.deadline
            }
        });
    }

    console.log('Learning Seeding Completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
