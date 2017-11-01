import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlayersService } from './services/players.service';
import { MatchesService } from './services/matches.service';
import { Subscription } from 'rxjs/Subscription';
import { Player, Match } from './structs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  private playerList: Player[];
  private playerSubscription: Subscription;
  private matchList: Match[];
  private matchesSubscription: Subscription;

  constructor(private _playersService: PlayersService, private _matchesService: MatchesService) {
    // `subscribe` actually initiates the call to the serve
    this.playerSubscription = this._playersService.getPlayers().subscribe(
      res => {
        this.playerList = res;
        console.log(res);
      }
    );
    this.matchesSubscription = this._matchesService.getMatches().subscribe(
      res => {
        this.matchList = res;
        console.log(res);
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }
}
