import { Tail } from 'tail';

export interface SessionType {
  [id: string]: {
    fileName: string;
    streamCtx: Tail;
  };
}
