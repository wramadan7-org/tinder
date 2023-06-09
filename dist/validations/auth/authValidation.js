"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationRegisterDto = exports.validationLoginDto = void 0;
const joi_1 = __importDefault(require("joi"));
const validationLoginDto = (data) => {
    const schema = joi_1.default.object({
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
    });
    return schema.validate(data);
};
exports.validationLoginDto = validationLoginDto;
const validationRegisterDto = (data) => {
    const schema = joi_1.default.object({
        firstName: joi_1.default.string().required(),
        lastName: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        age: joi_1.default.number().required(),
        gender: joi_1.default.string().required(),
    });
    return schema.validate(data);
};
exports.validationRegisterDto = validationRegisterDto;
