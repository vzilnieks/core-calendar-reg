import { Component, OnInit, OnDestroy } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';
import { Subscription } from 'rxjs/Subscription';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.scss']
})
export class MastersListComponent implements OnInit, OnDestroy {

  masters$: Subscription;
  private weekDays: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private masters: Master[] = [];

  private masterForm: FormGroup = new FormGroup({
    masterInput: new FormControl('', [ Validators.required ])
  });
  private workDayForm: FormGroup = new FormGroup({});

  private dataSource = this.masterService.getMasters();
  private displayedColumns = [ 'name', 'workingDays' ];

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.weekDays.forEach(day => {
      this.workDayForm.addControl(day, new FormControl(''));
      // this.workDayForm.controls.day.setValue(true);
    });
    this.masters$ = this.masterService.getMasters().subscribe();
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
  }

  private addMaster() {
    this.masters$ = this.masterService.addMaster(this.masterForm.controls.masterInput.value)
        .subscribe(
            data => console.log(data),
            (err: HttpErrorResponse) => console.log(err),
            () => this.dataSource = this.masterService.getMasters()
        );
  }

  private onUpdate(masterId: number) {
    let daysArray: number[] = [];
    this.weekDays.forEach((day, index) => {
      if (this.workDayForm.get(day).value) {
        daysArray.push(index);
      };
    });
    this.masters$ = this.masterService.updateMaster(masterId, daysArray)
        .subscribe(
            data => console.log(data),
            (err: HttpErrorResponse) => console.log(err),
            () => this.dataSource = this.masterService.getMasters()
        );
  }

  private onDelete(masterId: number) {
    this.masters$ = this.masterService.deleteMaster(masterId)
        .subscribe(
            data => console.log(data),
            (err: HttpErrorResponse) => console.log(err),
            () => this.dataSource = this.masterService.getMasters()
        );
  }

}
