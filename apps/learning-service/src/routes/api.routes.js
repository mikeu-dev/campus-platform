const express = require('express');
const router = express.Router();
const learningController = require('../controllers/learning.controller');
const { verifyToken } = require('../middlewares/auth.middleware');
const { upload, uploadToMinio } = require('../middlewares/upload.middleware');

router.use(verifyToken);

// Files matches /files/upload
router.post('/upload', upload.single('file'), uploadToMinio, learningController.uploadFile);

// Class Resources
router.post('/classes/:classId/materials', learningController.addMaterial);
router.get('/classes/:classId/materials', learningController.getMaterials);

router.post('/classes/:classId/assignments', learningController.createAssignment);
router.get('/classes/:classId/assignments', learningController.getAssignments);

// Assignment Submissions
router.post('/assignments/:assignmentId/submit', learningController.submitAssignment);
router.get('/assignments/:assignmentId/my-submission', learningController.getMySubmission);
router.get('/assignments/:assignmentId/submissions', learningController.getSubmissions); // Lecturer View

router.post('/submissions/:submissionId/grade', learningController.gradeSubmission);

// Notifications
router.post('/notifications', learningController.createNotification);
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

// Messaging
router.post('/messages', learningController.sendMessage);
router.get('/messages/conversations', learningController.getConversations);
router.get('/messages/:userId', learningController.getMessages);

module.exports = router;
