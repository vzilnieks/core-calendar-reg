import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { Master } from '../shared/classes/master';
import { MasterService } from '../master.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private weekDays: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workHours = [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  constructor(public dialog: MatDialog, public masterService: MasterService) { }

  public getMasters(day: number): string {
    let workingMasters = [];
    let masters = this.masterService.allMasters();
    for ( let master in masters) {
      for ( let workDay in masters[master].workingDays ) {
	if (masters[master].workingDays[workDay] === day) {
	  workingMasters.push(masters[master].name);
	}
      };
    };
    return workingMasters.toString();
  }

  public openDialog(day: number, time: number, master: number) {
    let masterName = this.masterService.masterName(master);
    this.dialog.open(
      ModalComponent, 
      {
	data: 
	{
	  alert: `
Order to day: ${this.weekDays[day]}, time: ${this.workHours[time]},
Master: ${masterName}
	  ` 
	}
      }
    );
  }

}
