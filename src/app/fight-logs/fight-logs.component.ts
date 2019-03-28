import {Component, OnInit} from '@angular/core';
import {FightLogs} from './FightLogs';
import {LoggerService, OnLogsListener} from '../services/logger-service';

@Component({
  selector: 'app-fight-logs',
  templateUrl: './fight-logs.component.html',
  styleUrls: ['./fight-logs.component.scss']
})
export class FightLogsComponent implements OnInit, OnLogsListener {

  logs = Array<FightLogs>();

  constructor(private loggerService: LoggerService) {
  }

  async ngOnInit() {
    this.loggerService.subscribe(this);
  }

  onLogAdded(log: FightLogs) {
    this.logs.push(log);
  }

  async onClear() {
    this.logs = await this.loggerService.getLogs();
  }

}
