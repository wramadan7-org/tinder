import { Request, Response, NextFunction } from 'express';
declare const createLikeController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default createLikeController;
