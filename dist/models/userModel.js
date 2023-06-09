"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.getUserByEmail = exports.getAllDataUser = exports.createDataUser = void 0;
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Service to create data user
 * @param dataParam object
 * @returns data
 */
const createDataUser = (dataParam) => {
    const query = `INSERT INTO users (first_name, last_name, email, password, age, gender) VALUES ('${dataParam.firstName}', '${dataParam.lastName}', '${dataParam.email}', '${dataParam.password}', ${dataParam.age}, '${dataParam.gender}')`;
    const data = (0, queryExecute_1.default)(query).then((results) => results).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.createDataUser = createDataUser;
/**
 * Service to get all data user
 * @returns data
 */
const getAllDataUser = () => {
    const query = 'SELECT * FROM users';
    const data = (0, queryExecute_1.default)(query).then((results) => results).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.getAllDataUser = getAllDataUser;
/**
 * Service to get user by email
 * @param email string
 * @returns data
 */
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        const data = yield (0, queryExecute_1.default)(query);
        return data;
    }
    catch (error) {
        throw new customError_1.default(error, 500);
    }
});
exports.getUserByEmail = getUserByEmail;
const updateUserById = (idParam, dataParam) => {
    const query = 'P';
};
exports.updateUserById = updateUserById;
