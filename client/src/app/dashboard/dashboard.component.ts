import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private currentWeekFirstDay: Date;

  constructor() { }

  ngOnInit() {
    this.currentWeekFirstDay = new Date();
  }

  private slide(date: Date) {
    this.currentWeekFirstDay = date;
  }

}
