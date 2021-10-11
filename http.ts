import express, { Request, Response } from 'express';

import { createServer } from 'http';

import { Server } from 'socket.io';

import cors from 'cors';

import routes from './routes/routes';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('Success!');
});

app.use(routes);

export const http = createServer(app);

export const io = new Server(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});
