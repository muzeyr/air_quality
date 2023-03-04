import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirQualityController } from './air-quality/air-quality.controller';
import { AirQualityService } from './air-quality/air-quality.service';

@Module({
  imports: [],
  controllers: [AppController, AirQualityController],
  providers: [AppService, AirQualityService],
})
export class AppModule {}
