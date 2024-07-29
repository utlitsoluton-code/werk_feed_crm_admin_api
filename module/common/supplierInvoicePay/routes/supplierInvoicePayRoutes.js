const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createSupplierInvoice, getAllSupplierInvoice, getSupplierInvoiceDetails, getSupplierInvoiceByuserId, paySupplierInvoice,  } = require('../controllers/supplierInvoicePayController')

const suppliertransactionRoutes = require('express').Router()

suppliertransactionRoutes.post('/create-supplier-invoice',jwtAdminVerify,createSupplierInvoice)
suppliertransactionRoutes.get('/get-all-invoice-pay',jwtAdminVerify,getAllSupplierInvoice)
suppliertransactionRoutes.get('/get-supplier-invoice-pay-details',jwtAdminVerify,getSupplierInvoiceDetails)
suppliertransactionRoutes.get('/get-spplierinvoice-pay-userid',jwtAdminVerify,getSupplierInvoiceByuserId)
suppliertransactionRoutes.patch('/pay-spplier-invoice',jwtAdminVerify,paySupplierInvoice)
module.exports = suppliertransactionRoutes
