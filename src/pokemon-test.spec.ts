import {Move, Pokemon} from './Pokemon';
import {whichPokemonStart} from './PokemonUtils';

const ditto = new Pokemon('ditto',
  10,
  48,
  48,
  48,
  48,
  48,
  48,
  50,
  'normal',
  [new Move('punch', 50)],
  'front',
  'back'
);


const pikachu = new Pokemon('pikachu',
  10,
  48,
  48,
  48,
  48,
  48,
  48,
  60,
  'electric',
  [new Move('eclair', 50), new Move('fatal-foudre', 90)],
  'front',
  'back'
);


describe('Pokemons speed comparaison', () => {
  it('should be Pickachu that starts before Ditto', () => {
    expect(whichPokemonStart(ditto, pikachu)).toBe(pikachu);
  });

  it('should be first pokemon if both speed are equals', () => {
    ditto.speed = 50;
    pikachu.speed = 50;
    expect(whichPokemonStart(ditto, pikachu)).toBe(ditto);
  });
});

describe('Pokemons fighting tests', () => {

  it('should second attack be selected', () => {
    const dittoHp = ditto.hp;
    const secondAttackDamages = pikachu.moves[1].calculateDamages(pikachu, ditto);
    pikachu.attackOn(ditto, () => 1);
    expect(ditto.hp).toBe(dittoHp - secondAttackDamages);
  });

  it('Pikachu should attack ditto', () => {
    const dittoInitialHp = ditto.hp;
    const pikachuAttackDamages = pikachu.moves[0].calculateDamages(pikachu, ditto);
    pikachu.attackOn(ditto, () => 0);
    expect(ditto.hp).toBe(dittoInitialHp - pikachuAttackDamages);
  });
});
