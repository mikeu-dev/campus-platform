# Panduan Environment Variables (Produksi)

Gunakan daftar ini sebagai acuan saat mengisi **Environment Variables** di dashboard Vercel masing-masing layanan. Pastikan Anda menyesuaikan URL Database dengan kredensial Supabase Anda.

> [!NOTE]
> Untuk Supabase, gunakan port **6543** (Pooler) untuk `DATABASE_URL` dan port **5432** (Direct) untuk `DIRECT_URL`. Jangan lupa tambahkan `?schema=[nama_service]` di akhir setiap URL.

---

## 1. Portal (Frontend)
Kita akan beralih ke **URL Absolut** untuk menghindari kebingungan rute dan path ganda (`/api/v1/identity/api/v1`).

**Di Environment Variables Vercel (Project Portal):**
Isi Key berikut dengan URL lengkap Vercel. Perhatikan perbedaan akhiran path-nya:

| Key | Contoh Value | Keterangan |
|-----|--------------|------------|
| `PUBLIC_IDENTITY_API_URL` | `https://...vercel.app` | **Satu-satunya yang TANPA `/api/v1`** |
| `PUBLIC_ACADEMIC_API_URL` | `https://...vercel.app/api/v1` | Pakai `/api/v1` |
| `PUBLIC_LEARNING_API_URL` | `https://...vercel.app/api/v1` | Pakai `/api/v1` |
| `PUBLIC_PUBLIC_API_URL` | `https://...vercel.app/api/v1` | Pakai `/api/v1` |
| `PUBLIC_ADMISSION_API_URL` | `https://...vercel.app/api/v1` | Pakai `/api/v1` |

> [!TIP]
> **Konsistensi Local**: Di file `apps/portal/.env` Anda, pastikan URL disesuaikan (Identity tanpa `/api/v1`, yang lain pakai `/api/v1`) agar perilaku local sama persis dengan produksi.

---

## 2. Identity Service
Layanan autentikasi pusat.

| Key | Keterangan |
|-----|------------|
| `DATABASE_URL` | URL Supabase Pooler (Port 6543) `?schema=identity` |
| `DIRECT_URL` | URL Supabase Direct (Port 5432) `?schema=identity` |
| `JWT_SECRET` | Kunci rahasia untuk token JWT (paling rahasia) |
| `NODE_ENV` | `production` |

---

## 3. Academic Service
Layanan data akademik utama.

| Key | Keterangan |
|-----|------------|
| `DATABASE_URL` | URL Supabase Pooler `?schema=academic` |
| `DIRECT_URL` | URL Supabase Direct `?schema=academic` |
| `JWT_SECRET` | Sama dengan Identity Service |
| `IDENTITY_DB_URL` | Sama dengan `DATABASE_URL` milik Identity Service (Cross-Schema akses) |
| `IDENTITY_DIRECT_URL` | Sama dengan `DIRECT_URL` milik Identity Service |
| `NODE_ENV` | `production` |

---

## 4. Admission Service (PMB)
Layanan pendaftaran mahasiswa baru. Layanan ini membutuhkan URL internal service lain.

| Key | Keterangan |
|-----|------------|
| `DATABASE_URL` | URL Supabase Pooler `?schema=admission` |
| `DIRECT_URL` | URL Supabase Direct `?schema=admission` |
| `JWT_SECRET` | Sama dengan Identity Service |
| `IDENTITY_API_URL` | Domain Vercel dari Identity Service |
| `ACADEMIC_API_URL` | Domain Vercel dari Academic Service |
| `NODE_ENV` | `production` |

---

## 5. Learning Service (LMS)
Layanan pembelajaran online. Fitur upload file membutuhkan MinIO/S3.

| Key | Keterangan |
|-----|------------|
| `DATABASE_URL` | URL Supabase Pooler `?schema=learning` |
| `DIRECT_URL` | URL Supabase Direct `?schema=learning` |
| `MINIO_ENDPOINT` | Endpoint S3/MinIO Provider Anda |
| `MINIO_ACCESS_KEY` | Access Key S3 |
| `MINIO_SECRET_KEY` | Secret Key S3 |
| `MINIO_PUBLIC_URL` | URL Publik untuk mendownload file (cdn/domain) |
| `JWT_SECRET` | Sama dengan Identity Service |

---

## 6. Public Service
Layanan informasi publik dan landing page.

| Key | Keterangan |
|-----|------------|
| `DATABASE_URL` | URL Supabase Pooler `?schema=public_info` |
| `DIRECT_URL` | URL Supabase Direct `?schema=public_info` |
| `JWT_SECRET` | Sama dengan Identity Service |
| `NODE_ENV` | `production` |
