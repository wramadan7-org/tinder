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
const premiumModel_1 = require("../../models/premiumModel");
const createPremiumAccount = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const aDayFromNow = (0, moment_1.default)().add(1, 'day').format('YYYY-MM-DD');
        const existsPremiumAccount = yield (0, premiumModel_1.getPremiumAccountById)(id, aDayFromNow);
        if (existsPremiumAccount.length > 0) {
            res.sendWrapped('You\'re account already premium', http_status_1.default.CONFLICT);
            return;
        }
        yield (0, premiumModel_1.createPremium)(id, aDayFromNow);
        res.sendWrapped('Successfull to premium account', http_status_1.default.CREATED);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.default = createPremiumAccount;
