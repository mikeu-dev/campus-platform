const prisma = require('../lib/prisma');
const { z } = require('zod');

const applicantSchema = z.object({
    period_id: z.string().uuid(),
    full_name: z.string().min(1),
    email: z.string().email(),
    phone_number: z.string().optional(),
    identity_number: z.string().optional(),
    address: z.string().optional(),
    birth_place: z.string().optional(),
    birth_date: z.string().optional(), // Keep as string for now, will parse
    gender: z.string().optional(),
    religion: z.string().optional(),
    previous_school: z.string().optional(),
    first_choice_prodi_id: z.string().uuid().optional(),
    second_choice_prodi_id: z.string().uuid().optional(),
});

class ApplicantController {
    async register(req, res, next) {
        try {
            const data = applicantSchema.parse(req.body);
            const tenantId = req.headers['x-tenant-id'] || '00000000-0000-0000-0000-000000000000';

            // Generate registration number: PMB-[YYYY]-[RANDOM]
            const year = new Date().getFullYear();
            const randomStr = Math.random().toString(36).substring(2, 7).toUpperCase();
            const regNumber = `PMB${year}-${randomStr}`;

            const result = await prisma.pmb_applicants.create({
                data: {
                    tenant_id: tenantId,
                    period_id: data.period_id,
                    registration_number: regNumber,
                    full_name: data.full_name,
                    email: data.email,
                    phone_number: data.phone_number,
                    identity_number: data.identity_number,
                    address: data.address,
                    birth_place: data.birth_place,
                    birth_date: data.birth_date ? new Date(data.birth_date) : null,
                    gender: data.gender,
                    religion: data.religion,
                    previous_school: data.previous_school,
                    first_choice_prodi_id: data.first_choice_prodi_id,
                    second_choice_prodi_id: data.second_choice_prodi_id,
                    status: 'REGISTERED'
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getStatus(req, res, next) {
        try {
            const { regNumber } = req.params;
            const result = await prisma.pmb_applicants.findUnique({
                where: { registration_number: regNumber },
                select: {
                    registration_number: true,
                    full_name: true,
                    status: true,
                    created_at: true
                }
            });
            if (!result) return res.status(404).json({ status: 'fail', message: 'Applicant not found' });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const { period_id, status } = req.query;

            const whereClause = { tenant_id: tenantId };
            if (period_id) whereClause.period_id = period_id;
            if (status) whereClause.status = status;

            const result = await prisma.pmb_applicants.findMany({
                where: whereClause,
                orderBy: { created_at: 'desc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const applicant = await prisma.pmb_applicants.findFirst({
                where: { id, tenant_id: tenantId },
                include: {
                    pmb_documents: true
                }
            });

            if (!applicant) return res.status(404).json({ status: 'fail', message: 'Applicant not found' });

            // Fetch prodi names manually since no relation exists in Prisma schema
            let firstChoiceName = null;
            let secondChoiceName = null;

            if (applicant.first_choice_prodi_id) {
                const p1 = await prisma.pmb_prodis.findUnique({ where: { id: applicant.first_choice_prodi_id } });
                if (p1) firstChoiceName = p1.name;
            }
            if (applicant.second_choice_prodi_id) {
                const p2 = await prisma.pmb_prodis.findUnique({ where: { id: applicant.second_choice_prodi_id } });
                if (p2) secondChoiceName = p2.name;
            }

            res.json({
                status: 'success',
                data: {
                    ...applicant,
                    first_choice_prodi_name: firstChoiceName,
                    second_choice_prodi_name: secondChoiceName,
                    documents: applicant.pmb_documents
                }
            });
        } catch (err) { next(err); }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status, selection_score } = req.body;
            const tenantId = req.user.tenant_id;

            const exists = await prisma.pmb_applicants.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!exists) return res.status(404).json({ status: 'fail', message: 'Applicant not found' });

            const applicant = await prisma.pmb_applicants.update({
                where: { id },
                data: {
                    status,
                    selection_score,
                    updated_at: new Date()
                }
            });

            // If status is PASSED, create a user account in identity-service and academic profile
            if (status === 'PASSED') {
                try {
                    const axios = require('axios');
                    const IDENTITY_API = process.env.IDENTITY_API_URL || 'http://localhost:3001';
                    const ACADEMIC_API = process.env.ACADEMIC_API_URL || 'http://localhost:3002';

                    // 1. Create Identity Account
                    const identityRes = await axios.post(`${IDENTITY_API}/auth/users`, {
                        email: applicant.email,
                        fullName: applicant.full_name,
                        password: applicant.identity_number || 'Mahasiswa2026!',
                        roleName: 'student'
                    }, {
                        headers: { Authorization: req.headers.authorization }
                    });

                    const newUser = identityRes.data.data;

                    // 2. Create Academic Student Profile
                    if (newUser && newUser.id) {
                        await axios.post(`${ACADEMIC_API}/api/v1/students`, {
                            user_id: newUser.id,
                            name: applicant.full_name,
                            student_number: applicant.registration_number // Use reg number as temp student number
                        }, {
                            headers: { Authorization: req.headers.authorization }
                        });
                    }
                } catch (err) {
                    console.error('Failed to automate student creation:', err.response?.data || err.message);
                }
            }

            res.json({ status: 'success', data: applicant });
        } catch (err) { next(err); }
    }

    async getStats(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;

            // Using aggregated queries for stats
            const total = await prisma.pmb_applicants.count({ where: { tenant_id: tenantId } });
            const verified = await prisma.pmb_applicants.count({ where: { tenant_id: tenantId, status: 'VERIFIED' } });
            const passed = await prisma.pmb_applicants.count({ where: { tenant_id: tenantId, status: 'PASSED' } });
            const rejected = await prisma.pmb_applicants.count({ where: { tenant_id: tenantId, status: 'REJECTED' } });

            // For byPeriod, we need to join with periods. Since Prisma groupBy with relation is limited,
            // we can fetch periods and count applicants for each, or use raw query.
            // Using raw query for efficient grouping by joined table column
            const byPeriod = await prisma.$queryRaw`
                SELECT p.name, COUNT(a.id)::int as count
                FROM pmb_periods p
                LEFT JOIN pmb_applicants a ON p.id = a.period_id
                WHERE p.tenant_id = ${tenantId}::uuid
                GROUP BY p.name, p.created_at
                ORDER BY p.created_at ASC
            `;

            // Convert BigInt/Decimal to number if necessary (Prisma returns BigInt for count in raw query)
            const sanitizedByPeriod = byPeriod.map(p => ({
                name: p.name,
                count: Number(p.count)
            }));

            res.json({
                status: 'success',
                data: {
                    summary: { total, verified, passed, rejected },
                    byPeriod: sanitizedByPeriod
                }
            });
        } catch (err) { next(err); }
    }
}

module.exports = new ApplicantController();
