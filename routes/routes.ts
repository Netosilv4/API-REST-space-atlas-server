import express, {
  Request, NextFunction, Response, ErrorRequestHandler,
} from 'express';
import rescue from 'express-rescue';
import {
  getStudent, postNewRequest, getSchedule, getGrades,
} from '../controllers/studentControllers';
import { newStudent, changeStudendBasics } from '../controllers/adminControllers';
import { login } from '../controllers/loginController';
import { tokenCheck } from '../middlewares/jwt';

const routes = express.Router();

// Login Controllers

routes.post('/login', rescue(login));

// Student Controllers

routes.post('/student', rescue(tokenCheck), rescue(getStudent));

routes.post('/request', rescue(tokenCheck), rescue(postNewRequest));

routes.post('/schedule', rescue(tokenCheck), rescue(getSchedule));

routes.post('/grades', rescue(tokenCheck), rescue(getGrades));

// Admin Controllers

routes.post('/newstudent', rescue(newStudent));

routes.post('/updatebasics', rescue(tokenCheck), rescue(changeStudendBasics));

// Rescue Generic Error

const genericError = async (
  err: ErrorRequestHandler, req: Request, res: Response, _next: NextFunction,
) => {
  res.status(404).json({ message: `${err}` });
};

routes.use(genericError);

export default routes;
