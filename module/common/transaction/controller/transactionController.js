const { Types } = require("mongoose")
const { responseMessage, randomFixedInteger } = require("../../../../helper/comFunction")
const { userType: typeOfUser } = require("../../../../helper/enums")
const UserModel = require("../../users/model/userModel")
const TransactionModel = require("../model/transactionModel")

const createTransaction = async (req, res) => {
    try {
        const userId = req.decoded._id
        const { amountType, amount, comments, details } = req.body

        const newTrans = await TransactionModel.create({
            userId: new Types.ObjectId(userId),
            remainAmount: amount,
            details: details,
            payHistory: [
                {
                    amount: amount,
                    amountType: amountType.toUpperCase(),
                    comments: comments,
                }
            ]
        })

        if (!newTrans) throw new Error(`${amountType} is not created.`)

        res.status(201).json({
            meta: { message: `${amountType} is not created successfully.`, status: true },
            data: newTrans
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

const payTransaction = async (req, res) => {
    try {
        const { transId } = req.params;
        const { amountType, amount, comments, details } = req.body

        let query = {
            _id: transId
        };

        let userTrans = await TransactionModel.findOne(query);
        if (!userTrans) throw new Error('user transaction are not fetched.');

        userTrans.payHistory.push({
            amount: amount,
            amountType: amountType?.toUpperCase(),
            comments: comments,
        })
        userTrans.remainAmount = userTrans.remainAmount - amount

        if(userTrans.remainAmount <= 0){
            userTrans.isFullPayment = true
        }

        userTrans = await userTrans.save()

        res.status(200).json({
            meta: { message: 'User Transaction are updated successfully.', status: true },
            data: userTrans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

module.exports = {
    createTransaction,
    getUsers,
    getUserDetails,
    payTransaction
}