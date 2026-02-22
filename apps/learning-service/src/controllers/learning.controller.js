const prisma = require('../lib/prisma');
const { z } = require('zod');

// Schemas
const materialSchema = z.object({
    title: z.string().min(3),
    content: z.string().optional(),
    type: z.enum(['text', 'video', 'link', 'file']).default('text'),
    meeting_number: z.number().int().min(1).max(16).optional().nullable(),
});

const assignmentSchema = z.object({
    title: z.string().min(3),
    description: z.string().optional(),
    deadline: z.string().datetime(), // ISO 8601
    meeting_number: z.number().int().min(1).max(16).optional().nullable(),
});

const submissionSchema = z.object({
    content: z.string().min(1),
    student_id: z.string().uuid(),
});

const gradeSchema = z.object({
    score: z.number().min(0).max(100),
    feedback: z.string().optional(),
});

const quizSchema = z.object({
    title: z.string().min(3),
    meeting_number: z.number().int().min(1).max(16).optional().nullable(),
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
            const data = materialSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await prisma.materials.create({
                data: {
                    ...data,
                    tenant_id: tenantId,
                    class_id: classId
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getMaterials(req, res, next) {
        try {
            const { classId } = req.params;
            const { meetingNumber } = req.query;
            const tenantId = req.user.tenant_id;

            const where = { tenant_id: tenantId, class_id: classId };
            if (meetingNumber) {
                where.meeting_number = parseInt(meetingNumber);
            }

            const result = await prisma.materials.findMany({
                where,
                orderBy: { created_at: 'desc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    // --- Assignments ---
    async createAssignment(req, res, next) {
        try {
            const { classId } = req.params;
            const data = assignmentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await prisma.assignments.create({
                data: {
                    ...data,
                    deadline: new Date(data.deadline),
                    tenant_id: tenantId,
                    class_id: classId
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getAssignments(req, res, next) {
        try {
            const { classId } = req.params;
            const { meetingNumber } = req.query;
            const tenantId = req.user.tenant_id;

            const where = { tenant_id: tenantId, class_id: classId };
            if (meetingNumber) {
                where.meeting_number = parseInt(meetingNumber);
            }

            const result = await prisma.assignments.findMany({
                where,
                orderBy: { deadline: 'asc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    // --- Submissions ---
    async submitAssignment(req, res, next) {
        try {
            const { assignmentId } = req.params;
            const { content, student_id } = submissionSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await prisma.submissions.upsert({
                where: {
                    assignment_id_student_id: {
                        assignment_id: assignmentId,
                        student_id: student_id
                    }
                },
                update: {
                    content,
                    submitted_at: new Date()
                },
                create: {
                    tenant_id: tenantId,
                    assignment_id: assignmentId,
                    student_id: student_id,
                    content
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getMySubmission(req, res, next) {
        try {
            const { assignmentId } = req.params;
            const { studentId } = req.query;
            const tenantId = req.user.tenant_id;

            if (!studentId) return res.status(400).json({ status: 'fail', message: 'studentId required' });

            const result = await prisma.submissions.findFirst({
                where: {
                    tenant_id: tenantId,
                    assignment_id: assignmentId,
                    student_id: studentId
                }
            });

            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getSubmissions(req, res, next) {
        try {
            const { assignmentId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await prisma.submissions.findMany({
                where: {
                    tenant_id: tenantId,
                    assignment_id: assignmentId
                },
                orderBy: { submitted_at: 'desc' }
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async gradeSubmission(req, res, next) {
        try {
            const { submissionId } = req.params;
            const { score, feedback } = gradeSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await prisma.submissions.update({
                where: { id: submissionId, tenant_id: tenantId },
                data: {
                    score,
                    feedback
                }
            });

            res.json({ status: 'success', data: result });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Submission not found' });
            next(err);
        }
    }

    // --- Notifications ---
    async createNotification(req, res, next) {
        try {
            const { user_id, type, title, message, link } = req.body;
            const tenantId = req.user.tenant_id;

            const result = await prisma.notifications.create({
                data: {
                    tenant_id: tenantId,
                    user_id,
                    type: type || 'general',
                    title,
                    message,
                    link
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getNotifications(req, res, next) {
        try {
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await prisma.notifications.findMany({
                where: {
                    tenant_id: tenantId,
                    user_id: userId
                },
                orderBy: { created_at: 'desc' },
                take: 50
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async markNotificationRead(req, res, next) {
        try {
            const { notificationId } = req.params;
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await prisma.notifications.update({
                where: { id: notificationId, user_id: userId, tenant_id: tenantId },
                data: { is_read: true }
            });

            res.json({ status: 'success', data: result });
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Notification not found' });
            next(err);
        }
    }

    async getUnreadCount(req, res, next) {
        try {
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const count = await prisma.notifications.count({
                where: {
                    tenant_id: tenantId,
                    user_id: userId,
                    is_read: false
                }
            });
            res.json({ status: 'success', data: { count } });
        } catch (err) { next(err); }
    }

    // --- Student Analytics ---
    async getStudentGrades(req, res, next) {
        try {
            const { studentId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await prisma.submissions.findMany({
                where: {
                    student_id: studentId,
                    tenant_id: tenantId,
                    score: { not: null }
                },
                include: {
                    assignments: {
                        select: {
                            title: true,
                            class_id: true
                        }
                    }
                },
                orderBy: { submitted_at: 'desc' }
            });

            // Re-format to match expected output if necessary
            const formatted = result.map(s => ({
                submission_id: s.id,
                score: s.score,
                feedback: s.feedback,
                submitted_at: s.submitted_at,
                assignment_title: s.assignments.title,
                class_id: s.assignments.class_id
            }));

            res.json({ status: 'success', data: formatted });
        } catch (err) { next(err); }
    }

    async getStudentStats(req, res, next) {
        try {
            const { studentId } = req.params;
            const tenantId = req.user.tenant_id;

            const aggregate = await prisma.submissions.aggregate({
                where: { student_id: studentId, tenant_id: tenantId },
                _count: { _all: true, score: true },
                _avg: { score: true },
                _max: { score: true },
                _min: { score: true }
            });

            res.json({
                status: 'success',
                data: {
                    totalSubmissions: aggregate._count._all,
                    gradedCount: aggregate._count.score,
                    averageScore: aggregate._avg.score ? aggregate._avg.score.toFixed(2) : null,
                    highestScore: aggregate._max.score,
                    lowestScore: aggregate._min.score
                }
            });
        } catch (err) { next(err); }
    }

    async getStudentDeadlines(req, res, next) {
        try {
            const { studentId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await prisma.assignments.findMany({
                where: {
                    tenant_id: tenantId,
                    deadline: { gte: new Date() }
                },
                include: {
                    submissions: {
                        where: { student_id: studentId },
                        select: { id: true }
                    }
                },
                orderBy: { deadline: 'asc' },
                take: 20
            });

            const formatted = result.map(a => ({
                id: a.id,
                title: a.title,
                description: a.description,
                deadline: a.deadline,
                class_id: a.class_id,
                is_submitted: a.submissions.length > 0
            }));

            res.json({ status: 'success', data: formatted });
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

            const result = await prisma.discussions.create({
                data: {
                    tenant_id: tenantId,
                    class_id: classId,
                    user_id: userId,
                    user_email: userEmail,
                    content
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getDiscussions(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await prisma.discussions.findMany({
                where: { tenant_id: tenantId, class_id: classId },
                orderBy: { created_at: 'desc' },
                take: 50
            });
            res.json({ status: 'success', data: result });
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

            const result = await prisma.messages.create({
                data: {
                    tenant_id: tenantId,
                    sender_id: senderId,
                    sender_email: senderEmail,
                    receiver_id,
                    content
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getConversations(req, res, next) {
        try {
            const userId = req.user.sub;
            const tenantId = req.user.tenant_id;

            // Complex logic kept with $queryRaw for performance and consistency with PostgreSQL-specific DISTINCT ON
            const result = await prisma.$queryRaw`
                SELECT DISTINCT ON (partner_id)
                    CASE 
                        WHEN sender_id = ${userId}::uuid THEN receiver_id 
                        ELSE sender_id 
                    END as partner_id,
                    content as last_message,
                    created_at,
                    sender_email
                FROM messages
                WHERE (sender_id = ${userId}::uuid OR receiver_id = ${userId}::uuid) AND tenant_id = ${tenantId}::uuid
                ORDER BY partner_id, created_at DESC
            `;

            res.json({
                status: 'success',
                data: result.sort((a, b) => b.created_at - a.created_at)
            });
        } catch (err) { next(err); }
    }

    async getMessages(req, res, next) {
        try {
            const { userId: partnerId } = req.params;
            const myId = req.user.sub;
            const tenantId = req.user.tenant_id;

            const result = await prisma.messages.findMany({
                where: {
                    tenant_id: tenantId,
                    OR: [
                        { sender_id: myId, receiver_id: partnerId },
                        { sender_id: partnerId, receiver_id: myId }
                    ]
                },
                orderBy: { created_at: 'asc' },
                take: 100
            });

            // Mark incoming messages as read
            await prisma.messages.updateMany({
                where: {
                    tenant_id: tenantId,
                    sender_id: partnerId,
                    receiver_id: myId,
                    is_read: false
                },
                data: { is_read: true }
            });

            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async markMessagesRead(req, res, next) {
        try {
            const { partnerId } = req.body;
            const myId = req.user.sub;
            const tenantId = req.user.tenant_id;

            await prisma.messages.updateMany({
                where: {
                    tenant_id: tenantId,
                    sender_id: partnerId,
                    receiver_id: myId,
                    is_read: false
                },
                data: { is_read: true }
            });
            res.json({ status: 'success', message: 'Messages marked as read' });
        } catch (err) { next(err); }
    }

    // --- Quizzes ---
    async createQuiz(req, res, next) {
        try {
            const { classId } = req.params;
            const { title, meeting_number } = quizSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await prisma.quizzes.create({
                data: {
                    tenant_id: tenantId,
                    class_id: classId,
                    title,
                    meeting_number
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async addQuizQuestions(req, res, next) {
        try {
            const { quizId } = req.params;
            const { questions } = quizQuestionSchema.parse(req.body);

            // In a simple Prisma setup without nested relations in schema for questions/options, 
            // we use a transaction but this part depends on how introspected tables are 
            // (Note: introspected schema only showed 8 models, quiz_questions/options might be missing Pks)
            // If they are missing from schema.prisma, this will need $queryRaw or manual additions.
            // For now, assuming they might be missing or handled via Raw if not in schema.prisma.

            await prisma.$transaction(async (tx) => {
                for (let i = 0; i < questions.length; i++) {
                    const q = questions[i];
                    // Using $queryRaw if models are missing from schema.prisma
                    const qResult = await tx.$queryRaw`
                        INSERT INTO quiz_questions (quiz_id, question_text, question_type, order_number) 
                        VALUES (${quizId}::uuid, ${q.question_text}, ${q.question_type}, ${i + 1}) 
                        RETURNING id
                    `;
                    const questionId = qResult[0].id;

                    if (q.options && q.options.length > 0) {
                        for (const opt of q.options) {
                            await tx.$queryRaw`
                                INSERT INTO quiz_options (question_id, option_text, is_correct) 
                                VALUES (${questionId}::uuid, ${opt.option_text}, ${opt.is_correct})
                            `;
                        }
                    }
                }
            });

            res.status(201).json({ status: 'success', message: 'Questions added' });
        } catch (err) { next(err); }
    }

    async getQuizzes(req, res, next) {
        try {
            const { classId } = req.params;
            const { meetingNumber } = req.query;
            const tenantId = req.user.tenant_id;

            const where = { tenant_id: tenantId, class_id: classId };
            if (meetingNumber) {
                where.meeting_number = parseInt(meetingNumber);
            }

            const result = await prisma.quizzes.findMany({ where });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async getQuizDetail(req, res, next) {
        try {
            const { quizId } = req.params;
            const tenantId = req.user.tenant_id;

            const quiz = await prisma.quizzes.findFirst({
                where: { id: quizId, tenant_id: tenantId }
            });
            if (!quiz) return res.status(404).json({ status: 'fail', message: 'Quiz not found' });

            const questions = await prisma.$queryRaw`
                SELECT * FROM quiz_questions WHERE quiz_id = ${quizId}::uuid ORDER BY order_number ASC
            `;

            for (const q of questions) {
                const options = await prisma.$queryRaw`
                    SELECT id, option_text, is_correct FROM quiz_options WHERE question_id = ${q.id}::uuid
                `;
                q.options = options;
            }

            res.json({ status: 'success', data: { ...quiz, questions } });
        } catch (err) { next(err); }
    }

    async submitQuizAttempt(req, res, next) {
        try {
            const { quizId } = req.params;
            const { studentId, score, finished_at } = req.body;
            const tenantId = req.user.tenant_id;

            const result = await prisma.quiz_attempts.create({
                data: {
                    tenant_id: tenantId,
                    quiz_id: quizId,
                    student_id: studentId,
                    score: score ? parseFloat(score) : null,
                    finished_at: finished_at ? new Date(finished_at) : new Date()
                }
            });
            res.status(201).json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }
}

module.exports = new LearningController();
