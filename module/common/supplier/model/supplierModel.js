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
            
            vendorType:{
                type:String,
                default:'SUPPLIER'
            },
           
            address:{
                type:String
            }

        },
        {
            timestamps: true
        }
    )
)