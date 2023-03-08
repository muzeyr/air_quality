import { Injectable, Logger } from "@nestjs/common";
import axios from 'axios';
import { AirQualityData } from './dto/air-quality-data.dto';
import { InjectRepository } from "@nestjs/typeorm";
import {  Repository } from "typeorm";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CityDocument } from "./interfaces/city.interface";

@Injectable()
export class AirQualityService {
  private readonly API_KEY = '98ca95f0-8554-43b2-a1cc-54cc5c853c53';
  private readonly BASE_URL = 'http://api.airvisual.com/v2/nearest_city';

  private readonly logger: Logger = new Logger(this.constructor.name);
  constructor(
    @InjectModel('City') private readonly cityModel: Model<CityDocument>,
  ) {}

  async getAirQuality() {
    const url = `${this.BASE_URL}?key=${this.API_KEY}`;
    const response = await axios.get(url);
    const { data } = response;
    const { city, state, country, location, current } = data.data;
    this.logger.warn(JSON.stringify(data.data));
    const result = await this.createCity(data.data);
    /*const cc = await this.pollutionDataRepo.create(current.pollution);
    const airQuality = new AirQuality(city, state, country, location, current);
    const result = await this.airQualityRepo.create(airQuality);
    return airQuality;

     */
    return result;

  }
  async createCity(createCityDto: CityDocument): Promise<CityDocument> {
    const createdCity = new this.cityModel(createCityDto);
    return createdCity.save();
  }

}
