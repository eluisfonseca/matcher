import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Player} from '../structs';

@Injectable()
export class PlayersService {
  private playersURL = 'http://localhost:3000/players/';

  constructor(private _http: Http) { }

  getPlayers() {
    return this._http
      .get(this.playersURL)
      .map(x => x.json());
  }

}
