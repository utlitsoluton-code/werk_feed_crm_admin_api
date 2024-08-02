const mongoose = require('mongoose')
const { amountType } = require('../../../../helper/enums')

module.exports = mongoose.model('transaction',
    new mongoose.Schema(
        {
            userId: { 
                type: mongoose.Schema.ObjectId,
                ref:"user"
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
            },
            cash_sale:{
                type:String,
                default:''
            }
        },
        {
            timestamps: true
        }
    )
)