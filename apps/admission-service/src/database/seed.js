const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const tenantId = '00000000-0000-0000-0000-000000000000';

async function seed() {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        console.log('Seeding PMB Periods...');
        const periods = [
            { name: 'Gelombang I - Jalur Nilai Rapor', start: '2026-01-01', end: '2026-03-31', desc: 'Pendaftaran gelombang pertama menggunakan nilai rapor semester 1-5.' },
            { name: 'Gelombang II - Jalur Reguler', start: '2026-04-01', end: '2026-06-30', desc: 'Pendaftaran gelombang kedua melalui tes seleksi berbasis komputer.' },
        ];

        for (const p of periods) {
            await client.query(
                `INSERT INTO pmb_periods (tenant_id, name, start_date, end_date, description, is_active) 
                 VALUES ($1, $2, $3, $4, $5, true) ON CONFLICT DO NOTHING`,
                [tenantId, p.name, p.start, p.end, p.desc]
            );
        }

        console.log('Seeding PMB Study Programs (Prodis)...');
        const prodis = [
            { name: 'Teknik Informatika', faculty: 'Fakultas Teknik' },
            { name: 'Sistem Informasi', faculty: 'Fakultas Ilmu Komputer' },
            { name: 'Manajemen', faculty: 'Fakultas Ekonomi' },
            { name: 'Akuntansi', faculty: 'Fakultas Ekonomi' },
            { name: 'Hukum', faculty: 'Fakultas Hukum' },
            { name: 'Psikologi', faculty: 'Fakultas Psikologi' },
            { name: 'Teknik Sipil', faculty: 'Fakultas Teknik' },
            { name: 'Ilmu Komunikasi', faculty: 'Fakultas Ilmu Sosial' },
        ];

        for (const p of prodis) {
            await client.query(
                `INSERT INTO pmb_prodis (tenant_id, name, faculty, is_active) 
                 VALUES ($1, $2, $3, true)`,
                [tenantId, p.name, p.faculty]
            );
        }

        await client.query('COMMIT');
        console.log('Seeding completed successfully!');
    } catch (e) {
        await client.query('ROLLBACK');
        console.error('Error seeding data:', e);
    } finally {
        client.release();
        await pool.end();
    }
}

seed();
