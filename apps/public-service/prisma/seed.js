require('dotenv').config();
const prisma = require('../src/lib/prisma');

async function main() {
    const tenantId = 'f0015426-1288-4617-be83-3bf153058f89';

    console.log('Seeding AMIK-YPAT PURWAKARTA Public Data...');

    // 1. Settings
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
            create: {
                tenant_id: tenantId,
                key: s.key,
                value: s.value,
                category: s.category
            }
        });
    }
    console.log('Settings Ready.');

    // 2. Sliders
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
                title: 'Pendaftaran Mahasiswa Baru',
                description: 'Gombang 1 Telah Dibuka! Bergabunglah Bersama Kami.',
                image_url: 'https://images.unsplash.com/photo-1523050853064-850c9f1c7d2c?q=80&w=2070&auto=format&fit=crop',
                order_index: 2
            }
        ],
        skipDuplicates: true
    });
    console.log('Sliders Ready.');

    // 3. Pages
    const pages = [
        {
            title: 'Tentang AMIK-YPAT',
            slug: 'tentang-kami',
            content: '<h2>Sejarah AMIK-YPAT</h2><p>AMIK-YPAT didirikan untuk menjawab tantangan industri komputer...</p>',
            menu: 'Profil'
        },
        {
            title: 'Visi & Misi',
            slug: 'visi-misi',
            content: '<h3>Visi</h3><p>Menjadi perguruan tinggi vokasi unggulan...</p>',
            menu: 'Profil'
        },
        {
            title: 'Fasilitas Kampus',
            slug: 'fasilitas',
            content: '<p>Laboratorium Komputer, Perpustakaan Digital, dan Free WiFi.</p>',
            menu: 'Profil'
        }
    ];

    for (const p of pages) {
        await prisma.public_pages.upsert({
            where: { tenant_id_slug: { tenant_id: tenantId, slug: p.slug } },
            update: { title: p.title, content: p.content, parent_menu: p.menu },
            create: {
                tenant_id: tenantId,
                title: p.title,
                slug: p.slug,
                content: p.content,
                parent_menu: p.menu,
                is_active: true
            }
        });
    }
    console.log('Pages Ready.');

    // 4. Posts (Berita)
    await prisma.public_posts.create({
        data: {
            tenant_id: tenantId,
            title: 'Workshop Cloud Computing 2026',
            slug: 'workshop-cloud-2026',
            content: 'Mahasiswa AMIK-YPAT mengikuti pelatihan teknologi awan terbaru...',
            category: 'Berita',
            image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop'
        }
    });

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
