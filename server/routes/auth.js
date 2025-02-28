// server/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');
const { authenticate } = require('../middleware/auth');

// Register a new user
router.post('/register', authController.register);

// Login user
router.post('/login', authController.login);

// Get current user
router.get('/me', authenticate, authController.getMe);

module.exports = router;