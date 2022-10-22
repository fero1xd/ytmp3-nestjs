import { BadRequestException, Injectable } from '@nestjs/common';
import { DownloadAudioParams } from '../types/params';
import * as ytdl from 'ytdl-core';

@Injectable()
export class AudioService {
  private ytdlOptions: ytdl.downloadOptions = {
    quality: 'highestaudio',
    filter: 'audioonly',
  };

  async getDetails(url: string) {
    try {
      const info = await ytdl.getInfo(url);

      return {
        title: info.videoDetails.title,
        thumbnail: info.videoDetails.thumbnails[0].url,
        author: info.videoDetails.author.name,
        id: info.videoDetails.videoId,
      };
    } catch (e) {
      throw new BadRequestException();
    }
  }

  downloadAudio(data: DownloadAudioParams) {
    const { id, res } = data;

    ytdl(`http://youtube.com/watch?v=${id}`, this.ytdlOptions)
      .on('error', (err) => {
        console.log(err);
        res.status(400).json({
          status: 400,
          message: err.message,
        });
      })
      .pipe(res);
  }
}
