const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learning.controller');
const { verifyToken, isAdmin } = require('../middlewares/auth.middleware');
const { upload, uploadToMinio } = require('../middlewares/upload.middleware');

router.use(verifyToken);

// Files matches /files/upload
router.post('/upload', upload.single('file'), uploadToMinio, learningController.uploadFile);

// Class Resources
router.post('/classes/:classId/materials', isAdmin, learningController.addMaterial);
router.get('/classes/:classId/materials', learningController.getMaterials);

router.post('/classes/:classId/assignments', isAdmin, learningController.createAssignment);
router.get('/classes/:classId/assignments', learningController.getAssignments);

// Assignment Submissions
router.post('/assignments/:assignmentId/submit', learningController.submitAssignment);
router.get('/assignments/:assignmentId/my-submission', learningController.getMySubmission);
router.get('/assignments/:assignmentId/submissions', isAdmin, learningController.getSubmissions); // Lecturer/Admin View

router.post('/submissions/:submissionId/grade', isAdmin, learningController.gradeSubmission);

// Notifications
router.post('/notifications', isAdmin, learningController.createNotification);
router.get('/notifications', learningController.getNotifications);
router.get('/notifications/unread-count', learningController.getUnreadCount);
router.patch('/notifications/:notificationId/read', learningController.markNotificationRead);

// Student Analytics
router.get('/students/:studentId/grades', learningController.getStudentGrades);
router.get('/students/:studentId/stats', learningController.getStudentStats);
router.get('/students/:studentId/deadlines', learningController.getStudentDeadlines);

// Discussions
router.post('/classes/:classId/discussions', learningController.createDiscussion);
router.get('/classes/:classId/discussions', learningController.getDiscussions);

// Quizzes
router.post('/classes/:classId/quizzes', isAdmin, learningController.createQuiz);
router.get('/classes/:classId/quizzes', learningController.getQuizzes);
router.post('/quizzes/:quizId/questions', isAdmin, learningController.addQuizQuestions);
router.get('/quizzes/:quizId', learningController.getQuizDetail);
router.post('/quizzes/:quizId/submit', learningController.submitQuizAttempt);

// Messaging
router.post('/messages', learningController.sendMessage);
router.get('/messages/conversations', learningController.getConversations);
router.get('/messages/:userId', learningController.getMessages);
router.patch('/messages/mark-read', learningController.markMessagesRead);

module.exports = router;
