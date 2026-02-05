const db = require('../config/db');
const { z } = require('zod');

// Schemas
const materialSchema = z.object({
    title: z.string().min(3),
    content: z.string().optional(),
    type: z.enum(['text', 'video', 'link', 'file']).default('text'),
    meeting_number: z.number().int().min(1).max(16).optional(),
});

const assignmentSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    deadline: z.string().datetime(), // ISO 8601
    meeting_number: z.number().int().min(1).max(16).optional(),
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

const quizSchema = z.object({
    title: z.string().min(3),
    meeting_number: z.number().int().min(1).max(16).optional(),
});

const quizQuestionSchema = z.object({
    questions: z.array(z.object({
        question_text: z.string().min(3),
        question_type: z.enum(['multiple_choice', 'essay']).default('multiple_choice'),
        options: z.array(z.object({
            option_text: z.string().min(1),
            is_correct: z.boolean().default(false)
        })).optional()
    }))
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
            const { title, content, type, meeting_number } = materialSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO materials (tenant_id, class_id, title, content, type, meeting_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [tenantId, classId, title, content, type, meeting_number]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMaterials(req, res, next) {
        try {
            const { classId } = req.params;
            const { meetingNumber } = req.query;
            const tenantId = req.user.tenant_id;

            let query = 'SELECT * FROM materials WHERE tenant_id = $1 AND class_id = $2';
            const params = [tenantId, classId];

            if (meetingNumber) {
                query += ' AND meeting_number = $3';
                params.push(meetingNumber);
            }

            query += ' ORDER BY created_at DESC';

            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Assignments ---
    async createAssignment(req, res, next) {
        try {
            const { classId } = req.params;
            const { title, description, deadline, meeting_number } = assignmentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO assignments (tenant_id, class_id, title, description, deadline, meeting_number) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [tenantId, classId, title, description, deadline, meeting_number]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getAssignments(req, res, next) {
        try {
            const { classId } = req.params;
            const { meetingNumber } = req.query;
            const tenantId = req.user.tenant_id;

            let query = 'SELECT * FROM assignments WHERE tenant_id = $1 AND class_id = $2';
            const params = [tenantId, classId];

            if (meetingNumber) {
                query += ' AND meeting_number = $3';
                params.push(meetingNumber);
            }

            query += ' ORDER BY deadline ASC';

            const result = await db.query(query, params);
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

    // --- Notifications ---
    async createNotification(req, res, next) {
        try {
            const { user_id, type, title, message, link } = req.body;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO notifications (tenant_id, user_id, type, title, message, link) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [tenantId, user_id, type, title, message, link]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getNotifications(req, res, next) {
        try {
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'SELECT * FROM notifications WHERE tenant_id = $1 AND user_id = $2 ORDER BY created_at DESC LIMIT 20',
                [tenantId, userId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async markNotificationRead(req, res, next) {
        try {
            const { notificationId } = req.params;
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'UPDATE notifications SET is_read = TRUE WHERE id = $1 AND user_id = $2 AND tenant_id = $3 RETURNING *',
                [notificationId, userId, tenantId]
            );

            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Notification not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getUnreadCount(req, res, next) {
        try {
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'SELECT COUNT(*) as count FROM notifications WHERE tenant_id = $1 AND user_id = $2 AND is_read = FALSE',
                [tenantId, userId]
            );
            res.json({ status: 'success', data: { count: parseInt(result.rows[0].count) } });
        } catch (err) { next(err); }
    }

    // --- Student Analytics ---
    async getStudentGrades(req, res, next) {
        try {
            const { studentId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `SELECT s.id as submission_id, s.score, s.feedback, s.submitted_at,
                        a.title as assignment_title, a.class_id
                 FROM submissions s
                 JOIN assignments a ON s.assignment_id = a.id
                 WHERE s.student_id = $1 AND s.tenant_id = $2 AND s.score IS NOT NULL
                 ORDER BY s.submitted_at DESC`,
                [studentId, tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getStudentStats(req, res, next) {
        try {
            const { studentId } = req.params;
            const tenantId = req.user.tenant_id;

            // Get submission stats
            const statsResult = await db.query(
                `SELECT 
                    COUNT(*) as total_submissions,
                    COUNT(CASE WHEN score IS NOT NULL THEN 1 END) as graded_count,
                    AVG(score) as average_score,
                    MAX(score) as highest_score,
                    MIN(score) as lowest_score
                 FROM submissions
                 WHERE student_id = $1 AND tenant_id = $2`,
                [studentId, tenantId]
            );

            const stats = statsResult.rows[0];
            res.json({
                status: 'success',
                data: {
                    totalSubmissions: parseInt(stats.total_submissions),
                    gradedCount: parseInt(stats.graded_count),
                    averageScore: stats.average_score ? parseFloat(stats.average_score).toFixed(2) : null,
                    highestScore: stats.highest_score,
                    lowestScore: stats.lowest_score
                }
            });
        } catch (err) { next(err); }
    }

    async getStudentDeadlines(req, res, next) {
        try {
            const { studentId } = req.params;
            const tenantId = req.user.tenant_id;

            // Get all assignments from classes the student has submissions in (as proxy for enrollment)
            const result = await db.query(
                `SELECT DISTINCT a.id, a.title, a.description, a.deadline, a.class_id,
                        CASE WHEN s.id IS NOT NULL THEN true ELSE false END as is_submitted
                 FROM assignments a
                 LEFT JOIN submissions s ON a.id = s.assignment_id AND s.student_id = $1
                 WHERE a.tenant_id = $2 AND a.deadline >= NOW()
                 ORDER BY a.deadline ASC
                 LIMIT 20`,
                [studentId, tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Discussions ---
    async createDiscussion(req, res, next) {
        try {
            const { classId } = req.params;
            const { content } = req.body;
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;
            const userEmail = req.user.email;

            if (!content || content.trim().length === 0) {
                return res.status(400).json({ status: 'fail', message: 'Content is required' });
            }

            const result = await db.query(
                'INSERT INTO discussions (tenant_id, class_id, user_id, user_email, content) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [tenantId, classId, userId, userEmail, content]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getDiscussions(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'SELECT * FROM discussions WHERE tenant_id = $1 AND class_id = $2 ORDER BY created_at DESC LIMIT 50',
                [tenantId, classId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Messaging ---
    async sendMessage(req, res, next) {
        try {
            const { receiver_id, content } = req.body;
            const tenantId = req.user.tenant_id;
            const senderId = req.user.sub;
            const senderEmail = req.user.email;

            if (!content || content.trim().length === 0) {
                return res.status(400).json({ status: 'fail', message: 'Content is required' });
            }

            const result = await db.query(
                'INSERT INTO messages (tenant_id, sender_id, sender_email, receiver_id, content) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [tenantId, senderId, senderEmail, receiver_id, content]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getConversations(req, res, next) {
        try {
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            // Get list of users involved in chats with current user
            // This is complex in SQL without a separate conversations table
            // We'll approximate by finding unique users from message history
            // and getting the latest message for each.

            const result = await db.query(
                `SELECT DISTINCT ON (partner_id)
                    CASE 
                        WHEN sender_id = $1 THEN receiver_id 
                        ELSE sender_id 
                    END as partner_id,
                    content as last_message,
                    created_at,
                    sender_email
                 FROM messages
                 WHERE (sender_id = $1 OR receiver_id = $1) AND tenant_id = $2
                 ORDER BY partner_id, created_at DESC`,
                [userId, tenantId]
            );

            // Note: sender_email in the result is inconsistent (it's the sender of the last message)
            // Ideally we'd join with Identity Service users table, but services are decoupled.
            // For MVP, the frontend can fetch user details or we rely on what we have.

            res.json({ status: 'success', data: result.rows.sort((a, b) => b.created_at - a.created_at) });
        } catch (err) { next(err); }
    }

    async getMessages(req, res, next) {
        try {
            const { userId: partnerId } = req.params;
            const myId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `SELECT * FROM messages 
                 WHERE tenant_id = $1 
                 AND ((sender_id = $2 AND receiver_id = $3) OR (sender_id = $3 AND receiver_id = $2))
                 ORDER BY created_at ASC 
                 LIMIT 100`,
                [tenantId, myId, partnerId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- Quizzes ---
    async createQuiz(req, res, next) {
        try {
            const { classId } = req.params;
            const { title, meeting_number } = quizSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'INSERT INTO quizzes (tenant_id, class_id, title, meeting_number) VALUES ($1, $2, $3, $4) RETURNING *',
                [tenantId, classId, title, meeting_number]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async addQuizQuestions(req, res, next) {
        try {
            const { quizId } = req.params;
            const { questions } = quizQuestionSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            // Simple batch insert for MVP (using a transaction)
            await db.query('BEGIN');
            try {
                for (let i = 0; i < questions.length; i++) {
                    const q = questions[i];
                    const qResult = await db.query(
                        'INSERT INTO quiz_questions (quiz_id, question_text, question_type, order_number) VALUES ($1, $2, $3, $4) RETURNING id',
                        [quizId, q.question_text, q.question_type, i + 1]
                    );
                    const questionId = qResult.rows[0].id;

                    if (q.options && q.options.length > 0) {
                        for (const opt of q.options) {
                            await db.query(
                                'INSERT INTO quiz_options (question_id, option_text, is_correct) VALUES ($1, $2, $3)',
                                [questionId, opt.option_text, opt.is_correct]
                            );
                        }
                    }
                }
                await db.query('COMMIT');
                res.status(201).json({ status: 'success', message: 'Questions added' });
            } catch (err) {
                await db.query('ROLLBACK');
                throw err;
            }
        } catch (err) { next(err); }
    }

    async getQuizzes(req, res, next) {
        try {
            const { classId } = req.params;
            const { meetingNumber } = req.query;
            const tenantId = req.user.tenant_id;

            let query = 'SELECT * FROM quizzes WHERE tenant_id = $1 AND class_id = $2';
            const params = [tenantId, classId];

            if (meetingNumber) {
                query += ' AND meeting_number = $3';
                params.push(meetingNumber);
            }

            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getQuizDetail(req, res, next) {
        try {
            const { quizId } = req.params;
            const tenantId = req.user.tenant_id;

            // Verify quiz exists and tenant matches
            const quizRes = await db.query('SELECT * FROM quizzes WHERE id = $1 AND tenant_id = $2', [quizId, tenantId]);
            if (quizRes.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Quiz not found' });

            const questionsRes = await db.query(
                'SELECT * FROM quiz_questions WHERE quiz_id = $1 ORDER BY order_number ASC',
                [quizId]
            );

            const questions = questionsRes.rows;
            for (const q of questions) {
                const optionsRes = await db.query('SELECT id, option_text, is_correct FROM quiz_options WHERE question_id = $1', [q.id]);
                // For students, we'd normally hide is_correct. But for now, returning all.
                q.options = optionsRes.rows;
            }

            res.json({ status: 'success', data: { ...quizRes.rows[0], questions } });
        } catch (err) { next(err); }
    }

    async submitQuizAttempt(req, res, next) {
        try {
            const { quizId } = req.params;
            const { studentId, score, finished_at } = req.body;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `INSERT INTO quiz_attempts (tenant_id, quiz_id, student_id, score, finished_at)
                 VALUES ($1, $2, $3, $4, $5) RETURNING *`,
                [tenantId, quizId, studentId, score, finished_at || new Date()]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }
}

module.exports = new LearningController();
