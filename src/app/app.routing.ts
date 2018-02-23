import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerEditorComponent } from './components/player-editor/player-editor.component';
import { MatchEditorComponent } from './components/match-editor/match-editor.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'edit/:id',
    component: PlayerEditorComponent
  },
  {
    path: 'create',
    component: PlayerEditorComponent
  },
  {
    path: 'matcher',
    component: MatchEditorComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});
