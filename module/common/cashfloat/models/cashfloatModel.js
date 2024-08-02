const mongoose = require('mongoose')

module.exports = mongoose.model('cashfloat',
    new mongoose.Schema(
        {
            opening_cash_float: {
                type: Number
            },
            cash_sale: {
                type: Number
            },
            cash_from_customer: {
                type: Number
            },
            pay_to_vendor: {
                type: Number
            },
            expenses:{
            type:Number
            },
            closing_cash_float:{
            type:Number
            },
            cloashing_cash_balance:[
            type:Number
            ]
        },
        {
            timestamps: true
        }
    )
)