import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() playStopButtonClicked = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  handleBattleToggle() {
    this.playStopButtonClicked.emit();
  }
}
