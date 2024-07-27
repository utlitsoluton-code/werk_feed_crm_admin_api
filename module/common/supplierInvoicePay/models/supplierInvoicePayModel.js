const mongoose = require('mongoose')
const { amountType } = require('../../../../helper/enums')

module.exports = mongoose.model('supplierinvoicepay',
    new mongoose.Schema(
        {
            userId: { 
                type: mongoose.Schema.ObjectId,
                ref:"supplier"
             },
            paymentType:{
                type:Boolean,
                default:false
            },
            Toatalmount:{
                type:Number
            },
            
            dueAmount:{
                type:Number,
                default:0
            },
            productDetails:[
                {
                    type: mongoose.Schema.ObjectId,
                    ref:"product"
                }
            ],
            summery:{
                type:String
            }
        },
        {
            timestamps: true
        }
    )
)