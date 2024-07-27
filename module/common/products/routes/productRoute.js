const { createProduct, getAllProduct } = require('../controllers/productController')

const productRoutes = require('express').Router()

productRoutes.post('/create-product',createProduct)
productRoutes.get('/get-all-product',getAllProduct)

module.exports = productRoutes

