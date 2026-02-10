const db = require('../config/db');
const { z } = require('zod');

// Validation Schema for Profile
const studentProfileSchema = z.object({
    // General
    gender: z.string().optional(),
    place_of_birth: z.string().optional(),
    date_of_birth: z.string().optional(), // Expect YYYY-MM-DD
    religion: z.string().optional(),
    phone_1: z.string().optional(),
    phone_2: z.string().optional(),
    whatsapp: z.string().optional(),

    // Job
    job_status: z.string().optional(),
    company_name: z.string().optional(),
    job_start_year: z.coerce.number().optional(),
    income_range: z.string().optional(),

    // Domicile (KTP)
    ktp_province: z.string().optional(),
    ktp_city: z.string().optional(),
    ktp_district: z.string().optional(),
    ktp_subdistrict: z.string().optional(),
    ktp_rt: z.string().optional(),
    ktp_rw: z.string().optional(),
    ktp_postal_code: z.string().optional(),
    ktp_address: z.string().optional(),

    // Domicile (Current)
    current_province: z.string().optional(),
    current_city: z.string().optional(),
    current_district: z.string().optional(),
    current_subdistrict: z.string().optional(),
    current_rt: z.string().optional(),
    current_rw: z.string().optional(),
    current_postal_code: z.string().optional(),
    current_address: z.string().optional(),

    // Citizenship
    citizenship: z.string().optional(),
    nik: z.string().optional(),
    kk_number: z.string().optional(),
    living_status: z.string().optional(),

    // Father
    father_nik: z.string().optional(),
    father_name: z.string().optional(),
    father_living_status: z.string().optional(),
    father_phone: z.string().optional(),
    father_place_of_birth: z.string().optional(),
    father_date_of_birth: z.string().optional(),
    father_religion: z.string().optional(),
    father_job: z.string().optional(),
    father_income_range: z.string().optional(),
    father_address: z.string().optional(),

    // Mother
    mother_nik: z.string().optional(),
    mother_name: z.string().optional(),
    mother_living_status: z.string().optional(),
    mother_phone: z.string().optional(),
    mother_place_of_birth: z.string().optional(),
    mother_date_of_birth: z.string().optional(),
    mother_religion: z.string().optional(),
    mother_job: z.string().optional(),
    mother_income_range: z.string().optional(),
    mother_address: z.string().optional(),

    // School Origin
    school_name: z.string().optional(),
    school_major: z.string().optional(),
    nisn: z.string().optional(),
    diploma_number: z.string().optional(),
    graduation_year: z.coerce.number().optional(),
});


class StudentProfileController {

    async getMyProfile(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            // First get the student ID
            const studentRes = await db.query(
                'SELECT id, name, platform_student_number, status FROM students WHERE tenant_id = $1 AND user_id = $2',
                [tenantId, userId]
            );

            if (studentRes.rows.length === 0) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            const student = studentRes.rows[0];

            // Get the specific profile details
            const profileRes = await db.query(
                'SELECT * FROM student_profiles WHERE tenant_id = $1 AND student_id = $2',
                [tenantId, student.id]
            );

            const profileData = profileRes.rows[0] || {};

            // Merge basic student info with detailed profile
            const fullProfile = {
                ...student,
                ...profileData,
                // Ensure id is student id, profile_id can be separate or ignored
                id: student.id,
                profile_id: profileData.id
            };

            res.json({ status: 'success', data: fullProfile });
        } catch (err) {
            next(err);
        }
    }

    async updateMyProfile(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;
            const data = studentProfileSchema.parse(req.body);

            // Get student ID
            const studentRes = await db.query(
                'SELECT id FROM students WHERE tenant_id = $1 AND user_id = $2',
                [tenantId, userId]
            );

            if (studentRes.rows.length === 0) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }
            const studentId = studentRes.rows[0].id;

            // Construct Update/Insert Query
            // We use upsert on student_id

            const columns = Object.keys(data).filter(key => data[key] !== undefined);

            if (columns.length === 0) {
                return res.json({ status: 'success', message: 'No changes detected' });
            }

            // check if profile exists
            const checkRes = await db.query('SELECT id FROM student_profiles WHERE student_id = $1', [studentId]);
            const exists = checkRes.rows.length > 0;

            let result;
            if (exists) {
                // Update
                const setClause = columns.map((col, idx) => `${col} = $${idx + 2}`).join(', ');
                const values = [studentId, ...columns.map(col => data[col])];
                // Add updated_at

                const query = `UPDATE student_profiles SET ${setClause}, updated_at = CURRENT_TIMESTAMP WHERE student_id = $1 RETURNING *`;
                const updateRes = await db.query(query, values);
                result = updateRes.rows[0];
            } else {
                // Insert
                const cols = ['tenant_id', 'student_id', ...columns].join(', ');
                const placeholders = ['$1', '$2', ...columns.map((_, idx) => `$${idx + 3}`)].join(', ');
                const values = [tenantId, studentId, ...columns.map(col => data[col])];

                const query = `INSERT INTO student_profiles (${cols}) VALUES (${placeholders}) RETURNING *`;
                const insertRes = await db.query(query, values);
                result = insertRes.rows[0];
            }

            res.json({ status: 'success', data: result });

        } catch (err) {
            next(err);
        }
    }
}

module.exports = new StudentProfileController();
