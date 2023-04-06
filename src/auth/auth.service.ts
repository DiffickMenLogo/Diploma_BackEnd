import { SettingsService } from './../settings/settings.service';
import { UserService } from './../user/user.service';
import { createUserDto } from '../user/dto/createUserDto';
import { Injectable } from '@nestjs/common';
import * as bycrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly settingsService: SettingsService,
  ) {}
  async signUp(body: createUserDto): Promise<any> {
    const user = await this.userService.createUser(body);
    this.settingsService.createSettings(user.id);
    return user;
  }
}
