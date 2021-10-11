import { Query } from 'mongoose';
import { IUser, User } from '../schema/userSchema';

export const findUser = (register: string)
  : Query<IUser & { _id: any; } | null, IUser & { _id: any; }> => {
  const response = User.findOne({ register });

  return response;
};
