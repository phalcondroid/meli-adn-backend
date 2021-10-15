
import { AuthManager } from "../auth.manager";
import { JwtAuthGuard } from "src/shared/guards/jwt-auth.guard";
import { LocalAuthGuard } from "src/shared/guards/local-auth.guard";
import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { RequestUser } from "../interfaces/validations/request-user.interface";
import { StartSessionResponse } from "../interfaces/validations/startsession-response.interface";
import { UsersManager } from "src/users/users.manager";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly manager: AuthManager,
    private readonly usersManager: UsersManager
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post()
  async auth(@Request() req: RequestUser): Promise<StartSessionResponse> {
    return this.manager.doLogin(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getInfo(@Request() req: RequestUser): Promise<any> {
    return this.usersManager.getUserById(req.user.userId);
  }
}