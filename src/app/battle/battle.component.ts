import {Component, OnDestroy, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';
import {BattleService} from '../services/battle-service';
import {Subscription} from 'rxjs';
import {mergeMap, tap} from 'rxjs/operators';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit, OnDestroy {

  title;
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  isLoading = false;
  isFighting = false;

  firstName: string;
  secondName: string;
  private subscriber: Subscription;

  constructor(private battleService: BattleService, private route: ActivatedRoute) {
  }

  handlePause() {
    this.isFighting = !this.isFighting;
    this.battleService.setPause(!this.isFighting);
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.subscriber = this.route.params
      .pipe(
        tap((params: Params) => {
          this.firstName = params.first;
          this.secondName = params.second;
        }),
        mergeMap(() => this.battleService.getPokemons(this.firstName, this.secondName)),
        tap((pokemons: Pokemon[]) => {
          this.isLoading = false;
          [this.pokemon1, this.pokemon2] = pokemons;
          this.title = `${this.pokemon1.name} VS ${this.pokemon2.name}`;
        }),
        mergeMap(() => {
          return this.battleService.attack();
        })
      ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
