const router = require('express').Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const { addUser, loginUser } = require('../controllers/users');


router.post('/register', addUser)

router.post('/login', loginUser)

module.exports = router;