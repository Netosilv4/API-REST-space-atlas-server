import bcrypt from 'bcrypt';
import { insertNewStudent, insertNewUser, updateStudentBasics } from '../models/adminModel';

import { IStudent } from '../schema/studentSchema';
import { IUser } from '../schema/userSchema';

export const newStudentHandler = async (student: IStudent) => {
  const cryptPassword = bcrypt.hashSync(student.auth.password, 10);

  const cryptedStudent = {
    ...student,
    auth: {
      register: student.auth.register,
      password: cryptPassword,
    },
  } as IStudent;

  const response = await insertNewStudent(cryptedStudent);

  await insertNewUser(({
    register: student.auth.register,
    password: cryptPassword,
    name: student.basicInfo.name,
    email: student.basicInfo.email,
    type: 'student',
  }) as IUser);

  return response;
};

export const updateStudentHandler = async (student: IStudent) => {
  const response = await updateStudentBasics(student);

  return response;
};
