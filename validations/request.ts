import { IRequest } from '../schema/studentsRequests';
import { AuthMessage } from './interfaces';

export const validateRequest = (request: IRequest): AuthMessage => {
  const {
    register, name, target, newValue, reason,
  } = request;

  if (!register) return { code: 404, message: 'Matricula não informada' };

  if (!name) return { code: 404, message: 'Nome não informado' };

  if (!target) return { code: 404, message: 'Campo não informada' };

  if (!newValue) return { code: 404, message: 'Alteração não informada' };

  if (!reason) return { code: 404, message: 'Motivo não informado' };

  return { code: 200, message: 'ok' };
};
