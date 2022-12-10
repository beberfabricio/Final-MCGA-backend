const router = require('express').Router();
const { getProducts, searchProduct, addProduct, deleteProduct, updateProduct } = require('../controllers/products');

router.get('/', (req, res) => getProducts(req, res))

router.get('/search/:name', (req,res) => searchProduct(req, res))

router.post("/add", (req,res) => addProduct(req, res))

router.delete("/delete/:id", (req,res) => deleteProduct(req, res))

router.put("/update/:id", (req,res) => updateProduct(req, res))

module.exports = router;