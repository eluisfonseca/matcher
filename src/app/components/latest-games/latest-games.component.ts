// core imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import {ViewEncapsulation} from '@angular/core';
// for animations
import { EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
// custom imports
import { MatchesService } from '../../services/matches.service';
import { Match } from '../../structs';

@Component({
  selector: 'latest-games',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './latest-games.component.html',
  styleUrls: ['./latest-games.component.scss'],
  animations: [
    trigger('createMatchAnimation', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)',
        opacity: '1'
      })),
      state('out', style({
        transform: 'translate3d(0, 100%, 0)',
        opacity: '0'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class LatestGamesComponent implements OnInit, OnDestroy {
  private matchList: Match[];
  private matchesSubscription: Subscription;
  private createMatchState = 'out';

  constructor(private _matchesService: MatchesService, private _router: Router) {
    console.log(this.createMatchState);
    this.matchesSubscription = this._matchesService.getMatches().subscribe(
      res => {
        this.matchList = res;
      }
    );
  }

  ngOnInit() {
  }

  toggleMatchCreator() {
    if (this.createMatchState === 'in') {
      this.createMatchState = 'out';
    } else {
      this.createMatchState = 'in';
    }
    console.log(this.createMatchState);
  }

  createMatch() {
    this._router.navigate(['/matcher']);
  }

  ngOnDestroy() {
    this.matchesSubscription.unsubscribe();
  }

}
