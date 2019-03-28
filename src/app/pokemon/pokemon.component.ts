import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {BattleService, PokemonBattleListner} from '../services/battle-service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, PokemonBattleListner {

  @Input() pokemon: Pokemon;
  @Input() isMain = false;
  isAttacked = false;

  constructor(private battleService: BattleService) {
  }

  ngOnInit() {
    if (this.pokemon) {
      console.log(`On Pokemon init, pokemon = ${this.pokemon.name}`);
    }
    this.battleService.subscribe(this);
  }

  getHpPercent() {
    if (this.pokemon === undefined) {
      return 0;
    }
    return this.pokemon.hp / this.pokemon.maxHp * 100;
  }

  onPokemonAttack(attacker: Pokemon, defender: Pokemon) {
    console.log(`${attacker.name} attack ${defender.name}`);
    console.log(`this.pôkemon = ${this.pokemon.name}`);
    console.log(`this.isMain = ${this.isMain}`);
    this.isAttacked = defender === this.pokemon;
  }
}
