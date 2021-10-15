import { Module } from '@nestjs/common';
import { DatabaseConfig } from './config/database.config';
import { DatabaseProvider } from './model_providers/database.provider';

@Module({
  providers: [
    DatabaseConfig,
    DatabaseProvider
  ],
})
export class DatabaseModule {}