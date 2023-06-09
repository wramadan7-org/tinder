import { Request, Response, NextFunction } from 'express';
declare const home: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default home;
