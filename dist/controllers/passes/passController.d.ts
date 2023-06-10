import { Request, Response, NextFunction } from 'express';
declare const createPassController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createPassController;
