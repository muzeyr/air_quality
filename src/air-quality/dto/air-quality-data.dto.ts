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
    coordinates: number[];
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
    this.location = location;
    this.current = current;
  }
}
