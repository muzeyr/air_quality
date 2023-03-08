import { Column } from 'typeorm';
import { PollutionData } from './pollution-data.entity';
import { WeatherData } from './weather-data.entity';

export class CurrentAirQuality {
  @Column(type => PollutionData)
  pollution: PollutionData;

  @Column(type => WeatherData)
  weather: WeatherData;

  constructor(pollution: PollutionData, weather: WeatherData) {
    this.pollution = pollution;
    this.weather = weather;
  }
}
