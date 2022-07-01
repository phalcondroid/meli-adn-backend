import { Global, Module } from '@nestjs/common';
import { UsersManager } from './users.manager';
import { FinderService } from './services/finder.service';
import { DatabaseModule } from 'src/database/database.module';
import {
  cityProviders,
  usersProviders,
} from './models/providers/users.provider';
import { RegisterService } from './services/register.service';

@Global()
@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [
    FinderService,
    RegisterService,
    UsersManager,
    ...usersProviders,
    ...cityProviders,
  ],
  exports: [UsersManager],
})
export class UsersModule {}
