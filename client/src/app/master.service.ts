import { Injectable } from '@angular/core';
import { Master } from './shared/classes/master';
import { HttpService } from './http.service';

@Injectable()
export class MasterService {

  constructor(private http: HttpService) { }

  public getMasters() {
    return this.http.httpGet('masters');
  }

  public getMasterById(masterId) {
    return this.http.httpGet(`masters/${masterId}`);
  }

  public addMaster(name: string) {
    return this.http.httpPost('masters', {name: name});
  }

  public updateMaster(masterId: number, days: number[]) {
    return this.http.httpPut(`masters/${masterId}`, {workingDays: days});
  }

  public deleteMaster(masterId: number) {
    return this.http.httpDelete(`masters/${masterId}`);
  }

}
