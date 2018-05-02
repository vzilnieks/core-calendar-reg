import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { Master } from '../shared/classes/master';
import { MasterService } from '../master.service';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private weekDays: string[] = 
      [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workHours = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  private masterForm: FormGroup[] = [];

  constructor(private dialog: MatDialog, private masterService: MasterService) { }

  ngOnInit() {
    let mastersOfDay: Master[] = [];
    this.weekDays.forEach((day, dayN) => {
      this.masterForm[day] = new FormGroup({});
      this.masterForm[day].addControl("master", new FormControl(''));
    })
  }

  private getMasters(dayN: number): Master[] {
    let workingMasters: Master[] = [];
    let masters: Master[] = [];
    this.masterService.getMaster().subscribe(master => {
      masters.push(master);
    });
    masters.forEach(master => {
      master.workingDays
          .filter(workDay => workDay === dayN)
          .forEach(() => workingMasters.push(master))
    });
    return workingMasters;
  }

  private openDialog(dayN: number, time: number) {
    let day = this.weekDays[dayN];
    console.log(this.masterForm[day]);
    let choosedMaster: number = this.masterForm[day].get("master").value;
    if (choosedMaster) {
      console.log("master",this.masterService.getMasterName(choosedMaster));
      this.dialog.open( ModalComponent, {
        data: {
          alert: 
`
Order to day: ${day}, time: ${this.workHours[time]},
Master: ${this.masterService.getMasterName(choosedMaster)}
` 
        }
      });
    };
  }

}
