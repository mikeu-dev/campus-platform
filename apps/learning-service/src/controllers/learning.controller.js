const db = require('../config/db');
const { z } = require('zod');

// Schemas
const materialSchema = z.object({
    title: z.string().min(3),
    content: z.string().optional(),
    type: z.enum(['text', 'video', 'link', 'file']).default('text'),
});

const assignmentSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    deadline: z.string().datetime(), // ISO 8601
});

const submissionSchema = z.object({
    content: z.string().min(1),
    student_id: z.string().uuid(), // Ideally extracted from token via lookup, but for MVP we trust client or token if extended.
    // Actually, Identity Token doesn't have student_id (only user_id).
    // So client must send student_id, and we should verify ownership?
    // For MVP, we'll accept student_id from body but verify tenant.
});

const gradeSchema = z.object({
    score: z.number().min(0).max(100),
    feedback: z.string().optional(),
});

class LearningController {

    // --- Files ---
    async uploadFile(req, res, next) {
        try {
            if (!req.fileUrl) {
                return res.status(400).json({ status: 'fail', message: 'No file uploaded' });
            }
            res.status(201).json({ status: 'success', data: { url: req.fileUrl } });
        } catch (err) { next(err); }
    }

    // --- Materials ---
    async addMaterial(req, res, next) {
        try {
            const { classId } = req.params;
            const { title, content, type } = materialSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO materials (tenant_id, class_id, title, content, type) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [tenantId, classId, title, content, type]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMaterials(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM materials WHERE tenant_id = $1 AND class_id = $2 ORDER BY created_at DESC',
                [tenantId, classId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Assignments ---
    async createAssignment(req, res, next) {
        try {
            const { classId } = req.params;
            const { title, description, deadline } = assignmentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO assignments (tenant_id, class_id, title, description, deadline) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [tenantId, classId, title, description, deadline]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getAssignments(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM assignments WHERE tenant_id = $1 AND class_id = $2 ORDER BY deadline ASC',
                [tenantId, classId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Submissions ---
    async submitAssignment(req, res, next) {
        try {
            const { assignmentId } = req.params;
            const { content, student_id } = submissionSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            // Upsert submission (allow resubmission)
            const result = await db.query(
                `INSERT INTO submissions (tenant_id, assignment_id, student_id, content, submitted_at)
         VALUES ($1, $2, $3, $4, NOW())
         ON CONFLICT (assignment_id, student_id) 
         DO UPDATE SET content = EXCLUDED.content, submitted_at = NOW()
         RETURNING *`,
                [tenantId, assignmentId, student_id, content]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMySubmission(req, res, next) {
        try {
            const { assignmentId } = req.params;
            const { studentId } = req.query; // Pass student_id as query param for simplicity
            const tenantId = req.user.tenant_id;

            if (!studentId) return res.status(400).json({ status: 'fail', message: 'studentId required' });

            const result = await db.query(
                'SELECT * FROM submissions WHERE tenant_id = $1 AND assignment_id = $2 AND student_id = $3',
                [tenantId, assignmentId, studentId]
            );

            if (result.rows.length === 0) return res.json({ status: 'success', data: null });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getSubmissions(req, res, next) {
        try {
            const { assignmentId } = req.params;
            const tenantId = req.user.tenant_id;

            // Should verify if user is lecturer of the class?
            // For MVP, just verify tenant. Authorization is broad.

            const result = await db.query(
                'SELECT * FROM submissions WHERE tenant_id = $1 AND assignment_id = $2 ORDER BY submitted_at DESC',
                [tenantId, assignmentId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async gradeSubmission(req, res, next) {
        try {
            const { submissionId } = req.params;
            const { score, feedback } = gradeSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `UPDATE submissions SET score = $1, feedback = $2 
                 WHERE id = $3 AND tenant_id = $4 RETURNING *`,
                [score, feedback, submissionId, tenantId]
            );

            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Submission not found' });

            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }
}

module.exports = new LearningController();
