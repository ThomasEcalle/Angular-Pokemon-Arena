import {Component, Input, OnInit} from '@angular/core';
import {FightLogs, LogType} from './FightLogs';

@Component({
  selector: 'app-fight-logs',
  templateUrl: './fight-logs.component.html',
  styleUrls: ['./fight-logs.component.scss']
})
export class FightLogsComponent implements OnInit {

  @Input() logs = Array<FightLogs>();

  constructor() {
  }

  ngOnInit() {
  }

  isAttack(log: FightLogs): boolean {
    return true;
  }

  isInfos(log: FightLogs): boolean {
    return log.type === LogType.INFOS;
  }

  isWinner(log: FightLogs): boolean {
    return log.type === LogType.WINNER;
  }

  isHplosed(log: FightLogs): boolean {
    return log.type === LogType.LOST_HP;
  }

  getLogCssClass(log: FightLogs): string {
    switch (log.type) {
      case LogType.ATTACK:
        return 'attack';
      case LogType.WINNER:
        return 'winner';
      case LogType.LOST_HP:
        return 'losed_hp';
    }
  }


}
