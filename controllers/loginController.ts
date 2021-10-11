import { Request, Response } from 'express';
import { loginHandler } from '../services/loginService';

export const login = async (req: Request, res: Response) => {
  const { register, password } = req.query;
  const user = await loginHandler(register as string, password as string);

  res.status(200).json(user);
};
