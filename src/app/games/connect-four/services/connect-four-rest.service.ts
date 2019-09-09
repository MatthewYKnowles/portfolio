import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectFourRestService {

  private readonly url: string;

  constructor(private httpClient: HttpClient) {
    this.url = 'https://7lbn6iw045.execute-api.us-east-2.amazonaws.com/prod/';
  }

  recordConnectFourResult(connectFourGameResult: any): Observable<any> {
    const url = this.url + 'connectFourMatch';
    return this.httpClient.post(url, connectFourGameResult);
  }
}
