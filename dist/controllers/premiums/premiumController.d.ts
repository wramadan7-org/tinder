import { Request, Response, NextFunction } from 'express';
declare const createPremiumAccount: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createPremiumAccount;
