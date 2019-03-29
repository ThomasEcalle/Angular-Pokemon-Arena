import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forkJoin, Observable} from 'rxjs';
import {Move, Pokemon} from '../../pokemon';
import {map, mergeMap, tap} from 'rxjs/operators';

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {
  }

  private getPokemonMoveDetails(move: JSON): Observable<Move> {
    const url = move['url'];
    console.log(`requesting move with url : ${url}`);
    return this.http
      .get<JSON>(url)
      .pipe(
        map(json => new Move(json['name'], json['power']))
      );
  }

  getPokemonDetails(name: string): Observable<Pokemon> {
    console.log(`requesting pokemon with name : ${name}`);
    let pokemon;
    return this.http
      .get<JSON>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        tap(json => pokemon = Pokemon.getPokemonFromJson(json)),
        map((json) => json['moves']),
        mergeMap(moves => {
          const requests = [];
          moves.map(move => {
            requests.push(this.getPokemonMoveDetails(move.move));
          });
          return forkJoin(requests);
        }),
        tap(movesRetrieved => {
          console.log(`yooo requests = ${JSON.stringify(movesRetrieved)}`);
          pokemon.moves = movesRetrieved;
        }),
        map(() => pokemon)
      );
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.http
      .get<JSON>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        map(json => Pokemon.getPokemonFromJson(json)),
      );
  }

  getAllPokemons(): Observable<Pokemon[]> {
    const requests = Array<Observable<Pokemon>>();

    for (let i = 1; i < 152; i++) {
      requests.push(this.getPokemon(`${i}`));
    }

    return forkJoin(requests);
  }
}
