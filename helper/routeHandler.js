const { Router } = require("express");
const baseRouter = Router();
const basePath = "/api/v1/admin";

const adminRoutes = require("../module/admin/routes/adminRoutes");

baseRouter.use("/", adminRoutes);

module.exports = { baseRouter, basePath };
