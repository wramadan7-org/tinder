/**
 * Function to execude query
 * @param query string
 * @param params any
 * @returns array
 */
declare const executeQuery: (query: string, params?: any) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
export default executeQuery;
