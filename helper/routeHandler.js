const { Router } = require("express");
const baseRouter = Router();
const basePath = "/api/v1/admin";

const adminRoutes = require("../module/admin/routes/adminRoutes");
const userRoutes = require("../module/common/customer/routers/userRoutes");
const transactionRoutes = require("../module/common/customercredit/routers/transactionRoutes");
const supplierRoutes=require('../module/common/supplier/routers/supplierRouter');
const productRoutes = require("../module/common/products/routes/productRoute");

baseRouter.use("/", adminRoutes);
baseRouter.use("/user", userRoutes);
baseRouter.use("/transaction", transactionRoutes);
baseRouter.use('/supplier',supplierRoutes)
baseRouter.use('/product',productRoutes)

module.exports = { baseRouter, basePath };
