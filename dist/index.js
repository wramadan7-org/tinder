"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
// Set cors
app.use((0, cors_1.default)());
app.options('*', (0, cors_1.default)());
// Urlencoded
app.use(express_1.default.urlencoded({ extended: true }));
// Convert JSON
app.use(express_1.default.json());
// Protect app from some well-known web vulnerabilities by setting HTTP headers appropriately.
app.use((0, helmet_1.default)());
// Run default route
app.use('/v1', index_1.default);
app.listen(port, () => {
    console.log(`Server run at port ${port}`);
});
