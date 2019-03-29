import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectablePokemon} from '../pokemon-chooser/pokemon-chooser.component';

@Component({
  selector: 'app-selectable-pokemon',
  templateUrl: './selectable-pokemon.component.html',
  styleUrls: ['./selectable-pokemon.component.scss']
})
export class SelectablePokemonComponent implements OnInit {

  @Input() selectablePokemon: SelectablePokemon;
  @Output() selectEvent = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect() {
    this.selectEvent.emit();
  }

}
