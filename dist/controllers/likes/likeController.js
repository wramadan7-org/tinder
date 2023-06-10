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
const likeValidation_1 = __importDefault(require("../../validations/likes/likeValidation"));
const likeModel_1 = require("../../models/likeModel");
const createLikeController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const data = req.body;
        const { idUserTarget } = data;
        const date = (0, moment_1.default)().format('YYYY-MM-DD');
        // Validate request body using DTO
        const validateResult = (0, likeValidation_1.default)(data);
        if (validateResult.error) {
            res.sendWrapped(validateResult.error.details[0].message, http_status_1.default.BAD_REQUEST);
            return;
        }
        // Check same account to like on spesifict date (one day)
        const checkLikeSameAccountOnSpesifictDay = yield (0, likeModel_1.getLikeByIdUserAndDateAndLimitToCatchSameLikeUserInSameDay)(id, date, idUserTarget, 10);
        if (checkLikeSameAccountOnSpesifictDay.length > 0) {
            res.sendWrapped('You can\'t like same account in the same day', http_status_1.default.CONFLICT);
            return;
        }
        // Check the premium account with type unlimited
        const checkPremiumAccount = yield (0, premiumModel_1.getPremiumAccountByIdAndType)(id, 'unlimited');
        // If have account premium unlimited can like unlimited user with different day
        if (checkPremiumAccount.length > 0) {
            yield (0, likeModel_1.createLike)(id, idUserTarget);
            res.sendWrapped('Success like user', http_status_1.default.CREATED);
            return;
        }
        // Check length user we like
        const checkLengthLikeForLimit = yield (0, likeModel_1.getLikeByIdUserAndDateAndLimitToCatchLimitLike)(id, date, 10);
        // If user we like more than 10 on same day return reach limit
        if (checkLengthLikeForLimit.length >= 10) {
            res.sendWrapped('You have reached the limit', http_status_1.default.CONFLICT);
            return;
        }
        // Create like
        yield (0, likeModel_1.createLike)(id, idUserTarget);
        res.sendWrapped('Success like user', http_status_1.default.CREATED);
    }
    catch (error) {
        next(error);
    }
});
exports.default = createLikeController;
