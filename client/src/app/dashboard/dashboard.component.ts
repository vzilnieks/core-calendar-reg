import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { Master } from '../shared/classes/master';
import { MasterService } from '../master.service';
import { AuthComponent } from '../auth/auth.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private $masters: Subscription;
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
    });
  }

  ngOnDestroy() {
    this.$masters.unsubscribe();
  }

  private getWorkingMasters(dayN: number): Master[] {
    let masters: Master[] = [];
    this.$masters = this.masterService.getMasters().filter(master => master.workingDays.includes(dayN)).subscribe(masters => masters = masters);
    return masters;
  }

  private openDialog(dayN: number, time: number) {
    let day = this.weekDays[dayN];
    let choosedMaster: number = this.masterForm[day].get("master").value;
    if (choosedMaster) {
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
