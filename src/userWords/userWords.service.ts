import { createUserWordDto } from './dto/createUserWordDto';
import { createUserDto } from './../user/dto/createUserDto';
import { WordsEntity } from './entities/words.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(WordsEntity)
    private readonly wordsRepository: Repository<WordsEntity>,
  ) {}

  async createUserWord(word: createUserWordDto): Promise<void> {
    const createdWord = await this.wordsRepository.create(word);

    await this.wordsRepository.save(createdWord);
  }

  async getUserWords(id: string): Promise<WordsEntity[]> {
    const userWords = await this.wordsRepository.find({
      where: { userId: id },
    });

    return userWords;
  }

  async deleteUserWord(id: string): Promise<WordsEntity> {
    const userWord = await this.wordsRepository.findOne({ where: { id } });

    if (!userWord) {
      throw new HttpException('Word NotFound', HttpStatus.NOT_FOUND);
    } else {
      await this.wordsRepository.delete(userWord);
      return userWord;
    }
  }
}
