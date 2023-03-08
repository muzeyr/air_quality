import { Injectable, Logger } from "@nestjs/common";
import axios from 'axios';
import { AirQualityData } from './dto/air-quality-data.dto';
import { AirQuality } from "./entities/air-quality.entity";
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { CurrentAirQuality } from "./entities/current-air-quality.entity";
import { PollutionData } from "./entities/pollution-data.entity";

@Injectable()
export class AirQualityService {
  private readonly API_KEY = '98ca95f0-8554-43b2-a1cc-54cc5c853c53';
  private readonly BASE_URL = 'http://api.airvisual.com/v2/nearest_city';

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(
    @InjectRepository(AirQuality)
    private readonly airQualityRepo: Repository<AirQuality>,
    @InjectRepository(CurrentAirQuality)
    private readonly currentAirQualityRepo: Repository<CurrentAirQuality>,
    @InjectRepository(PollutionData)
    private readonly pollutionDataRepo: Repository<PollutionData>,
  ) {}

  async getAirQuality(): Promise<AirQualityData> {
    const url = `${this.BASE_URL}?key=${this.API_KEY}`;
    const response = await axios.get(url);
    const { data } = response;
    const { city, state, country, location, current } = data.data;
    this.logger.warn(JSON.stringify(data.data));
    /*const cc = await this.pollutionDataRepo.create(current.pollution);
    const airQuality = new AirQuality(city, state, country, location, current);
    const result = await this.airQualityRepo.create(airQuality);
    return airQuality;

     */
    return null;

  }
}
