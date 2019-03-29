import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BattleButtonComponent} from './battle-button.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('BattleButtonComponent', () => {
  let component: BattleButtonComponent;
  let fixture: ComponentFixture<BattleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BattleButtonComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleButtonComponent);
    component = fixture.componentInstance;
    component.labels = ['stop', 'play'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be play', () => {
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelector('p').textContent).toBe('play');
  });

  it('should be stop after 1 click', () => {
    const view = fixture.debugElement.nativeElement;
    const a = view.querySelector('a');
    a.click();
    fixture.detectChanges();
    expect(view.querySelector('p').textContent).toBe('stop');
  });

  it('should be play after 2 click', () => {
    const view = fixture.debugElement.nativeElement;
    const a = view.querySelector('a');
    a.click();
    a.click();
    fixture.detectChanges();
    expect(view.querySelector('p').textContent).toBe('play');
  });

  it('should emit event on click', () => {
    jest.spyOn(component.onClick, 'emit');
    fixture.debugElement.nativeElement.querySelector('a').click();
    fixture.detectChanges();
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
