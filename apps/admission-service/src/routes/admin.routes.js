const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicant.controller');
const periodController = require('../controllers/period.controller');
const documentController = require('../controllers/document.controller');
const prodiController = require('../controllers/prodi.controller');

// PMB Periods Management
router.get('/periods', periodController.getAll);
router.post('/periods', periodController.create);
router.put('/periods/:id', periodController.update);
router.delete('/periods/:id', periodController.delete);

// PMB Prodis Management
router.get('/prodis', prodiController.getAll);
router.post('/prodis', prodiController.create);

// Applicants Management
router.get('/stats', applicantController.getStats);
router.get('/applicants', applicantController.getAll);
router.get('/applicants/:id', applicantController.getById);
router.put('/applicants/:id/status', applicantController.updateStatus);

// Documents Management
router.put('/documents/:id/status', documentController.updateStatus);
router.delete('/documents/:id', documentController.delete);

module.exports = router;
