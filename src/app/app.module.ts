import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FightLogsComponent } from './fight-logs/fight-logs.component';
import { BattleButtonComponent } from './battle-button/battle-button.component';
import { BattleComponent } from './battle/battle.component';
import { PokemonChooserComponent } from './pokemon-chooser/pokemon-chooser.component';
import {ColorLogDirective} from './directives/color-log';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    FightLogsComponent,
    BattleButtonComponent,
    BattleComponent,
    PokemonChooserComponent,
    ColorLogDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
