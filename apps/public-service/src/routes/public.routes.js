const express = require('express');
const router = express.Router();
const sliderController = require('../controllers/slider.controller');
const postController = require('../controllers/post.controller');
const agendaController = require('../controllers/agenda.controller');
const videoController = require('../controllers/video.controller');
const settingController = require('../controllers/setting.controller');
const linkController = require('../controllers/link.controller');
const pageController = require('../controllers/page.controller');
const visitorController = require('../controllers/visitor.controller');
const landingController = require('../controllers/landing.controller');

// Bulk Landing Data
router.get('/:tenantId/landing', landingController.getLandingData);
router.get('/:tenantId/shared', landingController.getSharedData);

// Sliders
router.get('/:tenantId/sliders', sliderController.getPublic);

// Posts
router.get('/:tenantId/posts', postController.getPublic);
router.get('/:tenantId/posts/:slug', postController.getBySlug);

// Agenda
router.get('/:tenantId/agendas', agendaController.getPublic);
router.get('/:tenantId/agendas/:id', agendaController.getById);

// Videos
router.get('/:tenantId/videos', videoController.getPublic);

// Settings
router.get('/:tenantId/settings', settingController.getPublic);

// Links
router.get('/:tenantId/links', linkController.getPublic);

// Pages
router.get('/:tenantId/pages', pageController.getPublic);
router.get('/:tenantId/pages/:slug', pageController.getBySlug);

// Visitor Tracking
router.post('/track', visitorController.track);

module.exports = router;
