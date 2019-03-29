import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../pokemon';

@Component({
  selector: 'app-create-pokemon',
  templateUrl: './create-pokemon.component.html',
  styleUrls: ['./create-pokemon.component.scss']
})
export class CreatePokemonComponent implements OnInit {

  pokemon: Pokemon = new Pokemon(
    'Test',
    10,
    5000,
    5000,
    50,
    50,
    50,
    50,
    50,
    'electric',
    [],
    'https://cdn.vox-cdn.com/thumbor/-FJl60EF55DD4NPIr-w1UICrHsw=/0x0:1920x1080/1200x480/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/53262569/who_pokemon.0.jpg',
    'https://cdn.vox-cdn.com/thumbor/-FJl60EF55DD4NPIr-w1UICrHsw=/0x0:1920x1080/1200x480/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/53262569/who_pokemon.0.jpg'
  );

  constructor() {
  }

  ngOnInit() {
  }

  saveForm() {

  }

}
