import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectFourComponent } from './projects/connect-four/connect-four.component';
import { PlayerSelectionComponent } from './projects/connect-four/player-selection/player-selection.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TalksComponent } from './talks/talks.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectFourComponent,
    PlayerSelectionComponent,
    NavigationBarComponent,
    TalksComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
