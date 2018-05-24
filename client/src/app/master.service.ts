import { Injectable } from '@angular/core';
import { Master } from './shared/classes/master';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import 'rxjs/add/operator/do';

@Injectable()
export class MasterService {

  private mastersUrl: string = 'https://5b01889d642cef0014b09278.mockapi.io/core-reg/masters';

  constructor(private http: HttpService) { }

  public getMasters(): Observable<any> {
    return this.http.httpGet(this.mastersUrl).do(data => console.log(data));
  }

  public getMasterName(masterId: number): string {
    // let masters: Master[];
    // this.getMasters().subscribe(masters => masters = masters);
    // return masters.filter(master => master.id === masterId)[0].name;
    return '';
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
