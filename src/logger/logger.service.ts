import {
  HttpException,
  HttpStatus,
  Injectable,
  type MessageEvent,
} from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { fromEvent, Observable } from 'rxjs';
import { Tail } from 'tail';
import type { SessionType } from './logger.type';

const EventName = 'rxtx';
function generateEventName(id: string) {
  return `${EventName}.${id}`;
}

@Injectable()
export class LoggerService {
  sessionList: SessionType = {};
  constructor(private eventEmitter: EventEmitter2) {}
  send(message: string, sessionId: string) {
    this.eventEmitter.emit(generateEventName(sessionId), {
      type: sessionId,
      data: {
        msg: message,
        sid: sessionId,
      },
    });
  }
  subscribe({
    id,
    fileName,
    countLast,
  }: {
    id: string;
    fileName: string;
    countLast: number;
  }): Observable<MessageEvent> {
    try {
      this.sessionList[id] = {
        fileName,
        streamCtx: new Tail(fileName, {
          fromBeginning: false,
          nLines: countLast,
          follow: true,
        }),
      };
    } catch (e) {
      throw new HttpException('File open error', HttpStatus.BAD_REQUEST);
    }

    this.sessionList[id].streamCtx.on('line', (data: string) => {
      //console.log(data.toString());
      this.send(data, id);
    });
    this.sessionList[id].streamCtx.on('error', () => {
      console.log('error tail', id);
      this.remove(id);
    });
    console.log('attach', id);
    return fromEvent<MessageEvent>(this.eventEmitter, generateEventName(id));
  }
  async remove(id: string): Promise<void> {
    console.log('detach', id);
    if (!this.sessionList[id] || !this.sessionList[id].streamCtx) return;
    this.sessionList[id].streamCtx.unwatch();
    delete this.sessionList[id];
  }
}
