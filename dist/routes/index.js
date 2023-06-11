"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authRoute_1 = __importDefault(require("./auth/authRoute"));
const homeRoute_1 = __importDefault(require("./homes/homeRoute"));
const premiumRoute_1 = __importDefault(require("./premiums/premiumRoute"));
const likeRoute_1 = __importDefault(require("./likes/likeRoute"));
const passRoute_1 = __importDefault(require("./passes/passRoute"));
const userRoute_1 = __importDefault(require("./users/userRoute"));
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
    {
        path: '/premium',
        route: premiumRoute_1.default,
    },
    {
        path: '/like',
        route: likeRoute_1.default,
    },
    {
        path: '/pass',
        route: passRoute_1.default,
    },
    {
        path: '/user',
        route: userRoute_1.default,
    },
];
defaultRouter.forEach(({ path, route }) => {
    app.use(path, route);
});
exports.default = app;
