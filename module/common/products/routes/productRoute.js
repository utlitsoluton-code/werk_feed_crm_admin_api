const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createProduct, getAllProduct, getProductById, updateProduct, createProductCategory, getProductCategory, updateProductCategory, deleteProductCategory, deleteProduct } = require('../controllers/productController')

const productRoutes = require('express').Router()

productRoutes.post('/create-product',jwtAdminVerify,createProduct)
productRoutes.get('/get-all-product',jwtAdminVerify,getAllProduct)
productRoutes.get('/get-product-by-id',jwtAdminVerify,getProductById)
productRoutes.patch('/update-product',jwtAdminVerify,updateProduct)
productRoutes.delete('/delete-product',jwtAdminVerify,deleteProduct)

productRoutes.post('/create-product-category',jwtAdminVerify,createProductCategory)
productRoutes.get('/get-all-product-category',jwtAdminVerify,getProductCategory)
productRoutes.patch('/update-product-category',jwtAdminVerify,updateProductCategory)
productRoutes.delete('/delete-product-category',jwtAdminVerify,deleteProductCategory)

module.exports = productRoutes

