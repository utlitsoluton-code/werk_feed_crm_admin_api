const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createSupplier, getAllSupplier, updateSupplier, getSupplierDetails, deleteSupplier, generateSupplierId, paySupplierAmount } = require('../controller/supplierController')

const supplierRoutes = require('express').Router()


supplierRoutes.post('/create-supplier', jwtAdminVerify, createSupplier)
supplierRoutes.get('/get-all-supplier', jwtAdminVerify, getAllSupplier)
supplierRoutes.get('/get-supplier-details', jwtAdminVerify, getSupplierDetails)
supplierRoutes.patch('/update-supplier', jwtAdminVerify, updateSupplier)
supplierRoutes.delete('/delete-supplier', jwtAdminVerify, deleteSupplier)

supplierRoutes.get('/get-supplierId', jwtAdminVerify, generateSupplierId)
supplierRoutes.patch('/pay-suppllier-amount',jwtAdminVerify,paySupplierAmount)

module.exports = supplierRoutes

