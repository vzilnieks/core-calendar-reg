import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private currentWeekFirstDay: Date;
  private currentWeekSide: string;
  private animationShow: boolean;
  private itemSignal: Object;

  constructor() { }

  ngOnInit() {
    this.currentWeekFirstDay = new Date();
    this.currentWeekSide = '';
    this.animationShow = true;
    this.itemSignal = { value: 'void' };
  }

  private slideDate(date: Date) {
    this.currentWeekFirstDay = date;
  }

  private slideSign(sign: string) {
    this.currentWeekSide = sign;
    this.animationShow = false;
    setInterval(() => {
      this.animationShow = true;
    }, 10)
    this.itemSignal = {
      value: 'slide', 
      params: { 
        sign: this.currentWeekSide 
      }
    };
  }

}
