const adminRoutes = require("express").Router();
const { jwtAdminVerify } = require("../../../helper/authHandler");
const { login, getAdminProfile, logout, resetAdminPassword, updateAdminProfile, forgotPassword, setNewPassword } = require("../controller/adminController");

const { adminLogin, resetAdminPasswordJoiMiddleware } = require("../service/adminService");

adminRoutes.post("/login", adminLogin, login);
adminRoutes.get("/profile", jwtAdminVerify, getAdminProfile);
adminRoutes.put("/logout", jwtAdminVerify, logout);
adminRoutes.put("/reset/password", jwtAdminVerify, resetAdminPasswordJoiMiddleware, resetAdminPassword );
adminRoutes.patch('/update-admin-profile',jwtAdminVerify, updateAdminProfile)
adminRoutes.post('/forgot-password',forgotPassword)
adminRoutes.patch('/reset-admin-password', jwtAdminVerify,setNewPassword)

module.exports = adminRoutes;
