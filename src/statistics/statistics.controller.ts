import { CreateStatisticsDto } from './dto/createSettingsDto';
import { StatisticsService } from './statistics.service';
import { Body, Controller, Get, Post, Query } from '@nestjs/common';

@Controller('statistics')
export class StatisticsController {
  constructor(private readonly statisticsService: StatisticsService) {}

  @Post()
  async createNewStat(@Body() body: CreateStatisticsDto) {
    return this.statisticsService.createStatistics(body);
  }

  @Get()
  async getStatistics(@Query('id') id: string) {
    return this.statisticsService.getStatistics(id);
  }
}
