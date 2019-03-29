import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokemonComponent} from './pokemon/pokemon.component';
import {FightLogsComponent} from './fight-logs/fight-logs.component';
import {BattleButtonComponent} from './battle-button/battle-button.component';
import {BattleComponent} from './battle/battle.component';
import {PokemonChooserComponent} from './pokemon-chooser/pokemon-chooser.component';
import {ColorLogDirective} from './directives/color-log';
import {BattleService} from './services/battle-service';
import {LoggerService} from './services/logger-service';
import {MenuComponent} from './menu/menu.component';
import {SelectablePokemonComponent} from './selectable-pokemon/selectable-pokemon.component';
import {PokemonService} from './services/PokemonService';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {CreatePokemonComponent} from './create-pokemon/create-pokemon.component';

const routes: Routes = [
  {path: '', component: PokemonChooserComponent}, // path: '/'
  {path: 'arena/:first/:second', component: BattleComponent},
  {path: 'createPokemon', component: CreatePokemonComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FightLogsComponent,
    BattleButtonComponent,
    BattleComponent,
    PokemonChooserComponent,
    ColorLogDirective,
    MenuComponent,
    SelectablePokemonComponent,
    CreatePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BattleService, LoggerService, PokemonService, {provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
