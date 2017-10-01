import { Component } from '@angular/core';
import { PlayersService } from './services/players.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(_playerService:PlayersService) {
    // `subscribe` actually initiates the call to the server
    _playerService.getPlayers().subscribe(result => console.log(result));
  }
}
