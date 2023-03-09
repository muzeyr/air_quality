import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { databaseConfig } from "./config/database.config";
import { ScheduleModule } from "@nestjs/schedule";
import { CronModule } from './cron/cron.module';
import { QueuesModule } from './queues/queues.module';
import AppConfigModule from "./config/app/configuration.module";
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AirQualityModule } from "./air-quality/air-quality.module";


@Module({
  imports: [
    AppConfigModule,
    CronModule,
    QueuesModule,
    AirQualityModule,
    ConfigModule.forRoot(),
    ScheduleModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // ConfigModule import edilir
      useFactory: async () => ({
        uri: databaseConfig.uri,
      }),
    }),
    EventEmitterModule.forRoot({
      wildcard: true,
      delimiter: '.',
      ignoreErrors: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

