"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPremiumAccountById = exports.createPremium = void 0;
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Service to create premium account
 * @param id number
 * @param period string
 * @returns data
 */
const createPremium = (id, period) => {
    const query = `INSERT INTO premiums (id_user, period) VALUES (${id}, '${period}')`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.createPremium = createPremium;
/**
 * Service to get premium accound by id user and period more than spesifict date
 * @param id number
 * @param period string
 * @returns data
 */
const getPremiumAccountById = (id, period) => {
    const query = `SELECT * FROM premiums WHERE id_user = ${id} AND DATE(period) <= ${period}`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.getPremiumAccountById = getPremiumAccountById;
