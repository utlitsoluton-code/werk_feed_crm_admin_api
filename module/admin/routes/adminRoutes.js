const adminRoutes = require("express").Router();
const { jwtAdminVerify } = require("../../../helper/authHandler");
const { login, getAdminProfile, logout, resetAdminPassword, updateAdminProfile, forgotPassword, setNewPassword } = require("../controller/adminController");
const { getCount, getCashInChart, getCashOutChart, getCashOutData, getCashInData } = require("../controller/countController");

const { adminLogin, resetAdminPasswordJoiMiddleware } = require("../service/adminService");

adminRoutes.post("/login", adminLogin, login);
adminRoutes.get("/profile", jwtAdminVerify, getAdminProfile);
adminRoutes.put("/logout", jwtAdminVerify, logout);
adminRoutes.put("/reset/password", jwtAdminVerify, resetAdminPasswordJoiMiddleware, resetAdminPassword );
adminRoutes.patch('/update-admin-profile',jwtAdminVerify, updateAdminProfile)
adminRoutes.post('/forgot-password',forgotPassword)
adminRoutes.patch('/reset-admin-password', jwtAdminVerify,setNewPassword)

adminRoutes.get('/get-count',getCount)

adminRoutes.get('/get-cah-in-chart',jwtAdminVerify,getCashInChart)
adminRoutes.get('/get-cah-out-chart',jwtAdminVerify,getCashOutChart)
adminRoutes.get('/get-cashout-data',jwtAdminVerify,getCashOutData)
adminRoutes.get('/get-cashin-data',jwtAdminVerify,getCashInData)

module.exports = adminRoutes;
