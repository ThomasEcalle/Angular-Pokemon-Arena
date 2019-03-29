import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BattleComponent} from './battle.component';
import {PokemonComponent} from '../pokemon/pokemon.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {BattleService} from '../services/battle-service';
import {PokemonService} from '../services/PokemonService';
import {LoggerService} from '../services/logger-service';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {from} from 'rxjs';

describe('BattleComponent', () => {
  let component: BattleComponent;
  let fixture: ComponentFixture<BattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BattleComponent,
        PokemonComponent
      ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [BattleService, PokemonService, LoggerService, HttpClient, HttpHandler,
        {provide: ActivatedRoute, useValue: {params: from([{first: 'pikachu', second: 'blastoise'}])}}],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
