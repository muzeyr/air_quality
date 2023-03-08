import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AirQualityService } from './air-quality.service';
import { AirQualityData } from './dto/air-quality-data.dto';

@ApiTags('Air Quality')
@Controller('air-quality')
export class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  @Get()
  @ApiOperation({ summary: 'Get air quality data for a given location' })
  @ApiResponse({ status: 200, description: 'Air quality data retrieved successfully', type: AirQualityData })
  async getAirQuality() {
    return this.airQualityService.getAirQuality();
  }
}
