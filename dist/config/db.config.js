"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mysql_1 = __importDefault(require("mysql"));
dotenv_1.default.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, } = process.env;
const connectDatabase = () => {
    const connection = mysql_1.default.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
    });
    connection.query('SELECT 1 + 1 AS solution', (error, rows) => {
        if (error)
            throw error;
        console.log('The solution is: ', rows[0].solution);
    });
    connection.end();
};
exports.default = connectDatabase;
