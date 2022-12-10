const products = require('../models/products');

const getProducts = (req, res) => {
    products.find()
    .then(data => res.status(200).json(data))
    .catch(error => res.status(500).json({mensaje: error}))
}

const searchProduct = (req, res) => {
    const nameParam = req.params.name;
    products.findOne({name: nameParam})
    .then(data => {
        if(!data){
            return res.status(404).json({mensaje: "Producto no existente"})
        }
        return res.status(200).json(data);
    })
}

const addProduct = (req, res) => {
    const newProduct = new products(req.body);
    newProduct.save()
    .then(data => res.status(201).json({mensaje: "Producto creado", data}))
    .catch((error) => res.status(500).json({error}));
}

const deleteProduct = (req, res) => {
    const idParam = req.params.id;
    products.findByIdAndDelete(idParam)
    .then(data => {
        if (!data) {
            return res.status(404).json({mensaje: 'Producto no encontrado'})
        }
        return res.status(200).json({mensaje: `El producto ${data.name} ha sido eliminado`})
    })
    .catch(error => res.status(500).json({error}))
}

const updateProduct = (req, res) => {
    const idParam = req.params.id;
    products.findByIdAndUpdate(idParam, req.body)
    .then(data => {
        if (!data) {
            return res.status(404).json({mensaje: 'Producto no encontrado'})
        }
        return res.status(200).json({mensaje: `El producto ${data.name} ha sido actualizado`})
    })
    .catch(error => res.status(500).json({error}));
}

module.exports = { getProducts, searchProduct, addProduct, deleteProduct, updateProduct };