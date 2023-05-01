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

  @Get('/:id')
  getUserWords(@Query() id: string) {
    return this.userWordsService.getUserWords(id);
  }

  @Delete('/:id')
  deleteUserWord(@Query() id: string) {
    return this.userWordsService.deleteUserWord(id);
  }
}
