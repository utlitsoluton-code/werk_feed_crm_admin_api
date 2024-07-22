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
            meta: { message: 'New User is created successfully.', status: true },
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

        res.status(200).json({
            meta: { message: 'All users are fetched successfully.', status: true },
            page,
            totalLength,
            data: users,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const getUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;

        let query = {
            _id: userId
        };

        const user = await UserModel.findOne(query);
        if (!user) throw new Error('user data are not fetched.');

        res.status(200).json({
            meta: { message: 'User details are fetched successfully.', status: true },
            data: user,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const updateUserDetails = async (req, res) => {
    try {
        const { userId } = req.params;
        const { firstName, surname, phone, address } = req.body

        let query = {
            _id: userId
        };



        let user = await UserModel.findOne(query);
        if (!user) throw new Error('user data are not fetched.');

        user.firstName = firstName || user.firstName
        user.surname = surname || user.surname
        user.phone = phone || user.phone
        user.address = address || user.address

        user = await user.save()

        res.status(200).json({
            meta: { message: 'User details are fetched successfully.', status: true },
            data: user,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

module.exports = {
    createUser,
    getUsers,
    getUserDetails,
    updateUserDetails
}