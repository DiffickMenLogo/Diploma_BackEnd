import { createUserWordDto } from './dto/createUserWordDto';
import { WordsEntity } from './entities/words.entity';
import { HttpException, HttpStatus, Injectable, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { changeUserWordDto } from './dto/changeUserWordDto';

@Injectable()
export class WordsService {
  constructor(
    @InjectRepository(WordsEntity)
    private readonly wordsRepository: Repository<WordsEntity>,
  ) {}

  async createUserWord(word: createUserWordDto): Promise<WordsEntity> {
    const createdWord = await this.wordsRepository.create(word);

    return await this.wordsRepository.save(createdWord);
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

  async changeUserWord(body: changeUserWordDto): Promise<WordsEntity> {
    const userWord = await this.wordsRepository.findOne({
      where: { id: body.id },
    });
    if (!userWord) {
      throw new HttpException('Word NotFound', HttpStatus.NOT_FOUND);
    } else {
      await this.wordsRepository.save(body);
      return userWord;
    }
  }
}
