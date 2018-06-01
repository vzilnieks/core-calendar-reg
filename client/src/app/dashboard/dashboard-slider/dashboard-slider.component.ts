import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-slider',
  templateUrl: './dashboard-slider.component.html',
  styleUrls: ['./dashboard-slider.component.scss']
})
export class DashboardSliderComponent implements OnInit {

  private today: Date;
  private currentWeekDate1: string;
  private currentWeekDate2: string;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.weekSet();
  }

  private weekSet(): void {
    let currentDate = new Date;
    currentDate.setDate(this.today.getDate()); 
    const firstDay = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 1)
    );
    const lastDay = new Date(
        currentDate.setDate(currentDate.getDate() - currentDate.getDay() + 7)
    );
    this.currentWeekDate1 = firstDay.toDateString();
    this.currentWeekDate2 = lastDay.toDateString();
  }

  private prevWeek(): void {
    this.today.setDate(this.today.getDate() - 7);
    // this.today.setTime(this.today.getTime() - 7 * 24 * 60 * 60 * 1000);
    this.weekSet()
  }

  private nextWeek(): void {
    this.today.setDate(this.today.getDate() + 7);
    // this.today.setTime(this.today.getTime() + 7 * 24 * 60 * 60 * 1000);
    this.weekSet()
  }

}
