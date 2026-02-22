const prisma = require('../lib/prisma');
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

            const course = await prisma.courses.create({
                data: {
                    tenant_id: tenantId,
                    code,
                    name,
                    credits
                }
            });
            res.status(201).json({ status: 'success', data: course });
        } catch (err) {
            if (err.code === 'P2002') return res.status(400).json({ status: 'fail', message: 'Course code already exists' });
            next(err);
        }
    }

    async getCourses(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const skip = (page - 1) * limit;

            const where = {
                tenant_id: tenantId,
                ...(search && {
                    OR: [
                        { code: { contains: search, mode: 'insensitive' } },
                        { name: { contains: search, mode: 'insensitive' } }
                    ]
                })
            };

            const [courses, total] = await prisma.$transaction([
                prisma.courses.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { created_at: 'desc' }
                }),
                prisma.courses.count({ where })
            ]);

            res.json({
                status: 'success',
                data: courses,
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

            const course = await prisma.courses.update({
                where: {
                    id: courseId,
                    tenant_id: tenantId // Prisma doesn't limit updates by non-unique fields in where clause for update directly on ID usually, but we can verify or use updateMany. 
                    // However, ID is unique. To ensure tenant isolation, we should check first or use updateMany (which returns count).
                    // Best practice for tenant isolation on ID update: findFirst to verify, then update.
                    // Or relies on RLS (if active). Here we don't have RLS at DB level likely.
                    // Let's use updateMany to ensure tenant safety within the query? No, updateMany doesn't return data in postgres/prisma easily without a separate read.
                    // Standard Prisma: findUnique then update.
                },
                data: {
                    code,
                    name,
                    credits,
                    updated_at: new Date()
                }
            });
            // Wait, if I want to enforce tenant_id check:
            // The `where` in `update` only accepts unique fields.
            // So if ID is unique globaly (UUID), it's fine.
            // But to be safe, we should check tenant_id.
            // Let's do a findFirst check.
        } catch (err) {
            if (err.code === 'P2025') return res.status(404).json({ status: 'fail', message: 'Course not found' });
            if (err.code === 'P2002') return res.status(400).json({ status: 'fail', message: 'Course code already exists' });
            next(err);
        }
    }
    // RE-WRITING updateCourse CORRECTLY with verification
    async updateCourse(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const courseId = req.params.id;
            const { code, name, credits } = courseSchema.partial().parse(req.body);

            const existing = await prisma.courses.findFirst({
                where: { id: courseId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Course not found' });
            }

            const course = await prisma.courses.update({
                where: { id: courseId },
                data: {
                    code,
                    name,
                    credits,
                    updated_at: new Date()
                }
            });

            res.json({ status: 'success', data: course });
        } catch (err) {
            if (err.code === 'P2002') return res.status(400).json({ status: 'fail', message: 'Course code already exists' });
            next(err);
        }
    }

    async deleteCourse(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const courseId = req.params.id;

            const existing = await prisma.courses.findFirst({
                where: { id: courseId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Course not found' });
            }

            await prisma.courses.delete({
                where: { id: courseId }
            });

            res.json({ status: 'success', message: 'Course deleted successfully' });
        } catch (err) { next(err); }
    }

    // --- Students ---
    async createStudent(req, res, next) {
        try {
            const { user_id, name, student_number } = studentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const student = await prisma.students.create({
                data: {
                    tenant_id: tenantId,
                    user_id,
                    name,
                    platform_student_number: student_number
                }
            });
            res.status(201).json({ status: 'success', data: student });
        } catch (err) { next(err); }
    }

    async deleteStudent(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const studentId = req.params.id;

            const existing = await prisma.students.findFirst({
                where: { id: studentId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            await prisma.students.delete({
                where: { id: studentId }
            });

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
            const entryYear = req.query.entry_year ? parseInt(req.query.entry_year) : undefined;
            const status = req.query.status || '';
            const skip = (page - 1) * limit;

            const where = {
                tenant_id: tenantId,
                ...(search && {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { platform_student_number: { contains: search, mode: 'insensitive' } }
                    ]
                }),
                ...(studyProgram && { study_program: studyProgram }),
                ...(entryYear && { entry_year: entryYear }),
                ...(status && { status: status })
            };

            const [students, total] = await prisma.$transaction([
                prisma.students.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { created_at: 'desc' }
                }),
                prisma.students.count({ where })
            ]);

            res.json({
                status: 'success',
                data: students,
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

            const student = await prisma.students.findFirst({
                where: {
                    tenant_id: tenantId,
                    user_id: userId
                }
            });
            if (!student) return res.status(404).json({ status: 'fail', message: 'Student profile not found' });
            res.json({ status: 'success', data: student });
        } catch (err) { next(err); }
    }

    // --- Lecturers ---
    async createLecturer(req, res, next) {
        try {
            const { user_id, name, lecturer_number } = lecturerSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            const lecturer = await prisma.lecturers.create({
                data: {
                    tenant_id: tenantId,
                    user_id,
                    name,
                    platform_lecturer_number: lecturer_number
                }
            });
            res.status(201).json({ status: 'success', data: lecturer });
        } catch (err) { next(err); }
    }

    async getMyLecturerProfile(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const lecturer = await prisma.lecturers.findFirst({
                where: {
                    tenant_id: tenantId,
                    user_id: userId
                }
            });
            if (!lecturer) return res.status(404).json({ status: 'fail', message: 'Lecturer profile not found' });
            res.json({ status: 'success', data: lecturer });
        } catch (err) { next(err); }
    }

    async getLecturers(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const skip = (page - 1) * limit;

            const where = {
                tenant_id: tenantId,
                ...(search && {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { platform_lecturer_number: { contains: search, mode: 'insensitive' } }
                    ]
                })
            };

            const [lecturers, total] = await prisma.$transaction([
                prisma.lecturers.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: { created_at: 'desc' }
                }),
                prisma.lecturers.count({ where })
            ]);

            res.json({
                status: 'success',
                data: lecturers,
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

            const existing = await prisma.lecturers.findFirst({
                where: { id: lecturerId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Lecturer not found' });
            }

            const lecturer = await prisma.lecturers.update({
                where: { id: lecturerId },
                data: {
                    name,
                    platform_lecturer_number: lecturer_number,
                    updated_at: new Date()
                }
            });

            res.json({ status: 'success', data: lecturer });
        } catch (err) { next(err); }
    }

    async deleteLecturer(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const lecturerId = req.params.id;

            const existing = await prisma.lecturers.findFirst({
                where: { id: lecturerId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Lecturer not found' });
            }

            await prisma.lecturers.delete({
                where: { id: lecturerId }
            });

            res.json({ status: 'success', message: 'Lecturer deleted successfully' });
        } catch (err) { next(err); }
    }

    // --- Classes ---
    async createClass(req, res, next) {
        try {
            const schemaWithLecturer = classSchema.extend({ lecturer_id: z.string().uuid().optional() });
            const { course_id, semester, year, lecturer_id } = schemaWithLecturer.parse(req.body);
            const tenantId = req.user.tenant_id;

            const newClass = await prisma.classes.create({
                data: {
                    tenant_id: tenantId,
                    course_id,
                    semester,
                    year,
                    lecturer_id
                }
            });
            res.status(201).json({ status: 'success', data: newClass });
        } catch (err) { next(err); }
    }

    async getClasses(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const { lecturer_id } = req.query;
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const search = req.query.search || '';
            const skip = (page - 1) * limit;

            const where = {
                tenant_id: tenantId,
                ...(lecturer_id && { lecturer_id }),
                ...(req.query.semester && { semester: req.query.semester }),
                ...(req.query.year && { year: parseInt(req.query.year) }),
                ...(search && {
                    courses: {
                        OR: [
                            { name: { contains: search, mode: 'insensitive' } },
                            { code: { contains: search, mode: 'insensitive' } }
                        ]
                    }
                })
            };

            const [classes, total] = await prisma.$transaction([
                prisma.classes.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy: [{ year: 'desc' }, { semester: 'desc' }],
                    include: {
                        courses: true,
                        lecturers: true
                    }
                }),
                prisma.classes.count({ where })
            ]);

            // Map to match simpler structure if needed, or return as is.
            // Original SQL returned flattened fields.
            const data = classes.map(c => ({
                id: c.id,
                semester: c.semester,
                year: c.year,
                lecturer_id: c.lecturer_id,
                capacity: c.capacity,
                course_name: c.courses.name,
                course_code: c.courses.code,
                credits: c.courses.credits,
                lecturer_name: c.lecturers?.name || null
            }));

            res.json({
                status: 'success',
                data,
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

            const existing = await prisma.classes.findFirst({
                where: { id: classId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Class not found' });
            }

            const updatedClass = await prisma.classes.update({
                where: { id: classId },
                data: {
                    course_id,
                    semester,
                    year,
                    lecturer_id,
                    capacity,
                    updated_at: new Date()
                }
            });

            res.json({ status: 'success', data: updatedClass });
        } catch (err) { next(err); }
    }

    async deleteClass(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const classId = req.params.id;

            const existing = await prisma.classes.findFirst({
                where: { id: classId, tenant_id: tenantId }
            });

            if (!existing) {
                return res.status(404).json({ status: 'fail', message: 'Class not found' });
            }

            await prisma.classes.delete({
                where: { id: classId }
            });

            res.json({ status: 'success', message: 'Class deleted successfully' });
        } catch (err) { next(err); }
    }

    // --- Enrollments ---
    async enrollStudent(req, res, next) {
        try {
            const { class_id, student_id } = enrollmentSchema.parse(req.body);
            const tenantId = req.user.tenant_id;

            // Check if already enrolled to avoid race conditions or rely on DB constraint
            const existing = await prisma.enrollments.findFirst({
                where: { class_id, student_id }
            });
            if (existing) return res.status(400).json({ status: 'fail', message: 'Already enrolled' });

            const enrollment = await prisma.enrollments.create({
                data: {
                    tenant_id: tenantId,
                    class_id,
                    student_id
                }
            });
            res.status(201).json({ status: 'success', data: enrollment });
        } catch (err) {
            if (err.code === 'P2002') return res.status(400).json({ status: 'fail', message: 'Already enrolled' });
            next(err);
        }
    }

    async getMyEnrollments(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const enrollments = await prisma.enrollments.findMany({
                where: {
                    tenant_id: tenantId,
                    students: { user_id: userId }
                },
                include: {
                    classes: {
                        include: {
                            courses: true,
                            lecturers: true,
                            class_schedules: true
                        }
                    }
                }
            });

            // Map and flatten. If class has multiple schedules, logic depends on original behavior.
            // Original: `cs.day, cs.start_time...`
            // If a class has 2 schedules, original query returns 2 rows for same enrollment?
            // Yes, standard SQL join behavior.
            // Converting to Prisma:
            // We get enrollments. simple map.
            // IF we want to replicate SQL "row per schedule":
            const data = [];
            for (const e of enrollments) {
                const schedules = e.classes.class_schedules || [];
                if (schedules.length === 0) {
                    // Still return row with null schedule info? 
                    // Original used LEFT JOIN class_schedules. So yes.
                    data.push({
                        id: e.id,
                        status: e.status,
                        class_id: e.classes.id,
                        semester: e.classes.semester,
                        year: e.classes.year,
                        course_name: e.classes.courses.name,
                        course_code: e.classes.courses.code,
                        credits: e.classes.courses.credits,
                        lecturer_name: e.classes.lecturers?.name || null,
                        day: null, start_time: null, end_time: null, room: null, type: null
                    });
                } else {
                    for (const s of schedules) {
                        data.push({
                            id: e.id,
                            status: e.status,
                            class_id: e.classes.id,
                            semester: e.classes.semester,
                            year: e.classes.year,
                            course_name: e.classes.courses.name,
                            course_code: e.classes.courses.code,
                            credits: e.classes.courses.credits,
                            lecturer_name: e.classes.lecturers?.name || null,
                            day: s.day,
                            start_time: s.start_time,
                            end_time: s.end_time,
                            room: s.room,
                            type: s.type
                        });
                    }
                }
            }

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    // --- SIAKAD Features ---

    async getMySchedules(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            // Find schedules where class has enrollment for this student
            const schedules = await prisma.class_schedules.findMany({
                where: {
                    tenant_id: tenantId,
                    classes: {
                        enrollments: {
                            some: {
                                students: { user_id: userId }
                            }
                        }
                    }
                },
                include: {
                    classes: {
                        include: {
                            courses: true,
                            lecturers: true
                        }
                    }
                },
                orderBy: [
                    { day: 'asc' }, // enum or string sorting? Prisma sorts enums by definition order usually or string.
                    { start_time: 'asc' }
                ]
            });

            // Map to flat
            const data = schedules.map(s => ({
                ...s,
                course_name: s.classes.courses.name,
                course_code: s.classes.courses.code,
                lecturer_name: s.classes.lecturers?.name || null,
                semester: s.classes.semester,
                year: s.classes.year
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async getMyExams(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const exams = await prisma.exams.findMany({
                where: {
                    tenant_id: tenantId,
                    classes: {
                        enrollments: {
                            some: {
                                students: { user_id: userId }
                            }
                        }
                    }
                },
                include: {
                    classes: {
                        include: {
                            courses: true
                        }
                    }
                },
                orderBy: [
                    { date: 'asc' },
                    { start_time: 'asc' }
                ]
            });

            const data = exams.map(ex => ({
                ...ex,
                course_name: ex.classes.courses.name,
                course_code: ex.classes.courses.code
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async getMyResearchProposals(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const proposals = await prisma.research_proposals.findMany({
                where: {
                    tenant_id: tenantId,
                    students: { user_id: userId }
                },
                orderBy: { created_at: 'desc' }
            });

            res.json({ status: 'success', data: proposals });
        } catch (err) { next(err); }
    }

    async createResearchProposal(req, res, next) {
        try {
            const { title, type, description, supervisor_preferred } = researchProposalSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const student = await prisma.students.findFirst({
                where: { tenant_id: tenantId, user_id: userId }
            });

            if (!student) return res.status(404).json({ status: 'fail', message: 'Student not found' });

            const proposal = await prisma.research_proposals.create({
                data: {
                    tenant_id: tenantId,
                    student_id: student.id,
                    title,
                    type,
                    description,
                    supervisor_preferred
                }
            });
            res.status(201).json({ status: 'success', data: proposal });
        } catch (err) { next(err); }
    }

    async getMyCertificateRequests(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const requests = await prisma.certificate_requests.findMany({
                where: {
                    tenant_id: tenantId,
                    students: { user_id: userId }
                },
                orderBy: { created_at: 'desc' }
            });

            res.json({ status: 'success', data: requests });
        } catch (err) { next(err); }
    }

    async createCertificateRequest(req, res, next) {
        try {
            const { type, purpose, quantity, notes } = certificateRequestSchema.parse(req.body);
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const student = await prisma.students.findFirst({
                where: { tenant_id: tenantId, user_id: userId }
            });

            if (!student) return res.status(404).json({ status: 'fail', message: 'Student not found' });

            const request = await prisma.certificate_requests.create({
                data: {
                    tenant_id: tenantId,
                    student_id: student.id,
                    type,
                    purpose,
                    quantity: quantity || 1,
                    notes
                }
            });
            res.status(201).json({ status: 'success', data: request });
        } catch (err) { next(err); }
    }

    async getAnnouncements(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const announcements = await prisma.announcements.findMany({
                where: {
                    tenant_id: tenantId,
                    is_active: true
                },
                orderBy: { created_at: 'desc' },
                take: 5
            });
            res.json({ status: 'success', data: announcements });
        } catch (err) { next(err); }
    }

    async getMyFinancialStatus(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const bills = await prisma.financial_bills.findMany({
                where: {
                    tenant_id: tenantId,
                    students: { user_id: userId }
                },
                orderBy: { due_date: 'asc' }
            });

            const totalUnpaid = bills.reduce((sum, bill) => bill.is_paid ? sum : sum + Number(bill.amount), 0);

            res.json({
                status: 'success',
                data: {
                    bills,
                    totalUnpaid
                }
            });
        } catch (err) { next(err); }
    }

    async getMyGPA(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const grades = await prisma.grades.findMany({
                where: {
                    tenant_id: tenantId,
                    enrollments: {
                        students: { user_id: userId }
                    }
                },
                include: {
                    enrollments: {
                        include: {
                            classes: {
                                include: {
                                    courses: true
                                }
                            }
                        }
                    }
                }
            });

            let totalCredits = 0;
            let totalPoints = 0;

            grades.forEach(g => {
                const credits = g.enrollments.classes.courses.credits;
                const score = g.score; // Assuming score is number

                let points = 0;
                if (score >= 80) points = 4;
                else if (score >= 70) points = 3;
                else if (score >= 60) points = 2;
                else if (score >= 50) points = 1;

                totalPoints += points * credits;
                totalCredits += credits;
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

            const attendance = await prisma.attendances.upsert({
                where: {
                    class_id_student_id_meeting_number: {
                        class_id,
                        student_id,
                        meeting_number
                    }
                },
                update: {
                    status,
                    created_at: new Date() // Updates timestamp on change
                },
                create: {
                    tenant_id: tenantId,
                    class_id,
                    student_id,
                    meeting_number,
                    status
                }
            });
            res.status(201).json({ status: 'success', data: attendance });
        } catch (err) { next(err); }
    }

    async getMyAttendance(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            const attendances = await prisma.attendances.findMany({
                where: {
                    tenant_id: tenantId,
                    class_id: classId,
                    students: { user_id: userId }
                },
                orderBy: { meeting_number: 'asc' }
            });

            res.json({ status: 'success', data: attendances });
        } catch (err) { next(err); }
    }

    async getClassAttendanceSummary(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const userId = req.user.sub;

            // Simplified: count status for current student in class
            // Check if userId is passed for context, but usually this is for the *student* viewing their own.
            // "getting class attendance summary" for a student?
            // SQL: WHERE ... s.user_id = $3. Yes, for the student.

            const group = await prisma.attendances.groupBy({
                by: ['status'],
                where: {
                    tenant_id: tenantId,
                    class_id: classId,
                    students: { user_id: userId }
                },
                _count: {
                    status: true
                }
            });

            const summary = { hadir: 0, alfa: 0, izin: 0, sakit: 0 };
            group.forEach(g => {
                if (g.status) summary[g.status] = g._count.status;
            });

            res.json({ status: 'success', data: summary });
        } catch (err) { next(err); }
    }

    async getClassStudents(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const enrollments = await prisma.enrollments.findMany({
                where: {
                    tenant_id: tenantId,
                    class_id: classId
                },
                include: {
                    students: {
                        select: {
                            id: true,
                            name: true,
                            platform_student_number: true
                        }
                    }
                },
                orderBy: { students: { name: 'asc' } }
            });

            const data = enrollments.map(e => ({
                id: e.students.id,
                name: e.students.name,
                student_number: e.students.platform_student_number
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async getClassAttendance(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;
            const meetingNumber = req.query.meeting ? parseInt(req.query.meeting) : undefined;

            const attendances = await prisma.attendances.findMany({
                where: {
                    tenant_id: tenantId,
                    class_id: classId,
                    ...(meetingNumber && { meeting_number: meetingNumber })
                },
                include: {
                    students: {
                        select: {
                            name: true,
                            platform_student_number: true
                        }
                    }
                },
                orderBy: { students: { name: 'asc' } }
            });

            const data = attendances.map(a => ({
                ...a,
                student_name: a.students.name,
                student_number: a.students.platform_student_number
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async recordBatchAttendance(req, res, next) {
        try {
            const { class_id, attendances } = req.body; // attendances: [{ student_id, status }]
            const meeting_number = req.body.meeting_number;
            const tenantId = req.user.tenant_id;

            if (!attendances || !Array.isArray(attendances)) {
                return res.status(400).json({ status: 'fail', message: 'Invalid attendances data' });
            }

            // Using transaction to batch upserts
            await prisma.$transaction(
                attendances.map(att =>
                    prisma.attendances.upsert({
                        where: {
                            class_id_student_id_meeting_number: {
                                class_id,
                                student_id: att.student_id,
                                meeting_number
                            }
                        },
                        update: {
                            status: att.status,
                            created_at: new Date()
                        },
                        create: {
                            tenant_id: tenantId,
                            class_id,
                            student_id: att.student_id,
                            meeting_number,
                            status: att.status
                        }
                    })
                )
            );

            res.json({ status: 'success', message: 'Attendance recorded successfully' });
        } catch (err) { next(err); }
    }

    // --- Grading ---
    async getGradesByClass(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const enrollments = await prisma.enrollments.findMany({
                where: {
                    tenant_id: tenantId,
                    class_id: classId
                },
                include: {
                    students: true,
                    grades: true
                },
                orderBy: { students: { name: 'asc' } }
            });

            const data = enrollments.map(e => {
                const grade = e.grades.length > 0 ? e.grades[0] : null; // Assume 1-to-1 effectively
                return {
                    enrollment_id: e.id,
                    student_id: e.students.id,
                    student_name: e.students.name,
                    student_number: e.students.platform_student_number,
                    grade_id: grade?.id || null,
                    grade: grade?.grade || null,
                    score: grade?.score || null
                };
            });

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async upsertGrades(req, res, next) {
        try {
            const { class_id, grades } = req.body; // grades: [{ enrollment_id, score, grade }]
            const tenantId = req.user.tenant_id;

            if (!grades || !Array.isArray(grades)) {
                return res.status(400).json({ status: 'fail', message: 'Invalid grades data' });
            }

            // Manually check existence and upsert because strict unique constraint might be missing in schema
            // but we want logically unique grade per enrollment
            await prisma.$transaction(async (tx) => {
                for (const g of grades) {
                    const existing = await tx.grades.findFirst({
                        where: { enrollment_id: g.enrollment_id }
                    });

                    if (existing) {
                        await tx.grades.update({
                            where: { id: existing.id },
                            data: { score: g.score, grade: g.grade }
                        });
                    } else {
                        await tx.grades.create({
                            data: {
                                tenant_id: tenantId,
                                enrollment_id: g.enrollment_id,
                                score: g.score,
                                grade: g.grade
                            }
                        });
                    }
                }
            });

            res.json({ status: 'success', message: 'Grades saved successfully' });
        } catch (err) { next(err); }
    }

    // --- Class Schedules ---
    async getSchedulesByClass(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const result = await prisma.class_schedules.findMany({
                where: {
                    tenant_id: tenantId,
                    class_id: classId
                },
                orderBy: [
                    { day: 'asc' }, // enum sorting might need check, but string usually fine
                    { start_time: 'asc' }
                ]
            });
            res.json({ status: 'success', data: result });
        } catch (err) { next(err); }
    }

    async createSchedule(req, res, next) {
        try {
            const { class_id, day, start_time, end_time, room, type } = req.body;
            const tenantId = req.user.tenant_id;

            if (!class_id || !day || !start_time || !end_time) {
                return res.status(400).json({ status: 'fail', message: 'class_id, day, start_time, end_time are required' });
            }

            const schedule = await prisma.class_schedules.create({
                data: {
                    tenant_id: tenantId,
                    class_id,
                    day,
                    start_time,
                    end_time,
                    room: room || null,
                    type: type || 'offline'
                }
            });
            res.status(201).json({ status: 'success', data: schedule });
        } catch (err) { next(err); }
    }

    async updateSchedule(req, res, next) {
        try {
            const { id } = req.params;
            const { day, start_time, end_time, room, type } = req.body;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.class_schedules.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Schedule not found' });

            const schedule = await prisma.class_schedules.update({
                where: { id },
                data: {
                    day,
                    start_time,
                    end_time,
                    room,
                    type: type || 'offline'
                }
            });
            res.json({ status: 'success', data: schedule });
        } catch (err) { next(err); }
    }

    async deleteSchedule(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.class_schedules.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Schedule not found' });

            await prisma.class_schedules.delete({ where: { id } });

            res.json({ status: 'success', data: { deleted: id } });
        } catch (err) { next(err); }
    }

    // --- Exams ---
    async getExamsByClass(req, res, next) {
        try {
            const { classId } = req.params;
            const tenantId = req.user.tenant_id;

            const exams = await prisma.exams.findMany({
                where: {
                    tenant_id: tenantId,
                    class_id: classId
                },
                include: {
                    classes: {
                        include: {
                            courses: true // Relation name is 'courses' in classes model
                        }
                    }
                },
                orderBy: [
                    { date: 'asc' },
                    { start_time: 'asc' }
                ]
            });

            // Flatten
            const data = exams.map(e => ({
                ...e,
                course_name: e.classes.courses.name,
                course_code: e.classes.courses.code
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async createExam(req, res, next) {
        try {
            const { class_id, type, date, start_time, end_time, room } = req.body;
            const tenantId = req.user.tenant_id;

            if (!class_id || !type || !date || !start_time || !end_time) {
                return res.status(400).json({ status: 'fail', message: 'class_id, type, date, start_time, end_time are required' });
            }

            const exam = await prisma.exams.create({
                data: {
                    tenant_id: tenantId,
                    class_id,
                    type,
                    date,
                    start_time,
                    end_time,
                    room: room || null
                }
            });
            res.status(201).json({ status: 'success', data: exam });
        } catch (err) { next(err); }
    }

    async updateExam(req, res, next) {
        try {
            const { id } = req.params;
            const { type, date, start_time, end_time, room } = req.body;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.exams.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Exam not found' });

            const exam = await prisma.exams.update({
                where: { id },
                data: { type, date, start_time, end_time, room }
            });
            res.json({ status: 'success', data: exam });
        } catch (err) { next(err); }
    }

    async deleteExam(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.exams.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Exam not found' });

            await prisma.exams.delete({ where: { id } });
            res.json({ status: 'success', data: { deleted: id } });
        } catch (err) { next(err); }
    }

    // --- Announcements Admin ---
    async getAllAnnouncements(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const announcements = await prisma.announcements.findMany({
                where: { tenant_id: tenantId },
                orderBy: { created_at: 'desc' }
            });
            res.json({ status: 'success', data: announcements });
        } catch (err) { next(err); }
    }

    async createAnnouncement(req, res, next) {
        try {
            const { title, content, type } = req.body;
            const tenantId = req.user.tenant_id;

            if (!title || !content) {
                return res.status(400).json({ status: 'fail', message: 'title and content are required' });
            }

            const announcement = await prisma.announcements.create({
                data: {
                    tenant_id: tenantId,
                    title,
                    content,
                    type: type || 'general',
                    is_active: true
                }
            });
            res.status(201).json({ status: 'success', data: announcement });
        } catch (err) { next(err); }
    }

    async updateAnnouncement(req, res, next) {
        try {
            const { id } = req.params;
            const { title, content, type, is_active } = req.body;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.announcements.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Announcement not found' });

            const announcement = await prisma.announcements.update({
                where: { id },
                data: {
                    title,
                    content,
                    type: type || 'general',
                    is_active: is_active !== undefined ? is_active : true
                }
            });
            res.json({ status: 'success', data: announcement });
        } catch (err) { next(err); }
    }

    async deleteAnnouncement(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.announcements.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Announcement not found' });

            await prisma.announcements.delete({ where: { id } });
            res.json({ status: 'success', data: { deleted: id } });
        } catch (err) { next(err); }
    }

    // --- Financial Bills Admin ---
    async getAllBills(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const bills = await prisma.financial_bills.findMany({
                where: { tenant_id: tenantId },
                include: {
                    students: {
                        select: { name: true, platform_student_number: true } // Assuming platform_student_number is the field mapped to student_number in previous code
                    }
                },
                orderBy: { created_at: 'desc' }
            });

            const data = bills.map(b => ({
                ...b,
                student_name: b.students.name,
                student_number: b.students.platform_student_number
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async createBill(req, res, next) {
        try {
            const { student_id, title, amount, due_date } = req.body;
            const tenantId = req.user.tenant_id;

            if (!student_id || !title || !amount) {
                return res.status(400).json({ status: 'fail', message: 'student_id, title, amount are required' });
            }

            const bill = await prisma.financial_bills.create({
                data: {
                    tenant_id: tenantId,
                    student_id,
                    title,
                    amount,
                    due_date: due_date || null
                }
            });
            res.status(201).json({ status: 'success', data: bill });
        } catch (err) { next(err); }
    }

    async updateBill(req, res, next) {
        try {
            const { id } = req.params;
            const { title, amount, is_paid, due_date } = req.body;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.financial_bills.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Bill not found' });

            const bill = await prisma.financial_bills.update({
                where: { id },
                data: { title, amount, is_paid: is_paid || false, due_date }
            });
            res.json({ status: 'success', data: bill });
        } catch (err) { next(err); }
    }

    async deleteBill(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.financial_bills.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Bill not found' });

            await prisma.financial_bills.delete({ where: { id } });
            res.json({ status: 'success', data: { deleted: id } });
        } catch (err) { next(err); }
    }

    // --- Research Proposals Admin ---
    async getAllResearchProposals(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const proposals = await prisma.research_proposals.findMany({
                where: { tenant_id: tenantId },
                include: {
                    students: {
                        select: { name: true, platform_student_number: true }
                    }
                },
                orderBy: { created_at: 'desc' }
            });

            const data = proposals.map(p => ({
                ...p,
                student_name: p.students.name,
                student_number: p.students.platform_student_number
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async updateResearchStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status } = req.body;
            const tenantId = req.user.tenant_id;

            if (!['pending', 'approved', 'rejected'].includes(status)) {
                return res.status(400).json({ status: 'fail', message: 'Invalid status' });
            }

            const existing = await prisma.research_proposals.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Proposal not found' });

            const proposal = await prisma.research_proposals.update({
                where: { id },
                data: { status }
            });
            res.json({ status: 'success', data: proposal });
        } catch (err) { next(err); }
    }

    async deleteResearchProposal(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.research_proposals.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Proposal not found' });

            await prisma.research_proposals.delete({ where: { id } });
            res.json({ status: 'success', data: { deleted: id } });
        } catch (err) { next(err); }
    }

    // --- Certificate Requests Admin ---
    async getAllCertificateRequests(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const requests = await prisma.certificate_requests.findMany({
                where: { tenant_id: tenantId },
                include: {
                    students: {
                        select: { name: true, platform_student_number: true }
                    }
                },
                orderBy: { created_at: 'desc' }
            });

            const data = requests.map(r => ({
                ...r,
                student_name: r.students.name,
                student_number: r.students.platform_student_number
            }));

            res.json({ status: 'success', data });
        } catch (err) { next(err); }
    }

    async updateCertificateStatus(req, res, next) {
        try {
            const { id } = req.params;
            const { status, rejection_reason, download_url } = req.body;
            const tenantId = req.user.tenant_id;

            if (!['pending', 'processing', 'finished', 'rejected'].includes(status)) {
                return res.status(400).json({ status: 'fail', message: 'Invalid status' });
            }

            const existing = await prisma.certificate_requests.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Request not found' });

            const request = await prisma.certificate_requests.update({
                where: { id },
                data: {
                    status,
                    rejection_reason: rejection_reason || null,
                    download_url: download_url || null
                }
            });
            res.json({ status: 'success', data: request });
        } catch (err) { next(err); }
    }

    async deleteCertificateRequest(req, res, next) {
        try {
            const { id } = req.params;
            const tenantId = req.user.tenant_id;

            const existing = await prisma.certificate_requests.findFirst({
                where: { id, tenant_id: tenantId }
            });
            if (!existing) return res.status(404).json({ status: 'fail', message: 'Request not found' });

            await prisma.certificate_requests.delete({ where: { id } });
            res.json({ status: 'success', data: { deleted: id } });
        } catch (err) { next(err); }
    }
}

module.exports = new AcademicController();
