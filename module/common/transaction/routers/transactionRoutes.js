const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createTransaction, payTransaction, getTransDetails, getTranactionsByUser, getAllTranactions } = require('../controller/transactionController')
const { createTransactionJOIMiddleware, updateTransactionJOIMiddleware, getTransJOIMiddleware } = require('../services/transactionServices')

const transactionRoutes = require('express').Router()

transactionRoutes.route('/')
    .post(jwtAdminVerify, createTransactionJOIMiddleware, createTransaction)
    .get(jwtAdminVerify, getTransJOIMiddleware, getAllTranactions)
transactionRoutes.route('/:transId')
    .get(jwtAdminVerify, getTransDetails)
    .patch(jwtAdminVerify, updateTransactionJOIMiddleware, payTransaction)

transactionRoutes.get('/user/:userId', jwtAdminVerify, getTranactionsByUser)
module.exports = transactionRoutes