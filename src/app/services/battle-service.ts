import {Injectable} from '@angular/core';
import {LoggerService} from './logger-service';
import {AttackResult, Pokemon} from '../../pokemon';
import {FightLogs, LogType} from '../fight-logs/FightLogs';
import {whichPokemonStart} from '../../PokemonUtils';
import {Observable} from 'rxjs';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {PokemonService} from './PokemonService';

export interface PokemonBattleListner {
  onPokemonAttack(attacker: Pokemon, defender: Pokemon, attackResult: AttackResult);
}

@Injectable()
export class BattleService {

  private attacker: Pokemon;
  private defender: Pokemon;
  private winner: Pokemon;
  private listeners: PokemonBattleListner[] = [];
  private isPause = true;
  private intervalObservable: Observable<void>;

  constructor(private logger: LoggerService, private pokemonService: PokemonService) {
  }

  subscribe(listener: PokemonBattleListner) {
    this.listeners.push(listener);
  }

  public getPokemons(pokemon1Name: string, pokemon2Name: string): Observable<Array<Pokemon>> {

    console.log(`names = ${pokemon1Name} / ${pokemon2Name}`);
    let pokemon1;
    let pokemon2;

    return this.pokemonService
      .getPokemonDetails(pokemon1Name)
      .pipe(
        tap((pokemon) => pokemon1 = pokemon),
        mergeMap(() => {
          return this.pokemonService.getPokemonDetails(pokemon2Name);
        }),
        tap((pokemon) => {
          pokemon2 = pokemon;
          this.logger.writeLog(new FightLogs(`Starting fight between ${pokemon1.name} and ${pokemon2.name}`, new Date(), LogType.INFOS));

          const starter = whichPokemonStart(pokemon1, pokemon2);
          const other = starter === pokemon1 ? pokemon2 : pokemon1;

          this.attacker = starter;
          this.defender = other;

          this.logger.writeLog(new FightLogs(`${starter.name} will start the fight`, new Date(), LogType.INFOS));
        }),
        map(() => [pokemon1, pokemon2])
      );
  }

  setPause(bool) {
    console.log(`setting pause to = ${bool}`);
    this.isPause = bool;
  }

  attack(): Observable<Pokemon> {
    return this.getDelayObservable()
      .pipe(
        filter(() => !this.isPause),
        filter(() => !this.winner),
        tap(() => {
          const attackResult = this.attacker.attackOn(this.defender);

          this.logger.writeLog(new FightLogs(`${this.attacker.name} attacked ${this.defender.name} with ${attackResult.name} (${attackResult.damages} dommages)`, new Date(), LogType.ATTACK));

          for (const listener of this.listeners) {
            listener.onPokemonAttack(this.attacker, this.defender, attackResult);
          }

          this.logger.writeLog(new FightLogs(`${this.defender.name} has ${this.defender.hp} hps left`, new Date(), LogType.LOST_HP));

          if (this.defender.hp <= 0) {
            this.defender.hp = 0;
            this.winner = this.attacker;
            this.logger.writeLog(new FightLogs(`${this.winner.name} won the fight`, new Date(), LogType.WINNER));
          }

          const tmp = this.attacker;
          this.attacker = this.defender;
          this.defender = tmp;

        }),
        map(() => this.defender)
      );
  }

  private getDelayObservable(): Observable<void> {
    if (!this.intervalObservable) {
      this.intervalObservable = new Observable<void>(observer => {
        observer.next();
        const interval = setInterval(() => observer.next(), 1000);
        return () => {
          observer.complete();
          clearInterval(interval);
        };
      });
    }

    return this.intervalObservable;
  }
}
