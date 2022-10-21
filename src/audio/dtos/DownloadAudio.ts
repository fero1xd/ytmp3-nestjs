import { IsNotEmpty, IsUrl } from 'class-validator';

export class DownloadAudio {
  @IsNotEmpty()
  @IsUrl()
  id: string;
}
