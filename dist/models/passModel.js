"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay = exports.getPassByIdUserAndDateAndLimitToCatchLimitPass = exports.createPass = void 0;
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Service to create account pass by own id
 * @param idUser number
 * @param idTarget number
 * @returns data
 */
const createPass = (idUser, idTarget) => {
    const query = `INSERT INTO passes (id_user, id_user_target) VALUES (${idUser}, ${idTarget})`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.createPass = createPass;
/**
 * Select pass by id user and spesifict date to check reach limit
 * in one day spesifict date
 * @param IdUser number
 * @param date string
 * @param limit number
 * @returns data
 */
const getPassByIdUserAndDateAndLimitToCatchLimitPass = (idUser, date, limit) => {
    const query = `SELECT * FROM passes WHERE id_user = ${idUser}\n
   AND DATE(created_at) = '${date}' LIMIT ${limit}`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.getPassByIdUserAndDateAndLimitToCatchLimitPass = getPassByIdUserAndDateAndLimitToCatchLimitPass;
/**
 * Service to get id user and id user target and spesifict date to
 * check same pass user in same day
 * @param idUser number
 * @param date string
 * @param idUserTarget number
 * @param limit number
 * @returns data
 */
const getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay = (idUser, date, idUserTarget, limit) => {
    const query = `SELECT * FROM passes WHERE id_user = ${idUser}\n
   AND id_user_target = ${idUserTarget} AND DATE(created_at) = '${date}' LIMIT ${limit}`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay = getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay;
