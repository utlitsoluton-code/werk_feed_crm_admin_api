const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createTransaction, payTransaction, getTransDetails, getTranactionsByUser, getAllTranactions } = require('../controller/transactionController')
const { createTransactionJOIMiddleware, updateTransactionJOIMiddleware, getTransJOIMiddleware } = require('../services/transactionServices')

const transactionRoutes = require('express').Router()

transactionRoutes.post('/creat-credit', jwtAdminVerify,  createTransaction)
transactionRoutes.get('/get-all-credit',jwtAdminVerify,  getAllTranactions)
transactionRoutes.get('/get-credit-details',jwtAdminVerify,getTransDetails)
transactionRoutes.get('/get-credit-by-id', jwtAdminVerify, getTranactionsByUser)
transactionRoutes.patch('/pay-credit',jwtAdminVerify,  payTransaction)

module.exports = transactionRoutes