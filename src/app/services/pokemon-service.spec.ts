import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {async, TestBed} from '@angular/core/testing';
import {PokemonService} from './PokemonService';
import {Move, Pokemon} from '../../pokemon';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [PokemonService]
  }));

  it('should return pikachu when asking for pikachu', async(() => {
    const pokemonService = TestBed.get(PokemonService);
    const http = TestBed.get(HttpTestingController);
    const mockedPokemon = {
      name: 'pikachu',
      stats: [{base_stat: 40}, {base_stat: 40}, {base_stat: 40}, {base_stat: 40}, {base_stat: 40}, {base_stat: 40}],
      types: [{
        type: {name: 'electric'},
      }],
      sprites: {
        front_default: 'image_front',
        back_default: 'image_front',
      }
    };
    const name = 'pikachu';
    pokemonService.getPokemon(name).subscribe((pokemon: Pokemon) => {
      expect(pokemon.name).toBe(name);
    });

    http.expectOne(`https://pokeapi.co/api/v2/pokemon/${name}`).flush(mockedPokemon);
  }));

  it('should return mega-punch move detail when asking for attack 5', async(() => {
    const pokemonService: PokemonService = TestBed.get(PokemonService);
    const http = TestBed.get(HttpTestingController);
    const mockedMove = {
      name: 'mega-punch',
      power: 80
    };
    const moveJson = {
      url: 'https://pokeapi.co/api/v2/move/5'
    };

    pokemonService.getPokemonMoveDetails(moveJson).subscribe((move: Move) => {
      expect(move.power).toBe(80);
    });

    http.expectOne(`https://pokeapi.co/api/v2/move/5`).flush(mockedMove);
  }));
});
