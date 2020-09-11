import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

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
      throw Error('This email is already in use');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({ name, email, password: hashedPassword });

    await usersRepository.save(user);
    delete user.password;

    return user;
  }
}

export default CreateUserService;
