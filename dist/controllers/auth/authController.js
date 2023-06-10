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
exports.registerController = exports.loginController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const userModel_1 = require("../../models/userModel");
const authValidation_1 = require("../../validations/auth/authValidation");
const bcrypting_1 = require("../../helpers/bcrypting");
const generateToken_1 = __importDefault(require("../../helpers/generateToken"));
const loginController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { email, password, } = data;
        // Validate request body using DTO
        const validateResult = (0, authValidation_1.validationLoginDto)(data);
        if (validateResult.error) {
            res.sendWrapped(validateResult.error.details[0].message, http_status_1.default.BAD_REQUEST);
            return;
        }
        // Check exists user
        const existsUser = yield (0, userModel_1.getUserByEmail)(email);
        let dataUser;
        // Check length
        if (Array.isArray(existsUser)) {
            if (!existsUser.length) {
                res.sendWrapped('Email incorrect', http_status_1.default.BAD_REQUEST);
                return;
            }
            // Compare password from body with encrypting data password in database
            const comparePassword = yield (0, bcrypting_1.compared)(password, existsUser[0].password);
            // If password not match return error
            if (!comparePassword) {
                res.sendWrapped('Password incorrect.', http_status_1.default.BAD_REQUEST);
                return;
            }
            // Define data to sign in token
            dataUser = {
                id: existsUser[0].id,
                firstName: existsUser[0].first_name,
                lastName: existsUser[0].last_name,
                email: existsUser[0].email,
                age: existsUser[0].age,
                gender: existsUser[0].gender,
            };
        }
        // Generate token
        const token = yield (0, generateToken_1.default)(dataUser);
        // Data to send in response
        const result = {
            token,
        };
        res.sendWrapped('Login successfully', http_status_1.default.OK, result);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.loginController = loginController;
const registerController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const { firstName, lastName, age, gender, email, password, } = data;
        // Validate request body using DTO
        const validateResult = (0, authValidation_1.validationRegisterDto)(data);
        if (validateResult.error) {
            res.sendWrapped(validateResult.error.details[0].message, http_status_1.default.BAD_REQUEST);
            return;
        }
        // Check exists user
        const existsUser = yield (0, userModel_1.getUserByEmail)(email);
        // Check length
        if (Array.isArray(existsUser)) {
            if (existsUser.length) {
                res.sendWrapped('User already exists', http_status_1.default.CONFLICT);
                return;
            }
        }
        // Encrypting password from request body to insert in database
        const bcryptPassword = yield (0, bcrypting_1.bcrypted)(password, 12);
        // Refactor password from body with password from encrypting password
        const results = {
            firstName,
            lastName,
            age,
            gender,
            email,
            password: bcryptPassword,
        };
        // Create user
        yield (0, userModel_1.createDataUser)(results);
        res.sendWrapped('Success', http_status_1.default.CREATED, results);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.registerController = registerController;
