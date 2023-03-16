import { CreateStatisticsDto } from './dto/createSettingsDto';
import { CreateSettingsDto } from './../settings/dto/createSettingsDto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserStatistic } from 'src/types/User';
import { Repository } from 'typeorm';
import { StatisticsEntity } from './entities/statistics.entity';

@Injectable()
export class StatisticsService {
  constructor(
    @InjectRepository(StatisticsEntity)
    private readonly statisticsRepository: Repository<StatisticsEntity>,
  ) {}

  async createStatistics(
    body: CreateStatisticsDto,
    id: string,
  ): Promise<UserStatistic> {
    const newStat = {
      userId: id,
      gameName: body.gameName,
      totalWords: body.totalWords,
      correctPercent: body.correctPercent,
      longestSeries: body.longestSeries,
      date: body.date,
    };

    const createdStat = await this.statisticsRepository.create(newStat);
    return await this.statisticsRepository.save(createdStat);
  }
}
