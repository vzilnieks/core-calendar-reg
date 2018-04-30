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

  public masterForm: FormGroup = new FormGroup({
    masterInput: new FormControl('', [ Validators.required ])
  });
  public dataSource: any;

  public displayedColumns = [ 'name', 'workingDays' ];

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.masters = this.getMasters();
    this.dataSource = this.masters;
  }

  private getMasters(): Master[] {
    let mastersArray: Master[] = [];
    this.masterService.getMaster().subscribe(master => {
      mastersArray.push(master);
    });
    return mastersArray;
  }

  public addMaster() {
    this.masterService.addMaster(this.masterForm.controls.masterInput.value);
    this.masters = this.getMasters();
    this.dataSource = this.masters;
  }

}
