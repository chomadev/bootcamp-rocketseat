import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import AppError from '../errors/AppError';

interface Request {
  name: string;
  email: string;
  password: string
}

class CreateUserService {
  public async execute({ name, email, password }: Request): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const userFound = await usersRepository.findByEmail(email);

    if (userFound) {
      throw new AppError('This email is already in use');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({ name, email, password: hashedPassword });

    await usersRepository.save(user);
    delete user.password;

    return user;
  }
}

export default CreateUserService;
