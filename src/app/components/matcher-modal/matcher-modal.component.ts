import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { log } from 'util';
import { PlayersService } from '../../services/players.service';
import { Subscription } from 'rxjs/Subscription';
import { Player } from '../../structs';

@Component({
  selector: 'matcher-modal',
  templateUrl: './matcher-modal.component.html',
  styleUrls: ['./matcher-modal.component.scss']
})

export class MatcherModalComponent implements OnInit, OnDestroy {
  @Output() closing = new EventEmitter();
  private playerList: Player[];
  private selectedPlayers: Player[];
  private playerSubscription: Subscription;

  constructor(private _playersService: PlayersService) {
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
    this.selectedPlayers = [];
  }

  closeModal() {
    this.closing.emit();
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }
}
