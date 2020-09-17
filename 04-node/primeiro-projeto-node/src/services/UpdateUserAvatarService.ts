import { getCustomRepository } from 'typeorm';
import User from '../models/User';
import path from 'path';
import fs from 'fs';

import uploadConfig from '../config/upload';
import UsersRepository from '../repositories/UsersRepository';
import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  avatar_filename: string;
}

class UpdateUserAvatarService {
  public async execute({ user_id, avatar_filename }: Request): Promise<User> {
    const userRepository = getCustomRepository(UsersRepository);
    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new AppError('Only authenticated users can change avatar', 403);
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
      if (userAvatarFileExists)
        await fs.promises.unlink(userAvatarFilePath);
    }
    user.avatar = avatar_filename;
    await userRepository.save(user);

    delete user.password;
    return user;
  }
}

export default UpdateUserAvatarService;
