import mongoose from 'mongoose';

declare global {
  export namespace NodeJS {

export interface ProcessEnv {
  URI: string
  JTW_SECRET: string
    }
  }
}

const { URI } = process.env;
mongoose.connect(
  URI,
// eslint-disable-next-line no-console
).catch(() => console.log('Bad Auth'));

export default mongoose;
