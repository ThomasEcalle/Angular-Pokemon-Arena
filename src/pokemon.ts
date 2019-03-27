export class Pokemon {
  constructor(
    readonly name: string,
    public level: number,
    public hp: number,
    public maxHp: number,
    public attack: number,
    public defense: number,
    public specialAttack: number,
    public specialDefense: number,
    public speed: number,
    readonly type: Type,
    readonly move: Move,
    readonly frontDefault: string,
    readonly backDefault: string
  ) {
  }

  public attackOn(other: Pokemon) {
    const damages = this.move.calculateDamages(this, other);
    other.hp -= damages;
  }
}

export enum Type {
  BUG,
  DRAGON,
  ICE,
  FIGHTING,
  FIRE,
  FLYING,
  GRASS,
  GHOST,
  GROUND,
  ELECTRIC,
  NORMAL,
  POISON,
  PSYCHIC,
  ROCK,
  WATER
}

export class Move {
  constructor(
    readonly name: string,
    readonly basePower: number,
    readonly type: Type
  ) {
  }

  public calculateDamages(attacker: Pokemon, target: Pokemon): number {
    return Math.floor(Math.floor(Math.floor(2 * attacker.level / 5 + 2) * attacker.attack * this.basePower / target.defense));
  }
}
