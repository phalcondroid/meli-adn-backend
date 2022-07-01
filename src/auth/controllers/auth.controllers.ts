import { AuthManager } from '../auth.manager';
import { JwtAuthGuard } from 'src/shared/guards/jwt-auth.guard';
import { LocalAuthGuard } from 'src/shared/guards/local-auth.guard';
import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RequestUser } from '../interfaces/validations/request-user.interface';
import { StartSessionResponse } from '../interfaces/validations/startsession-response.interface';
import { UsersManager } from 'src/users/users.manager';
import { UsersModel } from 'src/users/models/entities/users.model';
import { CityModel } from 'src/users/models/entities/city.model';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly manager: AuthManager,
    private readonly usersManager: UsersManager,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async auth(@Request() req: RequestUser): Promise<StartSessionResponse> {
    return this.manager.doLogin(req.user);
  }

  @Post('save')
  async register(@Body() user: UsersModel): Promise<StartSessionResponse> {
    const usersFromDb = await this.usersManager.registerUser(user);
    usersFromDb.password = '';
    return {
      access_token:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lbGkiLCJzdWIiOjIsImlhdCI6MTYzNDMzNTQwMiwiZXhwIjoxNjM0MzM1NDYyfQ.Vu8eoSiYdsVe9SlXAC3rRp2_NwJIpYI1jCwen424cqc',
      user: usersFromDb,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getInfo(@Request() req: RequestUser): Promise<any> {
    return this.usersManager.getUserById(req.user.userId);
  }
}
