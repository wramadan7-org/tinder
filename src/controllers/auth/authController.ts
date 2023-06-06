import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.send({ message: 'Success' });
};

export const register = (req: Request, res: Response) => {
  res.send({ message: 'Success' });
};
