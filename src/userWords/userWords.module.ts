import { WordsService } from './userWords.service';
import { WordsEntity } from './entities/words.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([WordsEntity])],
  providers: [WordsService],
  exports: [WordsService],
})
export class WordsModule {}
