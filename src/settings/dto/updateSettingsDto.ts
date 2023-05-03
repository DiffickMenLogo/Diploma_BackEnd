import { IsString, isString, IsUUID } from 'class-validator';

export class UpdateSettingsDto {
  id: string;

  @IsString()
  userId: string;

  soundVolume?: number;

  musicVolume?: number;

  wordVolume?: number;

  difficultWord?: boolean;

  deleteWord?: boolean;

  translateWord?: boolean;

  translateSentences?: boolean;

  theme?: string;
}
