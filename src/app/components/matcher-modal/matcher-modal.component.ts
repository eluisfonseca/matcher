import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { log } from 'util';
import { PlayersService } from '../../services/players.service';
import { Subscription } from 'rxjs/Subscription';
import { Player, PlayerToMatch } from '../../structs';
import { timeout } from 'q';

@Component({
  selector: 'matcher-modal',
  templateUrl: './matcher-modal.component.html',
  styleUrls: ['./matcher-modal.component.scss']
})

export class MatcherModalComponent implements OnInit, OnDestroy {
  @Output() closing = new EventEmitter();
  private playerList: PlayerToMatch[];
  private selectedPlayers: PlayerToMatch[];
  private playerSubscription: Subscription;
  private matching: boolean;

  constructor(private _playersService: PlayersService) {
    this.playerSubscription = this._playersService.getPlayers().map(
      res => res.map(x => new PlayerToMatch(
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
    this.matching = false;
  }

  closeModal() {
    this.closing.emit();
  }

  addPlayer(player: PlayerToMatch) {
    if (!player.selected) {
      this.selectedPlayers.push(player);
      const found = this.playerList.find(function(element) {
        return element.id === player.id;
      });
      found.selected = true;
      console.log('here', found);
    }
  }

  removePlayer(playerPosition: number) {
    console.log('remove', playerPosition);
    const removedPlayer = this.selectedPlayers[playerPosition];
    const rosterPlayer = this.playerList.find(function(element) {
      return element.id === removedPlayer.id;
    });
    rosterPlayer.selected = false;
    this.selectedPlayers.splice(playerPosition, 1);
  }

  generateMatch() {
    this.matching = true;
    setTimeout(() => {
      this.matching = false;
    }, 3000);
  }

  ngOnDestroy() {
    this.playerSubscription.unsubscribe();
  }
}
