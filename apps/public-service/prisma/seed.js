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
        { key: 'address', value: 'Jl. Veteran No. 156, Purwakarta, Jawa Barat', category: 'contact' },
        { key: 'director_name', value: 'Dr. H. Ahmad Fauzi, M.Kom.', category: 'identity' },
        { key: 'director_title', value: 'Direktur AMIK-YPAT', category: 'identity' }
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
                description: 'Membangun Karir di Bidang Teknologi Informasi.',
                image_url: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop',
                order_index: 1
            },
            {
                tenant_id: tenantId,
                title: 'Pendaftaran Mahasiswa Baru 2026',
                description: 'Gelombang II Telah Dibuka! Bergabunglah Bersama Kami.',
                image_url: 'https://images.unsplash.com/photo-1523050853064-850c9f1c7d2c?q=80&w=2070&auto=format&fit=crop',
                order_index: 2
            },
            {
                tenant_id: tenantId,
                title: 'Laboratorium Modern',
                description: 'Fasilitas lab komputer terbaru untuk menunjang pembelajaran.',
                image_url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop',
                order_index: 3
            },
            {
                tenant_id: tenantId,
                title: 'Wisuda Angkatan 2025',
                description: 'Selamat dan sukses untuk para wisudawan/wisudawati AMIK-YPAT.',
                image_url: 'https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop',
                order_index: 4
            }
        ],
        skipDuplicates: true
    });
    console.log('Sliders Ready.');

    // ═══════════════════════════════════════════
    // 3. PAGES (existing + keep)
    // ═══════════════════════════════════════════
    const pages = [
        { title: 'Tentang AMIK-YPAT', slug: 'tentang-kami', content: '<h2>Sejarah AMIK-YPAT</h2><p>AMIK-YPAT didirikan untuk menjawab tantangan industri komputer di Purwakarta. Sejak tahun 1990, kampus ini telah meluluskan ribuan alumni yang berkarir di bidang teknologi informasi.</p>', menu: 'Profil' },
        { title: 'Visi & Misi', slug: 'visi-misi', content: '<h3>Visi</h3><p>Menjadi perguruan tinggi vokasi unggulan di bidang informatika dan komputer.</p><h3>Misi</h3><ul><li>Menyelenggarakan pendidikan vokasi berkualitas</li><li>Melakukan penelitian terapan yang inovatif</li><li>Mengembangkan kerja sama dengan dunia industri</li></ul>', menu: 'Profil' },
        { title: 'Fasilitas Kampus', slug: 'fasilitas', content: '<p>Laboratorium Komputer, Perpustakaan Digital, Ruang Kelas AC, WiFi Kampus, dan Auditorium.</p>', menu: 'Profil' },
        { title: 'Kurikulum', slug: 'kurikulum', content: '<h2>Kurikulum Berbasis Kompetensi</h2><p>Kurikulum dirancang sesuai kebutuhan industri IT dengan fokus pada pemrograman, jaringan, dan sistem informasi.</p>', menu: 'Akademik' },
        { title: 'Biaya Kuliah', slug: 'biaya-kuliah', content: '<h2>Informasi Biaya</h2><p>SPP per semester: Rp 2.500.000. Biaya praktikum: Rp 500.000. Biaya pendaftaran: Rp 250.000.</p>', menu: 'Akademik' },
    ];

    for (const p of pages) {
        await prisma.public_pages.upsert({
            where: { tenant_id_slug: { tenant_id: tenantId, slug: p.slug } },
            update: { title: p.title, content: p.content, parent_menu: p.menu },
            create: { tenant_id: tenantId, title: p.title, slug: p.slug, content: p.content, parent_menu: p.menu, is_active: true }
        });
    }
    console.log('Pages Ready.');

    // ═══════════════════════════════════════════
    // 4. POSTS / BERITA (6)
    // ═══════════════════════════════════════════
    const posts = [
        {
            title: 'Workshop Cloud Computing 2026',
            slug: 'workshop-cloud-2026',
            content: 'Mahasiswa AMIK-YPAT mengikuti pelatihan teknologi cloud terbaru bersama praktisi dari AWS dan Google Cloud. Workshop berlangsung selama 3 hari di Lab 3.',
            category: 'Berita',
            image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
            is_pinned: true
        },
        {
            title: 'Pendaftaran Mahasiswa Baru Gelombang II',
            slug: 'pmb-gelombang-2-2026',
            content: 'Pendaftaran mahasiswa baru gelombang II AMIK-YPAT tahun ajaran 2026/2027 telah resmi dibuka. Daftar sekarang dan dapatkan potongan biaya pendaftaran.',
            category: 'Pengumuman',
            image_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop',
            is_pinned: true
        },
        {
            title: 'Wisuda Periode Maret 2026',
            slug: 'wisuda-maret-2026',
            content: 'Selamat kepada 125 wisudawan/wisudawati yang telah menyelesaikan studi. Wisuda dilaksanakan di Gedung Serbaguna YPAT pada 15 Maret 2026.',
            category: 'Berita',
            image_url: 'https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=1974&auto=format&fit=crop'
        },
        {
            title: 'Kompetisi Hackathon Nasional',
            slug: 'hackathon-nasional-2026',
            content: 'Tim mahasiswa AMIK-YPAT berhasil meraih juara 3 dalam Hackathon Nasional 2026 yang diselenggarakan oleh Kemenristekdikti. Selamat!',
            category: 'Prestasi',
            image_url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Kerja Sama dengan PT Telkom Indonesia',
            slug: 'kerjasama-telkom-2026',
            content: 'AMIK-YPAT menandatangani MoU dengan PT Telkom Indonesia untuk program magang dan rekrutmen langsung bagi lulusan terbaik.',
            category: 'Berita',
            image_url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
        },
        {
            title: 'Beasiswa Prestasi Semester Ganjil 2026',
            slug: 'beasiswa-prestasi-2026',
            content: 'Pengumuman penerima beasiswa prestasi semester ganjil 2026. Mahasiswa dengan IPK >= 3.5 berhak mendapatkan potongan SPP 50%.',
            category: 'Pengumuman',
            image_url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop'
        }
    ];

    for (const p of posts) {
        await prisma.public_posts.upsert({
            where: { tenant_id_slug: { tenant_id: tenantId, slug: p.slug } },
            update: { title: p.title, content: p.content, category: p.category, image_url: p.image_url, is_pinned: p.is_pinned || false },
            create: {
                tenant_id: tenantId,
                title: p.title,
                slug: p.slug,
                content: p.content,
                category: p.category,
                image_url: p.image_url,
                is_pinned: p.is_pinned || false,
                is_active: true
            }
        });
    }
    console.log(`${posts.length} Posts Ready.`);

    // ═══════════════════════════════════════════
    // 5. AGENDAS (5)
    // ═══════════════════════════════════════════
    const agendas = [
        { title: 'Ujian Tengah Semester (UTS)', description: 'UTS Semester Ganjil 2026 untuk semua program studi.', date: new Date('2026-10-15'), location: 'Gedung Utama' },
        { title: 'Workshop Cyber Security', description: 'Pelatihan keamanan siber untuk mahasiswa semester 5.', date: new Date('2026-09-20'), location: 'Lab 2', is_pinned: true },
        { title: 'Seminar Entrepreneurship', description: 'Seminar kewirausahaan bersama alumni sukses AMIK-YPAT.', date: new Date('2026-11-05'), location: 'Auditorium' },
        { title: 'Ujian Akhir Semester (UAS)', description: 'UAS Semester Ganjil 2026 untuk semua program studi.', date: new Date('2026-12-10'), location: 'Gedung Utama' },
        { title: 'Dies Natalis AMIK-YPAT ke-36', description: 'Perayaan ulang tahun kampus dengan berbagai lomba dan acara budaya.', date: new Date('2026-08-17'), location: 'Lapangan Kampus', is_pinned: true },
    ];

    for (const a of agendas) {
        await prisma.public_agendas.create({
            data: {
                tenant_id: tenantId,
                title: a.title,
                description: a.description,
                date: a.date,
                location: a.location,
                is_pinned: a.is_pinned || false
            }
        });
    }
    console.log(`${agendas.length} Agendas Ready.`);

    // ═══════════════════════════════════════════
    // 6. LINKS (5)
    // ═══════════════════════════════════════════
    await prisma.public_links.createMany({
        data: [
            { tenant_id: tenantId, title: 'SIAKAD', url: '/siakad', order_index: 1 },
            { tenant_id: tenantId, title: 'LMS', url: '/lms', order_index: 2 },
            { tenant_id: tenantId, title: 'Perpustakaan Digital', url: 'https://lib.ypat.ac.id', order_index: 3 },
            { tenant_id: tenantId, title: 'E-Journal', url: 'https://journal.ypat.ac.id', order_index: 4 },
            { tenant_id: tenantId, title: 'Tracer Study', url: 'https://tracer.ypat.ac.id', order_index: 5 },
        ],
        skipDuplicates: true
    });
    console.log('Links Ready.');

    // ═══════════════════════════════════════════
    // 7. VIDEOS (3)
    // ═══════════════════════════════════════════
    await prisma.public_videos.createMany({
        data: [
            { tenant_id: tenantId, title: 'Profil Kampus AMIK-YPAT 2026', youtube_id: 'dQw4w9WgXcQ', order_index: 1 },
            { tenant_id: tenantId, title: 'Testimoni Alumni Sukses', youtube_id: 'ScMzIvxBSi4', order_index: 2 },
            { tenant_id: tenantId, title: 'Virtual Tour Kampus', youtube_id: 'jNQXAC9IVRw', order_index: 3 },
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
