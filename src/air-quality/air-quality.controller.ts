import { Controller, Get } from "@nestjs/common";
import { AirQualityService } from "./air-quality.service";

@Controller('air-quality')
export class AirQualityController {

  constructor(private readonly airQualityService: AirQualityService) {}

  @Get()
  async getAirQuality() {
    return this.airQualityService.getAirQuality();
  }
}
