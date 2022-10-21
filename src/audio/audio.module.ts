import { Module } from '@nestjs/common';
import { Services } from 'src/types/constants';
import { AudioController } from './audio.controller';
import { AudioService } from './audio.service';

@Module({
  controllers: [AudioController],
  providers: [
    {
      provide: Services.AUDIO_SERVICE,
      useClass: AudioService,
    },
  ],
})
export class AudioModule {}
