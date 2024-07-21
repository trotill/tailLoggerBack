import { Controller, Param, Query, Req, Sse } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { Config, SseParams } from './logger.dto';
import { Request } from 'express';
import { Observable } from 'rxjs';
import type { MessageEvent } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @ApiOkResponse({ description: 'поток данных SSE', status: HttpStatus.OK })
  @ApiBadRequestResponse({
    description: 'ошибка, неверный запрос',
    status: HttpStatus.BAD_REQUEST,
  })
  @Sse('sse/:id')
  sse(
    @Param() { id }: SseParams,
    @Query() { fileName, countLast }: Config,
    @Req() req: Request,
  ): Observable<MessageEvent> {
    req.on('close', () => {
      console.log('disconnect client with id', id);
      this.loggerService.remove(id);
    });
    return this.loggerService.subscribe({ id, fileName, countLast });
  }
}
