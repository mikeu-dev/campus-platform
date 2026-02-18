-- Admission (PMB) Service Schema

CREATE TABLE IF NOT EXISTS pmb_periods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    name VARCHAR(100) NOT NULL, -- Gelombang 1, Jalur Prestasi 2026, etc
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pmb_prodis (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    name VARCHAR(255) NOT NULL,
    faculty VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pmb_applicants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tenant_id UUID NOT NULL,
    period_id UUID REFERENCES pmb_periods(id),
    registration_number VARCHAR(20) UNIQUE NOT NULL, -- PMB2026-XXXXX
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    identity_number VARCHAR(50), -- NIK
    address TEXT,
    birth_place VARCHAR(100),
    birth_date DATE,
    gender VARCHAR(10),
    religion VARCHAR(20),
    previous_school VARCHAR(255),
    first_choice_prodi_id UUID, -- References prodi in academic service
    second_choice_prodi_id UUID,
    status VARCHAR(20) DEFAULT 'REGISTERED', -- REGISTERED, VERIFIED, REJECTED, PASSED, FAILED
    selection_score DECIMAL(10,2),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS pmb_documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    applicant_id UUID REFERENCES pmb_applicants(id) ON DELETE CASCADE,
    document_type VARCHAR(50) NOT NULL, -- Ijazah, KTP, Foto, Sertifikat, etc
    file_url TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, APPROVED, REJECTED
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_pmb_applicants_tenant ON pmb_applicants(tenant_id);
CREATE INDEX idx_pmb_applicants_reg_num ON pmb_applicants(registration_number);
CREATE INDEX idx_pmb_applicants_status ON pmb_applicants(status);
