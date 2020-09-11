import { getRepository, getCustomRepository } from "typeorm";
import UsersRepository from "../repositories/UsersRepository";
import { compare } from "bcryptjs";
import User from "../models/User";
import { sign } from 'jsonwebtoken';


interface Request {
  email: string;
  password: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<string> {
    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByEmail(email);
    if (!user || !await compare(password, user.password)) {
      throw new Error('Invalid credentials');
    }

    delete user.password;

    const token = await sign({
      name: user.name,
    }, 'not-a-secret', {
      subject: user.id,
      expiresIn: '1d'
    });

    return token;
  }
}

export default AuthenticateUserService;