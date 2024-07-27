const supplierInvoicePayModel = require('../models/supplierInvoicePayModel')

const createSupplierInvoice = async (req, res) => {
    const {summery, productDetails, Toatalmount,userId}=req.body;
    let message
    let status
    try {
      const data=await supplierInvoicePayModel.create({userId,Toatalmount,summery,productDetails,dueAmount:Toatalmount})
    
      if (data) {
        message='Supplier Invoice Craeted'
        status=true
      } else {
        message='Supplier Invoice Not Created'
        status=false
      }

      res.status(201).json({
        message:message,
        status:status,
        data:data
      })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            meta: { msg: error.message, status: false },
        });
    }
}

const getAllSupplierInvoice = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;
        // console.log(query)

        const transPromise = supplierInvoicePayModel.find().populate('productDetails').sort({ updatedAt: -1 }).skip(skip).limit(limit);
        const countPromise = supplierInvoicePayModel.countDocuments();

        const [trans, totalLength] = await Promise.all([transPromise, countPromise]);

        if (!trans) throw new Error('Supplier Invoice are not fetched.');

        res.status(200).json({
            meta: { message: 'All Supplier Invoice are fetched successfully.', status: true },
            page,
            totalLength,
            data: trans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const getSupplierInvoiceDetails = async (req, res) => {
    try {
        const { supplierInvoiceId } = req.query;

        let query = {
            _id: supplierInvoiceId
        };

        const transaction = await supplierInvoicePayModel.findOne(query).populate('productDetails');
        if (!transaction) throw new Error('Supplier Invoice is not fetched.');

        res.status(200).json({
            meta: { message: 'Supplier Invoice is fetched successfully.', status: true },
            data: transaction,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

const getSupplierInvoiceBySupplier = async (req, res) => {
    try {
        const { supplierInvoiceId } = req.query;
        const { page = 1, limit = 10 } = req.query;
        const skip = (page - 1) * limit;

        let query = {
            userId: supplierInvoiceId
        };

        const transPromise = supplierInvoicePayModel.find(query).populate('productDetails').skip(skip).limit(limit);
        const countPromise = supplierInvoicePayModel.countDocuments(query);

        const [trans, totalLength] = await Promise.all([transPromise, countPromise]);

        if (!trans) throw new Error('Supplier Invoice are not fetched.');

        res.status(200).json({
            meta: { message: 'Supplier Invoice are fetched successfully.', status: true },
            page,
            totalLength,
            data: trans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
}

const paySupplierInvoice = async (req, res) => {
    const {supplierInvoiceId, amount,summery,Toatalmount} = req.body
    let message
    let status
    try {
       const userTrans=await supplierInvoicePayModel.findByIdAndUpdate(supplierInvoiceId,{summery,paymentType:Toatalmount-amount ===0 ? true : false,dueAmount:Toatalmount-amount},{new:true})
       if (userTrans) {
         
         message='Supplier Invoice Updated'
         status=true
        } else {
        message='Supplier Invoice not found with id'
        status=false
       }
        res.status(200).json({
            meta: { message: message, status: status },
            data: userTrans,
        });
    } catch (err) {
        responseMessage(res, 500, false, err.message);
    }
};

module.exports={
    createSupplierInvoice,
    getAllSupplierInvoice,
    getSupplierInvoiceDetails,
    getSupplierInvoiceBySupplier,
    paySupplierInvoice
}