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

  public httpPost(route: string, data: any): Observable<any> {
    return this.http.post(`${this.host}/${route}`, data);
  }

  public httpPut(route: string, data: any): Observable<any> {
    return this.http.put(`${this.host}/${route}`, data);
  }

  public httpDelete(route: string, data?: any): Observable<any> {
    return this.http.delete(`${this.host}/${route}`, data);
  }
}
