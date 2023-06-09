/**
 * Function to encrypt password
 * @param password string
 * @param salt number
 * @returns string
 */
export declare const bcrypted: (password: string, salt: number) => Promise<string>;
/**
 * Function to compare password
 * @param password string
 * @param encryptPassword string
 * @returns boolean
 */
export declare const compared: (password: string, encryptPassword: string) => Promise<boolean>;
