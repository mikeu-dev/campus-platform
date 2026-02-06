const db = require('../config/db');
const { z } = require('zod');

const applicantSchema = z.object({
    period_id: z.string().uuid(),
    full_name: z.string().min(1),
    email: z.string().email(),
    phone_number: z.string().optional(),
    identity_number: z.string().optional(),
    address: z.string().optional(),
    birth_place: z.string().optional(),
    birth_date: z.string().optional(),
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

            const result = await db.query(
                `INSERT INTO pmb_applicants (
                    tenant_id, period_id, registration_number, full_name, email, 
                    phone_number, identity_number, address, birth_place, birth_date,
                    gender, religion, previous_school, first_choice_prodi_id, second_choice_prodi_id
                ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
                [
                    tenantId, data.period_id, regNumber, data.full_name, data.email,
                    data.phone_number, data.identity_number, data.address, data.birth_place, data.birth_date,
                    data.gender, data.religion, data.previous_school, data.first_choice_prodi_id, data.second_choice_prodi_id
                ]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getStatus(req, res, next) {
        try {
            const { regNumber } = req.params;
            const result = await db.query(
                'SELECT registration_number, full_name, status, created_at FROM pmb_applicants WHERE registration_number = $1',
                [regNumber]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Applicant not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getAll(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const { period_id, status } = req.query;
            let query = 'SELECT * FROM pmb_applicants WHERE tenant_id = $1';
            let params = [tenantId];

            if (period_id) {
                query += ` AND period_id = $${params.length + 1}`;
                params.push(period_id);
            }
            if (status) {
                query += ` AND status = $${params.length + 1}`;
                params.push(status);
            }

            query += ' ORDER BY created_at DESC';
            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getById(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                `SELECT a.*, 
                        p1.name as first_choice_prodi_name, 
                        p2.name as second_choice_prodi_name 
                 FROM pmb_applicants a
                 LEFT JOIN pmb_prodis p1 ON a.first_choice_prodi_id = p1.id
                 LEFT JOIN pmb_prodis p2 ON a.second_choice_prodi_id = p2.id
                 WHERE a.id = $1 AND a.tenant_id = $2`,
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Applicant not found' });

            // Get documents
            const docs = await db.query('SELECT * FROM pmb_documents WHERE applicant_id = $1', [id]);

            res.json({
                status: 'success',
                data: { ...result.rows[0], documents: docs.rows }
            });
        } catch (err) { next(err); }
    }

    async updateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status, selection_score } = req.body;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `UPDATE pmb_applicants SET status = $1, selection_score = $2, updated_at = NOW()
                 WHERE id = $3 AND tenant_id = $4 RETURNING *`,
                [status, selection_score, id, tenantId]
            );

            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Applicant not found' });

            const applicant = result.rows[0];

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
                        await axios.post(`${ACADEMIC_API}/api/students`, {
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

            const stats = await db.query(`
                SELECT 
                    COUNT(*) as total,
                    COUNT(*) FILTER (WHERE status = 'VERIFIED') as verified,
                    COUNT(*) FILTER (WHERE status = 'PASSED') as passed,
                    COUNT(*) FILTER (WHERE status = 'REJECTED') as rejected
                FROM pmb_applicants 
                WHERE tenant_id = $1
            `, [tenantId]);

            const byPeriod = await db.query(`
                SELECT p.name, COUNT(a.id) as count
                FROM pmb_periods p
                LEFT JOIN pmb_applicants a ON p.id = a.period_id
                WHERE p.tenant_id = $1
                GROUP BY p.name, p.created_at
                ORDER BY p.created_at ASC
            `, [tenantId]);

            res.json({
                status: 'success',
                data: {
                    summary: stats.rows[0],
                    byPeriod: byPeriod.rows
                }
            });
        } catch (err) { next(err); }
    }
}

module.exports = new ApplicantController();
