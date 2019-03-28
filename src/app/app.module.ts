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
import { MenuComponent } from './menu/menu.component';
import { SelectablePokemonComponent } from './selectable-pokemon/selectable-pokemon.component';

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
    SelectablePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BattleService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
