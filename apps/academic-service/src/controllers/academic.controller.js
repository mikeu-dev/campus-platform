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

const researchProposalSchema = z.object({
    title: z.string().min(10),
    type: z.string(),
    description: z.string().optional(),
    supervisor_preferred: z.string().optional(),
});

const certificateRequestSchema = z.object({
    type: z.string(),
    purpose: z.string().optional(),
    quantity: z.number().int().min(1).max(5).optional(),
    notes: z.string().optional(),
});

const attendanceSchema = z.object({
    class_id: z.string().uuid(),
    student_id: z.string().uuid(),
    meeting_number: z.number().int().min(1).max(16),
    status: z.enum(['hadir', 'alfa', 'izin', 'sakit']).default('hadir'),
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
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const offset = (page - 1) * limit;

            const params = [tenantId];
            let whereClause = 'WHERE tenant_id = $1';

            if (search) {
                params.push(`%${search}%`);
                whereClause += ` AND (code ILIKE $${params.length} OR name ILIKE $${params.length})`;
            }

            // Count
            const countRes = await db.query(`SELECT COUNT(id) FROM courses ${whereClause}`, params);
            const total = parseInt(countRes.rows[0].count);

            // Data
            params.push(limit);
            params.push(offset);
            const query = `
                SELECT * FROM courses 
                ${whereClause} 
                ORDER BY created_at DESC 
                LIMIT $${params.length - 1} OFFSET $${params.length}
            `;
            const result = await db.query(query, params);

            res.json({
                status: 'success',
                data: result.rows,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (err) { next(err); }
    }

    async updateCourse(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const courseId = req.params.id;
            const { code, name, credits } = courseSchema.partial().parse(req.body);

            const result = await db.query(
                `UPDATE courses 
                 SET code = COALESCE($1, code), 
                     name = COALESCE($2, name), 
                     credits = COALESCE($3, credits),
                     updated_at = CURRENT_TIMESTAMP
                 WHERE tenant_id = $4 AND id = $5 
                 RETURNING *`,
                [code, name, credits, tenantId, courseId]
            );

            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Course not found' });

            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) {
            if (err.code === '23505') return res.status(400).json({ status: 'fail', message: 'Course code already exists' });
            next(err);
        }
    }

    async deleteCourse(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const courseId = req.params.id;

            const result = await db.query(
                'DELETE FROM courses WHERE tenant_id = $1 AND id = $2 RETURNING *',
                [tenantId, courseId]
            );

            if (result.rowCount === 0) {
                return res.status(404).json({ status: 'fail', message: 'Course not found' });
            }

            res.json({ status: 'success', message: 'Course deleted successfully' });
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

    async deleteStudent(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const studentId = req.params.id;

            // Optional: Check dependencies (enrollments, grades) before deleting
            // For now, we'll assume cascade delete or let DB error if constraint fails
            // But usually safer to check or soft delete.
            // Let's do a hard delete for simplicity as per plan.

            const result = await db.query(
                'DELETE FROM students WHERE tenant_id = $1 AND id = $2 RETURNING *',
                [tenantId, studentId]
            );

            if (result.rowCount === 0) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            res.json({ status: 'success', message: 'Student deleted successfully' });
        } catch (err) { next(err); }
    }

    async getStudents(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const studyProgram = req.query.study_program || '';
            const entryYear = req.query.entry_year || '';
            const status = req.query.status || '';
            const offset = (page - 1) * limit;

            const params = [tenantId];
            let whereClause = 'WHERE tenant_id = $1';

            if (search) {
                params.push(`%${search}%`);
                whereClause += ` AND (name ILIKE $${params.length} OR platform_student_number ILIKE $${params.length})`;
            }

            if (studyProgram) {
                params.push(studyProgram);
                whereClause += ` AND study_program = $${params.length}`;
            }

            if (entryYear) {
                params.push(entryYear);
                whereClause += ` AND entry_year = $${params.length}`;
            }

            if (status) {
                params.push(status);
                whereClause += ` AND status = $${params.length}`;
            }

            // Count
            const countRes = await db.query(`SELECT COUNT(id) FROM students ${whereClause}`, params);
            const total = parseInt(countRes.rows[0].count);

            // Data
            params.push(limit);
            params.push(offset);
            const query = `
                SELECT * FROM students 
                ${whereClause} 
                ORDER BY created_at DESC 
                LIMIT $${params.length - 1} OFFSET $${params.length}
            `;
            const result = await db.query(query, params);

            res.json({
                status: 'success',
                data: result.rows,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
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

    async getLecturers(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const offset = (page - 1) * limit;

            const params = [tenantId];
            let whereClause = 'WHERE tenant_id = $1';

            if (search) {
                params.push(`%${search}%`);
                whereClause += ` AND (name ILIKE $${params.length} OR platform_lecturer_number ILIKE $${params.length})`;
            }

            // Count
            const countRes = await db.query(`SELECT COUNT(id) FROM lecturers ${whereClause}`, params);
            const total = parseInt(countRes.rows[0].count);

            // Data
            params.push(limit);
            params.push(offset);
            const query = `
                SELECT * FROM lecturers 
                ${whereClause} 
                ORDER BY created_at DESC 
                LIMIT $${params.length - 1} OFFSET $${params.length}
            `;
            const result = await db.query(query, params);

            res.json({
                status: 'success',
                data: result.rows,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (err) { next(err); }
    }

    async updateLecturer(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const lecturerId = req.params.id;
            const { name, lecturer_number } = req.body;

            const result = await db.query(
                `UPDATE lecturers 
                 SET name = COALESCE($1, name), 
                     platform_lecturer_number = COALESCE($2, platform_lecturer_number),
                     updated_at = CURRENT_TIMESTAMP
                 WHERE tenant_id = $3 AND id = $4 
                 RETURNING *`,
                [name, lecturer_number, tenantId, lecturerId]
            );

            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Lecturer not found' });

            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async deleteLecturer(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const lecturerId = req.params.id;

            const result = await db.query(
                'DELETE FROM lecturers WHERE tenant_id = $1 AND id = $2 RETURNING *',
                [tenantId, lecturerId]
            );

            if (result.rowCount === 0) {
                return res.status(404).json({ status: 'fail', message: 'Lecturer not found' });
            }

            res.json({ status: 'success', message: 'Lecturer deleted successfully' });
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
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const offset = (page - 1) * limit;

            const params = [tenantId];
            let whereClause = 'WHERE c.tenant_id = $1';

            if (lecturer_id) {
                params.push(lecturer_id);
                whereClause += ` AND c.lecturer_id = $${params.length}`;
            }

            if (req.query.semester) {
                params.push(req.query.semester);
                whereClause += ` AND c.semester = $${params.length}`;
            }

            if (req.query.year) {
                params.push(req.query.year);
                whereClause += ` AND c.year = $${params.length}`;
            }

            if (search) {
                params.push(`%${search}%`);
                whereClause += ` AND (co.name ILIKE $${params.length} OR co.code ILIKE $${params.length})`;
            }

            // Count
            const countQuery = `
                SELECT COUNT(c.id)
                FROM classes c
                JOIN courses co ON c.course_id = co.id
                LEFT JOIN lecturers l ON c.lecturer_id = l.id
                ${whereClause}
            `;
            const countRes = await db.query(countQuery, params);
            const total = parseInt(countRes.rows[0].count);

            // Data
            params.push(limit);
            params.push(offset);
            const query = `
            SELECT c.id, c.semester, c.year, c.lecturer_id, c.capacity, 
                   co.name as course_name, co.code as course_code, co.credits,
                   l.name as lecturer_name
            FROM classes c
            JOIN courses co ON c.course_id = co.id
            LEFT JOIN lecturers l ON c.lecturer_id = l.id
            ${whereClause}
            ORDER BY c.year DESC, c.semester DESC
            LIMIT $${params.length - 1} OFFSET $${params.length}
            `;

            const result = await db.query(query, params);
            res.json({
                status: 'success',
                data: result.rows,
                meta: {
                    page,
                    limit,
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (err) { next(err); }
    }

    async updateClass(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const classId = req.params.id;
            const schemaWithLecturer = classSchema.partial().extend({ lecturer_id: z.string().uuid().nullable().optional() });
            const { course_id, semester, year, lecturer_id, capacity } = schemaWithLecturer.parse(req.body);

            // TODO: Adding unique check for course+semester+year+class_group if needed

            const result = await db.query(
                `UPDATE classes 
                 SET course_id = COALESCE($1, course_id), 
                     semester = COALESCE($2, semester), 
                     year = COALESCE($3, year),
                     lecturer_id = $4, -- Allow null explicitly if passed
                     capacity = COALESCE($5, capacity),
                     updated_at = CURRENT_TIMESTAMP
                 WHERE tenant_id = $6 AND id = $7 
                 RETURNING *`,
                [course_id, semester, year, lecturer_id, capacity, tenantId, classId]
            );

            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Class not found' });

            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async deleteClass(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const classId = req.params.id;

            const result = await db.query(
                'DELETE FROM classes WHERE tenant_id = $1 AND id = $2 RETURNING *',
                [tenantId, classId]
            );

            if (result.rowCount === 0) {
                return res.status(404).json({ status: 'fail', message: 'Class not found' });
            }

            res.json({ status: 'success', message: 'Class deleted successfully' });
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
        SELECT 
            e.id, e.status, c.id as class_id, c.semester, c.year, 
            co.name as course_name, co.code as course_code, co.credits,
            l.name as lecturer_name,
            cs.day, cs.start_time, cs.end_time, cs.room, cs.type
        FROM enrollments e
        JOIN students s ON e.student_id = s.id
        JOIN classes c ON e.class_id = c.id
        JOIN courses co ON c.course_id = co.id
        LEFT JOIN lecturers l ON c.lecturer_id = l.id
        LEFT JOIN class_schedules cs ON cs.class_id = c.id
        WHERE e.tenant_id = $1 AND s.user_id = $2
      `, [tenantId, userId]);


            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    // --- SIAKAD Features ---

    async getMySchedules(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const query = `
                SELECT cs.*, co.name as course_name, co.code as course_code, l.name as lecturer_name, c.semester, c.year
                FROM class_schedules cs
                JOIN classes c ON cs.class_id = c.id
                JOIN courses co ON c.course_id = co.id
                LEFT JOIN lecturers l ON c.lecturer_id = l.id
                JOIN enrollments e ON e.class_id = c.id
                JOIN students s ON e.student_id = s.id
                WHERE cs.tenant_id = $1 AND s.user_id = $2
                ORDER BY cs.day, cs.start_time
            `;
            const result = await db.query(query, [tenantId, userId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getMyExams(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const query = `
                SELECT ex.*, co.name as course_name, co.code as course_code
                FROM exams ex
                JOIN classes c ON ex.class_id = c.id
                JOIN courses co ON c.course_id = co.id
                JOIN enrollments e ON e.class_id = c.id
                JOIN students s ON e.student_id = s.id
                WHERE ex.tenant_id = $1 AND s.user_id = $2
                ORDER BY ex.date, ex.start_time
            `;
            const result = await db.query(query, [tenantId, userId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getMyResearchProposals(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const query = `
                SELECT rp.* FROM research_proposals rp
                JOIN students s ON rp.student_id = s.id
                WHERE rp.tenant_id = $1 AND s.user_id = $2
                ORDER BY rp.created_at DESC
            `;
            const result = await db.query(query, [tenantId, userId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async createResearchProposal(req, res, next) {
        try {
            const { title, type, description, supervisor_preferred } = researchProposalSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            // Get student ID
            const studentRes = await db.query('SELECT id FROM students WHERE tenant_id = $1 AND user_id = $2', [tenantId, userId]);
            if (studentRes.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Student not found' });
            const studentId = studentRes.rows[0].id;

            const result = await db.query(
                `INSERT INTO research_proposals (tenant_id, student_id, title, type, description, supervisor_preferred)
                 VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [tenantId, studentId, title, type, description, supervisor_preferred]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMyCertificateRequests(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const query = `
                SELECT cr.* FROM certificate_requests cr
                JOIN students s ON cr.student_id = s.id
                WHERE cr.tenant_id = $1 AND s.user_id = $2
                ORDER BY cr.created_at DESC
            `;
            const result = await db.query(query, [tenantId, userId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async createCertificateRequest(req, res, next) {
        try {
            const { type, purpose, quantity, notes } = certificateRequestSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const studentRes = await db.query('SELECT id FROM students WHERE tenant_id = $1 AND user_id = $2', [tenantId, userId]);
            if (studentRes.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Student not found' });
            const studentId = studentRes.rows[0].id;

            const result = await db.query(
                `INSERT INTO certificate_requests (tenant_id, student_id, type, purpose, quantity, notes)
                 VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                [tenantId, studentId, type, purpose, quantity || 1, notes]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getAnnouncements(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const result = await db.query(
                'SELECT * FROM announcements WHERE tenant_id = $1 AND is_active = TRUE ORDER BY created_at DESC LIMIT 5',
                [tenantId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getMyFinancialStatus(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const query = `
                SELECT fb.* FROM financial_bills fb
                JOIN students s ON fb.student_id = s.id
                WHERE fb.tenant_id = $1 AND s.user_id = $2
                ORDER BY fb.due_date ASC
            `;
            const result = await db.query(query, [tenantId, userId]);

            // Summarize
            const totalUnpaid = result.rows.reduce((sum, bill) => bill.is_paid ? sum : sum + parseFloat(bill.amount), 0);

            res.json({
                status: 'success',
                data: {
                    bills: result.rows,
                    totalUnpaid
                }
            });
        } catch (err) { next(err); }
    }

    async getMyGPA(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            // Simplified GPA calculation: assume score is available and maps to 4.0 scale
            // In a real app, this would be more complex (joining enrollments, classes, courses)
            const query = `
                SELECT g.score, co.credits
                FROM grades g
                JOIN enrollments e ON g.enrollment_id = e.id
                JOIN students s ON e.student_id = s.id
                JOIN classes c ON e.class_id = c.id
                JOIN courses co ON c.course_id = co.id
                WHERE g.tenant_id = $1 AND s.user_id = $2
            `;
            const result = await db.query(query, [tenantId, userId]);

            let totalCredits = 0;
            let totalPoints = 0;

            result.rows.forEach(row => {
                // Mock mapping score to points
                let points = 0;
                if (row.score >= 80) points = 4;
                else if (row.score >= 70) points = 3;
                else if (row.score >= 60) points = 2;
                else if (row.score >= 50) points = 1;

                totalPoints += points * row.credits;
                totalCredits += row.credits;
            });

            const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

            res.json({
                status: 'success',
                data: {
                    gpa: parseFloat(gpa),
                    totalCredits
                }
            });
        } catch (err) { next(err); }
    }

    // --- Attendance ---
    async recordAttendance(req, res, next) {
        try {
            const { class_id, student_id, meeting_number, status } = attendanceSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `INSERT INTO attendances (tenant_id, class_id, student_id, meeting_number, status)
                 VALUES ($1, $2, $3, $4, $5)
                 ON CONFLICT (class_id, student_id, meeting_number)
                 DO UPDATE SET status = EXCLUDED.status, created_at = CURRENT_TIMESTAMP
                 RETURNING *`,
                [tenantId, class_id, student_id, meeting_number, status]
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async getMyAttendance(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const query = `
                SELECT a.* FROM attendances a
                JOIN students s ON a.student_id = s.id
                WHERE a.tenant_id = $1 AND a.class_id = $2 AND s.user_id = $3
                ORDER BY a.meeting_number ASC
            `;
            const result = await db.query(query, [tenantId, classId, userId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getClassAttendanceSummary(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            // Simplified: count status for current student in class
            const query = `
                SELECT 
                    status,
                    COUNT(*) as count
                FROM attendances a
                JOIN students s ON a.student_id = s.id
                WHERE a.tenant_id = $1 AND a.class_id = $2 AND s.user_id = $3
                GROUP BY status
            `;
            const result = await db.query(query, [tenantId, classId, userId]);

            const summary = { hadir: 0, alfa: 0, izin: 0, sakit: 0 };
            result.rows.forEach(row => {
                summary[row.status] = parseInt(row.count);
            });

            res.json({ status: 'success', data: summary });
        } catch (err) { next(err); }
    }

    async getClassStudents(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const query = `
                SELECT s.id, s.name, s.student_number
                FROM enrollments e
                JOIN students s ON e.student_id = s.id
                WHERE e.tenant_id = $1 AND e.class_id = $2
                ORDER BY s.name ASC
            `;
            const result = await db.query(query, [tenantId, classId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async getClassAttendance(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const meetingNumber = req.query.meeting;

            let query = `
                SELECT a.*, s.name as student_name, s.student_number
                FROM attendances a
                JOIN students s ON a.student_id = s.id
                WHERE a.tenant_id = $1 AND a.class_id = $2
            `;
            const params = [tenantId, classId];

            if (meetingNumber) {
                params.push(meetingNumber);
                query += ` AND a.meeting_number = $${params.length}`;
            }

            query += ` ORDER BY s.name ASC`;

            const result = await db.query(query, params);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async recordBatchAttendance(req, res, next) {
        const client = await db.connect();
        try {
            const { class_id, attendances } = req.body; // attendances: [{ student_id, status }]
            const meeting_number = req.body.meeting_number;
            const tenantId = req.user.tenant_id;

            if (!attendances || !Array.isArray(attendances)) {
                return res.status(400).json({ status: 'fail', message: 'Invalid attendances data' });
            }

            await client.query('BEGIN');

            const query = `
                INSERT INTO attendances (tenant_id, class_id, student_id, meeting_number, status)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (class_id, student_id, meeting_number)
                DO UPDATE SET status = EXCLUDED.status, updated_at = CURRENT_TIMESTAMP
            `;

            for (const att of attendances) {
                await client.query(query, [tenantId, class_id, att.student_id, meeting_number, att.status]);
            }

            await client.query('COMMIT');
            res.json({ status: 'success', message: 'Attendance recorded successfully' });
        } catch (err) {
            await client.query('ROLLBACK');
            next(err);
        } finally {
            client.release();
        }
    }

    // --- Grading ---
    async getGradesByClass(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const query = `
                SELECT 
                    e.id as enrollment_id,
                    s.id as student_id,
                    s.name as student_name,
                    s.student_number,
                    g.id as grade_id,
                    g.grade,
                    g.score
                FROM enrollments e
                JOIN students s ON e.student_id = s.id
                LEFT JOIN grades g ON g.enrollment_id = e.id
                WHERE e.tenant_id = $1 AND e.class_id = $2
                ORDER BY s.name ASC
            `;
            const result = await db.query(query, [tenantId, classId]);
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async upsertGrades(req, res, next) {
        const client = await db.connect();
        try {
            const { class_id, grades } = req.body; // grades: [{ enrollment_id, score, grade }]
            const tenantId = req.user.tenant_id;

            if (!grades || !Array.isArray(grades)) {
                return res.status(400).json({ status: 'fail', message: 'Invalid grades data' });
            }

            await client.query('BEGIN');

            const query = `
                INSERT INTO grades (tenant_id, enrollment_id, score, grade)
                VALUES ($1, $2, $3, $4)
                ON CONFLICT (enrollment_id)
                DO UPDATE SET score = EXCLUDED.score, grade = EXCLUDED.grade
            `;

            for (const g of grades) {
                await client.query(query, [tenantId, g.enrollment_id, g.score, g.grade]);
            }

            await client.query('COMMIT');
            res.json({ status: 'success', message: 'Grades saved successfully' });
        } catch (err) {
            await client.query('ROLLBACK');
            next(err);
        } finally {
            client.release();
        }
    }

    // --- Class Schedules ---
    async getSchedulesByClass(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'SELECT * FROM class_schedules WHERE tenant_id = $1 AND class_id = $2 ORDER BY day, start_time',
                [tenantId, classId]
            );
            res.json({ status: 'success', data: result.rows });
        } catch (err) { next(err); }
    }

    async createSchedule(req, res, next) {
        try {
            const { class_id, day, start_time, end_time, room, type } = req.body;
            const tenantId = req.user.tenant_id;

            if (!class_id || !day || !start_time || !end_time) {
                return res.status(400).json({ status: 'fail', message: 'class_id, day, start_time, end_time are required' });
            }

            const result = await db.query(
                `INSERT INTO class_schedules (tenant_id, class_id, day, start_time, end_time, room, type)
                 VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
                [tenantId, class_id, day, start_time, end_time, room || null, type || 'offline']
            );
            res.status(201).json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async updateSchedule(req, res, next) {
        try {
            const { id } = req.params;
            const { day, start_time, end_time, room, type } = req.body;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                `UPDATE class_schedules SET day = $1, start_time = $2, end_time = $3, room = $4, type = $5
                 WHERE id = $6 AND tenant_id = $7 RETURNING *`,
                [day, start_time, end_time, room, type || 'offline', id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Schedule not found' });
            res.json({ status: 'success', data: result.rows[0] });
        } catch (err) { next(err); }
    }

    async deleteSchedule(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await db.query(
                'DELETE FROM class_schedules WHERE id = $1 AND tenant_id = $2 RETURNING id',
                [id, tenantId]
            );
            if (result.rows.length === 0) return res.status(404).json({ status: 'fail', message: 'Schedule not found' });
            res.json({ status: 'success', data: { deleted: result.rows[0].id } });
        } catch (err) { next(err); }
    }
}

module.exports = new AcademicController();
