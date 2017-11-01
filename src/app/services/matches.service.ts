import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Match} from '../structs';

@Injectable()
export class MatchesService {

  private matchesURL = 'http://localhost:3000/matches/';

  constructor(private _http: Http) { }
    getMatches() {
      return this._http
        .get(this.matchesURL)
        .map(x => x.json());
    }

}
