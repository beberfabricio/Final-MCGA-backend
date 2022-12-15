const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { addUser, loginUser, verifyToken } = require('../controllers/users');
const authMiddleware = require('../middlewares/auth');

router.post('/verifyToken', authMiddleware, verifyToken)

router.post('/register', addUser)

router.post('/login', loginUser)

module.exports = router;