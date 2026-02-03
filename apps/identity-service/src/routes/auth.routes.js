const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/tenants', authController.createTenant);

router.get('/me', verifyToken, (req, res) => {
    res.json({ status: 'success', user: req.user });
});

module.exports = router;
