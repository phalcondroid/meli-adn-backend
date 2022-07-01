import { Inject, Injectable } from '@nestjs/common';
import { UsersModel } from '../models/entities/users.model';

@Injectable()
export class FinderService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof UsersModel,
  ) {}

  /**
   * Get user by username
   * @param username string
   * @returns Person | null
   */
  public async getUserByUsername(username: string): Promise<UsersModel> {
    return await this.usersRepository.findOne({
      where: { username },
    });
  }

  /**
   * Get user by pk
   * @param usersId
   * @returns UsersModel
   */
  public async getUserByUserId(usersId: number): Promise<UsersModel> {
    return await this.usersRepository.findByPk(usersId);
  }
}
