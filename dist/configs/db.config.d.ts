import mysql from 'mysql2/promise';
export declare const pool: mysql.Pool;
export declare const connectDatabase: () => Promise<void>;
