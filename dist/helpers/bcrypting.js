"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.compared = exports.bcrypted = void 0;
const bcrypt_1 = __importStar(require("bcrypt"));
const customError_1 = __importDefault(require("../middlewares/customError"));
/**
 * Function to encrypt password
 * @param password string
 * @param salt number
 * @returns string
 */
const bcrypted = (password, salt) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bcrypting = yield bcrypt_1.default.hash(password, salt);
        return bcrypting;
    }
    catch (error) {
        throw new customError_1.default(error, 400);
    }
});
exports.bcrypted = bcrypted;
/**
 * Function to compare password
 * @param password string
 * @param encryptPassword string
 * @returns boolean
 */
const compared = (password, encryptPassword) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comparing = yield (0, bcrypt_1.compare)(password, encryptPassword);
        return comparing;
    }
    catch (error) {
        throw new customError_1.default(error, 400);
    }
});
exports.compared = compared;
