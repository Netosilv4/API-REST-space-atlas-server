import { Request, Response } from 'express';
import { IRequest } from '../schema/studentsRequests';
import {
  studentHandler, newRequestHandler, scheduleHandler, gradesHandler,
} from '../services/studentServices';
import { AuthMessage } from '../validations/interfaces';

export const getStudent = async (req: Request, res: Response): Promise<void> => {
  const { register } = req.query;

  const response = await studentHandler(register as string);

  const { code } = response as AuthMessage;

  if (code && code !== 200) {
    res.status(400).json(response);
    return;
  }

  res.status(200).json(response);
};

export const postNewRequest = async (req: Request, res: Response): Promise<void> => {
  const { request }: { request: IRequest } = req.body;

  const response = await newRequestHandler(request);

  const { code } = response as AuthMessage;

  if (code && code !== 200) {
    res.status(code).json(response);
    return;
  }

  res.status(200).json(response);
};

export const getSchedule = async (req: Request, res: Response): Promise<void> => {
  const { className } = req.query;

  const response = await scheduleHandler(className as string);

  const { code } = response as AuthMessage;

  if (code && code !== 200) {
    res.status(code).json(response);
    return;
  }

  res.status(200).json(response);
};

export const getGrades = async (req: Request, res: Response): Promise<void> => {
  const { register } = req.query;

  const response = await gradesHandler(register as string);

  const { code } = response as AuthMessage;

  if (code && code !== 200) {
    res.status(code).json(response);
    return;
  }

  res.status(200).json(response);
};
