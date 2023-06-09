"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute_1 = __importDefault(require("./auth/authRoute"));
const homeRoute_1 = __importDefault(require("./home/homeRoute"));
const app = (0, express_1.Router)();
const defaultRouter = [
    {
        path: '/auth',
        route: authRoute_1.default,
    },
    {
        path: '/home',
        route: homeRoute_1.default,
    },
];
defaultRouter.forEach(({ path, route }) => {
    app.use(path, route);
});
exports.default = app;
