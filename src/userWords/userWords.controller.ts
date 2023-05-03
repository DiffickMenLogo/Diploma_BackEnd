import { createUserWordDto } from './dto/createUserWordDto';
import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { WordsService } from './userWords.service';

@Controller('userWords')
export class UserWordsController {
  constructor(private readonly userWordsService: WordsService) {}

  @Post()
  createUserWord(@Body() body: createUserWordDto) {
    return this.userWordsService.createUserWord(body);
  }

  @Get()
  getUserWords(@Query('id') id: string) {
    return this.userWordsService.getUserWords(id);
  }

  @Delete()
  deleteUserWord(@Query('id') id: string) {
    return this.userWordsService.deleteUserWord(id);
  }
}
