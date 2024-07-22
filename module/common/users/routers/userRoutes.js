const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createUser, getUsers } = require('../controller/userController')
const { createUserJOIMiddleware, getUsersJOIMiddleware } = require('../services/userServices')

const userRoutes = require('express').Router()

userRoutes.route('/')
    .post(jwtAdminVerify, createUserJOIMiddleware, createUser)
    .get(jwtAdminVerify, getUsersJOIMiddleware, getUsers)

module.exports = userRoutes