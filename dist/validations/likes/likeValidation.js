"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validationCreateLike = (data) => {
    const schema = joi_1.default.object({
        idUserTarget: joi_1.default.number().required(),
    });
    return schema.validate(data);
};
exports.default = validationCreateLike;
