import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Master } from '../../shared/classes/master';
import { OrderUnit } from '../../shared/classes/order-unit';
import { Order } from '../../shared/classes/order';
import { MasterService } from '../../master.service';
import { OrderService } from '../../order.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-dashboard-days',
  templateUrl: './dashboard-days.component.html',
  styleUrls: ['./dashboard-days.component.scss']
})
export class DashboardDaysComponent implements OnInit, OnDestroy {

  @Input() currentWeekFirstDay: Date;

  private masterForm: FormGroup[] = [];
  private allMasters: Master[] = [];
  private allOrders: Order[] = [];
  private masters$: Subscription;
  private orders$: Subscription;
  private orderUnits: OrderUnit[] = [];

  // TODO: week by custom calendar (holidays etc)
  private weekDays: string[] = [ 
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  // TODO: hours by day of custom calendar (holidays etc)
  private workHours = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ];

  constructor(
      private dialog:MatDialog, 
      private masterService: MasterService, 
      private orderService: OrderService) { }

  ngOnInit() {
    this.weekDays.forEach((day, dayN) => {
      this.masterForm[day] = new FormGroup({});
      this.masterForm[day].addControl('master', new FormControl(''));
      this.workHours.forEach(hour => {
        // to get last (new) element of array
        let orderLength = this.orderUnits.push({date: new Date()});
        this.orderUnits[orderLength - 1]
            .date.setDate(this.currentWeekFirstDay.getDate() + dayN); // day of week
        this.orderUnits[orderLength - 1].date.setHours(hour);
      });
    });
    this.orders$ = this.orderService.getOrders()
        .finally(() => {
            this.allOrders.forEach(order => {
              order.dateCorrected = new Date(order.date);
            })
            this.orderUnits.forEach(unit => {
              let foundOrders = this.allOrders.filter(
                order => 
                  order.dateCorrected.getDate() === unit.date.getDate() && 
                  order.hour === unit.date.getHours());
              if (foundOrders) unit.order = foundOrders;
            });})
        .subscribe(orders => this.allOrders = orders);
    this.masters$ = this.masterService.getMasters()
        .finally(() => {
          console.log(this.allMasters);
          console.log(this.orderUnits);
          this.orderUnits.forEach(unit => {
            const foundMasters = this.allMasters.filter(
                master => unit.order.length && master.id === unit.order[0].master_id);
            if (foundMasters.length) unit.master = foundMasters;
          });
        })
        .subscribe(masters => this.allMasters = masters);
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
    this.orders$.unsubscribe();
  }

  private getCardDate(dayN: number): string {
    let cardDate = new Date(this.currentWeekFirstDay);
    cardDate.setDate(cardDate.getDate() + dayN);
    return cardDate.toDateString();
  }

  private orderPlaced(dayN: number, time: number): boolean {
    const filter = this.allOrders.filter( order => { 
      order.dateCorrected.getDay() === dayN && 
      order.hour === time });
    if (!filter) return false;
    return true;
  }

  private getMastersByDay(dayN: number): Master[] {
    return this.allMasters.filter(master => master.workingDays.includes(dayN));
  }

  private openDialog(dayN: number, time: number) {
    let day = this.weekDays[dayN];
    let choosedMaster: number = this.masterForm[day].get("master").value;
    let choosedMasterName: string;
    choosedMasterName = this.allMasters.filter(master => master.id === choosedMaster)[0].name;
    if (choosedMaster) {
      this.dialog.open( ModalComponent, {
        data: {
          alert: 
`
Order to day: ${day}, time: ${this.workHours[time]},
Master: ${choosedMasterName}
` 
        }
      });
    };
  }


}
