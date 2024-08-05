const mongoose = require('mongoose')
const { userType } = require('../../../../helper/enums')

module.exports = mongoose.model('notification', 
    new mongoose.Schema(
        {
            title:{
                type:String,
                require:true
            },
            des:{
                title:String,
                require:true

            },
            notificationType:{
                type:String, // common || personalised
                require:true

            },
            userId:{
                type: mongoose.Schema.ObjectId,
                ref:"user",
                require:true

            }
        },
        {
            timestamps: true
        }
    )
)