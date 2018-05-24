import { Component, OnInit } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.scss']
})
export class MastersListComponent implements OnInit {

  private weekDays: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private masters: Master[] = [];

  private masterForm: FormGroup = new FormGroup({
    masterInput: new FormControl('', [ Validators.required ])
  });
  private workDayForm: FormGroup = new FormGroup({});

  private dataSource: any;
  private displayedColumns = [ 'name', 'workingDays' ];

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.weekDays.forEach(day => {
      this.workDayForm.addControl(day, new FormControl(''));
    });
    this.refreshTable();
  }

  private refreshTable(): void {
    this.masters = this.getMasters();
    this.dataSource = this.masters;
  }

  private getMasters(): Master[] {
    this.masterService.getMasters().subscribe(masters => this.masters = masters);
    return this.masters;
  }

  private onUpdate(masterId: number) {
    let daysArray: number[] = [];
    this.weekDays.forEach((day, index) => {
      if (this.workDayForm.get(day).value) {
        daysArray.push(index);
      };
    });
    this.masterService.updateMaster(masterId, daysArray);
    this.refreshTable();
  }

  private onDelete(masterId: number) {
    this.masterService.deleteMaster(masterId);
    this.refreshTable();
  }


  private addMaster() {
    this.masterService.addMaster(this.masterForm.controls.masterInput.value);
    this.refreshTable();
  }

}
