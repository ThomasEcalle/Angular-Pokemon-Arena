export class FightLogs {
  readonly text: string;
  readonly type: LogType;

  constructor(text: string, type: LogType) {
    this.text = text;
    this.type = type;
  }
}

export enum LogType {
  ATTACK,
  LOST_HP,
  WINNER,
  INFOS
}
