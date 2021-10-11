import { Query } from 'mongoose';
import { IStudent, Student } from '../schema/studentSchema';
import { IRequest, StudentRequest } from '../schema/studentsRequests';
import { Class, IClass } from '../schema/classSchema';
import { Grades, IGrades } from '../schema/gradesSchema';
import { ISubject, Subjects } from '../schema/subjectsSchema';

export const findStudent = (register: string):
  Query<(IStudent & { _id: any; }) | null, IStudent & { _id: any; }, {}, IStudent> => {
  const student = Student.findOne({ 'auth.register': register });

  return student;
};

export const newRequest = (request: IRequest):
  Promise<IRequest & { _id: any; }> => {
  const response = StudentRequest.create(request);

  return response;
};

export const findClass = (studentClass: string):
  Query<(IClass & { _id: any; }) | null, IClass & { _id: any; }, {}, IClass> => {
  const sClass = Class.findOne({ class: studentClass });

  return sClass;
};

export const findGrades = (register: string):
  Query<IGrades & { _id: any; } | null, IGrades & { _id: any; }, {}, IGrades> => {
  const grades = Grades.findOne({ register });

  return grades;
};

export const findSubjects = ():
  Query<(ISubject & { _id: any })[], ISubject & { _id: any; }, {}, ISubject> => {
  const schoolSubjects = Subjects.find();

  return schoolSubjects;
};
