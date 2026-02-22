const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academic.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');

// Public routes (none for now, everything requires auth)
router.use(verifyToken);

// Courses
router.post('/courses', isAdmin, academicController.createCourse);
router.get('/courses', academicController.getCourses);
router.put('/courses/:id', isAdmin, academicController.updateCourse);
router.delete('/courses/:id', isAdmin, academicController.deleteCourse);

const studentProfileController = require('../controllers/student-profile.controller');

// Students
router.post('/students', isAdmin, academicController.createStudent);
router.get('/students', isAdmin, academicController.getStudents); // Admin: List all students
router.delete('/students/:id', isAdmin, academicController.deleteStudent); // Admin: Delete student
router.get('/students/me', academicController.getMyProfile); // Basic info from students table
router.get('/students/me/profile', studentProfileController.getMyProfile); // Detailed info
router.put('/students/me/profile', studentProfileController.updateMyProfile);

// Admin Student Management
router.get('/students/:id/profile', isAdmin, studentProfileController.getStudentProfileById);
router.put('/students/:id/profile', isAdmin, studentProfileController.updateStudentProfileById);

// Lecturers
router.post('/lecturers', isAdmin, academicController.createLecturer);
router.get('/lecturers/me', academicController.getMyLecturerProfile);
router.get('/lecturers', academicController.getLecturers);
router.put('/lecturers/:id', isAdmin, academicController.updateLecturer);
router.delete('/lecturers/:id', isAdmin, academicController.deleteLecturer);

// Classes
router.post('/classes', isAdmin, academicController.createClass);
router.get('/classes', academicController.getClasses);
router.put('/classes/:id', isAdmin, academicController.updateClass);
router.delete('/classes/:id', isAdmin, academicController.deleteClass);

// Enrollments
router.post('/enrollments', academicController.enrollStudent);
router.get('/enrollments/my', academicController.getMyEnrollments);

// SIAKAD Features
router.get('/schedules/my', academicController.getMySchedules);
router.get('/exams/my', academicController.getMyExams);
router.get('/research/my', academicController.getMyResearchProposals);
router.post('/research', academicController.createResearchProposal);
router.get('/certificates/my', academicController.getMyCertificateRequests);
router.post('/certificates', academicController.createCertificateRequest);
router.get('/announcements', academicController.getAnnouncements);
router.get('/finance/my-bill', academicController.getMyFinancialStatus);
router.get('/gpa/my', academicController.getMyGPA);

// Attendance
router.post('/attendance', academicController.recordAttendance);
router.post('/attendance/batch', academicController.recordBatchAttendance);
router.get('/classes/:classId/students', academicController.getClassStudents);
router.get('/classes/:classId/attendance', academicController.getClassAttendance);
router.get('/attendance/:classId/my', academicController.getMyAttendance);
router.get('/attendance/:classId/summary', academicController.getClassAttendanceSummary);

// Grading
router.get('/classes/:classId/grades', academicController.getGradesByClass);
router.post('/grades/batch', academicController.upsertGrades);

// Class Schedules
router.get('/classes/:classId/schedules', academicController.getSchedulesByClass);
router.post('/schedules', isAdmin, academicController.createSchedule);
router.put('/schedules/:id', isAdmin, academicController.updateSchedule);
router.delete('/schedules/:id', isAdmin, academicController.deleteSchedule);

// Exams
router.get('/classes/:classId/exams', academicController.getExamsByClass);
router.post('/exams', isAdmin, academicController.createExam);
router.put('/exams/:id', isAdmin, academicController.updateExam);
router.delete('/exams/:id', isAdmin, academicController.deleteExam);

// Announcements Admin
router.get('/announcements/all', isAdmin, academicController.getAllAnnouncements);
router.post('/announcements', isAdmin, academicController.createAnnouncement);
router.put('/announcements/:id', isAdmin, academicController.updateAnnouncement);
router.delete('/announcements/:id', isAdmin, academicController.deleteAnnouncement);

// Financial Bills Admin
router.get('/finance/bills', isAdmin, academicController.getAllBills);
router.post('/finance/bills', isAdmin, academicController.createBill);
router.put('/finance/bills/:id', isAdmin, academicController.updateBill);
router.delete('/finance/bills/:id', isAdmin, academicController.deleteBill);

// Research Proposals Admin
router.get('/research/all', isAdmin, academicController.getAllResearchProposals);
router.put('/research/:id/status', isAdmin, academicController.updateResearchStatus);
router.delete('/research/:id', isAdmin, academicController.deleteResearchProposal);

// Certificate Requests Admin
router.get('/certificates/all', isAdmin, academicController.getAllCertificateRequests);
router.put('/certificates/:id/status', isAdmin, academicController.updateCertificateStatus);
router.delete('/certificates/:id', isAdmin, academicController.deleteCertificateRequest);

module.exports = router;
