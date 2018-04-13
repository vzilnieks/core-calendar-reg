import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { Master } from '../shared/classes/master';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private weekDays: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workHours = [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  private masters: Master[] = [
    {id: 1, name: "John Smith", workingDays: [1, 2]},
    {id: 2, name: "Andrew Black", workingDays: [2, 3, 6]}
  ];

  constructor(public dialog: MatDialog) { }

  public getMasters(day: number): string {
    let workingMasters = [];
    // TODO: service
    for ( let master in this.masters) {
      for ( let workDay in this.masters[master].workingDays ) {
	if (this.masters[master].workingDays[workDay] === day) {
	  workingMasters.push(this.masters[master].name);
	}
      };
    };
    return workingMasters.toString();
  }

  public openDialog(day: number, time: number, master: number) {
    this.dialog.open(
      ModalComponent, 
      {
	data: 
	{
	  alert: `
Order to day: ${this.weekDays[day]}, time: ${this.workHours[time]},
Master: ${this.masters[master].name}
	  ` 
	}
      }
    );
  }

}
