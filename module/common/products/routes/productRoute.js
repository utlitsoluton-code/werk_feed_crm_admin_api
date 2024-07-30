const { createProduct, getAllProduct, getProductById, updateProduct, createProductCategory, getProductCategory } = require('../controllers/productController')

const productRoutes = require('express').Router()

productRoutes.post('/create-product',createProduct)
productRoutes.get('/get-all-product',getAllProduct)
productRoutes.get('/get-product-by-id',getProductById)
productRoutes.patch('/update-product',updateProduct)

productRoutes.post('/create-product-category',createProductCategory)
productRoutes.get('/get-all-product-category',getProductCategory)
productRoutes.patch('/update-product-category',)
productRoutes.delete('/delete-product-category',)

module.exports = productRoutes

