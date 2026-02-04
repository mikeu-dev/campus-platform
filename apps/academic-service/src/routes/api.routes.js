const express = require('express');
const router = express.Router();
const academicController = require('../controllers/academic.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

// Public routes (none for now, everything requires auth)
router.use(verifyToken);

// Courses
router.post('/courses', academicController.createCourse);
router.get('/courses', academicController.getCourses);

// Students
router.post('/students', academicController.createStudent);
router.get('/students/me', academicController.getMyProfile);

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

module.exports = router;
