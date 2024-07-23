const { Types } = require("mongoose")
const { responseMessage, randomFixedInteger } = require("../../../../helper/comFunction")
const { userType: typeOfUser, amountType } = require("../../../../helper/enums")
const UserModel = require("../../users/model/userModel")
const TransactionModel = require("../model/transactionModel")

const createTransaction = async (req, res) => {
    try {

        const { userId, amountType, amount, comments, details } = req.body

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

const getAllTranactions = async (req, res) => {
    try {
        const { type, page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {};
        if (type) {
            if (type.toUpperCase() === amountType.CREDIT) {
                query = { "payHistory.amountType": amountType.CREDIT }
            } else if (type.toUpperCase() === amountType.INVOICE) {
                query = { "payHistory.amountType": amountType.INVOICE }
            }
        }

        console.log(query)

        const transPromise = TransactionModel.find(query).sort({ updatedAt: -1 }).skip(skip).limit(limit);
        const countPromise = TransactionModel.countDocuments(query);

        const [trans, totalLength] = await Promise.all([transPromise, countPromise]);

        if (!trans) throw new Error('transactions are not fetched.');

        res.status(200).json({
            meta: { message: 'All transactions are fetched successfully.', status: true },
            page,
            totalLength,
            data: trans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const getTransDetails = async (req, res) => {
    try {
        const { transId } = req.params;

        let query = {
            _id: transId
        };

        const transaction = await TransactionModel.findOne(query);
        if (!transaction) throw new Error('transaction is not fetched.');

        res.status(200).json({
            meta: { message: 'transaction is fetched successfully.', status: true },
            data: user,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const getTranactionsByUser = async (req,res) => {
    try {
        const { userId } = req.params;
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {
            userId: userId
        };

        const transPromise = TransactionModel.find(query).skip(skip).limit(limit);
        const countPromise = TransactionModel.countDocuments(query);

        const [trans, totalLength] = await Promise.all([transPromise, countPromise]);

        if (!trans) throw new Error('user transactions are not fetched.');

        res.status(200).json({
            meta: { message: 'User transactions are fetched successfully.', status: true },
            page,
            totalLength,
            data: trans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
}

const payTransaction = async (req, res) => {
    try {
        const { transId } = req.params;
        const { amountType, amount, comments, details } = req.body

        let query = {
            _id: transId
        };

        let userTrans = await TransactionModel.findOne(query);
        if (!userTrans) throw new Error('user transaction are not fetched.');

        userTrans.details = details || userTrans.details
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
    getAllTranactions,
    getTransDetails,
    getTranactionsByUser,
    payTransaction
}