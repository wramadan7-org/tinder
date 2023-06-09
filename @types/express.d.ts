/* eslint-disable no-unused-vars */
declare namespace Express {
  interface Response {
    sendWrapped: (message: string, statusCode: any, data?: any) => void;
  }

  interface Request {
    user: any;
  }
}
