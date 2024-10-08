const { Types } = require("mongoose")
const { responseMessage, randomFixedInteger } = require("../../../../helper/comFunction")
const { userType: typeOfUser, amountType } = require("../../../../helper/enums")
const UserModel = require("../../customer/model/userModel")
const TransactionModel = require("../model/transactionModel")

const createTransaction = async (req, res) => {
    try {

        const { summery, productDetails, amount, userId,paymentType } = req.body

        const newTrans = await TransactionModel.create({
            userId, summery, productDetails, Toatalmount:amount, dueAmount: amount,paymentType
        })

        // if (!newTrans) throw new Error(`${amountType} is not created.`)

        res.status(201).json({
            meta: { message: `created successfully.`, status: true },
            data: newTrans
        })
    } catch (err) {
        responseMessage(res, 500, false, err.message)
    }
}
const getAllTranactions = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        // console.log(query)

        const transPromise = TransactionModel.find({ dueAmount: { $gt: 0 } }).populate('productDetails').populate('userId').sort({ updatedAt: -1 });
        const countPromise = TransactionModel.countDocuments();

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
        const { transId } = req.query;

        let query = {
            _id: transId
        };

        const transaction = await TransactionModel.findOne(query).populate('productDetails').populate('userId');
        if (!transaction) throw new Error('transaction is not fetched.');

        res.status(200).json({
            meta: { message: 'transaction is fetched successfully.', status: true },
            data: transaction,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};
const getTranactionsByUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {
            userId: userId,
            dueAmount: { $gt: 0 } 
        };

        const transPromise = TransactionModel.find(query).populate('productDetails').populate('userId')
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
    const { transId, amount, summery, Toatalmount } = req.body
    let message
    let status
    try {
        const userTrans = await TransactionModel.findByIdAndUpdate(
            transId,
            { summery, paymentType: Toatalmount - amount === 0 ? true : false, dueAmount: Toatalmount - amount },
            { new: true })
        if (userTrans) {

            message = 'Amount Updated'
            status = true
        } else {
            message = 'Transaction not found with id'
            status = false
        }
        res.status(200).json({
            meta: { message: message, status: status },
            data: userTrans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};
const createCashSales = async (req, res) => {
    try {

        const { summery, productDetails, Toatalmount, amount, userId } = req.body

        const newTrans = await TransactionModel.create({
            userId, summery, productDetails, Toatalmount, dueAmount: Toatalmount - amount, cash_sale: 'cashsales'
        })

        // if (!newTrans) throw new Error(`${amountType} is not created.`)

        res.status(201).json({
            meta: { message: `cash sale created successfully.`, status: true },
            data: newTrans
        })
    } catch (err) {
        responseMessage(res, 500, false, err.message)
    }
}
const getAllCashSale = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        // console.log(query)

        const transPromise = TransactionModel.find({ cash_sale: 'cashsales' }).populate('productDetails').populate('userId').sort({ updatedAt: -1 }).skip(skip).limit(limit);
        const countPromise = TransactionModel.countDocuments();

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
const getCashSaleDetails = async (req, res) => {
    try {
        const { transId } = req.query;

        let query = {
            _id: transId,
            cash_sale:'cashsales'
        };

        const transaction = await TransactionModel.findOne(query).populate('productDetails').populate('userId');
        if (!transaction) throw new Error('transaction is not fetched.');

        res.status(200).json({
            meta: { message: 'transaction is fetched successfully.', status: true },
            data: transaction,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};
const getCashSaleByUser = async (req, res) => {
    try {
        const { userId } = req.query;
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {
            userId: userId,
            cash_sale:'cashsales'
        };

        const transPromise = TransactionModel.find(query).populate('productDetails').populate('userId').skip(skip).limit(limit);
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

module.exports = {
    createTransaction,
    getAllTranactions,
    getTransDetails,
    getTranactionsByUser,
    payTransaction,
    createCashSales,
    getAllCashSale,
    getCashSaleDetails,
    getCashSaleByUser
}