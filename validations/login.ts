import { AuthMessage } from './interfaces';

export const validateLogin = (register: string, password: string): AuthMessage => {
  if (!register) return { code: 400, message: 'Matrícula não informada !' };
  if (!password) return { code: 400, message: 'Senha não informada !' };
  if (password.length < 5) return { code: 400, message: 'Senha inválida !' };
  return { code: 200, message: 'ok' };
};
