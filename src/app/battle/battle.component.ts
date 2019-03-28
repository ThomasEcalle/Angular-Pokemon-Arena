import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {BattleService} from '../services/battle-service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  title;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  isLoading = false;

  constructor(private battleService: BattleService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.battleService.initBattle().then((pokemons) => {
      this.isLoading = false;
      console.log(`retrieved pokemons : ${JSON.stringify(pokemons)}`);
      [this.pokemon1, this.pokemon2] = pokemons;
      console.log(`pokemon 1 : ${JSON.stringify(this.pokemon1)}`);
      console.log(`pokemon 2 : ${JSON.stringify(this.pokemon2)}`);
      this.title = `${this.pokemon1.name} VS ${this.pokemon2.name}`;
    });
  }

}
