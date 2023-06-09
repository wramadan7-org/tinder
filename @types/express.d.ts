/* eslint-disable no-unused-vars */
declare namespace Express {
  interface Response {
    sendWrapped: (message: string, data: any, statusCode: any) => void;
  }
}
