import { getRepository, getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import { sign } from 'jsonwebtoken';
import authConfig from "../config/auth";
import AppError from "../errors/AppError";

interface Request {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);
    if (!user || !await compare(password, user.password)) {
      throw new AppError('Invalid credentials', 401);
    }

    delete user.password;
    const { secret, expiresIn } = authConfig.jwt;

    const token = await sign({
      name: user.name,
    }, secret, {
      subject: user.id,
      expiresIn: expiresIn
    });

    return {
      user,
      token
    };
  }
}

export default AuthenticateUserService;