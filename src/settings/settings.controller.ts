import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { SettingsService } from './settings.service';
import { UpdateSettingsDto } from './dto/updateSettingsDto';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}
  @Put()
  async changeSettings(@Body() body: UpdateSettingsDto) {
    return this.settingsService.updateSettings(body);
  }
  @Get(':/id')
  async getSettings(@Query() id: string) {
    return this.settingsService.getSettings(id);
  }
}
