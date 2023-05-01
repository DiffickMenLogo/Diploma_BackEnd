import { Body, Controller, Put } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto/updateSettingsDto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}
  @Put()
  async changeSettings(@Body() body: UpdateSettingsDto) {
    return this.settingsService.updateSettings(body);
  }
}
