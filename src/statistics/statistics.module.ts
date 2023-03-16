import { TypeOrmModule } from '@nestjs/typeorm';
import { StatisticsService } from './statistics.service';
import { Module } from '@nestjs/common';
import { StatisticsEntity } from './entities/statistics.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StatisticsEntity])],
  providers: [StatisticsService],
  exports: [StatisticsService],
})
export class StatisticsModule {}
