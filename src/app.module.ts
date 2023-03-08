import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirQualityModule } from './air-quality/air-quality.module';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from "@nestjs/mongoose";
import { databaseConfig } from "./config/database.config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(databaseConfig.uri),
     AirQualityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

