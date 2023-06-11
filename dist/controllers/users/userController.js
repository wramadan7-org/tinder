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
exports.updateImageProfileController = exports.getOwnProfileController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const userModel_1 = require("../../models/userModel");
const getOwnProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.user;
        const profile = yield (0, userModel_1.getUserById)(id);
        if (profile.length <= 0) {
            res.sendWrapped('User not found', http_status_1.default.NOT_FOUND);
            return;
        }
        res.sendWrapped('You\'re account', http_status_1.default.OK, profile[0]);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.getOwnProfileController = getOwnProfileController;
const updateImageProfileController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { id } = req.user;
        if (!req.file) {
            res.sendWrapped('Please insert image in profile key', http_status_1.default.BAD_REQUEST);
            return;
        }
        const typeFile = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.mimetype.split('/')[1]) || '.jpg';
        const renameFile = `static/images/profiles/${req.user.id}-${req.user.firstName}-${req.user.lastName}.${typeFile}`;
        yield (0, userModel_1.updateProfileUser)(id, renameFile);
        res.sendWrapped('Success update profile', http_status_1.default.OK);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.updateImageProfileController = updateImageProfileController;
