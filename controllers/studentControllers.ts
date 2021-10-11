import { Request, Response } from 'express';
import { IRequest } from '../schema/studentsRequests';
import {
  studentHandler, newRequestHandler, scheduleHandler, gradesHandler,
} from '../services/studentServices';

export const getStudent = async (req: Request, res: Response): Promise<void> => {
  const { register }: { register: string } = req.body;

  const student = await studentHandler(register);

  res.status(200).json(student);
};

export const postNewRequest = async (req: Request, res: Response): Promise<void> => {
  const { request }: { request: IRequest } = req.body;

  const response = await newRequestHandler(request);

  res.status(200).json({ response });
};

export const getSchedule = async (req: Request, res: Response): Promise<void> => {
  const { className }: { className: string} = req.body;

  const schedule = await scheduleHandler(className);

  res.status(200).json(schedule);
};

export const getGrades = async (req: Request, res: Response): Promise<void> => {
  const { register }: { register: string } = req.body;

  const gradesAndSubjects = await gradesHandler(register);

  res.status(200).json(gradesAndSubjects);
};
