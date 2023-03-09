import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export abstract class AppConfigServiceInterface {
  readonly dbHost: string;
  readonly dbDatabase: string;
  readonly dbPassword: string;
  readonly dbPort: string;
  readonly dbUser: string;
  readonly redisPort: number;
  readonly redisUrl: string;
  readonly redisDb: number;


}


@Injectable()
export default class AppConfigService implements AppConfigServiceInterface {
  constructor(private configService: ConfigService) {}

  get dbHost(): string {
    return this.configService.get<string>('app.dbHost');
  }
  get dbDatabase(): string {
    return this.configService.get<string>('app.dbDatabase');
  }
  get dbPassword(): string {
    return this.configService.get<string>('app.dbPassword');
  }
  get dbPort(): string {
    return this.configService.get<string>('app.dbPort');
  }
  get dbUser(): string {
    return this.configService.get<string>('app.dbUser');
  }
  get redisUrl(): string {
    return this.configService.get<string>('app.redisUrl');
  }
  get redisPort(): number {
    return this.configService.get<number>('app.redisPort');
  }
  get redisDb(): number {
    return this.configService.get<number>('app.redisDb');
  }

}
