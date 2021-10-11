import mongoose from '../models/connection';

export interface IStudent extends mongoose.Document {
  auth: {
    register: string
    password: string
  },
  basicInfo: {
    name: string
    age: number
    birthDate: string
    phone: string
    email: string
    photo: string
    parents: {
      mother: string
      father: string
    }
  },
  adress: {
    city: string
    district: string
    street: string
    state: string
    cep: string
    number: number
  }
}

const studentSchema = new mongoose.Schema({
  auth: {
    register: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  basicInfo: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
    parents: {
      mother: {
        type: String,
        required: true,
      },
      father: {
        type: String,
        required: true,
      },
    },
  },
  adress: {
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
  },
});

export const Student = mongoose.model<IStudent>('student-basics', studentSchema);
