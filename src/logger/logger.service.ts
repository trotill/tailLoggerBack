import { Injectable } from '@nestjs/common';
import { EventEmitter } from 'events';
import { fromEvent } from 'rxjs';
import { Tail } from 'tail';
import { SessionType } from './logger.type';

const EventName = 'rxtx';
function generateEventName(id) {
  return `${EventName}.${id}`;
}

@Injectable()
export class LoggerService {
  emitter: EventEmitter;
  sessionList: SessionType = {};
  constructor() {
    this.emitter = new EventEmitter();
  }
  send(message: string, sessionId: string) {
    this.emitter.emit(generateEventName(sessionId), {
      type: sessionId,
      data: {
        msg: message,
        sid: sessionId,
      },
    });
  }
  async subscribe({
    id,
    fileName,
    countLast,
  }: {
    id: string;
    fileName: string;
    countLast: number;
  }) {
    this.sessionList[id] = {
      fileName,
      streamCtx: new Tail(fileName, {
        fromBeginning: false,
        nLines: countLast,
        follow: true,
      }),
    };

    this.sessionList[id].streamCtx.on('line', (data: string) => {
      console.log(data.toString());
      this.send(data, id);
    });
    this.sessionList[id].streamCtx.on('error', () => {
      console.log('error tail', id);
      this.remove(id);
    });
    console.log('attach', id);
    return fromEvent(this.emitter, generateEventName(id));
  }
  async remove(id: string) {
    console.log('detach', id);
    this.sessionList[id].streamCtx.unwatch();
    delete this.sessionList[id];
  }
}
