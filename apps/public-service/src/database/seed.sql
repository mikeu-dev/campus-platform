-- Navbar Content Seed
-- Replace '00000000-0000-0000-0000-000000000000' with actual tenant_id if different

INSERT INTO public_pages (tenant_id, title, slug, content, parent_menu, order_index) VALUES
-- Profil
('00000000-0000-0000-0000-000000000000', 'Sambutan Direktur', 'sambutan-direktur', '<div class="prose max-w-none"><h1>Sambutan Direktur</h1><p>Selamat datang di platform platform kami...</p></div>', 'Profil', 1),
('00000000-0000-0000-0000-000000000000', 'Sejarah', 'sejarah', '<div class="prose max-w-none"><h1>Sejarah</h1><p>Kampus ini didirikan pada tahun...</p></div>', 'Profil', 2),
('00000000-0000-0000-0000-000000000000', 'Visi Misi', 'visi-misi', '<div class="prose max-w-none"><h1>Visi & Misi</h1><h2>Visi</h2><p>Menjadi pusat unggulan...</p><h2>Misi</h2><ul><li>Menyelenggarakan pendidikan berkualitas</li><li>Melakukan penelitian inovatif</li></ul></div>', 'Profil', 3),
('00000000-0000-0000-0000-000000000000', 'Struktur Organisasi', 'struktur-organisasi', '<div class="prose max-w-none"><h1>Struktur Organisasi</h1><p>Berikut adalah bagan organisasi kami...</p></div>', 'Profil', 4),
('00000000-0000-0000-0000-000000000000', 'Fasilitas', 'fasilitas', '<div class="prose max-w-none"><h1>Fasilitas Kampus</h1><p>Kami menyediakan fasilitas modern untuk mendukung belajar mengajar...</p></div>', 'Profil', 5),

-- Akademik
('00000000-0000-0000-0000-000000000000', 'Kurikulum', 'kurikulum', '<div class="prose max-w-none"><h1>Kurikulum</h1><p>Detail kurikulum berbasis kompetensi...</p></div>', 'Akademik', 1),
('00000000-0000-0000-0000-000000000000', 'Mata Kuliah', 'mata-kuliah', '<div class="prose max-w-none"><h1>Daftar Mata Kuliah</h1><p>Berikut adalah daftar mata kuliah yang ditawarkan...</p></div>', 'Akademik', 2),
('00000000-0000-0000-0000-000000000000', 'Biaya Kuliah', 'biaya-kuliah', '<div class="prose max-w-none"><h1>Informasi Biaya Kuliah</h1><p>Rincian biaya pendidikan tahun ajaran 2026/2027...</p></div>', 'Akademik', 3),
('00000000-0000-0000-0000-000000000000', 'Agenda', 'agenda', '<div class="prose max-w-none"><h1>Agenda Kampus</h1><p>Kalender kegiatan akademik dan non-akademik...</p></div>', 'Akademik', 4),

-- Prodi
('00000000-0000-0000-0000-000000000000', 'Mengenal Prodi', 'mengenal-prodi', '<div class="prose max-w-none"><h1>Mengenal Program Studi</h1><p>Penjelasan mengenai program studi yang tersedia...</p></div>', 'Prodi', 1),
('00000000-0000-0000-0000-000000000000', 'Staff Pengajar', 'staff-pengajar', '<div class="prose max-w-none"><h1>Staff Pengajar</h1><p>Dosen-dosen ahli kami...</p></div>', 'Prodi', 2),

-- Riset dan Publikasi
('00000000-0000-0000-0000-000000000000', 'Informasi Riset', 'informasi-riset', '<div class="prose max-w-none"><h1>Informasi Riset</h1><p>Bidang fokus penelitian kampus...</p></div>', 'Riset', 1),
('00000000-0000-0000-0000-000000000000', 'Prosedur Riset', 'prosedur-riset', '<div class="prose max-w-none"><h1>Prosedur Penelitian</h1><p>Panduan pengajuan hibah penelitian...</p></div>', 'Riset', 2),
('00000000-0000-0000-0000-000000000000', 'Jurnal Riset', 'jurnal-riset', '<div class="prose max-w-none"><h1>Jurnal Riset</h1><p>Publikasi ilmiah terindeks...</p></div>', 'Riset', 3),

-- Penerimaan
('00000000-0000-0000-0000-000000000000', 'Penerimaan Mahasiswa Baru', 'penerimaan-mahasiswa-baru', '<div class="prose max-w-none"><h1>Penerimaan Mahasiswa Baru (PMB)</h1><p>Informasi pendaftaran mahasiswa baru tahun 2026...</p></div>', 'Penerimaan', 1),
('00000000-0000-0000-0000-000000000000', 'Penerimaan Beasiswa', 'penerimaan-beasiswa', '<div class="prose max-w-none"><h1>Informasi Beasiswa</h1><p>Kesempatan beasiswa prestasi dan bantuan biaya...</p></div>', 'Penerimaan', 2),
('00000000-0000-0000-0000-000000000000', 'Penerimaan Penghargaan', 'penerimaan-penghargaan', '<div class="prose max-w-none"><h1>Penerimaan Penghargaan</h1><p>Apresiasi atas prestasi akademik dan non-akademik...</p></div>', 'Penerimaan', 3)
ON CONFLICT (tenant_id, slug) DO UPDATE SET
    title = EXCLUDED.title,
    content = EXCLUDED.content,
    parent_menu = EXCLUDED.parent_menu,
    order_index = EXCLUDED.order_index;
