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
  current: {
    pollution: {
      ts: string;
      aqius: number;
      mainus: string;
      aqicn: number;
      maincn: string;
    },
    weather: {
      ts: string;
      tp: number;
      pr: number;
      hu: number;
      ws: number;
      wd: number;
      ic: string;
    }
  };

  constructor(
    city: string,
    state: string,
    country: string,
    location: { type: string; coordinates: number[]; },
    current: {
      pollution: {
        ts: string;
        aqius: number;
        mainus: string;
        aqicn: number;
        maincn: string;
      },
      weather: {
        ts: string;
        tp: number;
        pr: number;
        hu: number;
        ws: number;
        wd: number;
        ic: string;
      }
    }
  ) {
    this.city = city;
    this.state = state;
    this.country = country;
    this.location.coordinateX = location.coordinates[0];
    this.location.coordinateY = location.coordinates[1];
    this.current = current;
  }
}
