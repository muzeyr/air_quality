import { Test, TestingModule } from '@nestjs/testing';
import { AirQualityController } from './air-quality.controller';
import { AirQualityService } from './air-quality.service';
import { AirQualityData } from './dto/air-quality-data.dto';

describe('AirQualityController', () => {
  let controller: AirQualityController;
  let service: AirQualityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AirQualityController],
      providers: [AirQualityService],
    }).compile();

    controller = module.get<AirQualityController>(AirQualityController);
    service = module.get<AirQualityService>(AirQualityService);
  });

  describe('getAirQuality', () => {
    it('should return air quality data for a given location', async () => {
      const testData: AirQualityData = {
        city: 'Test City',
        state: 'Test State',
        country: 'Test Country',
        location: { type: 'Point', coordinates: [0, 0] },
        current: {
          pollution: { ts: '2023-03-04T09:00:00.000Z', aqius: 50, mainus: 'o3', aqicn: 20, maincn: 'o3' },
          weather: { ts: '2023-03-04T11:00:00.000Z', tp: 20, pr: 1013, hu: 40, ws: 2.0, wd: 180, ic: '01d' },
        },
      };
      jest.spyOn(service, 'getAirQuality').mockResolvedValue(testData);

      expect(await controller.getAirQuality()).toBe(testData);
      expect(service.getAirQuality).toHaveBeenCalled();
    });
  });
});
