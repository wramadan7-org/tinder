"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Service to create account passes by own id
 * @param idUser number
 * @param idTarget number
 * @returns data
 */
const craetePass = (idUser, idTarget) => {
    const query = `INSERT INTO passes (id_user, id_user_target) VALUES (${idUser}, ${idTarget})`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.default = craetePass;
