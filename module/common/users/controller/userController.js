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
        const { type, page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {};
        if (type) {
            if (type.toUpperCase() === typeOfUser.RECEIVABLE) {
                query.userType = typeOfUser.RECEIVABLE;
            } else if (type.toUpperCase() === typeOfUser.SUPPLIER) {
                query.userType = typeOfUser.SUPPLIER;
            }
        }

        const usersPromise = UserModel.find(query).skip(skip).limit(limit);
        const countPromise = UserModel.countDocuments(query);

        const [users, totalLength] = await Promise.all([usersPromise, countPromise]);

        if (!users) throw new Error('users are not fetched.');

        res.status(201).json({
            meta: { message: '', status: true },
            page,
            totalLength,
            data: users,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

module.exports = {
    createUser,
    getUsers
}