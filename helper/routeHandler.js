const { Router } = require("express");
const baseRouter = Router();
const basePath = "/api/v1/admin";

const adminRoutes = require("../module/admin/routes/adminRoutes");
const userRoutes = require("../module/common/users/routers/userRoutes");
const transactionRoutes = require("../module/common/transaction/routers/transactionRoutes");

baseRouter.use("/", adminRoutes);
baseRouter.use("/user", userRoutes);
baseRouter.use("/transaction", transactionRoutes);

module.exports = { baseRouter, basePath };
