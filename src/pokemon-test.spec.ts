import {Move, Pokemon, Type} from './Pokemon';
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
  50,
  'electric',
  [new Move('eclair', 50)],
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

  it('Pikachu should attack ditto', () => {
    const dittoInitialHp = ditto.hp;
    const pikachuAttackDamages = pikachu.move.calculateDamages(pikachu, ditto);
    pikachu.attackOn(ditto);
    expect(ditto.hp).toBe(dittoInitialHp - pikachuAttackDamages);
  });
});
