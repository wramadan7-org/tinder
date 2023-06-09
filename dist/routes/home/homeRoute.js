"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../../middlewares/authentication"));
const homeController_1 = __importDefault(require("../../controllers/home/homeController"));
const app = (0, express_1.Router)();
app.get('/', authentication_1.default, homeController_1.default);
exports.default = app;
