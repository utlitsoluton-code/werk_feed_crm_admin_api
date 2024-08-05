const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createCashFloat, getDailyCashFloat, getAllCashfloat } = require('../controller/cashfloatController')

const cashfloatRoutes = require('express').Router()

cashfloatRoutes.post('/create-cash-float',jwtAdminVerify,createCashFloat)
cashfloatRoutes.get('/get-daily-cash-float',jwtAdminVerify,getDailyCashFloat)
cashfloatRoutes.get('/get-all-cash-float',jwtAdminVerify,getAllCashfloat)

module.exports = cashfloatRoutes
