import {Component, Input, OnInit} from '@angular/core';
import {AttackResult, Pokemon} from '../../pokemon';
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
  lastReceivedDamages = 0;

  constructor(private battleService: BattleService) {
  }

  ngOnInit() {
    this.battleService.subscribe(this);
  }

  getHpPercent() {
    if (this.pokemon === undefined) {
      return 0;
    }
    return this.pokemon.hp / this.pokemon.maxHp * 100;
  }

  onPokemonAttack(attacker: Pokemon, defender: Pokemon, attackResult: AttackResult) {
    console.log(`This.pokemon = ${JSON.stringify(this.pokemon)}`);
    console.log(`attacker = ${JSON.stringify(attacker)}`);
    console.log(`attacker = ${JSON.stringify(attacker)}`);
    this.isAttacked = attacker.name !== this.pokemon.name;
    if (attacker.name !== this.pokemon.name) {
      this.lastReceivedDamages = attackResult.damages;
      if (this.pokemon.hp <= 0) {
        setTimeout(() => {
          this.isAttacked = false;
        }, 1000);
      }
    }
  }
}
