import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AirQualityData } from './dto/air-quality-data.dto';

@Injectable()
export class AirQualityService {
  private readonly API_KEY = '98ca95f0-8554-43b2-a1cc-54cc5c853c53';
  private readonly BASE_URL = 'http://api.airvisual.com/v2/nearest_city';

  async getAirQuality(): Promise<AirQualityData> {
    const url = `${this.BASE_URL}?key=${this.API_KEY}`;
    const response = await axios.get(url);
    const { data } = response;
    const { city, state, country, location, current } = data.data;
    return new AirQualityData(city, state, country, location, current);
  }
}
