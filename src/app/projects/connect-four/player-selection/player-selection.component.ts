import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.scss']
})
export class PlayerSelectionComponent implements OnInit {
  form: FormGroup;
  selectingPlayers: boolean;
  playerTwoName: string;
  playerOneName: string;

  constructor() {
    this.selectingPlayers = true;
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.form = new FormGroup({
      playerOneName: new FormControl([], Validators.required),
      playerTwoName: new FormControl([], Validators.required)
    });
  }

  onSubmit() {
    this.playerOneName = this.form.value.playerOneName;
    this.playerTwoName = this.form.value.playerTwoName;
    this.selectingPlayers = false;
  }
}
