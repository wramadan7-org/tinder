import { Request, Response, NextFunction } from 'express';
declare const authenticationToken: (req: Request, res: Response, next: NextFunction) => void;
export default authenticationToken;
