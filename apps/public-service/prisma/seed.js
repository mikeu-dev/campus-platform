require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

    console.log('Seeding AMIK-YPAT PURWAKARTA Public Data...');

    // ═══════════════════════════════════════════
    // 1. SETTINGS
    // ═══════════════════════════════════════════
    const settings = [
        { key: 'app_name', value: 'AMIK-YPAT PURWAKARTA', category: 'identity' },
        { key: 'app_suffix', value: 'Kampus Komputer Pertama di Purwakarta', category: 'identity' },
        { key: 'email', value: 'info@ypat.ac.id', category: 'contact' },
        { key: 'phone', value: '(0264) 211xxx', category: 'contact' },
        { key: 'whatsapp', value: '08123456789', category: 'contact' },
        { key: 'address', value: 'Jl. Veteran No. 156, Purwakarta, Jawa Barat', category: 'contact' },
        { key: 'director_name', value: 'Dr. H. Ahmad Fauzi, M.Kom.', category: 'identity' },
        { key: 'director_title', value: 'Direktur AMIK-YPAT', category: 'identity' },
        { key: 'social_facebook', value: 'https://facebook.com/amikypat', category: 'social' },
        { key: 'social_instagram', value: 'https://instagram.com/amikypat', category: 'social' },
        { key: 'social_youtube', value: 'https://youtube.com/amikypat_official', category: 'social' }
    ];

    for (const s of settings) {
        await prisma.public_settings.upsert({
            where: { tenant_id_key: { tenant_id: tenantId, key: s.key } },
            update: { value: s.value, category: s.category },
            create: { tenant_id: tenantId, key: s.key, value: s.value, category: s.category }
        });
    }
    console.log('Settings Ready.');

    // ═══════════════════════════════════════════
    // 2. SLIDERS (4)
    // ═══════════════════════════════════════════
    await prisma.public_sliders.createMany({
        data: [
            {
                tenant_id: tenantId,
                title: 'Selamat Datang di AMIK-YPAT',
                description: 'Membangun Karir Cemerlang di Bidang Teknologi Informasi.',
                image_url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
                order_index: 1
            },
            {
                tenant_id: tenantId,
                title: 'PMB 2026 Gelombang II',
                description: 'Daftar Sekarang! Dapatkan Masa Depan Digital yang Lebih Cerah.',
                image_url: 'https://images.unsplash.com/photo-1523050853064-850c9f1c7d2c?q=80&w=2070&auto=format&fit=crop',
                order_index: 2
            },
            {
                tenant_id: tenantId,
                title: 'Laboratorium & Fasilitas',
                description: 'Fasilitas Lab Komputer Modern untuk Praktek Mahasiswa.',
                image_url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
                order_index: 3
            },
            {
                tenant_id: tenantId,
                title: 'Kampus Digital Purwakarta',
                description: 'Kampus Komputer Pertama dan Terpercaya di Purwakarta.',
                image_url: 'https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop',
                order_index: 4
            }
        ],
        skipDuplicates: true
    });
    console.log('Sliders Ready.');

    // ═══════════════════════════════════════════
    // 3. PAGES (Comprehensive Menu) - Clear first to avoid stale data
    // ═══════════════════════════════════════════
    await prisma.public_pages.deleteMany({ where: { tenant_id: tenantId } });

    const pages = [
        // Profil
        { title: 'Sambutan Direktur', slug: 'sambutan-direktur', content: '<h2>Sambutan Direktur AMIK-YPAT</h2><p>Selamat datang di kampus digital pertama di Purwakarta...</p>', menu: 'Profil', order: 1 },
        { title: 'Sejarah Kampus', slug: 'tentang-kami', content: '<h2>Sejarah AMIK-YPAT</h2><p>Didirikan tahun 1990 sebagai pelopor pendidikan komputer...</p>', menu: 'Profil', order: 2 },
        { title: 'Visi Misi', slug: 'visi-misi', content: '<h3>Visi</h3><p>Menjadi perguruan tinggi vokasi unggulan...</p>', menu: 'Profil', order: 3 },
        { title: 'Struktur Organisasi', slug: 'struktur-organisasi', content: '<h2>Struktur Organisasi</h2><p>Bagan Kepengurusan AMIK-YPAT Purwakarta.</p>', menu: 'Profil', order: 4 },
        { title: 'Fasilitas Kampus', slug: 'fasilitas', content: '<h2>Fasilitas Lengkap</h2><p>Lab Komputer, Perpustakaan, WiFi, Auditorium.</p>', menu: 'Profil', order: 5 },

        // Akademik
        { title: 'Kurikulum', slug: 'kurikulum', content: '<h2>Kurikulum IT Terbaru</h2><p>Materi pembelajaran yang relevan dengan industri.</p>', menu: 'Akademik', order: 1 },
        { title: 'Mata Kuliah', slug: 'mata-kuliah', content: '<h2>Daftar Mata Kuliah</h2><p>Daftar mata kuliah unggulan semester 1-6.</p>', menu: 'Akademik', order: 2 },
        { title: 'Biaya Kuliah', slug: 'biaya-kuliah', content: '<h2>Biaya Terjangkau</h2><p>Rincian biaya SPP dan pendaftaran.</p>', menu: 'Akademik', order: 3 },
        { title: 'Agenda Akademik', slug: 'kalender-academic', content: '<h2>Agenda Akademik</h2><p>Jadwal kuliah semester ganjil/genap.</p>', menu: 'Akademik', order: 4 },

        // Prodi
        { title: 'Mengenal Prodi', slug: 'mengenal-prodi', content: '<h2>Mengenal Program Studi</h2><p>AMIK-YPAT memiliki program studi unggulan di bidang IT yang terakreditasi.</p>', menu: 'Prodi', order: 1 },
        { title: 'Staff Pengajar', slug: 'staff-pengajar', content: '<h2>Staff Pengajar</h2><p>Dosen-dosen profesional dan praktisi di bidang teknologi informasi.</p>', menu: 'Prodi', order: 2 },

        // Riset dan Informasi
        { title: 'Informasi Riset', slug: 'informasi-riset', content: '<h2>Informasi Penelitian</h2><p>Informasi seputar kegiatan riset dosen dan mahasiswa.</p>', menu: 'Riset', order: 1 },
        { title: 'Prosedur Riset', slug: 'prosedur-riset', content: '<h2>Prosedur Penelitian</h2><p>Panduan pelaksanaan penelitian lapangan dan laboratorium.</p>', menu: 'Riset', order: 2 },
        { title: 'Jurnal Riset', slug: 'jurnal', content: '<h2>Jurnal Penelitian</h2><p>Akses ke portal E-Journal AMIK-YPAT.</p>', menu: 'Riset', order: 3 },

        // Penerimaan
        { title: 'Penerimaan Mahasiswa Baru', slug: 'pmb', content: '<h2>Informasi Pendaftaran</h2><p>Pendaftaran mahasiswa baru semester ganjil/genap.</p>', menu: 'Penerimaan', order: 1 },
        { title: 'Penerimaan Beasiswa', slug: 'beasiswa', content: '<h2>Informasi Beasiswa</h2><p>Beasiswa Prestasi, KIP-Kuliah, dan Yayasan.</p>', menu: 'Penerimaan', order: 2 },
        { title: 'Penerimaan Penghargaan', slug: 'penghargaan', content: '<h2>Apresiasi Mahasiswa</h2><p>Penghargaan bagi mahasiswa berprestasi nasional/internasional.</p>', menu: 'Penerimaan', order: 3 },
    ];

    for (const p of pages) {
        await prisma.public_pages.upsert({
            where: { tenant_id_slug: { tenant_id: tenantId, slug: p.slug } },
            update: { title: p.title, content: p.content, parent_menu: p.menu, order_index: p.order },
            create: { tenant_id: tenantId, title: p.title, slug: p.slug, content: p.content, parent_menu: p.menu, order_index: p.order, is_active: true }
        });
    }
    console.log('Pages Ready.');

    // ═══════════════════════════════════════════
    // 4. POSTS / BERITA
    // ═══════════════════════════════════════════
    const posts = [
        { title: 'Workshop Cloud Computing 2026', slug: 'workshop-cloud-2026', content: 'Pelatihan teknologi cloud terbaru...', category: 'Berita', image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', is_pinned: true },
        { title: 'PMB Gelombang II Telah Dibuka', slug: 'pmb-gelombang-2-2026', content: 'Informasi pendaftaran gelombang kedua...', category: 'Pengumuman', image_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop', is_pinned: true },
        { title: 'Wisuda Angkatan XXXV', slug: 'wisuda-35', content: 'Selamat kepada para wisudawan...', category: 'Berita', image_url: 'https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop' },
        { title: 'Juara Hackathon Nasional', slug: 'prestasi-hackathon', content: 'Mahasiswa AMIK-YPAT meraih juara...', category: 'Prestasi', image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop' },
        { title: 'MoU dengan Perusahaan IT Purwakarta', slug: 'mou-it-2026', content: 'Kerja sama penunjang karir lulusan...', category: 'Berita', image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop' },
        { title: 'Pengumuman Beasiswa Prestasi', slug: 'beasiswa-2026', content: 'Daftar penerima beasiswa semester ganjil...', category: 'Pengumuman', image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop' }
    ];

    for (const p of posts) {
        await prisma.public_posts.upsert({
            where: { tenant_id_slug: { tenant_id: tenantId, slug: p.slug } },
            update: { title: p.title, content: p.content, category: p.category, image_url: p.image_url, is_pinned: p.is_pinned || false },
            create: { tenant_id: tenantId, title: p.title, slug: p.slug, content: p.content, category: p.category, image_url: p.image_url, is_pinned: p.is_pinned || false, is_active: true }
        });
    }
    console.log(`${posts.length} Posts Ready.`);

    // ═══════════════════════════════════════════
    // 5. AGENDAS
    // ═══════════════════════════════════════════
    const agendas = [
        { title: 'Ujian Tengah Semester (UTS)', description: 'UTS Semester Ganjil 2026.', date: new Date('2026-10-15'), location: 'Kampus AMIK-YPAT' },
        { title: 'Webinar Cyber Security', description: 'Seminar online keamanan siber.', date: new Date('2026-09-20'), location: 'Zoom Meeting', is_pinned: true },
        { title: 'Industrial Campus Tour', description: 'Kunjungan industri untuk mahasiswa.', date: new Date('2026-11-05'), location: 'PT Telkom' },
        { title: 'Wisuda Angkatan 2026', description: 'Acara wisuda sarjana muda.', date: new Date('2026-08-30'), location: 'Gedung Bale Sawala' },
        { title: 'Lomba Koding Mahasiswa', description: 'Kompetisi internal pemrograman.', date: new Date('2026-12-10'), location: 'Lab Utama', is_pinned: true },
    ];

    for (const a of agendas) {
        await prisma.public_agendas.create({
            data: { tenant_id: tenantId, title: a.title, description: a.description, date: a.date, location: a.location, is_pinned: a.is_pinned || false }
        });
    }
    console.log(`${agendas.length} Agendas Ready.`);

    // ═══════════════════════════════════════════
    // 6. LINKS - Clear first to avoid stale data
    // ═══════════════════════════════════════════
    await prisma.public_links.deleteMany({ where: { tenant_id: tenantId } });

    await prisma.public_links.createMany({
        data: [
            { tenant_id: tenantId, title: 'SIAKAD', url: '/siakad', order_index: 1 },
            { tenant_id: tenantId, title: 'LMS', url: '/lms', order_index: 2 },
            { tenant_id: tenantId, title: 'Pendaftaran Online', url: '/auth/register', order_index: 3 },
            { tenant_id: tenantId, title: 'Library Digital', url: 'https://lib.ypat.ac.id', order_index: 4 },
            { tenant_id: tenantId, title: 'Tracer Study', url: 'https://tracer.ypat.ac.id', order_index: 5 },
            { tenant_id: tenantId, title: 'E-Journal', url: 'https://journal.ypat.ac.id', order_index: 6 },
        ],
        skipDuplicates: true
    });
    console.log('Links Ready.');

    // ═══════════════════════════════════════════
    // 7. VIDEOS
    // ═══════════════════════════════════════════
    await prisma.public_videos.createMany({
        data: [
            { tenant_id: tenantId, title: 'Video Profil AMIK-YPAT', youtube_id: 'dQw4w9WgXcQ', order_index: 1 },
            { tenant_id: tenantId, title: 'Virtual Tour Kampus', youtube_id: 'jNQXAC9IVRw', order_index: 2 },
            { tenant_id: tenantId, title: 'Keseruan Event Mahasiswa', youtube_id: 'ScMzIvxBSi4', order_index: 3 },
        ],
        skipDuplicates: true
    });
    console.log('Videos Ready.');

    console.log('Public Seeding Completed.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
