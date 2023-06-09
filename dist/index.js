"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const index_1 = __importDefault(require("./routes/index"));
const db_config_1 = require("./configs/db.config");
const customError_1 = __importDefault(require("./middlewares/customError"));
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
// Set response wrapper
app.response.sendWrapped = function (message, statusCode, data) {
    return this.status(statusCode).send({
        status: statusCode || http_status_1.default.OK,
        message,
        data,
    });
};
// Connect the database
(0, db_config_1.connectDatabase)();
// Custom 404
app.use((req, res, next) => {
    res.status(404).send({
        status: 404,
        message: "Sorry can't find that!",
    });
});
// Error handler
app.use((err, req, res, next) => {
    // Handle custom errors
    if (err instanceof customError_1.default) {
        res.status(err.statusCode).send({
            status: err.statusCode,
            message: err.message,
        });
    }
    else {
        // Handle other errors
        res.sendWrapped(err.message, http_status_1.default.INTERNAL_SERVER_ERROR);
    }
});
app.listen(port, () => {
    console.log(`Server run at port ${port}`);
});
