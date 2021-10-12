import { Request, Response } from 'express';
import { loginHandler } from '../services/loginService';
import { AuthMessage } from '../validations/interfaces';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { register, password } = req.query;

  const user = await loginHandler(register as string, password as string);

  const { code } = user as AuthMessage;
  if (code) {
    res.status(code).json(user);
    return;
  }

  res.status(200).json(user);
};
