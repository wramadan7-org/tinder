"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../controllers/auth/authController");
const app = (0, express_1.Router)();
app.post('/login', authController_1.loginController);
app.post('/register', authController_1.registerController);
exports.default = app;
