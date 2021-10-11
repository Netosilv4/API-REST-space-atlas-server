import { Request, Response } from 'express';
import { loginHandler } from '../services/loginService';

export const login = async (req: Request, res: Response) => {
  const { register, password }: { register: string, password: string } = req.body;

  const user = await loginHandler(register, password);

  res.status(200).json(user);
};
