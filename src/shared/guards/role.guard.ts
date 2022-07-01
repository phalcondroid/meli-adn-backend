import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      //eturn true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    //return matchRoles(roles, user.roles);
    console.log(user, roles);
    return true;
  }
}