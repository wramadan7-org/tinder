/**
 * Service to create account likes by own id
 * @param idUser number
 * @param idTarget number
 * @returns data
 */
declare const craeteLike: (idUser: number, idTarget: number) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
export default craeteLike;
