"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
// Set the storage and set file name to save
const storage = multer_1.default.diskStorage({
    // Destination file to save
    destination: 'public/images/profiles/',
    filename: (req, file, cb) => {
        // Set name file
        const fileName = `${req.user.id}-${req.user.firstName}-${req.user.lastName}.${file.mimetype.split('/')[1]}`;
        // Set file patch to check file is exists or not
        const filePath = `public/images/profiles/${fileName}`;
        cb(null, fileName);
        // Check if a file with the same name already exists
        if (fs_1.default.existsSync(filePath)) {
            // Delete the existing file
            fs_1.default.unlinkSync(filePath);
        }
        cb(null, fileName);
    },
});
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
