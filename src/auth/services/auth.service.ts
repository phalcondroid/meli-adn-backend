import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UsersManager } from 'src/users/users.manager';
import { UsersModel } from 'src/users/models/entities/users.model';
import { UserJwt } from '../interfaces/validations/user-jwt.interface';
import { StartSessionResponse } from '../interfaces/validations/startsession-response.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersManager: UsersManager,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * Validate user vs bd
   * @param username string
   * @param pass string
   * @returns
   */
  async validateUser(username: string, pass: string): Promise<UserJwt> {
    const user: UsersModel = await this.usersManager.getUserByUsername(
      username,
    );
    if (!user) {
      return;
    }
    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) {
      return;
    }
    return {
      userId: user.id,
      username: user.username,
    };
  }

  /**
   * Do login vs jwt
   * @param user
   * @returns
   */
  public async login(user: UserJwt): Promise<StartSessionResponse> {
    const payload = { username: user.username, sub: user.userId };
    const userInfo: UsersModel = await this.usersManager.getUserByUsername(
      user.username,
    );
    userInfo.password = 'hidden';
    return {
      access_token: this.jwtService.sign(payload),
      user: userInfo,
    };
  }
}
