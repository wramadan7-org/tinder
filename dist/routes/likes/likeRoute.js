"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../../middlewares/authentication"));
const likeController_1 = __importDefault(require("../../controllers/likes/likeController"));
const app = (0, express_1.Router)();
app.post('/', authentication_1.default, likeController_1.default);
exports.default = app;
