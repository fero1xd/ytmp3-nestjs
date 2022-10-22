import { IsNotEmpty, Length } from 'class-validator';

export class DownloadAudio {
  @IsNotEmpty()
  @Length(11, 11)
  id: string;
}
