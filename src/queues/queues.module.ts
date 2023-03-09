import { Module } from '@nestjs/common';
import { BullModule } from "@nestjs/bull";
import { ConfigModule } from "@nestjs/config";
import AppConfigModule from "../config/app/configuration.module";
import AppConfigService from "../config/app/configuration.service";

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule, AppConfigModule],
      useFactory: async (configService: AppConfigService) => ({
        redis: {
          host: configService.redisUrl,
          port: configService.redisPort,
          db: configService.redisDb,
          name: 'yassir',
        },
      }),
      inject: [AppConfigService],
    }),
  ],
  exports: [BullModule],
})
export class QueuesModule {}
