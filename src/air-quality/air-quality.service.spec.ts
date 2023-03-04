import { Test, TestingModule } from '@nestjs/testing';
import { AirQualityService } from './air-quality.service';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('AirQualityService', () => {
  let service: AirQualityService;
  let mockAxios: MockAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirQualityService],
    }).compile();

    service = module.get<AirQualityService>(AirQualityService);

    mockAxios = new MockAdapter(axios);
  });

  describe('getAirQuality', () => {
    it('should return air quality data for the given location', async () => {
      const airQualityData = { /* Sample air quality data */ };

      mockAxios.onGet(`http://api.airvisual.com/v2/nearest_city?key=98ca95f0-8554-43b2-a1cc-54cc5c853c53`).reply(200, airQualityData);

      expect(await service.getAirQuality()).toBe(airQualityData);
    });
  });
});
