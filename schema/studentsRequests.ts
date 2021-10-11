import mongoose from '../models/connection';

export interface IRequest extends mongoose.Document {
  register: string
  name: string
  target: string
  newValue: string
  reason: string
}

const studentsRequestsSchema = new mongoose.Schema({
  register: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    required: true,
  },
  newValue: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
});

export const StudentRequest = mongoose.model<IRequest>('student-requests', studentsRequestsSchema);
