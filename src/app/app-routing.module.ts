import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectFourComponent} from './games/connect-four/connect-four.component';
import {PlayerSelectionComponent} from './games/connect-four/player-selection/player-selection.component';


const routes: Routes = [
  {path: 'connect-four', component: ConnectFourComponent},
  {path: 'player-selection', component: PlayerSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
