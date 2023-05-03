export class UpdateSettingsDto {
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
