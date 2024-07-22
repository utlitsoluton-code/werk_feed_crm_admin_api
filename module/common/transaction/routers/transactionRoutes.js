const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createTransaction, payTransaction } = require('../controller/transactionController')
const { createTransactionJOIMiddleware, updateTransactionJOIMiddleware } = require('../services/transactionServices')

const transactionRoutes = require('express').Router()

transactionRoutes.route('/')
    .post(jwtAdminVerify, createTransactionJOIMiddleware, createTransaction)
    // .get(jwtAdminVerify, getUsersJOIMiddleware, getUsers)
transactionRoutes.route('/:transId')
//     .get(jwtAdminVerify, getUserDetails)
    .patch(jwtAdminVerify, updateTransactionJOIMiddleware, payTransaction)
// 
module.exports = transactionRoutes