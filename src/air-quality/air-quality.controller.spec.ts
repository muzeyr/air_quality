import { Test, TestingModule } from '@nestjs/testing';
import { AirQualityController } from './air-quality.controller';
import { AirQualityService } from './air-quality.service';

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
    it('should return air quality data for the given location', async () => {
      const airQualityData = { /* Sample air quality data */ };
      jest.spyOn(service, 'getAirQuality').mockImplementation(() => Promise.resolve(airQualityData));
      expect(await controller.getAirQuality()).toBe(airQualityData);
    });
  });
});
