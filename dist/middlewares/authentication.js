"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const http_status_1 = __importDefault(require("http-status"));
const customError_1 = __importDefault(require("./customError"));
dotenv_1.default.config();
const secret = process.env.SECRET;
const authenticationToken = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization || !authorization.startsWith('Bearer ')) {
            res.sendWrapped('Forbidden access', http_status_1.default.FORBIDDEN);
            return;
        }
        const token = authorization.slice(7, authorization.length);
        const decode = jsonwebtoken_1.default.verify(token, secret);
        req.user = decode;
        next();
    }
    catch (error) {
        throw new customError_1.default(error, 500);
    }
};
exports.default = authenticationToken;
