import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Element {
  position: number;
  name: string;
  time: number;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Monday', time: 1},
  {position: 2, name: 'Tuesday', time: 3}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  displayedColumns = ['position', 'name', 'time'];
  //dataSource = ELEMENT_DATA;
  console.log(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
