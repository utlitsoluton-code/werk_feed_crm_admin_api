const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createTransaction, payTransaction, getTransDetails, getTranactionsByUser, getAllTranactions, createCashSales, getAllCashSale, getCashSaleDetails, getCashSaleByUser } = require('../controller/transactionController')
const { createTransactionJOIMiddleware, updateTransactionJOIMiddleware, getTransJOIMiddleware } = require('../services/transactionServices')

const transactionRoutes = require('express').Router()

transactionRoutes.post('/creat-credit', jwtAdminVerify,  createTransaction)
transactionRoutes.get('/get-all-credit',jwtAdminVerify,  getAllTranactions)
transactionRoutes.get('/get-credit-details',jwtAdminVerify,getTransDetails)
transactionRoutes.get('/get-credit-by-id', jwtAdminVerify, getTranactionsByUser)
transactionRoutes.patch('/pay-credit',jwtAdminVerify,  payTransaction)

transactionRoutes.post('/creat-cash-sale', jwtAdminVerify,  createCashSales)
transactionRoutes.get('/get-all-cash-sale',jwtAdminVerify,  getAllCashSale)
transactionRoutes.get('/get-cash-sale-details',jwtAdminVerify,getCashSaleDetails)
transactionRoutes.get('/get-cash-sale-by-id', jwtAdminVerify, getCashSaleByUser)

module.exports = transactionRoutes