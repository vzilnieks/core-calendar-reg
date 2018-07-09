import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Master } from '../../shared/classes/master';
import { OrderUnit } from '../../shared/classes/order-unit';
import { Order } from '../../shared/classes/order';
import { MasterService } from '../../master.service';
import { OrderService } from '../../order.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { trigger, transition, style, animate } from "@angular/animations";
import 'rxjs/add/operator/finally';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard-days',
  templateUrl: './dashboard-days.component.html',
  styleUrls: ['./dashboard-days.component.scss'],
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ 
          transform: 'translateX({{sign}}500px)', opacity: 0 
        }),  // initial
        animate(
          '0.4s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ 
            transform: 'scale(1)', opacity: 1 
          }))  // final
      ], { params: { sign: '' } }),
      transition('* => *', [
        style({ 
          transform: 'translateX(-100px)', opacity: 0 
        }),  // initial
        animate(
          '0.7s cubic-bezier(.8, -0.6, 0.26, 1.6)',
          style({ 
            transform: 'scale(1)', opacity: 1 
          }))  // final
      ], { params: { sign: '' } })
    ])
  ]
})
export class DashboardDaysComponent implements OnInit, OnDestroy, OnChanges {

  @Input() weekFirstDay: Date;
  @Input() animationSide: String;
  @Input() show: boolean;

  private masterForm: FormGroup[] = [];
  private allMasters: Master[] = [];
  private allOrders: Order[] = [];
  private masters$: Subscription;
  private orders$: Subscription;
  private orderUnits: OrderUnit[] = [];

  private weekDays: string[] = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workDays: string[] = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workHours = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];

  constructor(
      private dialog: MatDialog, 
      private masterService: MasterService, 
      private orderService: OrderService) { }

  ngOnInit() {
    this.workDays.forEach(day => {
      this.masterForm[day] = new FormGroup({});
      this.masterForm[day].addControl('master', new FormControl(''));
      this.workHours.forEach(hour => {
        // to get last (new) element of array
        const orderIndex = this.orderUnits.push({date: new Date()}) - 1;
        this.orderUnits[orderIndex].date = 
	    moment(this.weekFirstDay).day(day).toDate();
        this.orderUnits[orderIndex].date.setHours(hour);
      });
    });
    this.orders$ = this.orderService.getOrders()
        .finally(() => { 
          // Strange Issue: mockapi date not converted to Date automatically
          this.allOrders.forEach(order => {
            order.dateCorrected = new Date(order.date); 
          });
          this.masters$ = this.masterService.getMasters()
              .finally(() => this.refreshOrderUnits())
              .subscribe(masters => this.allMasters = masters);
        })
        .subscribe(orders => this.allOrders = orders);
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
    this.orders$.unsubscribe();
  }

  ngOnChanges() {
    // this.refreshOrderUnits();
  }

  private refreshOrderUnits(): void {
    this.orderUnits.forEach(unit => {
      unit.date = moment(this.weekFirstDay)
	  .day(unit.date.getDay())
	  .hour(unit.date.getHours()).toDate();
      unit.order = this.allOrders.filter(order => 
	  order.dateCorrected.getDay() === unit.date.getDay() && 
	  order.hour === unit.date.getHours());
      unit.master = this.allMasters.filter(master => 
	  unit.order.length && 
	  master.id === unit.order[0].master_id);
    });
  }

  private getCardDate(day: string): string {
    return moment(this.weekFirstDay)
	.day(day).format('dddd, MMMM Do YYYY');
  }

  private orderPlaced(day: string, time: number): boolean {
    const placed = this.orderUnits.filter(unit => {
      unit.date.getDay() === this.weekDays.indexOf(day) && 
      unit.date.getHours() === time 
    });
    if (!placed) return false;
    return true;
  }

  private getMastersByDay(day: string): Master[] {
    return this.allMasters.filter(
	master => master.workingDays.includes(this.weekDays.indexOf(day))
    );
  }

  private openDialog(day: string, time: number) {
    const choosedMaster: number = this.masterForm[day].get('master').value;
    const choosedMasterName: string = this.allMasters.filter(
	master => master.id === choosedMaster)[0].name;
    if (choosedMaster) {
      this.dialog.open( ModalComponent, {
        data: {
	  date: moment(this.weekFirstDay).day(day).toDate(),
	  time: this.workHours[time],
	  masterId: choosedMaster,
          alert: `
	    Order to day:
	    ${moment(this.weekFirstDay).day(day).format('YYYY-MM-DD')} ${day}, 
	    time: ${this.workHours[time]}:00,
	    Master: ${choosedMasterName} ` 
        }
      });
      this.refreshOrderUnits();
    };
  }

}
