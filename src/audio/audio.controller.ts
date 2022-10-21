import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Routes, Services } from 'src/types/constants';
import { AudioService } from './audio.service';
import { DownloadAudio } from './dtos/DownloadAudio';

@Controller(Routes.AUDIO)
export class AudioController {
  constructor(
    @Inject(Services.AUDIO_SERVICE) private readonly audioService: AudioService,
  ) {}

  @Get('/:id')
  async getDetails(@Param('id') id: string) {
    return await this.audioService.getDetails(
      `http://youtube.com/watch?v=${id}`,
    );
  }

  @Post()
  downloadAudio(@Body() body: DownloadAudio, @Res() res) {
    this.audioService.downloadAudio({ id: body.id, res });
  }
}
