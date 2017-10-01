import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import {Player} from '../structs';

@Injectable()
export class PlayersService {
  private playersURL = '../../assets/data/players.json'

  constructor(private _http: Http) { }

  getPlayers() {
    return this._http
      .get(this.playersURL)
      .map(x => x.json() )
  }

}
