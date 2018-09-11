import { Component, OnInit, OnDestroy } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { MatTableDataSource, ErrorStateMatcher } from '@angular/material';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { MasterService } from './master.service';
import { Subscription } from 'rxjs/Subscription';
import { MatCheckboxChange } from '@angular/material';
import { finalize } from "rxjs/operators";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.scss']
})
export class MastersListComponent implements OnInit, OnDestroy {

  private masters: Master[] = [];
  masters$: Subscription;
  private weekDays: string[] = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  dummyCheck = true;

  masterForm: FormGroup = new FormGroup({
    masterInput: new FormControl('', [ Validators.required ])
  });
  matcher = new MyErrorStateMatcher();
  private workDayForm: FormGroup = new FormGroup({});

  private dataSource = this.masterService.getMasters();
  private displayedColumns = [ 'name', 'workingDays' ];

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.weekDays.forEach(day => {
      this.workDayForm.addControl(day, new FormControl(''));
    });
    this.masters$ = this.masterService.getMasters().subscribe();
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
  }

  private addMaster() {
    if (this.masterForm.valid) {
      this.masters$ = this.masterService.addMaster(this.masterForm.controls.masterInput.value)
          .pipe(finalize(() => this.dataSource = this.masterService.getMasters()))
          .subscribe();
    }
  }

  private onUpdate(masterId: number) {
    const daysArray: number[] = [];
    this.weekDays.forEach((day, index) => {
      if (this.workDayForm.get(day).value) {
        daysArray.push(index);
      }
    });
    this.masters$ = this.masterService.updateMaster(masterId, daysArray)
        .pipe(finalize(() => this.dataSource = this.masterService.getMasters()))
        .subscribe();
  }

  private onDelete(masterId: number) {
    this.masters$ = this.masterService.deleteMaster(masterId)
        .pipe(finalize(() => this.dataSource = this.masterService.getMasters()))
        .subscribe();
  }

}
