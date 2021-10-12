import { Request, Response } from 'express';
import { newStudentHandler, updateStudentHandler } from '../services/adminServices';

import { IStudent } from '../schema/studentSchema';

export interface RequestBody {
  target: string
  value: string
}

export const newStudent = async (req: Request, res: Response): Promise<void> => {
  const { student } : { student: IStudent } = req.body;

  const response = await newStudentHandler(student);
  if (response.code !== 200) {
    res.status(response.code).json(response);
    return;
  }
  res.status(200).json(response);
};

export const changeStudendBasics = async (req: Request, res: Response): Promise<void> => {
  const { request }: { request: RequestBody } = req.body;

  const { register } = req.query;

  const response = await updateStudentHandler(request, register as string);

  if (response.code !== 200) {
    res.status(response.code).json(response);
    return;
  }

  res.status(200).json(response);
};
