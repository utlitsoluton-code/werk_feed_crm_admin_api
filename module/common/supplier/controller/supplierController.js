const supplierModel = require('../model/supplierModel')

const createSupplier = async (req, res) => {
    const { payType, vendorType, amout, phone, email, name } = req.body;
    const { adminType } = req.decoded;

    let message
    let status
    let data
    try {
        if (adminType === 'SUPERADMIN') {
            data = await supplierModel.create({ payType, vendorType, amout, phone, email, name })
            if (!data) throw new Error('New Supplier is not created.')

            message = 'Spplier created Successfully'
            status = true
        } else {
            message = 'Unauthorised Request'
            status = false
        }
        res.status(201).json({
            message: message,
            status: status,
            data: data
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getAllSupplier = async () => {
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    try {
        const usersPromise = supplierModel.find({}).skip(skip).limit(limit);
        const countPromise = supplierModel.countDocuments({});

        const [users, totalLength] = await Promise.all([usersPromise, countPromise]);

        if (!users) throw new Error('users are not fetched.');
        res.status(200).json({
            meta: { message: 'All users are fetched successfully.', status: true },
            page,
            totalLength,
            data: users,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getSupplierDetails = async (req, res) => {
    const { userId } = req.query;
    let message
    let status
    try {
        const data = await supplierModel.findById(userId)
        if (data.length > 0) {
            message = 'Supplier details found Successfully'
            status = true
        } else {
            message = 'Supplier details not found'
            status = true
        }
        res.status(201).json({
            message: message,
            status: status,
            data: data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const updateSupplier = async (req, res) => {
    const { payType, vendorType, amout, phone, email, name, supplierId } = req.body;
    let message
    let status
    try {
        const data = await supplierModel.findByIdAndUpdate(supplierId, { payType, vendorType, amout, phone, email, name }, { new: true })
        if (data) {
            message = 'Supllier Updated Successfully'
            status = true
        } else {
            message = 'Supplier not found with given id'
            status = false
        }
        res.status(201).json({
            message: message,
            status: status,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const deleteSupplier = async (req, res) => {
    const { supplierId } = req.body;
    let message
    let status
    try {
        const data = await supplierModel.findByIdAndDelete(supplierId)
        if (data) {
            message = 'Supplier Deleted Successfully'
            status = true
        } else {
            message = 'Supplier not found with given id'
            status = false
        }
        res.status(201).json({
            message: message,
            status: status,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

module.exports = {
    createSupplier,
    getAllSupplier,
    getSupplierDetails,
    updateSupplier,
    deleteSupplier
}