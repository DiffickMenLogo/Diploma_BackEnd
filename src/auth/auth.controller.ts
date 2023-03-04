import { AuthService } from './auth.service';
import { createUserDto } from '../user/dto/createUserDto';
import { Body, Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  async singUp(@Body() body: createUserDto) {
    return await this.authService.signUp(body);
  }
}
