const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createUser, getUsers, getUserDetails, updateUserDetails } = require('../controller/userController')
const { createUserJOIMiddleware, getUsersJOIMiddleware, updateUserJOIMiddleware } = require('../services/userServices')

const userRoutes = require('express').Router()

userRoutes.route('/')
    .post(jwtAdminVerify, createUserJOIMiddleware, createUser)
    .get(jwtAdminVerify, getUsersJOIMiddleware, getUsers)
userRoutes.route('/:userId')
    .get(jwtAdminVerify, getUserDetails)
    .patch(jwtAdminVerify, updateUserJOIMiddleware, updateUserDetails)

module.exports = userRoutes