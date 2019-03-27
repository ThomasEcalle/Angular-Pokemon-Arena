import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-battle-button',
  templateUrl: './battle-button.component.html',
  styleUrls: ['./battle-button.component.scss']
})
export class BattleButtonComponent implements OnInit {

  selected = false;
  @Output() onClick = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  handleClick() {
    this.selected = !this.selected;
    this.onClick.emit();
  }

}
