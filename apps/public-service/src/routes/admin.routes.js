const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth.middleware');
const sliderController = require('../controllers/slider.controller');
const postController = require('../controllers/post.controller');
const agendaController = require('../controllers/agenda.controller');
const videoController = require('../controllers/video.controller');
const settingController = require('../controllers/setting.controller');
const linkController = require('../controllers/link.controller');
const pageController = require('../controllers/page.controller');
const visitorController = require('../controllers/visitor.controller');

// All admin routes require token
router.use(verifyToken);

// Sliders CRM
router.get('/sliders', sliderController.getAll);
router.post('/sliders', sliderController.create);
router.put('/sliders/:id', sliderController.update);
router.delete('/sliders/:id', sliderController.delete);

// Posts CRM
router.get('/posts', postController.getAll);
router.post('/posts', postController.create);
router.put('/posts/:id', postController.update);
router.delete('/posts/:id', postController.delete);

// Agenda CRM
router.get('/agendas', agendaController.getAll);
router.post('/agendas', agendaController.create);
router.put('/agendas/:id', agendaController.update);
router.delete('/agendas/:id', agendaController.delete);

// Video CRM
router.get('/videos', videoController.getAll);
router.post('/videos', videoController.create);
router.put('/videos/:id', videoController.update);
router.delete('/videos/:id', videoController.delete);

// Settings CRM
router.get('/settings', settingController.getAll);
router.post('/settings/bulk', settingController.bulkUpsert);
router.post('/settings', settingController.upsert);

// Links CRM
router.get('/links', linkController.getAll);
router.post('/links', linkController.create);
router.put('/links/:id', linkController.update);
router.delete('/links/:id', linkController.delete);

// Pages CRM
router.get('/pages', pageController.getAll);
router.post('/pages', pageController.create);
router.put('/pages/:id', pageController.update);
router.delete('/pages/:id', pageController.delete);

// Stats
router.get('/stats', visitorController.getStats);

module.exports = router;
