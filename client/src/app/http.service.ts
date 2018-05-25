import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  private host: string = 'https://5b01889d642cef0014b09278.mockapi.io/core-reg';

  constructor(private http: HttpClient) { }

  public httpGet(route: string): Observable<any> {
    return this.http.get(`${this.host}/${route}`);
  }

  // public httpPut(url: string, data: any):Observable<any> {
  //   return this.http.put(url, data);
  // }

}
