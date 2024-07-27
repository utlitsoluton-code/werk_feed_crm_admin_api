const mongoose = require('mongoose')
const { userType } = require('../../../../helper/enums')

module.exports = mongoose.model('product', 
    new mongoose.Schema(
        {
            name:{
                type:String
            },
            price:{
                type:Number
            },
            Stock:{
                type:Number
            }
        },
        {
            timestamps: true
        }
    )
)