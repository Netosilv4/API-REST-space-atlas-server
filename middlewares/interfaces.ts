import { Algorithm } from 'jsonwebtoken';

export interface Decoded {
  data: {
    register: string
  }
}

export interface JwtConfig {
  expiresIn: string
  algorithm: Algorithm
}
