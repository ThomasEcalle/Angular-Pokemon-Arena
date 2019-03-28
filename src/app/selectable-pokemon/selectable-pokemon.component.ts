import {Component, OnInit} from '@angular/core';
import {Move, Pokemon, Type} from '../../pokemon';

@Component({
  selector: 'app-selectable-pokemon',
  templateUrl: './selectable-pokemon.component.html',
  styleUrls: ['./selectable-pokemon.component.scss']
})
export class SelectablePokemonComponent implements OnInit {

  pokemon: Pokemon;
  selected = false;

  constructor() {
  }

  ngOnInit() {
    this.pokemon = new Pokemon('pikachu',
      10,
      300,
      300,
      55,
      40,
      50,
      50,
      90,
      Type.ELECTRIC,
      new Move('eclair', 5, Type.ELECTRIC),
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'
    );
  }

  onSelect() {
    this.selected = !this.selected;
  }

}
