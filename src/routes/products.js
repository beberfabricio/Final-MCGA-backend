const router = require('express').Router();
const { getProducts, addProduct, deleteProduct, updateProduct } = require('../controllers/products');
const authMiddleware = require('../middlewares/auth');

router.get('/', getProducts)

router.post("/add", authMiddleware, addProduct)

router.delete("/delete/:id", authMiddleware, deleteProduct)

router.put("/update/:id", authMiddleware, updateProduct)

module.exports = router;