"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHistoryViewByIdViewer = exports.createHistoryView = void 0;
/* eslint-disable no-unused-vars */
const queryExecute_1 = __importDefault(require("../helpers/queryExecute"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Service to create history view multiple row
 * @param values string
 * @returns data
 */
const createHistoryView = (values) => {
    const query = `INSERT INTO history_viewed (id_viewer, id_watched) VALUES ${values}`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.createHistoryView = createHistoryView;
/**
 * Select history viewed
 * @param idViewer number
 * @param date string
 * @param limit number
 * @returns data
 */
const getHistoryViewByIdViewer = (idViewer, date, limit) => {
    const query = `SELECT id_watched FROM history_viewed WHERE id_viewer = ${idViewer} AND id_watched <> ${idViewer} AND DATE(created_at) = '${date}' LIMIT ${limit}`;
    const data = (0, queryExecute_1.default)(query).then((result) => result).catch((error) => {
        throw new customError_1.default(error, 500);
    });
    return data;
};
exports.getHistoryViewByIdViewer = getHistoryViewByIdViewer;
