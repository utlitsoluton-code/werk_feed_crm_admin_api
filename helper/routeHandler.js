const { Router } = require("express");
const baseRouter = Router();
const basePath = "/api/v1/admin";

const adminRoutes = require("../module/admin/routes/adminRoutes");
const userRoutes = require("../module/common/users/routers/userRoutes");

baseRouter.use("/", adminRoutes);
baseRouter.use("/user", userRoutes);

module.exports = { baseRouter, basePath };
