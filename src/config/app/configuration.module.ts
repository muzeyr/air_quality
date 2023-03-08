import { Module } from '@nestjs/common';
import configuration from './configuration';
import AppConfigService, {
  AppConfigServiceInterface,
} from './configuration.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';

/**
 * Import and provide app configuration related classes.
 *
 * @module
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    ConfigService,
    {
      provide: AppConfigServiceInterface,
      useClass: AppConfigService,
    },
    AppConfigService,
  ],
  exports: [ConfigService, AppConfigServiceInterface, AppConfigService],
})
export default class AppConfigModule {}
