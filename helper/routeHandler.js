const { Router } = require("express");
const baseRouter = Router();
const basePath = "/api/v1/admin";

const adminRoutes = require("../module/admin/routes/adminRoutes");
const userRoutes = require("../module/common/customer/routers/userRoutes");
const transactionRoutes = require("../module/common/customercredit/routers/transactionRoutes");
const supplierRoutes=require('../module/common/supplier/routers/supplierRouter');
const productRoutes = require("../module/common/products/routes/productRoute");
const suppliertransactionRoutes=require('../module/common/supplierInvoicePay/routes/supplierInvoicePayRoutes')
const cashfloatRoutes=require('../module/common/cashfloat/router/cashfloatRouter')
baseRouter.use("/", adminRoutes);
baseRouter.use("/user", userRoutes);
baseRouter.use("/transaction", transactionRoutes);
baseRouter.use('/supplier',supplierRoutes)
baseRouter.use('/product',productRoutes)
baseRouter.use('/supplier-invoice',suppliertransactionRoutes)
baseRouter.use('/cashfloat',cashfloatRoutes)

module.exports = { baseRouter, basePath };
