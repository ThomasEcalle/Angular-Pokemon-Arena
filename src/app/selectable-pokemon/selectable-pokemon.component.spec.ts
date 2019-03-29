import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SelectablePokemonComponent} from './selectable-pokemon.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {SelectablePokemon} from '../pokemon-chooser/pokemon-chooser.component';
import {Move, Pokemon} from '../../pokemon';

describe('SelectablePokemonComponent', () => {
  let component: SelectablePokemonComponent;
  let fixture: ComponentFixture<SelectablePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectablePokemonComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectablePokemonComponent);
    component = fixture.componentInstance;
    component.selectablePokemon = new SelectablePokemon(new Pokemon('pikachu',
      10,
      300,
      300,
      55,
      40,
      50,
      50,
      90,
      'electric',
      [new Move('eclair', 5)],
      'https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png',
      'https://i.pinimg.com/originals/f3/e1/b8/f3e1b8019f160f88531d8af792716b4f.png'
      )
      ,
      false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event on click', () => {
    jest.spyOn(component.selectEvent, 'emit');
    fixture.debugElement.nativeElement.querySelector('div').click();
    fixture.detectChanges();
    expect(component.selectEvent.emit).toHaveBeenCalled();
  });
});
