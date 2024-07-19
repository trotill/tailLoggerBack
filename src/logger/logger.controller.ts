import { Controller, Param, Query, Req, Sse } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { Config, SseParams } from './logger.dto';
import { Request } from 'express';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Sse('sse/:id')
  async sse(
    @Param() { id }: SseParams,
    @Query() { fileName, countLast }: Config,
    @Req() req: Request,
  ) {
    req.on('close', () => {
      console.log('disconnect client with id', id);
      this.loggerService.remove(id);
    });
    return this.loggerService.subscribe({ id, fileName, countLast });
  }
}
