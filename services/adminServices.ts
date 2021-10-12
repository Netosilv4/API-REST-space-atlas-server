import bcrypt from 'bcrypt';
import { RequestBody } from '../controllers/adminControllers';
import { insertNewStudent, insertNewUser, updateStudentBasics } from '../models/adminModel';
import { IStudent } from '../schema/studentSchema';
import { IUser } from '../schema/userSchema';
import { AuthMessage } from '../validations/interfaces';
import { validateUpdate } from '../validations/request';
import { UpdateQuery } from './interfaces';

export const newStudentHandler = async (student: IStudent): Promise<AuthMessage> => {
  const cryptPassword = bcrypt.hashSync(student.auth.password, 10);

  const cryptedStudent = {
    ...student,
    auth: {
      register: student.auth.register,
      password: cryptPassword,
    },
  } as IStudent;

  const response = await insertNewStudent(cryptedStudent);

  if (!response) return { code: 400, message: 'Não foi possível adicionar estudante' };

  await insertNewUser(({
    register: student.auth.register,
    password: cryptPassword,
    name: student.basicInfo.name,
    type: 'student',
  }) as IUser);

  return { code: 200, message: 'Estudante adicionado' };
};

export const updateStudentHandler = async (request: RequestBody, register: string)
  : Promise<AuthMessage> => {
  const isValid = validateUpdate(request, register);

  if (isValid.code !== 200) return isValid;

  const response : UpdateQuery = await updateStudentBasics(request, register);

  const { acknowledged } = response;

  if (acknowledged && acknowledged === true) return { code: 200, message: 'Usuario atualizado' };

  return { code: 400, message: 'Não foi possivel atualizar usuario, verifique as informações passadas.' };
};
