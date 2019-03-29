import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FightLogsComponent} from './fight-logs.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FightLogs, LogType} from './FightLogs';
import {LoggerService} from '../services/logger-service';

describe('FightLogsComponent', () => {
  let component: FightLogsComponent;
  let fixture: ComponentFixture<FightLogsComponent>;
  const date = new Date();

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [FightLogsComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        LoggerService,
        {provide: LoggerService, useValue: {logs: [new FightLogs('test', date, LogType.ATTACK)]}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should first log text be \' test \' ', () => {
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelector('p:nth-child(1n)').textContent).toBe(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - test`);
  });

  /*it('should log be red when attack ', () => {
    const view = fixture.debugElement.nativeElement;
    expect(view.querySelector('p:nth-child(1n)').style.valueOf()).toBe('red');
  });*/

});
