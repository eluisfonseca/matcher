import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { Subscription } from 'rxjs/Subscription';
import { Player } from '../../structs';

@Component({
  selector: 'player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit, OnDestroy {
  private playerList: Player[];
  private playerSubscription: Subscription;

  constructor(private _router: Router, private _playersService: PlayersService) {
    // `subscribe` actually initiates the call to the serve
    this.playerSubscription = this._playersService.getPlayers().map(
      res => res.map(x => new Player(
        x.id,
        x.firstName,
        x.lastName,
        x.stats.pass,
        x.stats.marking,
        x.stats.handling,
        x.stats.shot,
        x.stats.speed,
        x.stats.endurance,
        x.stats.strength,
        x.stats.vision,
        x.stats.goalkeeping,
        x.stats.tackle,
        x.stats.focus))
    ).subscribe(
      res => {
        console.log(res);
        this.playerList = res;
      }
    );
  }

  ngOnInit() {
    const a = new Player('sd', 'asdad', 'asdasd', 1, 2, 3, 4, 7, 3, 5);
    console.log(a.getAggregates());
  }

  createPlayer() {
    this._router.navigate(['/create']);
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }

}
