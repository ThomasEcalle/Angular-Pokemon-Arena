import {Directive, ElementRef, HostBinding, Input, OnInit, Renderer2} from '@angular/core';
import {LogType} from '../fight-logs/FightLogs';

@Directive({selector: '[colorLog]'})
export class ColorLogDirective implements OnInit {
  @Input('colorLog') logType: LogType;
  @HostBinding('class') elementClass = 'default';

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    switch (this.logType) {
      case LogType.ATTACK:
        this.elementClass = 'attack';
        break;
      case LogType.INFOS:
        this.elementClass = 'infos';
        break;
      case LogType.LOST_HP:
        this.elementClass = 'lost_hp';
        break;
      case LogType.WINNER:
        this.elementClass = 'winner';
        break;
    }
  }
}
