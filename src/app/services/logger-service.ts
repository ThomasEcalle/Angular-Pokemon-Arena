import {Injectable} from '@angular/core';
import {FightLogs} from '../fight-logs/FightLogs';

export interface OnLogsListener {
  onLogAdded(log: FightLogs);

  onClear();
}

@Injectable()
export class LoggerService {

  private logs = Array<FightLogs>();
  private listener: OnLogsListener;

  constructor() {
  }

  public subscribe(listener: OnLogsListener) {
    this.listener = listener;
  }

  public clear() {
    this.logs = [];
    if (this.listener) {
      this.listener.onClear();
    }
  }

  public getLogs(): Promise<FightLogs[]> {
    return new Promise<FightLogs[]>((resolve, reject) => {
      resolve(this.logs);
    });
  }

  public writeLog(log: FightLogs): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        this.logs.push(log);
        if (this.listener) {
          this.listener.onLogAdded(log);
        }
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }
}
