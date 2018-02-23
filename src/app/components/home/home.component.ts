import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { MatchesService } from '../../services/matches.service';
import { Subscription } from 'rxjs/Subscription';
import { Player, Match } from '../../structs';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'home';
  private playerList: Player[];
  private playerSubscription: Subscription;
  private matchList: Match[];
  private matchesSubscription: Subscription;

  constructor(private _playersService: PlayersService, private _matchesService: MatchesService, private _router: Router) {
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

  createPlayer() {
    this._router.navigate(['/create']);
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }
}