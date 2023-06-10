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
const passValidation_1 = __importDefault(require("../../validations/passes/passValidation"));
const passModel_1 = require("../../models/passModel");
const createPassController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const data = req.body;
        const { idUserTarget } = data;
        const date = (0, moment_1.default)().format('YYYY-MM-DD');
        // Validate request body using DTO
        const validateResult = (0, passValidation_1.default)(data);
        if (validateResult.error) {
            res.sendWrapped(validateResult.error.details[0].message, http_status_1.default.BAD_REQUEST);
            return;
        }
        // Check same account to pass on spesifict date (one day)
        const checkPassSameAccountOnSpesifictDay = yield (0, passModel_1.getPassByIdUserAndDateAndLimitToCatchSamePassUserInSameDay)(id, date, idUserTarget, 10);
        if (checkPassSameAccountOnSpesifictDay.length > 0) {
            res.sendWrapped('You can\'t pass same account in the same day', http_status_1.default.CONFLICT);
            return;
        }
        // Check the premium account with type unlimited
        const checkPremiumAccount = yield (0, premiumModel_1.getPremiumAccountByIdAndType)(id, 'unlimited');
        // If have account premium unlimited can pass unlimited user with different day
        if (checkPremiumAccount.length > 0) {
            yield (0, passModel_1.createPass)(id, idUserTarget);
            res.sendWrapped('Success pass user', http_status_1.default.CREATED);
            return;
        }
        // Check length user we pass
        const checkLengthPassForLimit = yield (0, passModel_1.getPassByIdUserAndDateAndLimitToCatchLimitPass)(id, date, 10);
        // If user we pass more than 10 on same day return reach limit
        if (checkLengthPassForLimit.length >= 10) {
            res.sendWrapped('You have reached the limit', http_status_1.default.CONFLICT);
            return;
        }
        // Create pass
        yield (0, passModel_1.createPass)(id, idUserTarget);
        res.sendWrapped('Success pass user', http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
});
exports.default = createPassController;
