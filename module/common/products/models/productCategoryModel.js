const mongoose = require('mongoose')
const { userType } = require('../../../../helper/enums')

module.exports = mongoose.model('category',
    new mongoose.Schema(
        {
            userId: {
                type: mongoose.Schema.ObjectId,
                ref: "user"
            },
            name:{
                type:String
            }
        },
        {
            timestamps: true
        }
    )
)