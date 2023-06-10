/**
 * Service to create account likes by own id
 * @param idUser number
 * @param idTarget number
 * @returns data
 */
export declare const createLike: (idUser: number, idTarget: number) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
/**
 * Select like by id user and spesifict date to check reach limit
 * in one day spesifict date
 * @param IdUser number
 * @param date string
 * @param limit number
 * @returns data
 */
export declare const getLikeByIdUserAndDateAndLimitToCatchLimitLike: (idUser: number, date: string, limit: number) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
/**
 * Service to get id user and id user target and spesifict date to
 * check same like user in same day
 * @param idUser number
 * @param date string
 * @param idUserTarget number
 * @param limit number
 * @returns data
 */
export declare const getLikeByIdUserAndDateAndLimitToCatchSameLikeUserInSameDay: (idUser: number, date: string, idUserTarget: number, limit: number) => Promise<import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/RowDataPacket")[][] | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket") | import("mysql2/typings/mysql/lib/protocol/packets/OkPacket")[] | import("mysql2/typings/mysql/lib/protocol/packets/ResultSetHeader")>;
