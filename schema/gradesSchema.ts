import mongoose from '../models/connection';

export interface IGrades extends mongoose.Document {
  register: string
  grades: object
}

const gradesSchema = new mongoose.Schema({
  register: {
    type: String,
    required: true,
  },
  grades: {
    type: Object,
    required: true,
  },
});

export const Grades = mongoose.model<IGrades>('student-grades', gradesSchema);
