import {Component, OnInit} from '@angular/core';
import {LoggerService} from '../services/logger-service';

@Component({
  selector: 'app-fight-logs',
  templateUrl: './fight-logs.component.html',
  styleUrls: ['./fight-logs.component.scss']
})
export class FightLogsComponent implements OnInit {
  constructor(private loggerService: LoggerService) {
  }

  async ngOnInit() {
  }

}
