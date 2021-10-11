import {
  findStudent, newRequest, findClass, findGrades, findSubjects,
} from '../models/studentModel';
import { IStudent } from '../schema/studentSchema';
import { IRequest } from '../schema/studentsRequests';
import { AuthMessage } from '../validations/interfaces';
import { validateRequest } from '../validations/request';
import { IGradesSubjects, ISchedule } from './interfaces';

export const studentHandler = async (register: string)
  : Promise<IStudent & { _id: any; }| AuthMessage> => {
  const response = await findStudent(register);

  if (!response) return { code: 401, message: 'Estudante não encontrado' };

  return response;
};

export const newRequestHandler = async (request: IRequest)
  : Promise<IRequest & { _id: any; } | AuthMessage> => {
  const isValid = validateRequest(request);

  if (isValid.code !== 200) return isValid;

  const studentRequest = await newRequest(request);

  return studentRequest;
};

export const scheduleHandler = async (classCode: string)
  : Promise<ISchedule | AuthMessage> => {
  const sClass = await findClass(classCode);

  if (!sClass) return { code: 401, message: 'Não encontramos uma turma com este código' };

  const subjects = await findSubjects();

  return { studentClass: sClass, schoolSubjects: subjects };
};

export const gradesHandler = async (register: string):
  Promise<IGradesSubjects | AuthMessage> => {
  const grades = await findGrades(register);

  if (!grades) return { code: 401, message: 'Não encontramos provas com esse registro' };

  const subjects = await findSubjects();

  return { grades, subjects };
};
