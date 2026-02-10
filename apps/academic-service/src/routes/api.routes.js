const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academic.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

// Public routes (none for now, everything requires auth)
router.use(verifyToken);

// Courses
router.post('/courses', academicController.createCourse);
router.get('/courses', academicController.getCourses);

const studentProfileController = require('../controllers/student-profile.controller');

// Students
router.post('/students', academicController.createStudent);
router.get('/students', academicController.getStudents); // Admin: List all students
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

// Classes
router.post('/classes', academicController.createClass);
router.get('/classes', academicController.getClasses);

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
router.get('/attendance/:classId/my', academicController.getMyAttendance);
router.get('/attendance/:classId/summary', academicController.getClassAttendanceSummary);


module.exports = router;
