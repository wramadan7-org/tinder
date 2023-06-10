"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPremiumAccountByIdAndType = exports.createPremiumVerified = exports.createPremiumUnlimited = void 0;
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Service to create premium account unlimited
 * @param id number
 * @returns data
 */
const createPremiumUnlimited = (id) => {
    const query = `INSERT INTO premiums (id_user, type) VALUES (${id}, 'unlimited')`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.createPremiumUnlimited = createPremiumUnlimited;
/**
 * Service to create premium verified
 * @param id number
 * @returns data
 */
const createPremiumVerified = (id) => {
    const query = `INSERT INTO premiums (id_user, type) VALUES (${id}, 'verified')`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.createPremiumVerified = createPremiumVerified;
/**
 * Service to get premium accound by id user
 * @param id number
 * @param type string
 * @returns data
 */
const getPremiumAccountByIdAndType = (id, type) => {
    const query = `SELECT * FROM premiums WHERE id_user = ${id} AND type = '${type}'`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.getPremiumAccountByIdAndType = getPremiumAccountByIdAndType;
