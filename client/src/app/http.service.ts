import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  public httpGet(url: string):Observable<any> {
    return this.http.get(url);
  }

  // public httpPut(url: string, data: any):Observable<any> {
  //   return this.http.put(url, data);
  // }

}
