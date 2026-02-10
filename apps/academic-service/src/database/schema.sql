-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Students Table
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  user_id UUID NOT NULL, -- Reference to Identity Service User
  platform_student_number VARCHAR(50), -- Optional: Platform-wide Unique ID
  name VARCHAR(255) NOT NULL,
  status VARCHAR(50) DEFAULT 'active', -- active, graduated, dropout, leave
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  photo_url VARCHAR(255),
  
  -- Academic Details
  study_program VARCHAR(100), -- Prodi
  current_semester INT DEFAULT 1,
  class_program VARCHAR(50), -- Reguler, Ekstensi
  entry_year INT,
  entry_path VARCHAR(50), -- SBMPTN, Mandiri
  entry_batch VARCHAR(20), -- Gelombang 1
  academic_group VARCHAR(50), -- Kelas A, B
  academic_advisor VARCHAR(100), -- Name of advisor
  
  UNIQUE(tenant_id, user_id)
);

-- Lecturers Table
CREATE TABLE IF NOT EXISTS lecturers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  user_id UUID NOT NULL, -- Reference to Identity Service User
  platform_lecturer_number VARCHAR(50),
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(tenant_id, user_id)
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  code VARCHAR(50) NOT NULL,
  name VARCHAR(255) NOT NULL,
  credits INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(tenant_id, code)
);

-- Classes Table
CREATE TABLE IF NOT EXISTS classes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  lecturer_id UUID REFERENCES lecturers(id) ON DELETE SET NULL,
  semester VARCHAR(20) NOT NULL, -- e.g., '2023-1', 'ODD-2023'
  year INT NOT NULL,
  capacity INT DEFAULT 40,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(tenant_id, course_id, semester, year) -- One class per course per semester (simplified)
);

-- Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  status VARCHAR(20) DEFAULT 'enrolled', -- enrolled, dropped, completed
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id, class_id)
);

-- Grades Table
CREATE TABLE IF NOT EXISTS grades (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  enrollment_id UUID NOT NULL REFERENCES enrollments(id) ON DELETE CASCADE,
  grade VARCHAR(5), -- A, B, C, D, E
  score FLOAT,      -- 0-100
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Class Schedules Table
CREATE TABLE IF NOT EXISTS class_schedules (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  day VARCHAR(20) NOT NULL, -- Monday, Tuesday, etc.
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  room VARCHAR(100),
  type VARCHAR(50) DEFAULT 'offline', -- offline, online, hybrid
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Exams Table
CREATE TABLE IF NOT EXISTS exams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  type VARCHAR(20) NOT NULL, -- UTS, UAS
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  room VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Research Proposals Table
CREATE TABLE IF NOT EXISTS research_proposals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  type VARCHAR(50) NOT NULL, -- Skripsi, PKM, Magang
  description TEXT,
  supervisor_preferred VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending', -- pending, approved, rejected
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certificate Requests Table
CREATE TABLE IF NOT EXISTS certificate_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  type VARCHAR(100) NOT NULL,
  purpose TEXT,
  quantity INT DEFAULT 1,
  notes TEXT,
  status VARCHAR(20) DEFAULT 'pending', -- pending, processing, finished, rejected
  rejection_reason TEXT,
  download_url TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Announcements Table
CREATE TABLE IF NOT EXISTS announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  type VARCHAR(50) DEFAULT 'general', -- general, academic, financial
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Financial Bills Table
CREATE TABLE IF NOT EXISTS financial_bills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  is_paid BOOLEAN DEFAULT FALSE,
  due_date DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Attendances Table
CREATE TABLE IF NOT EXISTS attendances (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  class_id UUID NOT NULL REFERENCES classes(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  meeting_number INT NOT NULL, -- 1-16
  status VARCHAR(20) DEFAULT 'alfa', -- hadir, alfa, izin, sakit
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(class_id, student_id, meeting_number)
);


-- Student Profiles Table (Detailed Bios)
CREATE TABLE IF NOT EXISTS student_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tenant_id UUID NOT NULL,
  student_id UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  
  -- General
  gender VARCHAR(20), -- Laki-laki, Perempuan
  place_of_birth VARCHAR(100),
  date_of_birth DATE,
  religion VARCHAR(50),
  phone_1 VARCHAR(20),
  phone_2 VARCHAR(20),
  whatsapp VARCHAR(20),

  -- Job
  job_status VARCHAR(50), -- Bekerja, Tidak Bekerja
  company_name VARCHAR(255),
  job_start_year INT,
  income_range VARCHAR(100), -- < 1M, 1M-5M, etc.

  -- Domicile (KTP)
  ktp_province VARCHAR(100),
  ktp_city VARCHAR(100),
  ktp_district VARCHAR(100), -- Kecamatan
  ktp_subdistrict VARCHAR(100), -- Kelurahan
  ktp_rt VARCHAR(10),
  ktp_rw VARCHAR(10),
  ktp_postal_code VARCHAR(10),
  ktp_address TEXT,

  -- Domicile (Current)
  current_province VARCHAR(100),
  current_city VARCHAR(100),
  current_district VARCHAR(100),
  current_subdistrict VARCHAR(100),
  current_rt VARCHAR(10),
  current_rw VARCHAR(10),
  current_postal_code VARCHAR(10),
  current_address TEXT,

  -- Citizenship
  citizenship VARCHAR(50), -- WNI, WNA
  nik VARCHAR(20),
  kk_number VARCHAR(20),
  living_status VARCHAR(50), -- Hidup, Meninggal

  -- Parents (Father)
  father_nik VARCHAR(20),
  father_name VARCHAR(255),
  father_living_status VARCHAR(50),
  father_phone VARCHAR(20),
  father_place_of_birth VARCHAR(100),
  father_date_of_birth DATE,
  father_religion VARCHAR(50),
  father_job VARCHAR(100),
  father_income_range VARCHAR(100),
  father_address TEXT,

  -- Parents (Mother)
  mother_nik VARCHAR(20),
  mother_name VARCHAR(255),
  mother_living_status VARCHAR(50),
  mother_phone VARCHAR(20),
  mother_place_of_birth VARCHAR(100),
  mother_date_of_birth DATE,
  mother_religion VARCHAR(50),
  mother_job VARCHAR(100),
  mother_income_range VARCHAR(100),
  mother_address TEXT,

  -- School Origin
  school_name VARCHAR(255),
  school_major VARCHAR(100), -- IPA, IPS, SMK TKJ, etc.
  nisn VARCHAR(20),
  diploma_number VARCHAR(50),
  graduation_year INT,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(student_id)
);
