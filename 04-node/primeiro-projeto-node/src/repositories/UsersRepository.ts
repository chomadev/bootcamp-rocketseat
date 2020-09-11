import User from '../models/User';
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(User)
class UsersRepository extends Repository<User> {
  async findByEmail(email: string): Promise<User | null> {
    const userFound = await this.findOne({ where: { email } })
    return userFound || null;
  }

}

export default UsersRepository;
