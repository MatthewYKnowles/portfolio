import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectionComponent } from './player-selection.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ConnectFourComponent} from '../connect-four.component';

describe('PlayerSelectionComponent', () => {
  let component: PlayerSelectionComponent;
  let fixture: ComponentFixture<PlayerSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSelectionComponent, ConnectFourComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
