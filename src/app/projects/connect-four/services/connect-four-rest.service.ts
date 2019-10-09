import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConnectFourGameResult} from '../models/connect-four-game.result';

@Injectable({
  providedIn: 'root'
})
export class ConnectFourRestService {

  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://zn65jk7ush.execute-api.us-east-2.amazonaws.com/prod/';
  }

  recordConnectFourResult(connectFourGameResult: ConnectFourGameResult): Observable<any> {
    const url = this.url + 'connectFour';
    return this.httpClient.post(url, connectFourGameResult);
  }
}
