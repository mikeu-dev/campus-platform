const express = require('express');
const router = express.Router();
const applicantController = require('../controllers/applicant.controller');
const periodController = require('../controllers/period.controller');
const documentController = require('../controllers/document.controller');
const prodiController = require('../controllers/prodi.controller');

// Public Periods & Prodis
router.get('/:tenantId/periods', periodController.getPublic);
router.get('/:tenantId/prodis', prodiController.getAll);

// Applicant Registration
router.post('/register', applicantController.register);
router.get('/status/:regNumber', applicantController.getStatus);

// Document Upload (Public/Applicant)
router.post('/documents', documentController.upload);

module.exports = router;
