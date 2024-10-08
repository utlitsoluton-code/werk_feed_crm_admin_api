const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createUser, getUsers, getUserDetails, updateUserDetails, generateClientId, payAmount } = require('../controller/userController')
const { createUserJOIMiddleware, getUsersJOIMiddleware, updateUserJOIMiddleware } = require('../services/userServices')

const userRoutes = require('express').Router()

userRoutes.post('/create-customer',jwtAdminVerify, createUser)
userRoutes.get('/get-all-customer',jwtAdminVerify, getUsersJOIMiddleware, getUsers)
userRoutes.get('/get-customer-details',jwtAdminVerify, getUserDetails)
userRoutes.patch('/update-customer',jwtAdminVerify, updateUserJOIMiddleware, updateUserDetails)
userRoutes.get('/generate-client-id',jwtAdminVerify,generateClientId)
userRoutes.patch('/pay-due-amount',jwtAdminVerify,payAmount)

module.exports = userRoutes