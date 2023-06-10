import { Request, Response, NextFunction } from 'express';
declare const homeController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default homeController;
