import { TestBed } from '@angular/core/testing';

import { PortfolioRestService } from './portfolio-rest.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '../../environments/environment';
import {HttpErrorResponse} from '@angular/common/http';

describe('PortfolioRestService', () => {
  let service: PortfolioRestService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PortfolioRestService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PortfolioRestService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should return an empty array when an error is received', () => {
    service.getConferenceTalks().subscribe(response => {
      expect(response).toEqual([]);
    });
    const req = http.expectOne(`${environment.apiUrl}/conferenceTalk`);
    expect(req.request.method).toEqual('GET');
    req.flush(new HttpErrorResponse({}));
  });
});
