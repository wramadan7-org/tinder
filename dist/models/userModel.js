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
exports.updateUserById = exports.getListUserWithLimit = exports.getUserByEmail = exports.getAllDataUser = exports.createDataUser = void 0;
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
/**
 * Service to get list user with offset and size
 * @param offset number
 * @param size number
 * @returns array
 */
const getListUserWithLimit = (offset, size, idViewer, date) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = `SELECT id, email, first_name, last_name, age, gender, profile, created_at, updated_at FROM users WHERE id NOT IN (SELECT id_watched FROM history_viewed WHERE id_viewer = ${idViewer} AND id_watched <> ${idViewer} AND DATE(created_at) = '${date}') AND id <> ${idViewer} LIMIT ${size} OFFSET ${offset}`;
        const data = yield (0, queryExecute_1.default)(query);
        console.log('DATA', data);
        return data;
    }
    catch (error) {
        console.log(error);
        throw new customError_1.default(error, 500);
    }
});
exports.getListUserWithLimit = getListUserWithLimit;
const updateUserById = (idParam, dataParam) => {
    const query = 'P';
};
exports.updateUserById = updateUserById;
