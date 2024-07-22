const mongoose = require('mongoose')
const { userType } = require('../../../../helper/enums')

module.exports = mongoose.model('user', 
    new mongoose.Schema(
        {
            userType: {
                type: String,
                enum: [userType.RECEIVABLE, userType.SUPPLIER],
                default: userType.RECEIVABLE
            },
            firstName: {
                type: String,
                required: true
            },
            surname: {
                type: String
            },
            phone: {
                type: String,
                required: true
            },
            email: {
                type: String
            },
            address: {
                type: String
            }
        },
        {
            timestamps: true
        }
    )
)