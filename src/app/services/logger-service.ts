import {Injectable} from '@angular/core';
import {FightLogs} from '../fight-logs/FightLogs';

@Injectable()
export class LoggerService {

  public logs = Array<FightLogs>();

  constructor() {
  }

  public writeLog(log: FightLogs) {
    this.logs.push(log);
  }

  public clearLogs() {
    this.logs = [];
  }
}
