"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllDataUser = exports.createDataUser = void 0;
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
const createDataUser = (data) => {
    const query = `INSERT INTO users (first_name, last_name, email, password, age, gender) VALUES ('${data.firstName}', '${data.lastName}', '${data.email}', '${data.password}', ${data.age}, '${data.gender}')`;
    const created = (0, queryExecute_1.default)(query).then((results) => results).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return created;
};
exports.createDataUser = createDataUser;
const getAllDataUser = () => {
    const query = 'SELECT * FROM users';
    const data = (0, queryExecute_1.default)(query).then((results) => results).catch((error) => {
        throw error;
    });
    return data;
};
exports.getAllDataUser = getAllDataUser;
