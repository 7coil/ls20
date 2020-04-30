import { User } from "./class/User";

declare module 'express-serve-static-core' {
  export interface Request {
    user?: User
  }
}

declare module 'jsonwebtoken' {
  export function verify(token: string, secret: string): any
}
