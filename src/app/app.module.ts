import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { PlayersService } from './services/players.service';
import { MatchesService } from './services/matches.service';
import { LatestGamesComponent } from './components/latest-games/latest-games.component';

@NgModule({
  declarations: [
    AppComponent,
    LatestGamesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule
  ],
  providers: [PlayersService, MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
