import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthManager } from './auth.manager';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './services/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { DatabaseModule } from 'src/database/database.module';
import { AuthController } from './controllers/auth.controllers';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: 'meli-secret',
      signOptions: { expiresIn: '60s' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthManager, JwtStrategy, LocalStrategy],
  exports: [AuthManager],
})
export class AuthModule {}
