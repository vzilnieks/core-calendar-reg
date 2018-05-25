import { Injectable } from '@angular/core';
import { Master } from './shared/classes/master';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';

@Injectable()
export class MasterService {

  constructor(private http: HttpService) { }

  public getMasters() {
    return this.http.httpGet('masters');
  }

  public getMasterName(masterId: number) {
    return this.http.httpGet('masters').filter(master => master.id === masterId);
  }

  public addMaster(name: string) {
    // return this.http.httpPut(this.mastersUrl, {name: name});
    // this.masters.push( 
    //   { id: Math.floor(Math.random() * 100), name: name, workingDays: [] } );
  }

  public updateMaster(masterId: number, days: number[]) {
    // let masterIndex = this.masters.findIndex(arr => arr.id === masterId);
    // // TODO: db
    // this.masters[masterIndex].workingDays = days;
  }

  public deleteMaster(masterId: number) {
    // let masterIndex = this.masters.findIndex(arr => arr.id === masterId);
    // // TODO: db
    // this.masters.splice(masterIndex, 1);
  }

}
