const Joi = require("joi")
const { responseMessage } = require("../../../../helper/comFunction")

const createTransactionJOIMiddleware = (req, res, next) => {
    const JoiModel = Joi.object().keys(
        {
            amountType: Joi.string().trim().required().messages({
                "any.required": "Type of amount is required!"
            }),
            amount: Joi.number().required().messages({
                "any.required": "Amount is required!"
            }),
            comments: Joi.string().trim().required().messages({
                "any.required": "comments is required",
            }),
            details: Joi.string().trim().required().messages({
                "any.required": "Details is required!"
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
            page: Joi.string().trim().optional().messages({
                "any.required": "User type is required!, value must be RECEIVABLE or SUPPLIER"
            }),
            limit: Joi.string().trim().optional().messages({
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

const updateTransactionJOIMiddleware = (req, res, next) => {
    const JoiModel = Joi.object().keys(
        {
            amountType: Joi.string().trim().required().messages({
                "any.required": "Type of amount is required!"
            }),
            amount: Joi.number().required().messages({
                "any.required": "Amount is required!"
            }),
            comments: Joi.string().trim().required().messages({
                "any.required": "comments is required",
            }),
            details: Joi.string().trim().optional().messages({
                "any.required": "Details is required!"
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

module.exports = {
    createTransactionJOIMiddleware,
    getUsersJOIMiddleware,
    updateTransactionJOIMiddleware
}