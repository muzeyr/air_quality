import { ApiProperty } from '@nestjs/swagger';

export class AirQualityData {
  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  location: {
    type: string;
    coordinateX: number;
    coordinateY: number;
  };

  @ApiProperty()
    pollution: {
      ts: Date;
      aqius: number;
      mainus: string;
      aqicn: number;
      maincn: string;
    };

  @ApiProperty()
    weather: {
      ts: Date;
      tp: number;
      pr: number;
      hu: number;
      ws: number;
      wd: number;
      ic: string;
    };
  }
