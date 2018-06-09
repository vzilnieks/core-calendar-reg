import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard-slider',
  templateUrl: './dashboard-slider.component.html',
  styleUrls: ['./dashboard-slider.component.scss']
})
export class DashboardSliderComponent implements OnInit {

  @Output() slide = new EventEmitter();

  private today: Date;
  private currentWeekDate1: string;
  private currentWeekDate2: string;

  constructor() { }

  ngOnInit() {
    this.today = new Date();
    this.weekSet();
  }

  private onSlide(currentWeekMonday: Date) {
    this.slide.emit(currentWeekMonday);
  }

  private weekSet(): void {
    const firstDay = moment(this.today).weekday(1);
    const lastDay = moment(this.today).weekday(7);
    this.currentWeekDate1 = firstDay.format('YYYY-MM-DD').toString();
    this.currentWeekDate2 = lastDay.format('YYYY-MM-DD').toString();
    this.onSlide(firstDay.toDate());
  }

  private prevWeek(): void {
    this.today = moment(this.today).subtract(7, 'days').toDate();
    this.weekSet()
  }

  private nextWeek(): void {
    this.today = moment(this.today).add(7, 'days').toDate();
    this.weekSet()
  }

}
