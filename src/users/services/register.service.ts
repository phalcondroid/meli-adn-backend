import * as bcrypt from 'bcrypt';
import { Inject, Injectable } from '@nestjs/common';
import { UsersModel } from '../models/entities/users.model';
import { UsersModule } from '../users.module';
import { CityModel } from '../models/entities/city.model';

@Injectable()
export class RegisterService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof UsersModel,
    @Inject('CITY_REPOSITORY')
    private cityRepository: typeof CityModel,
  ) {}

  /**
   * Get user by username
   * @param username string
   * @returns Person | null
   */
  public async registerUser(user: UsersModel): Promise<UsersModel> {
    user.password = await bcrypt.hash(user.password, 10);
    return await this.usersRepository.create(user);
  }

  public async registerCity(city: CityModel): Promise<CityModel> {
    return await this.cityRepository.create(city);
  }
}
