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
exports.createPremiumAccountVerfied = exports.createPremiumAccountUnlimited = void 0;
const http_status_1 = __importDefault(require("http-status"));
const premiumModel_1 = require("../../models/premiumModel");
const createPremiumAccountUnlimited = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const existsPremiumAccount = yield (0, premiumModel_1.getPremiumAccountByIdAndType)(id, 'unlimited');
        if (existsPremiumAccount.length > 0) {
            res.sendWrapped('You\'re account already premium unlimited', http_status_1.default.CONFLICT);
            return;
        }
        yield (0, premiumModel_1.createPremiumUnlimited)(id);
        res.sendWrapped('Successfull to premium account unlimited', http_status_1.default.CREATED);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.createPremiumAccountUnlimited = createPremiumAccountUnlimited;
const createPremiumAccountVerfied = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const existsPremiumAccount = yield (0, premiumModel_1.getPremiumAccountByIdAndType)(id, 'verified');
        if (existsPremiumAccount.length > 0) {
            res.sendWrapped('You\'re account already premium verified', http_status_1.default.CONFLICT);
            return;
        }
        yield (0, premiumModel_1.createPremiumVerified)(id);
        res.sendWrapped('Successfull to premium account verified', http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
});
exports.createPremiumAccountVerfied = createPremiumAccountVerfied;
