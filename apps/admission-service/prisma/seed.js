require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

    console.log('Seeding AMIK-YPAT PURWAKARTA Admission Data...');

    // 1. Create PMB Periods
    const period = await prisma.pmb_periods.upsert({
        where: { id: 'd1d1d1d1-1111-1111-1111-111111111111' }, // Fixed ID for seeder
        update: {
            name: 'Penerimaan Mahasiswa Baru 2026/2027',
            start_date: new Date('2026-01-01'),
            end_date: new Date('2026-08-31'),
            is_active: true
        },
        create: {
            id: 'd1d1d1d1-1111-1111-1111-111111111111',
            tenant_id: tenantId,
            name: 'Penerimaan Mahasiswa Baru 2026/2027',
            start_date: new Date('2026-01-01'),
            end_date: new Date('2026-08-31'),
            is_active: true,
            description: 'Gelombang Utama Penerimaan Mahasiswa Baru AMIK-YPAT'
        }
    });
    console.log('PMB Period Ready.');

    // 2. Create Study Programs (Prodis)
    const prodi = await prisma.pmb_prodis.upsert({
        where: { id: 'e1e1e1e1-1111-1111-1111-111111111111' },
        update: {
            name: 'Manajemen Informatika dan Komputer (D3)',
            faculty: 'Teknik dan Informatika'
        },
        create: {
            id: 'e1e1e1e1-1111-1111-1111-111111111111',
            tenant_id: tenantId,
            name: 'Manajemen Informatika dan Komputer (D3)',
            faculty: 'Teknik dan Informatika',
            is_active: true
        }
    });
    console.log('Study Program Ready.');

    // 3. Create Applicants
    const applicants = [
        {
            regNum: 'PMB26001',
            name: 'Ani Martiani',
            email: 'ani@gmail.com',
            status: 'ACCEPTED'
        },
        {
            regNum: 'PMB26002',
            name: 'Budi Santoso',
            email: 'budi@gmail.com',
            status: 'REGISTERED'
        },
        {
            regNum: 'PMB26003',
            name: 'Citra Lestari',
            email: 'citra@gmail.com',
            status: 'VERIFIED'
        }
    ];

    for (const app of applicants) {
        await prisma.pmb_applicants.upsert({
            where: { registration_number: app.regNum },
            update: {
                full_name: app.name,
                email: app.email,
                status: app.status
            },
            create: {
                tenant_id: tenantId,
                period_id: period.id,
                registration_number: app.regNum,
                full_name: app.name,
                email: app.email,
                first_choice_prodi_id: prodi.id,
                status: app.status
            }
        });
        console.log(`Applicant '${app.name}' Ready.`);
    }

    console.log('Admission Seeding Completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
