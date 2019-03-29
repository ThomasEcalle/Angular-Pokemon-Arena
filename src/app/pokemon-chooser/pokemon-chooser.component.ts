import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../services/PokemonService';
import {Pokemon} from '../../pokemon';
import {Router} from '@angular/router';

export class SelectablePokemon {
  constructor(readonly pokemon: Pokemon, public isSelected: boolean = false) {
  }
}

@Component({
  selector: 'app-pokemon-chooser',
  templateUrl: './pokemon-chooser.component.html',
  styleUrls: ['./pokemon-chooser.component.scss']
})
export class PokemonChooserComponent implements OnInit {

  private pokemons = Array<SelectablePokemon>();
  private isLoading = false;
  private selectedPokemons = Array<SelectablePokemon>();

  constructor(private pokemonService: PokemonService, public router: Router) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.pokemonService.getAllPokemons().subscribe(
      pokemons => {
        this.isLoading = false;
        console.log(`loading pokemon finished`);
        pokemons.map(pokemon => this.pokemons.push(new SelectablePokemon(pokemon)));
      },
      error => console.error(`errror ${error}`)
    );
  }

  handleSelection(selectablePokemon: SelectablePokemon) {
    if (selectablePokemon.isSelected) {
      selectablePokemon.isSelected = false;
      const index = this.selectedPokemons.indexOf(selectablePokemon);
      this.selectedPokemons.splice(index, 1);
    } else {
      selectablePokemon.isSelected = true;
      this.selectedPokemons.push(selectablePokemon);
      if (this.selectedPokemons.length === 3) {
        this.selectedPokemons[0].isSelected = false;
        this.selectedPokemons.shift();
      }
    }

  }

  handleStartingFight() {
    this.router.navigate([`/arena/${this.selectedPokemons[0].pokemon.name}/${this.selectedPokemons[1].pokemon.name}`]);
  }
}
