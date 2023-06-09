declare class CustomError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
export default CustomError;
