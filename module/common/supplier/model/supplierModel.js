const mongoose=require('mongoose')

module.exports = mongoose.model('supplier',
    new mongoose.Schema(
        {
            name:{
                type:String
            },
            email:{
                type:String,
                unique: true
            },
            phone:{
                type:String,
                unique: true
            },
            amout:{
                type:String
            },
            vendorType:{
                type:String,
                default:'SUPPLIER'
            },
            payType:{
                type:String   // Invoice or Pay
            }
        },
        {
            timestamps: true
        }
    )
)