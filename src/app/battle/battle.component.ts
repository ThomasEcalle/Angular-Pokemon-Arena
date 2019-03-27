import {Component, OnInit} from '@angular/core';
import {Move, Pokemon, Type} from '../../pokemon';
import {FightLogs, LogType} from '../fight-logs/FightLogs';
import {whichPokemonStart} from '../../PokemonUtils';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {

  title;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  logs = Array<FightLogs>();
  isFigthting = false;

  private attacker: Pokemon;
  private defender: Pokemon;
  private winner: Pokemon;

  constructor() {
  }

  ngOnInit(): void {
    this.pokemon1 = new Pokemon('pikachu',
      10,
      300,
      300,
      55,
      40,
      50,
      50,
      90,
      Type.ELECTRIC,
      new Move('eclair', 5, Type.ELECTRIC),
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    );

    this.pokemon2 = new Pokemon('ditto',
      40,
      400,
      400,
      48,
      48,
      48,
      48,
      48,
      Type.FLYING,
      new Move('ecrase\'face', 3, Type.NORMAL),
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/132.png'
    );

    this.title = `${this.pokemon1.name} VS ${this.pokemon2.name}`;
    this.simulateFight();
  }

  async simulateFight() {
    this.logs.push(new FightLogs(`Starting fight between ${this.pokemon1.name} and ${this.pokemon2.name}`, LogType.INFOS));

    const starter = whichPokemonStart(this.pokemon1, this.pokemon2);
    const other = starter === this.pokemon1 ? this.pokemon2 : this.pokemon1;

    this.attacker = starter;
    this.defender = other;

    this.logs.push(new FightLogs(`${starter.name} will start the fight`, LogType.INFOS));
  }

  async fight() {
    while (this.winner === undefined && this.isFigthting) {

      const damages = this.attacker.move.calculateDamages(this.attacker, this.defender);
      this.logs.push(new FightLogs(`${this.attacker.name} attacks ${this.defender.name} with ${this.attacker.move.name} (${damages} dommages)`, LogType.ATTACK));
      this.attacker.attackOn(this.defender);

      if (this.defender.hp <= 0) {
        this.defender.hp = 0;
        this.winner = this.attacker;
        this.logs.push(new FightLogs(`${this.winner.name} won the fight`, LogType.WINNER));
        break;
      }

      this.logs.push(new FightLogs(`${this.defender.name} has ${this.defender.hp} hps left`, LogType.LOST_HP));

      const tmp = this.attacker;
      this.attacker = this.defender;
      this.defender = tmp;
      await this.delay(1000);

    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleClick() {
    this.isFigthting = !this.isFigthting;
    this.fight();
  }

}
