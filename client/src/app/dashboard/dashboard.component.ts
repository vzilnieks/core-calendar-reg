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

  private masters$: Subscription;
  private allMasters: Master[] = [];
  private workingMasters: Array<Master[]> = [[]];
  private weekDays: string[] = 
      [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workHours = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
  private masterForm: FormGroup[] = [];

  constructor(private dialog: MatDialog, private masterService: MasterService) { }

  ngOnInit() {
    this.weekDays.forEach(day => {
      this.masterForm[day] = new FormGroup({});
      this.masterForm[day].addControl("master", new FormControl(''));
    });
    this.masters$ = this.masterService.getMasters()
        .subscribe(
          masters => this.allMasters = masters, 
          error => {},
          () => {
            this.weekDays.forEach((day, dayN) => {
              this.workingMasters.push(new Array);
              this.workingMasters[dayN] = 
                  this.allMasters.filter(master => master.workingDays.includes(dayN));
          });
        });
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
  }

  private openDialog(dayN: number, time: number) {
    let day = this.weekDays[dayN];
    let choosedMaster: number = this.masterForm[day].get("master").value;
    let choosedMasterName: string;
    choosedMasterName = this.allMasters.filter(master => master.id === choosedMaster)[0].name;
    if (choosedMaster) {
      this.dialog.open( ModalComponent, {
        data: {
          alert: 
`
Order to day: ${day}, time: ${this.workHours[time]},
Master: ${choosedMasterName}
` 
        }
      });
    };
  }

}
