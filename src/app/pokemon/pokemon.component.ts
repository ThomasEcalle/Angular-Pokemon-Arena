import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: Pokemon;
  @Input() isMain = false;

  constructor() {
  }

  ngOnInit() {
  }

  getHpPercent() {
    return this.pokemon.hp / this.pokemon.maxHp * 100;
  }

  isKo() {
    return this.pokemon.hp <= 0;
  }
}
