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
const http_status_1 = __importDefault(require("http-status"));
const moment_1 = __importDefault(require("moment"));
const userModel_1 = require("../../models/userModel");
const historyViewModel_1 = require("../../models/historyViewModel");
const premiumModel_1 = require("../../models/premiumModel");
const home = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let { page, size } = req.query;
    const { id } = req.user;
    const date = (0, moment_1.default)().format('YYYY-MM-DD');
    let isUnlimited = false;
    const resultPage = page || (page = 1);
    const resultSize = size || (size = 10);
    const offset = (resultPage - 1) * resultSize;
    try {
        let listUser;
        // Check the premium account with type unlimited
        const checkPremiumAccount = yield (0, premiumModel_1.getPremiumAccountByIdAndType)(id, 'unlimited');
        // If have account premium unlimited can get another user with another day now
        if (checkPremiumAccount.length > 0) {
            isUnlimited = true;
            listUser = yield (0, userModel_1.getListUserWithLimit)(offset, resultSize, id, date);
        }
        else {
            // If have't account premium unlimited only can get 10 another user with another day now
            // Check the history view
            const checkLengthHistory = yield (0, historyViewModel_1.getHistoryViewByIdViewer)(id, date, 10);
            // If have more than 10 history account watch in same day return reach limit
            if (checkLengthHistory.length >= 10) {
                res.sendWrapped('You have reached the limit', http_status_1.default.CONFLICT);
                return;
            }
            listUser = yield (0, userModel_1.getListUserWithLimit)(offset, resultSize, id, date);
        }
        // Check length of list user
        if (listUser.length > 0) {
            // Maping list user to get own id and id user target watched
            const mapForHitory = listUser.map((o) => {
                const history = `(${id}, ${o.id})`;
                return history;
            });
            // Crete multiple row from get list user id
            yield (0, historyViewModel_1.createHistoryView)(mapForHitory.toString());
        }
        res.sendWrapped('List user', http_status_1.default.OK, listUser);
    }
    catch (error) {
        next(error);
    }
});
exports.default = home;
