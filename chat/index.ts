import { Socket } from 'socket.io';
import { io } from '../http';

io.on('connection', (socket: Socket) => {
  socket.join('SF001');

  socket.on('welcome', ({ student }) => {
    const aux = new Date();

    const hour = `${aux.getHours()} : ${aux.getMinutes()}`;

    io.in('SF001').emit('newMessage', {
      message: `Olá, ${student.basicInfo.name.split(' ')[0]} !`,
      user: 'IFMG',
      hour,
    });
  });

  socket.on('sendMessage', (
    { userMessage, user }: { userMessage: string, user: string },
  ) => {
    const aux = new Date();

    const hour = `${aux.getHours()} : ${aux.getMinutes()}`;

    io.in('SF001').emit('newMessage', {
      message: userMessage,
      user,
      hour,
    });
  });
});

export default io;
