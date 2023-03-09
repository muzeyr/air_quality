import { Module } from '@nestjs/common';
import { AirQualityController } from './air-quality.controller';
import { AirQualityService } from './air-quality.service';
import { MongooseModule } from "@nestjs/mongoose";
import AppConfigModule from "../config/app/configuration.module";
import { QueuesModule } from "../queues/queues.module";
import { CronModule } from "../cron/cron.module";
import { AirQuality, AirQualitySchema } from "./schemas/air_quality.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AirQuality.name, schema: AirQualitySchema },
    ]),
    AppConfigModule,
    QueuesModule,
    CronModule,
  ],
  controllers: [AirQualityController],
  providers: [AirQualityService],
  exports:[AirQualityService]
})
export class AirQualityModule {}
