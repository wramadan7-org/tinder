"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../../middlewares/authentication"));
const premiumController_1 = __importDefault(require("../../controllers/premiums/premiumController"));
const app = (0, express_1.Router)();
app.post('/', authentication_1.default, premiumController_1.default);
exports.default = app;
