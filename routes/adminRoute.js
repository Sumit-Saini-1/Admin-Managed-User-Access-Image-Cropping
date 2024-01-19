const express= require('express');
const { serverAdminLogin, adminLogin } = require('../Controllers/adminController');
const adminRoute=express();

adminRoute.get("/adminLogin",serverAdminLogin);
adminRoute.post("/adminLogin",adminLogin);

module.exports=adminRoute;