const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academic.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

// Public routes (none for now, everything requires auth)
router.use(verifyToken);

// Courses
router.post('/courses', academicController.createCourse);
router.get('/courses', academicController.getCourses);
router.put('/courses/:id', academicController.updateCourse);
router.delete('/courses/:id', academicController.deleteCourse);

const studentProfileController = require('../controllers/student-profile.controller');

// Students
router.post('/students', academicController.createStudent);
router.get('/students', academicController.getStudents); // Admin: List all students
router.delete('/students/:id', academicController.deleteStudent); // Admin: Delete student
router.get('/students/me', academicController.getMyProfile); // Basic info from students table
router.get('/students/me/profile', studentProfileController.getMyProfile); // Detailed info
router.put('/students/me/profile', studentProfileController.updateMyProfile);

// Admin Student Management
router.get('/students/:id/profile', studentProfileController.getStudentProfileById);
router.put('/students/:id/profile', studentProfileController.updateStudentProfileById);

// Lecturers
router.post('/lecturers', academicController.createLecturer);
router.get('/lecturers/me', academicController.getMyLecturerProfile);
router.get('/lecturers', academicController.getLecturers);
router.put('/lecturers/:id', academicController.updateLecturer);
router.delete('/lecturers/:id', academicController.deleteLecturer);

// Classes
router.post('/classes', academicController.createClass);
router.get('/classes', academicController.getClasses);
router.put('/classes/:id', academicController.updateClass);
router.delete('/classes/:id', academicController.deleteClass);

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
router.post('/schedules', academicController.createSchedule);
router.put('/schedules/:id', academicController.updateSchedule);
router.delete('/schedules/:id', academicController.deleteSchedule);

// Exams
router.get('/classes/:classId/exams', academicController.getExamsByClass);
router.post('/exams', academicController.createExam);
router.put('/exams/:id', academicController.updateExam);
router.delete('/exams/:id', academicController.deleteExam);

// Announcements Admin
router.get('/announcements/all', academicController.getAllAnnouncements);
router.post('/announcements', academicController.createAnnouncement);
router.put('/announcements/:id', academicController.updateAnnouncement);
router.delete('/announcements/:id', academicController.deleteAnnouncement);

// Financial Bills Admin
router.get('/finance/bills', academicController.getAllBills);
router.post('/finance/bills', academicController.createBill);
router.put('/finance/bills/:id', academicController.updateBill);
router.delete('/finance/bills/:id', academicController.deleteBill);

// Research Proposals Admin
router.get('/research/all', academicController.getAllResearchProposals);
router.put('/research/:id/status', academicController.updateResearchStatus);
router.delete('/research/:id', academicController.deleteResearchProposal);

// Certificate Requests Admin
router.get('/certificates/all', academicController.getAllCertificateRequests);
router.put('/certificates/:id/status', academicController.updateCertificateStatus);
router.delete('/certificates/:id', academicController.deleteCertificateRequest);

module.exports = router;
