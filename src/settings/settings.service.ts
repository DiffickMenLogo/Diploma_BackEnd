import { SettingsEntity } from './entities/settings.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSettings } from 'src/types/user';
import { UpdateSettingsDto } from './dto/updateSettingsDto';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(SettingsEntity)
    private readonly settingsRepository: Repository<SettingsEntity>,
  ) {}

  async createSettings(id: string): Promise<UserSettings> {
    const newSettings = {
      userId: id,
    };
    const createdSettings = await this.settingsRepository.create(newSettings);
    return await this.settingsRepository.save(createdSettings);
  }

  async getSettings(id: string): Promise<UserSettings> {
    const settings = await this.settingsRepository.findOne({
      where: { userId: id },
    });
    if (!settings) {
      throw new HttpException(
        {
          error: 'cannot find settings with this userId',
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return settings;
  }

  async updateSettings(body: UpdateSettingsDto): Promise<UserSettings> {
    const userSettings = await this.settingsRepository.findOne({
      where: { userId: body.userId },
    });

    if (!userSettings) {
      throw new HttpException(
        {
          error: 'Cant find user with settings',
          status: HttpStatus.NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    const newSettings = {
      id: userSettings.id,
      userId: userSettings.userId,
      soundVolume: body.soundVolume
        ? body.soundVolume
        : userSettings.soundVolume,
      musicVolume: body.musicVolume
        ? body.musicVolume
        : userSettings.musicVolume,
      wordVolume: body.wordVolume ? body.wordVolume : userSettings.wordVolume,
      difficultWord:
        body.difficultWord !== undefined
          ? body.difficultWord
          : userSettings.difficultWord,
      deleteWord:
        body.deleteWord !== undefined
          ? body.deleteWord
          : userSettings.deleteWord,
      translateWord:
        body.translateWord !== undefined
          ? body.translateWord
          : userSettings.translateWord,
      translateSentences:
        body.translateSentences !== undefined
          ? body.translateSentences
          : userSettings.translateSentences,
      theme: body.theme ? body.theme : userSettings.theme,
    };

    return await this.settingsRepository.save(newSettings);
  }
}
