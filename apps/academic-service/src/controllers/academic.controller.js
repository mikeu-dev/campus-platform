const db = require('../config/db');
const { z } = require('zod');

// Validation Schemas
const courseSchema = z.object({
    code: z.string().min(2),
    name: z.string().min(3),
    credits: z.number().int().positive(),
});

const classSchema = z.object({
    course_id: z.string().uuid(),
    semester: z.string(),
    year: z.number().int(),
});

const studentSchema = z.object({
    user_id: z.string().uuid(), // Must match Identity User ID
    name: z.string(),
    student_number: z.string().optional(),
});

const enrollmentSchema = z.object({
    class_id: z.string().uuid(),
    student_id: z.string().uuid(),
});

const lecturerSchema = z.object({
    user_id: z.string().uuid(),
    name: z.string(),
    lecturer_number: z.string().optional(),
});

class AcademicController {

    // --- Courses ---
    async createCourse(req, res, next) {
        try {
            const { code, name, credits } = courseSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO courses (tenant_id, code, name, credits) VALUES ($1, $2, $3, $4) RETURNING *',
                [tenantId, code, name, credits]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) {
            if (err.code === '23505') return res.status(400).json({ status: 'fail', message: 'Course code already exists' });
            next(err);
        }
    }

    async getCourses(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await db.query('SELECT * FROM courses WHERE tenant_id = $1', [tenantId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Students ---
    async createStudent(req, res, next) {
        try {
            const { user_id, name, student_number } = studentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO students (tenant_id, user_id, name, platform_student_number) VALUES ($1, $2, $3, $4) RETURNING *',
                [tenantId, user_id, name, student_number]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMyProfile(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub; // From JWT

            const result = await db.query(
                'SELECT * FROM students WHERE tenant_id = $1 AND user_id = $2',
                [tenantId, userId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Student profile not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    // --- Lecturers ---
    async createLecturer(req, res, next) {
        try {
            const { user_id, name, lecturer_number } = lecturerSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO lecturers (tenant_id, user_id, name, platform_lecturer_number) VALUES ($1, $2, $3, $4) RETURNING *',
                [tenantId, user_id, name, lecturer_number]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMyLecturerProfile(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const result = await db.query(
                'SELECT * FROM lecturers WHERE tenant_id = $1 AND user_id = $2',
                [tenantId, userId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Lecturer profile not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    // --- Classes ---
    async createClass(req, res, next) {
        try {
            const schemaWithLecturer = classSchema.extend({ lecturer_id: z.string().uuid().optional() });
            const { course_id, semester, year, lecturer_id } = schemaWithLecturer.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO classes (tenant_id, course_id, semester, year, lecturer_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [tenantId, course_id, semester, year, lecturer_id]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getClasses(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const { lecturer_id } = req.query;
            let query = `
            SELECT c.id, c.semester, c.year, c.lecturer_id, co.name as course_name, co.code as course_code
            FROM classes c
            JOIN courses co ON c.course_id = co.id
            WHERE c.tenant_id = $1
            `;
            const params = [tenantId];

            if (lecturer_id) {
                query += ` AND c.lecturer_id = $2`;
                params.push(lecturer_id);
            }

            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Enrollments ---
    async enrollStudent(req, res, next) {
        try {
            const { class_id, student_id } = enrollmentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO enrollments (tenant_id, class_id, student_id) VALUES ($1, $2, $3) RETURNING *',
                [tenantId, class_id, student_id]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) {
            if (err.code === '23505') return res.status(400).json({ status: 'fail', message: 'Already enrolled' });
            next(err);
        }
    }

    async getMyEnrollments(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub; // Identity User ID

            const result = await db.query(`
        SELECT e.id, e.status, c.semester, c.year, co.name as course_name, co.code as course_code
        FROM enrollments e
        JOIN students s ON e.student_id = s.id
        JOIN classes c ON e.class_id = c.id
        JOIN courses co ON c.course_id = co.id
        WHERE e.tenant_id = $1 AND s.user_id = $2
      `, [tenantId, userId]);

            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }
}

module.exports = new AcademicController();
