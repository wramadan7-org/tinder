"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateCreatePremiumAccount = (data) => {
    const schema = joi_1.default.object({
        period: joi_1.default.date().iso().required(),
    });
    return schema.validate(data);
};
exports.default = validateCreatePremiumAccount;
