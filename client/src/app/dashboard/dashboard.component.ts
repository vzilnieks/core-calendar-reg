import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalComponent } from '../shared/modal/modal.component';

// export interface Time {
//   dayOfWeek: number,
//   time: number;
//   master: string;
//   free: boolean;
// }
//
// const ELEMENT_DATA: Time[] = [
//   {dayOfWeek: 1, time: 1, master: 'Master1', free: true},
//   {dayOfWeek: 1, time: 2, master: 'Master2', free: true},
//   {dayOfWeek: 1, time: 3, master: 'Master1', free: true},
//   {dayOfWeek: 1, time: 4, master: 'Master1', free: true},
//   {dayOfWeek: 1, time: 5, master: 'Master1', free: true},
//   {dayOfWeek: 1, time: 6, master: 'Master1', free: true},
//   {dayOfWeek: 2, time: 7, master: 'Master1', free: true}
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private weekDays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  // private masterList:MasterList[] = [ 
  //   { name: "masterA" }
  // ];
  // displayedColumns = ['Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6' ];
  //dataSource = ELEMENT_DATA;
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public getMasters(i: number) {
    return null;
  }

  public openDialog(i: number) {
    this.dialog.open(ModalComponent, {data: {alert: this.weekDays[i]}});
  }

}
