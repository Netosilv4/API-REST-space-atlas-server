import { RequestBody } from '../controllers/adminControllers';
import { IStudent, Student } from '../schema/studentSchema';
import { IUser, User } from '../schema/userSchema';

export const insertNewStudent = (student: IStudent) => {
  const response = Student.create(student);

  return response;
};

export const insertNewUser = (user: IUser)
  : Promise<IUser & { _id: any; }> => {
  const response = User.create(user);

  return response;
};

export const updateUser = (target: string, value: string) => {
  const user = User.updateOne({ target }, { [target]: value });

  return user;
};

export const updateStudentBasics = async (request: RequestBody, register: string) => {
  const { target, value } = request;

  const response = Student.updateOne({ register }, { [target]: value });

  if (target === 'auth.register') {
    await updateUser('register', value);
  }

  return response;
};
