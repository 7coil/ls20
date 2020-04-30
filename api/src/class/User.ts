import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { dbCon, r } from '../rethinkdb';

const SECRET = '// TODO: Replace Secret';

interface UserObject {
  id: string
  username: string
  discriminator: string
}

interface TokenObject {
  id: string,
  iat: number,
}

class User implements UserObject {
  id: string
  username: string
  discriminator: string

  constructor({
    id,
    username,
    discriminator,
  }: UserObject) {
    this.id = id
    this.username = username
    this.discriminator = discriminator
  }

  generateToken(): string {
    return jwt.sign({
      id: this.id
    }, SECRET)
  }

  toObject(): UserObject {
    return {
      id: this.id,
      username: this.username,
      discriminator: this.discriminator,
    }
  }

  write(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        await r.table('bots')
          .insert(this.toObject(), {
            conflict: 'replace'
          })
          .run(dbCon)

        resolve;
      } catch(e) {
        reject(e);
      }
    })
  }

  static validateToken(token: string): boolean {
    try {
      jwt.verify(token, SECRET)
      return true;
    } catch {
      return false;
    }
  }

  static fetchFromToken(token: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.validateToken(token)) return resolve(null);
        const tokenObject: TokenObject = jwt.verify(token, SECRET)
        const { id } = tokenObject

        const user = await this.fetchFromID(id);
        resolve(user);
      } catch(e) {
        resolve(null);
      }
    })
  }

  static fetchFromID(id: string): Promise<User> {
    return r.table('bots')
      .get(id)
      .run(dbCon)
      .then((data: UserObject) => {
        if (data) {
          return new User(data);
        } else {
          return null;
        }
      });
  }

  static injectUserMiddleware(req: Request, res: Response, next: NextFunction) {
    User.fetchFromToken(req.headers.authorization)
      .then((user) => {
        if (user) {
          req.user = user;
        } else {
          req.user = null;
        }

        next();
      })
      .catch((err) => {
        req.user = null;
        next(err);
      })
  }

  static requireUserMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
      next();
    } else {
      next(new Error('You must be logged in to use this function!'))
    }
  }
}

export { User };

