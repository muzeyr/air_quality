import { Injectable, Logger } from "@nestjs/common";
import axios from 'axios';

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cron } from "@nestjs/schedule";
import { oneMinute } from "../cron/enum/time.const";
import { AirQuality } from "./schemas/air_quality.schema";
import { AirQualityData } from "./dto/air-quality-data.dto";

@Injectable()
export class AirQualityService {
  readonly API_KEY = '98ca95f0-8554-43b2-a1cc-54cc5c853c53';
  readonly BASE_URL = 'http://api.airvisual.com/v2/nearest_city';
  readonly LATITUDE = '48.856613';
  readonly LONGITUDE = '2.352222';

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(
    @InjectModel(AirQuality.name)
    private airQualityModel: Model<AirQuality>,
    ) {}


  @Cron(oneMinute)
  async getAirQuality() {
    const url = `${this.BASE_URL}?key=${this.API_KEY}&lat=${this.LATITUDE}&lon=${this.LONGITUDE}`;
    const response = await axios.get(url);
    const { data } = response;
    this.logger.warn(JSON.stringify(data.data));
    const airQualitySchema = new this.airQualityModel(this.mapToAirQuality(data.data));
    const result = await airQualitySchema.save();
    return result;

  }

  mapToAirQuality(createCityDto: any) {
    const airQuality = new AirQualityData();

    airQuality.city = createCityDto.city;
    airQuality.state = createCityDto.state;
    airQuality.country = createCityDto.country;

    airQuality.pollution = {
      ts: new Date(createCityDto.current.pollution.ts),
      aqius: createCityDto.current.pollution.aqius,
      mainus: createCityDto.current.pollution.mainus,
      aqicn: createCityDto.current.pollution.aqicn,
      maincn: createCityDto.current.pollution.maincn,
    };

    airQuality.weather = {
      ts: new Date(createCityDto.current.weather.ts),
      tp: createCityDto.current.weather.tp,
      pr: createCityDto.current.weather.pr,
      hu: createCityDto.current.weather.hu,
      ws: createCityDto.current.weather.ws,
      wd: createCityDto.current.weather.wd,
      ic: createCityDto.current.weather.ic,
    };

    return airQuality;
  }


}
