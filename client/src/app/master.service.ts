import { Injectable } from '@angular/core';
import { Master } from './shared/classes/master';

@Injectable()
export class MasterService {

  private masters: Master[] = [
    {id: 1, name: "John Smith", workingDays: [1, 2]},
    {id: 2, name: "Andrew Black", workingDays: [2, 3, 6]}
  ];

  constructor() { }

  public allMasters(): Master[] {
    return this.masters;
  }

  public masterName(masterId: number): string {
    return this.masters[masterId].name;
  }

  public addMaster(name: string) {
    this.masters.push( 
      { id: Math.floor(Math.random() * 100), name: name, workingDays: [] } );
  }

}
