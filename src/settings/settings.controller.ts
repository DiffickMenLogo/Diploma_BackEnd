import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto/updateSettingsDto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  async getSettings(@Query('id') id: string) {
    return this.settingsService.getSettings(id);
  }
  @Put()
  async changeSettings(@Body() body: UpdateSettingsDto) {
    return this.settingsService.updateSettings(body);
  }
}
