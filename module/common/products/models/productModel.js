const mongoose = require('mongoose')
const { userType } = require('../../../../helper/enums')

module.exports = mongoose.model('product',
    new mongoose.Schema(
        {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: "user"
            },
            category: {
                type: mongoose.Schema.ObjectId,
                ref: "category"
            },
            product_Name: {
                type: String
            },
            unit_cost_price: {
                type: Number
            },
            unit_selling_price: {
                type: Number
            },
            mark_up: {
                type: Number
            },
            barcode: {
                type: Number
            }
        },
        {
            timestamps: true
        }
    )
)