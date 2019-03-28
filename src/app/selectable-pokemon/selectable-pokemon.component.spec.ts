import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectablePokemonComponent } from './selectable-pokemon.component';

describe('SelectablePokemonComponent', () => {
  let component: SelectablePokemonComponent;
  let fixture: ComponentFixture<SelectablePokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectablePokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectablePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
