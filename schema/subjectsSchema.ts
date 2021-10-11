import mongoose from '../models/connection';

const { Schema } = mongoose;

export interface ISubject extends mongoose.Document {
  subjectID: string
  subject: string
  teacher: string
}

const subjectsSchema = new Schema({
  subjectID: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
});

export const Subjects = mongoose.model<ISubject>('school-subjects', subjectsSchema);
