import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TalksComponent } from './talks.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TalksComponent', () => {
  let component: TalksComponent;
  let fixture: ComponentFixture<TalksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalksComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
