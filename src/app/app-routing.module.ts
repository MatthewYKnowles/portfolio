import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConnectFourComponent} from './projects/connect-four/connect-four.component';
import {PlayerSelectionComponent} from './projects/connect-four/player-selection/player-selection.component';
import {TalksComponent} from './talks/talks.component';
import {ProjectsComponent} from './projects/projects.component';


const routes: Routes = [
  {path: 'talks', component: TalksComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'connect-four', component: ConnectFourComponent},
  {path: 'player-selection', component: PlayerSelectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
