import {Injectable} from '@angular/core';
import {LoggerService} from './logger-service';
import {Move, Pokemon, Type} from '../../pokemon';
import {FightLogs, LogType} from '../fight-logs/FightLogs';
import {whichPokemonStart} from '../../PokemonUtils';

export interface PokemonBattleListner {
  onPokemonAttack(attacker: Pokemon, defender: Pokemon);
}

@Injectable()
export class BattleService {

  private attacker: Pokemon;
  private defender: Pokemon;
  private winner: Pokemon;
  private isFigthting = false;
  private listeners: PokemonBattleListner[] = [];

  constructor(private logger: LoggerService) {
  }

  subscribe(listener: PokemonBattleListner) {
    this.listeners.push(listener);
  }

  async initBattle(): Promise<[Pokemon, Pokemon]> {
    return this.init();
  }

  toggleBattleState() {
    this.isFigthting = !this.isFigthting;
    this.fight();
  }

  async init(): Promise<[Pokemon, Pokemon]> {
    return new Promise<[Pokemon, Pokemon]>(async (resolve, reject) => {
      setTimeout(async () => {
        const pokemon1 = new Pokemon('pikachu',
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

        const pokemon2 = new Pokemon('ditto',
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

        await this.logger.writeLog(new FightLogs(`Starting fight between ${pokemon1.name} and ${pokemon2.name}`, LogType.INFOS));

        const starter = whichPokemonStart(pokemon1, pokemon2);
        const other = starter === pokemon1 ? pokemon2 : pokemon1;

        this.attacker = starter;
        this.defender = other;

        await this.logger.writeLog(new FightLogs(`${starter.name} will start the fight`, LogType.INFOS));

        resolve([pokemon1, pokemon2]);
      }, 1000);
    });

  }

  async fight() {
    while (this.winner === undefined && this.isFigthting) {
      const damages = this.attacker.move.calculateDamages(this.attacker, this.defender);
      await this.logger.writeLog(new FightLogs(`${this.attacker.name} attacks ${this.defender.name} with ${this.attacker.move.name} (${damages} dommages)`, LogType.ATTACK));
      this.attacker.attackOn(this.defender);

      for (const listener of this.listeners) {
        listener.onPokemonAttack(this.attacker, this.defender);
      }

      if (this.defender.hp <= 0) {
        this.defender.hp = 0;
        this.winner = this.attacker;
        await this.logger.writeLog(new FightLogs(`${this.winner.name} won the fight`, LogType.WINNER));
        break;
      }

      await this.logger.writeLog(new FightLogs(`${this.defender.name} has ${this.defender.hp} hps left`, LogType.LOST_HP));

      const tmp = this.attacker;
      this.attacker = this.defender;
      this.defender = tmp;
      await this.delay(1000);

    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
