import {Component, OnInit} from '@angular/core';
import {PortfolioRestService} from '../services/portfolio-rest.service';
import {ConferenceTalk} from './conferenceTalk';

@Component({
  selector: 'app-talks',
  templateUrl: './talks.component.html',
  styleUrls: ['./talks.component.scss']
})
export class TalksComponent implements OnInit {
  conferenceTalks: ConferenceTalk[];

  constructor(private portfolioRestService: PortfolioRestService) { }

  ngOnInit() {
    this.portfolioRestService.getConferenceTalks().subscribe((conferenceTalks: ConferenceTalk[]) => {
      this.conferenceTalks = conferenceTalks;
    });
  }
}
