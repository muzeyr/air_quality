import { Test, TestingModule } from '@nestjs/testing';
import { AirQualityService } from './air-quality.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AirQuality } from './schemas/air_quality.schema';
import axios from 'axios';
import { Cron } from '@nestjs/schedule';
import { oneMinute } from '../cron/enum/time.const';

describe('AirQualityService', () => {
  let service: AirQualityService;
  let airQualityModel: Model<AirQuality>;

  const cityDocument = {
    city: 'Test City',
    state: 'Test State',
    country: 'Test Country',
    location: {
      type: 'Point',
      coordinates: [10, 20],
    },
    current: {
      weather: {
        ts: 1646810400,
        tp: 15,
        pr: 1020,
        hu: 40,
        ws: 5,
        wd: 20,
        ic: '04d',
      },
      pollution: {
        ts: 1646810400,
        aqius: 20,
        mainus: 'p2',
        aqicn: 10,
        maincn: 'p1',
      },
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AirQualityService,
        {
          provide: getModelToken(AirQuality.name),
          useValue: {
            new: jest.fn().mockResolvedValue(cityDocument),
            constructor: jest.fn().mockResolvedValue(cityDocument),
            find: jest.fn(),
            findOne: jest.fn(),
            updateOne: jest.fn(),
            deleteOne: jest.fn(),
            exec: jest.fn(),
            save: jest.fn().mockResolvedValue(cityDocument),
          },
        },
      ],
    }).compile();

    service = module.get<AirQualityService>(AirQualityService);
    airQualityModel = module.get<Model<AirQuality>>(getModelToken(AirQuality.name));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createCity', () => {
    it('should map the city document to an air quality schema and save it to the database', async () => {
      const mapToAirQualitySpy = jest.spyOn(service, 'mapToAirQuality').mockReturnValueOnce(cityDocument as unknown as AirQuality);

      await service.mapToAirQuality(cityDocument);

      expect(mapToAirQualitySpy).toHaveBeenCalledWith(cityDocument);
    });
  });
});
