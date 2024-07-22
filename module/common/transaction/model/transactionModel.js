const mongoose = require('mongoose')
const { amountType } = require('../../../../helper/enums')

module.exports = mongoose.model('transaction',
    new mongoose.Schema(
        {
            userId: { type: mongoose.Types.ObjectId },
            remainAmount: { type: Number },
            details: { type: String },
            isFullPayment: {
                type: Boolean,
                default: false
            },
            payHistory: [
                {
                    amount: { type: Number },
                    amountType: {
                        type: String,
                        enum: [amountType.CREDIT, amountType.INVOICE, amountType.PAY]
                    },
                    comments: { type: String },
                    createdAt: {
                        type: Date,
                        default: Date.now()
                    }
                }
            ]
        },
        {
            timestamps: true
        }
    )
)