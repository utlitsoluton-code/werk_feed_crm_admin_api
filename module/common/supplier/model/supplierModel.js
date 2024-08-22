const mongoose=require('mongoose')

module.exports = mongoose.model('supplier',
    new mongoose.Schema(
        {
            client_code:{
                type:String
            },
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
            
            vendorType:{
                type:String,
                default:'SUPPLIER'
            },
           
            address:{
                type:String
            },
            paidAmount:{
                type:Number,
                default:0
            }

        },
        {
            timestamps: true
        }
    )
)