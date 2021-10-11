import { ObjectId } from 'mongoose';
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { findStudent } from '../models/studentModel';
import { Decoded, JwtConfig } from './interfaces';

const secret = process.env.JTW_SECRET;

export const jwtConfig: JwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

export const generateToken = (id: ObjectId, register: string) => {
  const token = jwt.sign({ data: { id, register } }, secret, jwtConfig);
  return token;
};

export const tokenCheck = async (
  req: Request, res: Response, next: NextFunction,
): Promise<void> => {
  const { authorization } = req.headers;
  const { register } = req.query;

  if (!register) {
    res.status(401).json({ message: 'Matrícula não informada ' });
    return;
  }

  const token = authorization;

  if (!token) {
    res.status(401).json({ message: 'Token não informado' });
    return;
  }

  const split = token?.split(' ') || [];

  const decoded = jwt.verify(split[1], secret);

  const user = await findStudent(register as string);

  if (!user) {
    res.status(401).json({ message: 'Erro ao procurar usuário do token.' });
    return;
  }

  if (register !== (decoded as Decoded).data.register) {
    res.status(401).json({ message: 'Usuario não bate com o token' });
    return;
  }

  next();
};
