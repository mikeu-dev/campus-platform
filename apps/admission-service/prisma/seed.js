require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

    console.log('Seeding AMIK-YPAT PURWAKARTA Admission Data...');

    // ═══════════════════════════════════════════
    // 1. PMB PERIODS (2 gelombang)
    // ═══════════════════════════════════════════
    const periods = [
        {
            name: 'Gelombang I - Jalur Nilai Rapor',
            start_date: new Date('2026-01-01'),
            end_date: new Date('2026-03-31'),
            description: 'Pendaftaran gelombang pertama menggunakan nilai rapor semester 1-5.',
            is_active: false
        },
        {
            name: 'Gelombang II - Jalur Reguler',
            start_date: new Date('2026-04-01'),
            end_date: new Date('2026-06-30'),
            description: 'Pendaftaran gelombang kedua melalui tes seleksi berbasis komputer.',
            is_active: true
        }
    ];

    const periodIds = [];
    for (const p of periods) {
        const period = await prisma.pmb_periods.create({
            data: {
                tenant_id: tenantId,
                name: p.name,
                start_date: p.start_date,
                end_date: p.end_date,
                description: p.description,
                is_active: p.is_active
            }
        });
        periodIds.push(period.id);
        console.log(`Period '${p.name}' Ready.`);
    }

    // ═══════════════════════════════════════════
    // 2. PMB PRODIS (8 program studi)
    // ═══════════════════════════════════════════
    const prodis = [
        { name: 'Manajemen Informatika dan Komputer (D3)', faculty: 'Akademi Manajemen Informatika dan Komputer' },
        { name: 'Teknik Informatika', faculty: 'Fakultas Teknik' },
        { name: 'Sistem Informasi', faculty: 'Fakultas Ilmu Komputer' },
        { name: 'Manajemen', faculty: 'Fakultas Ekonomi' },
        { name: 'Akuntansi', faculty: 'Fakultas Ekonomi' },
        { name: 'Hukum', faculty: 'Fakultas Hukum' },
        { name: 'Psikologi', faculty: 'Fakultas Psikologi' },
        { name: 'Ilmu Komunikasi', faculty: 'Fakultas Ilmu Sosial' },
    ];

    const prodiIds = [];
    for (const p of prodis) {
        const prodi = await prisma.pmb_prodis.create({
            data: {
                tenant_id: tenantId,
                name: p.name,
                faculty: p.faculty,
                is_active: true
            }
        });
        prodiIds.push(prodi.id);
    }
    console.log(`${prodis.length} Prodis Ready.`);

    // ═══════════════════════════════════════════
    // 3. PMB APPLICANTS (15 pendaftar)
    // ═══════════════════════════════════════════
    const applicants = [
        { name: 'Ahmad Zulfikar', email: 'ahmad.zulfikar@gmail.com', phone: '081234567001', gender: 'Laki-laki', school: 'SMAN 1 Purwakarta', status: 'PENDING', score: null, period: 1 },
        { name: 'Putri Rahayu', email: 'putri.rahayu@gmail.com', phone: '081234567002', gender: 'Perempuan', school: 'SMAN 2 Purwakarta', status: 'PASSED', score: 85.50, period: 0 },
        { name: 'Dimas Prasetyo', email: 'dimas.p@gmail.com', phone: '081234567003', gender: 'Laki-laki', school: 'SMKN 1 Purwakarta', status: 'PASSED', score: 78.00, period: 0 },
        { name: 'Sari Indah Lestari', email: 'sari.indah@gmail.com', phone: '081234567004', gender: 'Perempuan', school: 'SMAN 3 Purwakarta', status: 'REJECTED', score: 42.00, period: 0 },
        { name: 'Riko Fadhilah', email: 'riko.f@gmail.com', phone: '081234567005', gender: 'Laki-laki', school: 'SMAN 1 Subang', status: 'PENDING', score: null, period: 1 },
        { name: 'Lina Marlina', email: 'lina.m@gmail.com', phone: '081234567006', gender: 'Perempuan', school: 'SMKN 2 Purwakarta', status: 'PASSED', score: 91.25, period: 0 },
        { name: 'Fajar Nugroho', email: 'fajar.n@gmail.com', phone: '081234567007', gender: 'Laki-laki', school: 'SMAN 4 Purwakarta', status: 'PENDING', score: null, period: 1 },
        { name: 'Anisa Fitria', email: 'anisa.f@gmail.com', phone: '081234567008', gender: 'Perempuan', school: 'SMA PGRI Purwakarta', status: 'PASSED', score: 72.75, period: 0 },
        { name: 'Bayu Saputra', email: 'bayu.s@gmail.com', phone: '081234567009', gender: 'Laki-laki', school: 'SMKN 3 Purwakarta', status: 'REJECTED', score: 35.00, period: 0 },
        { name: 'Citra Dewi', email: 'citra.d@gmail.com', phone: '081234567010', gender: 'Perempuan', school: 'SMAN 1 Karawang', status: 'PENDING', score: null, period: 1 },
        { name: 'Eko Prasetyo', email: 'eko.p@gmail.com', phone: '081234567011', gender: 'Laki-laki', school: 'SMAN 2 Subang', status: 'PASSED', score: 88.50, period: 0 },
        { name: 'Gita Puspita', email: 'gita.p@gmail.com', phone: '081234567012', gender: 'Perempuan', school: 'SMKN 1 Karawang', status: 'PENDING', score: null, period: 1 },
        { name: 'Irfan Hakim', email: 'irfan.h@gmail.com', phone: '081234567013', gender: 'Laki-laki', school: 'MAN 1 Purwakarta', status: 'PASSED', score: 80.00, period: 0 },
        { name: 'Kartika Sari', email: 'kartika.s@gmail.com', phone: '081234567014', gender: 'Perempuan', school: 'SMAN 5 Purwakarta', status: 'REJECTED', score: 48.50, period: 0 },
        { name: 'Muhammad Rizal', email: 'mrizal@gmail.com', phone: '081234567015', gender: 'Laki-laki', school: 'SMKN 4 Purwakarta', status: 'PENDING', score: null, period: 1 },
    ];

    let regNumber = 2026001;
    for (const a of applicants) {
        const prodIdx1 = Math.floor(Math.random() * prodiIds.length);
        let prodIdx2 = Math.floor(Math.random() * prodiIds.length);
        while (prodIdx2 === prodIdx1) prodIdx2 = Math.floor(Math.random() * prodiIds.length);

        await prisma.pmb_applicants.create({
            data: {
                tenant_id: tenantId,
                period_id: periodIds[a.period],
                registration_number: `PMB${regNumber++}`,
                full_name: a.name,
                email: a.email,
                phone_number: a.phone,
                gender: a.gender,
                previous_school: a.school,
                birth_place: 'Purwakarta',
                birth_date: new Date(`200${Math.floor(Math.random() * 9)}-${String(Math.floor(Math.random() * 12) + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 28) + 1).padStart(2, '0')}`),
                religion: 'Islam',
                first_choice_prodi_id: prodiIds[prodIdx1],
                second_choice_prodi_id: prodiIds[prodIdx2],
                status: a.status,
                selection_score: a.score
            }
        });
    }
    console.log(`${applicants.length} Applicants Ready.`);

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
