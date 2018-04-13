import { Component, OnInit } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { MatTableDataSource } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-masters-list',
  templateUrl: './masters-list.component.html',
  styleUrls: ['./masters-list.component.scss']
})
export class MastersListComponent implements OnInit {

  private weekDays: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private masters: Master[] = [
    {id: 1, name: 'John Smith', workingDays: [1, 2]},
    {id: 2, name: 'Andrew Black', workingDays: [2, 3, 6]}
  ];  
  public masterForm: FormGroup = new FormGroup({
    masterInput: new FormControl()
  });

  public displayedColumns = [ 'name', 'workingDays' ];
  // public dataSource = new MatTableDataSource(this.masters);
  public dataSource = this.masters;

  constructor() { }

  ngOnInit() {
  }

  public addMaster() {
    this.masters.push( { id: 3, name: this.masterForm.controls.masterInput.value, workingDays: [] } );
    this.dataSource = this.masters;
    console.log(this.masters);
  }

}
