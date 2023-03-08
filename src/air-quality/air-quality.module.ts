import { Module } from '@nestjs/common';
import { AirQualityController } from './air-quality.controller';
import { AirQualityService } from './air-quality.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { Schema } from "mongoose";
import { databaseConfig } from "../config/database.config";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'City',
        useFactory: () => {
          const CitySchema = new Schema(
            {
              city: { type: String, required: true },
              state: { type: String, required: true },
              country: { type: String, required: true },
              location: {
                type: {
                  type: String,
                  enum: ['Point'],
                  required: true,
                },
                coordinates: {
                  type: [Number],
                  required: true,
                },
              },
              current: {
                pollution: {
                  ts: Date,
                  aqius: Number,
                  mainus: String,
                  aqicn: Number,
                  maincn: String,
                },
                weather: {
                  ts: Date,
                  tp: Number,
                  pr: Number,
                  hu: Number,
                  ws: Number,
                  wd: Number,
                  ic: String,
                },
              },
            },
            { timestamps: true },
          );
          return CitySchema;
        },
      },
    ]),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // ConfigModule import edilir
      useFactory: async () => ({
        uri: databaseConfig.uri,
      }),
    }),
  ],
  controllers: [AirQualityController],
  providers: [AirQualityService],
})
export class AirQualityModule {}
