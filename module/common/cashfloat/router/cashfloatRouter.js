const { jwtAdminVerify } = require('../../../../helper/authHandler')
const { createCashFloat, getDailyCashFloat } = require('../controller/cashfloatController')

const cashfloatRoutes = require('express').Router()

cashfloatRoutes.post('/create-cash-float',jwtAdminVerify,createCashFloat)
cashfloatRoutes.get('/get-daily-cash-float',jwtAdminVerify,getDailyCashFloat)

module.exports = cashfloatRoutes
