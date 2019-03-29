import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonChooserComponent} from './pokemon-chooser.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {PokemonService} from '../services/PokemonService';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {BattleService} from '../services/battle-service';
import {LoggerService} from '../services/logger-service';
import {ActivatedRoute, Router} from '@angular/router';

describe('PokemonChooserComponent', () => {
  let component: PokemonChooserComponent;
  let fixture: ComponentFixture<PokemonChooserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonChooserComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [BattleService, PokemonService, LoggerService, HttpClient, HttpHandler,
        {provide: ActivatedRoute, useValue: {params: []}},
        {provide: Router, useValue: {}}
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
