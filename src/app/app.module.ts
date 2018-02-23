import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { PlayersService } from './services/players.service';
import { MatchesService } from './services/matches.service';
import { LatestGamesComponent } from './components/latest-games/latest-games.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerProfileComponent } from './components/player-profile/player-profile.component';
import { PlayerEditorComponent } from './components/player-editor/player-editor.component';
import { MatchEditorComponent } from './components/match-editor/match-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestGamesComponent,
    HomeComponent,
    PlayerProfileComponent,
    PlayerEditorComponent,
    MatchEditorComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    AppRouting
  ],
  providers: [PlayersService, MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
