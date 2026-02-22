const prisma = require('../lib/prisma');
const { z } = require('zod');

// Validation Schema for Profile (Keep as is)
const studentProfileSchema = z.object({
    // Academic
    study_program: z.string().optional(),
    current_semester: z.coerce.number().optional(),
    class_program: z.string().optional(),
    entry_year: z.coerce.number().optional(),
    entry_path: z.string().optional(),
    entry_batch: z.string().optional(),
    academic_group: z.string().optional(),
    academic_advisor: z.string().optional(),

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
            const student = await prisma.students.findFirst({
                where: {
                    tenant_id: tenantId,
                    user_id: userId
                }
            });

            if (!student) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            // Get the specific profile details
            const profileData = await prisma.student_profiles.findFirst({
                where: {
                    tenant_id: tenantId,
                    student_id: student.id
                }
            }) || {};

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
            const student = await prisma.students.findFirst({
                where: {
                    tenant_id: tenantId,
                    user_id: userId
                }
            });

            if (!student) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            const updatedProfile = await updateProfileHelper(tenantId, student.id, data);
            res.json({ status: 'success', data: updatedProfile });

        } catch (err) {
            next(err);
        }
    }

    // --- Admin Methods ---

    async getStudentProfileById(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const studentId = req.params.id;

            // First get the student basic info
            const student = await prisma.students.findFirst({
                where: {
                    tenant_id: tenantId,
                    id: studentId
                }
            });

            if (!student) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            // Get the specific profile details
            const profileData = await prisma.student_profiles.findFirst({
                where: {
                    tenant_id: tenantId,
                    student_id: studentId
                }
            }) || {};

            // Merge basic student info with detailed profile
            const fullProfile = {
                ...student,
                ...profileData,
                id: student.id,
                profile_id: profileData.id
            };

            res.json({ status: 'success', data: fullProfile });
        } catch (err) {
            next(err);
        }
    }

    async updateStudentProfileById(req, res, next) {
        try {
            const tenantId = req.user.tenant_id;
            const studentId = req.params.id;
            const data = studentProfileSchema.parse(req.body);

            // Verify student exists
            const student = await prisma.students.findFirst({
                where: {
                    tenant_id: tenantId,
                    id: studentId
                }
            });

            if (!student) {
                return res.status(404).json({ status: 'fail', message: 'Student not found' });
            }

            const updatedProfile = await updateProfileHelper(tenantId, studentId, data);
            res.json({ status: 'success', data: updatedProfile });

        } catch (err) {
            next(err);
        }
    }
}

async function updateProfileHelper(tenantId, studentId, data) {
    // Split data into students table fields and student_profiles table fields
    const studentColumnsList = [
        'platform_student_number', 'name', 'photo_url',
        'study_program', 'current_semester', 'class_program',
        'entry_year', 'entry_path', 'entry_batch',
        'academic_group', 'academic_advisor', 'status'
    ];

    const studentData = {};
    const profileData = {};

    Object.keys(data).forEach(key => {
        if (data[key] !== undefined) {
            if (studentColumnsList.includes(key)) {
                studentData[key] = data[key];
            } else {
                profileData[key] = data[key];
            }
        }
    });

    // Transaction to update both tables
    return await prisma.$transaction(async (tx) => {
        let updatedStudent = null;
        let updatedProfile = null;

        // 1. Update students table
        if (Object.keys(studentData).length > 0) {
            updatedStudent = await tx.students.update({
                where: { id: studentId },
                data: {
                    ...studentData,
                    updated_at: new Date()
                }
            });
        } else {
            updatedStudent = await tx.students.findUnique({ where: { id: studentId } });
        }

        // 2. Update/Insert student_profiles table
        if (Object.keys(profileData).length > 0) {
            const existingProfile = await tx.student_profiles.findFirst({
                where: { student_id: studentId }
            });

            if (existingProfile) {
                updatedProfile = await tx.student_profiles.update({
                    where: { id: existingProfile.id }, // Assuming id exists, or use compound key if supported
                    data: {
                        ...profileData,
                        updated_at: new Date()
                    }
                });
            } else {
                updatedProfile = await tx.student_profiles.create({
                    data: {
                        tenant_id: tenantId,
                        student_id: studentId,
                        ...profileData
                    }
                });
            }
        } else {
            updatedProfile = await tx.student_profiles.findFirst({ where: { student_id: studentId } }) || {};
        }

        return {
            ...updatedStudent,
            ...updatedProfile,
            id: updatedStudent.id,
            profile_id: updatedProfile.id
        };
    });
}

module.exports = new StudentProfileController();
