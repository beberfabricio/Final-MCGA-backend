const express = require('express');
const productsRouters = require('./products');
const usersRouters = require('./users');
const router = express.Router();

router.use('/products', productsRouters);
router.use('/users', usersRouters);

module.exports = router;