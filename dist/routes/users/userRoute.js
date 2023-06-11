"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authentication_1 = __importDefault(require("../../middlewares/authentication"));
const multer_1 = __importDefault(require("../../helpers/multer"));
const userController_1 = require("../../controllers/users/userController");
const app = (0, express_1.Router)();
// app.post('/', authenticationToken, upload.single('profile'), (req: Request, res: Response) => {
//   const data = {
//     file: req.file,
//     body: req.body,
//   };
//   res.send(data);
// });
app.get('/', authentication_1.default, userController_1.getOwnProfileController);
app.patch('/', authentication_1.default, multer_1.default.single('profile'), userController_1.updateImageProfileController);
exports.default = app;
