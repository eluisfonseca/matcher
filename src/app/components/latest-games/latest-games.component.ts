import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatchesService } from '../../services/matches.service';
import { Subscription } from 'rxjs/Subscription';
import { Match } from '../../structs';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'latest-games',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './latest-games.component.html',
  styleUrls: ['./latest-games.component.scss']
})
export class LatestGamesComponent implements OnInit, OnDestroy {
  private matchList: Match[];
  private matchesSubscription: Subscription;

  constructor(private _matchesService: MatchesService) {
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
    this.matchesSubscription.unsubscribe();
  }

}
