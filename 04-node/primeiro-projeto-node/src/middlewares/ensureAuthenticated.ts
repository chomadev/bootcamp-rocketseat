import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
  name: string;
}

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    throw new Error('JWT token is missing')
  }

  const [, token] = authHeader.split(' ');
  try {
    const decodedToken = await verify(token, authConfig.jwt.secret);
    const { exp, iat, sub, name } = decodedToken as TokenPayload;
    request.user = {
      id: sub,
      name
    };

    next();
  } catch (error) {
    console.log(error);
    response.status(401).send();
  }
}