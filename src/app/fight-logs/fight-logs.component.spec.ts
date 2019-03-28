import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightLogsComponent} from './fight-logs.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FightLogs, LogType} from './FightLogs';

describe('FightLogsComponent', () => {
  let component: FightLogsComponent;
  let fixture: ComponentFixture<FightLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FightLogsComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLogsComponent);
    component = fixture.componentInstance;
    component.logs = [new FightLogs('test', LogType.ATTACK)];
    fixture.detectChanges();
  });

  it('should first log text be \' test \' ', () => {
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelector('p:nth-child(1n)').textContent).toBe('test');
  });

  /*it('should log be red when attack ', () => {
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelector('p:nth-child(1n)').style.valueOf()).toBe('red');
  });*/

});
