const cashfloatModel = require('../models/cashfloatModel')

const createCashFloat = async (req, res) => {
    const { opening_cash_float, cash_sale, cash_from_customer, pay_to_vendor, expenses, closing_cash_float, cloashing_cash_balance } = req.body;
    try {
        const data = await cashfloatModel.create({ opening_cash_float, cash_sale, cash_from_customer, pay_to_vendor, expenses, closing_cash_float, cloashing_cash_balance })
        res.status(201).json({
            message: 'Cash Float Created',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const getDailyCashFloat = async (req, res) => {
    let message
    try {
        const date = new Date()
        const currentDate = date.toISOString()
        const data = await cashfloatModel.findOne({ createdAt: currentDate })
        if (data) {
            message=`Cash Float Found on Date ${currentDate}`
        } else {
            message='No cash float found'
        }
        res.status(201).json({
            message:message,
            data:data
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
module.exports = { createCashFloat, getDailyCashFloat }