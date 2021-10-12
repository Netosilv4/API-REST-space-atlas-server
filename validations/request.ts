import { RequestBody } from '../controllers/adminControllers';
import { IRequest } from '../schema/studentsRequests';
import { AuthMessage } from './interfaces';

export const validateRequest = (request: IRequest): AuthMessage => {
  const {
    register, name, target, newValue, reason,
  } = request;

  if (!register) return { code: 400, message: 'Matricula não informada' };

  if (!name) return { code: 400, message: 'Nome não informado' };

  if (!target) return { code: 400, message: 'Campo não informada' };

  if (!newValue) return { code: 400, message: 'Alteração não informada' };

  if (!reason) return { code: 400, message: 'Motivo não informado' };

  return { code: 200, message: 'OK' };
};

export const validateUpdate = (request: RequestBody, register: string): AuthMessage => {
  const { target, value } = request;

  if (!target) return { code: 400, message: 'Por favor, indique qual campo deseja alterar' };
  if (!value) return { code: 400, message: 'Por favor, indique qual o novo valor' };
  if (!register) return { code: 400, message: 'Matrícula não informada ' };
  return { code: 200, message: 'OK' };
};
