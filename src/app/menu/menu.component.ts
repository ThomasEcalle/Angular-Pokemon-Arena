import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BattleService} from '../services/battle-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() playStopButtonClicked = new EventEmitter<void>();

  constructor(private battleService: BattleService) {
  }

  ngOnInit() {
  }

  handleBattleToggle() {
    this.playStopButtonClicked.emit();
  }
}
