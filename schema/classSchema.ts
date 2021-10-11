import mongoose from '../models/connection';

export interface IClass extends mongoose.Document {
  class: string
  period: string
  supervisor: string
  schedule: string
}

const classSchema = new mongoose.Schema({
  class: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
    required: true,
  },
  schedule: {
    type: Object,
    required: true,
  },
});

export const Class = mongoose.model<IClass>('school-classes', classSchema);
