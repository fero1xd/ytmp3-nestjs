import { Response } from 'express';

export type DownloadAudioParams = {
  id: string;
  res: Response;
};
