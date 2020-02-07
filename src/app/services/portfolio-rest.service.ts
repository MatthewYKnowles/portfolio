import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ConnectFourGameResult} from '../projects/connect-four/models/connect-four-game.result';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {ConferenceTalk} from '../talks/conferenceTalk';

class ConferenceTalkResponse {
  ConferenceTitle: string;
  ConferenceCity: string;
  ConferenceUrl: string;
  TalkTitle: string;
  TalkUrl: string;
  VideoUrl: string;
  TalkDate: Date;
}

class GetConferenceTalksResponse {
  ConferenceTalks: ConferenceTalkResponse[];
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioRestService {

  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }

  recordConnectFourResult(connectFourGameResult: ConnectFourGameResult): Observable<any> {
    const url = this.url + '/connectFour';
    return this.httpClient.post(url, connectFourGameResult);
  }

  getConferenceTalks(): Observable<any> {
    const url = this.url + '/conferenceTalk';
    return this.httpClient.get(url).pipe(
      map((response: GetConferenceTalksResponse | HttpErrorResponse) => {
        return response instanceof HttpErrorResponse ? [] : this.mapConferenceTalks(response);
      })
    );
  }

  private mapConferenceTalks(response: GetConferenceTalksResponse): ConferenceTalk[] {
    console.log(response);
    return response.ConferenceTalks.map(x => {
      return new ConferenceTalk(x.ConferenceTitle, x.ConferenceCity, x.ConferenceUrl,
        x.TalkTitle, x.TalkUrl, x.VideoUrl, x.TalkDate);
    });
  }
}
