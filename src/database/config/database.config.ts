import { Injectable } from "@nestjs/common";

@Injectable()
export class DatabaseConfig {
  get host(): string {
    return process.env.DB_HOST;
  }

  get port(): number {
    return parseInt(process.env.DB_PORT);
  }

  get username(): string {
    return process.env.DB_USERNAME;
  }

  get password(): string {
    return process.env.DB_PASSWORD;
  }

  get database() {
    return process.env.DB_DATABASE;
  }

  get loggin(): boolean {
    return process.env.DB_LOGGIN == 'true';
  }

  get sync_alter(): boolean {
    return process.env.DB_ALTER == 'true';
  }

  get sync_force(): boolean {
    return process.env.DB_FORCE == 'true';
  }
}