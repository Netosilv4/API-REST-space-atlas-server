import { Request, Response } from 'express';
import { newStudentHandler, updateStudentHandler } from '../services/adminServices';

import { IStudent } from '../schema/studentSchema';

export const newStudent = async (req: Request, res: Response): Promise<void> => {
  const { student } : { student: IStudent } = req.body;

  const response = await newStudentHandler(student);

  res.status(200).json(response);
};

export const changeStudendBasics = async (req: Request, res: Response): Promise<void> => {
  const { student }: { student: IStudent } = req.body;

  const response = await updateStudentHandler(student);

  res.status(200).json(response);
};
