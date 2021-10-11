import bcrypt from 'bcrypt';
import { findUser } from '../models/loginModel';
import { AuthMessage } from '../validations/interfaces';
import { validateLogin } from '../validations/login';
import { generateToken } from '../middlewares/jwt';

interface Iresponse {
  register: string,
  name: string,
  email: string,
  token: string,
  type: string
}

export const loginHandler = async (
  register: string, password: string,
): Promise<Iresponse | AuthMessage> => {
  const isValid = validateLogin(register, password);

  if (isValid.code !== 200) return isValid;

  const user = await findUser(register);

  if (!user) return { code: 400, message: 'Matricula não encontrada !' };

  const validPassword = bcrypt.compareSync(password, user.password);

  const token = generateToken(user._id, user.register);

  const response: Iresponse = {
    register: user.register,
    name: user.name,
    email: user.email,
    token,
    type: user.type,
  };

  return validPassword ? response : { code: 400, message: 'Senha inválida !' };
};
