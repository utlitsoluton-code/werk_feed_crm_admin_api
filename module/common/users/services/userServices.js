const Joi = require("joi")
const { responseMessage } = require("../../../../helper/comFunction")

const createUserJOIMiddleware = (req, res, next) => {
    const JoiModel = Joi.object().keys(
        {
            firstName: Joi.string().trim().required().messages({
                "any.required": "First name is required!"
            }),
            surname: Joi.string().trim().required().messages({
                "any.required": "Surname is required!"
            }),
            phone: Joi.string().length(10).regex(/^[0-9]{10}$/).required().messages({
                "any.required": "mobile is required",
                "string.pattern.base": `Invalid mobile number`,
            }),
            email: Joi.string().email({ tlds: { allow: false } })
                .required().messages({
                    "any.required": "Email is required!"
                }),
            address: Joi.string().trim().required().messages({
                "any.required": "Address is required!"
            }),
            userType: Joi.string().trim().required().messages({
                "any.required": "user type is required and the value must be either 'RECEIVABLE' or 'SUPPLIER' "
            })
        }
    )

    const result = JoiModel.validate(req.body)

    if (result.error) {
        responseMessage(res, 400, false, result.error.details[0].message)
    } else {
        return next()
    }
}

const getUsersJOIMiddleware = (req, res, next) => {
    const JoiModel = Joi.object().keys(
        {
            type: Joi.string().trim().optional().messages({
                "any.required": "User type is required!, value must be RECEIVABLE or SUPPLIER"
            }),
        }
    )

    const result = JoiModel.validate(req.query)

    if (result.error) {
        responseMessage(res, 400, false, result.error.details[0].message)
    } else {
        return next()
    }
}

module.exports = {
    createUserJOIMiddleware,
    getUsersJOIMiddleware
}