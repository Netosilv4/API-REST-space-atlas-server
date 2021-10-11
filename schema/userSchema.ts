import mongoose from '../models/connection';

export interface IUser extends mongoose.Document {
  register: string
  password: string
  name: string
  email: string
  type: string
}

const userSchema = new mongoose.Schema({
  register: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model<IUser>('users', userSchema);
