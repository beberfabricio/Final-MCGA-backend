const router = require('express').Router();
const { getProducts, searchProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/products');
const authMiddleware = require('../middlewares/auth');

router.get('/', getProducts)

router.get('/search/:name', searchProduct)

router.post("/add", addProduct)

router.delete("/delete/:id", deleteProduct)

router.put("/update/:id", updateProduct)

module.exports = router;