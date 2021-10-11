import { Query } from 'mongoose';
import { UpdateResult } from 'mongoose/node_modules/mongodb';
import { IStudent, Student } from '../schema/studentSchema';
import { IUser, User } from '../schema/userSchema';

export const insertNewStudent = async (student: IStudent)
  : Promise<IStudent & { _id: any; }> => {
  const response = await Student.create(student);

  return response;
};

export const insertNewUser = (user: IUser)
  : Promise<IUser & { _id: any; }> => {
  const response = User.create(user);

  return response;
};

export const updateStudentBasics = (student: IStudent)
  : Query<UpdateResult, IStudent & { _id: any; }, {}, IStudent> => {
  const response = Student.updateOne({ register: student.auth.register }, { ...student });

  return response;
};
