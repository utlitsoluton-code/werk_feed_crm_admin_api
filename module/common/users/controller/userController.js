const { responseMessage } = require("../../../../helper/comFunction")
const { userType: typeOfUser } = require("../../../../helper/enums")
const UserModel = require("../model/userModel")

const createUser = async (req, res) => {
    try {
        const { firstName, surname, phone, email, address, userType } = req.body

        const newClient = await UserModel.create({
            firstName,
            surname,
            phone,
            email,
            address,
            userType: userType?.toUpperCase() === 'RECEIVABLE' ? typeOfUser.RECEIVABLE : typeOfUser.SUPPLIER
        })

        if (!newClient) throw new Error('New client is not created.')

        res.status(201).json({
            meta: { message: '', status: true },
            data: newClient
        })
    } catch (err) {
        responseMessage(res, 500, false, err.message)
    }
}

const getUsers = async (req, res) => {
    try {
        const { type } = req.query

        let users
        if (!type) {
            users = await UserModel.find()
        } else if (type?.toUpperCase() === typeOfUser.RECEIVABLE) {
            users = await UserModel.find({ userType: typeOfUser.RECEIVABLE })
        } else {
            users = await UserModel.find({ userType: typeOfUser.SUPPLIER })
        }

        if (!users) throw new Error('users are not fetched.')

        res.status(201).json({
            meta: { message: '', status: true },
            data: users
        })
    } catch (err) {
        responseMessage(res, 500, false, err.message)
    }
}

module.exports = {
    createUser,
    getUsers
}