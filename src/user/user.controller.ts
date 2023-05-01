import { Body, Controller, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { ChangeNameDto } from './dto/changeNameDto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Put()
  async changeName(@Body() body: ChangeNameDto) {
    return this.userService.updateName(body);
  }
}
