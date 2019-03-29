import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PokemonComponent} from './pokemon.component';
import {Move, Pokemon, Type} from '../../pokemon';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    component.selectablePokemon = new Pokemon('pikachu',
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
      'https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png',
      'https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png'
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
