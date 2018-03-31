import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { Master } from '../shared/classes/master';

// TODO -> DB
const weekDays = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
const workHours = [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const masters: Master[] = [
  {id: 1, name: "John Smith", workingDays: [1, 2]},
  {id: 2, name: "Andrew Black", workingDays: [2, 3, 6]}
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public weekDays: string[];
  public workHours: number[];
  public masters: Master[];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.weekDays = weekDays;
    this.workHours = workHours;
    this.masters = masters;
  }

  public getMasters(day: number): string {
    var workingMasters = [];
    // TODO: service
    for ( var master in this.masters) {
      for ( var workDay in this.masters[master].workingDays ) {
	if (this.masters[master].workingDays[workDay] == day) {
	  workingMasters.push(this.masters[master].name);
	}
      };
    };
    return workingMasters.toString();
  }

  public openDialog(day: number, time: number) {
    this.dialog.open(ModalComponent, {data: {alert: `Order to day: ${this.weekDays[day]}, time: ${this.workHours[time]}` }});
  }

}
