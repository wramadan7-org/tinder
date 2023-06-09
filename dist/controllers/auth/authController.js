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
exports.register = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const http_status_1 = __importDefault(require("http-status"));
const userModel_1 = require("../../models/userModel");
const authValidation_1 = require("../../validations/auth/authValidation");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send({ message: 'Success' });
    }
    catch (error) {
        throw error;
    }
});
exports.login = login;
const register = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { firstName, lastName, age, gender, email, password, } = data;
        // Validate request body using DTO
        const validateResult = (0, authValidation_1.validationRegisterDto)(data);
        if (validateResult.error) {
            res.sendWrapped(validateResult.error.details[0].message, http_status_1.default.BAD_REQUEST);
            return;
        }
        const bcrypted = yield bcrypt_1.default.hash(password, 12);
        const results = {
            firstName,
            lastName,
            age,
            gender,
            email,
            password: bcrypted,
        };
        const created = yield (0, userModel_1.createDataUser)(results);
        res.sendWrapped('Success', http_status_1.default.OK, created);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.register = register;
