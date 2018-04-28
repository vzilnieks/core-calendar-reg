import { Injectable } from '@angular/core';
import { Master } from './shared/classes/master';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class MasterService {

  private masters: Master[] = [
    {id: 1, name: "John Smith", workingDays: [1, 2]},
    {id: 2, name: "Andrew Black", workingDays: [2, 3, 6]}
  ];

  constructor() { }

  public getMaster(): Observable<Master> {
    return Observable.from(this.masters);
  }

  public getMasterName(masterId: number): string {
    return this.masters[masterId].name;
  }

  public addMaster(name: string) {
    this.masters.push( 
      { id: Math.floor(Math.random() * 100), name: name, workingDays: [] } );
  }

}
