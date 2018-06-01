import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalComponent } from '../shared/components/modal/modal.component';
import { Master } from '../shared/classes/master';
import { MasterService } from '../master.service';
import { AuthComponent } from '../auth/auth.component';
import { Subscription } from 'rxjs/Subscription';
import { OrderService } from '../order.service';
import { Order } from '../shared/classes/order';
import { OrderUnit } from '../shared/classes/order-unit';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  // TODO: from Input directive
  private currentWeekFirstDay: Date;
  private masters$: Subscription;
  private orders$: Subscription;
  private orderUnits: OrderUnit[] = [];
  private allMasters: Master[] = [];
  private allOrders: Order[] = [];
  private workingMasters: Array<Master[]> = [[]];
  private masterForm: FormGroup[] = [];

  private weekDays: string[] = 
      [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
  private workHours = [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  constructor(private dialog: MatDialog, 
      private masterService: MasterService, private orderService: OrderService) { }

  ngOnInit() {
    this.currentWeekFirstDay = new Date();

    this.weekDays.forEach((day, dayN) => {
      this.masterForm[day] = new FormGroup({});
      this.masterForm[day].addControl("master", new FormControl(''));
      this.workHours.forEach(hour => {
        let newIndex = this.orderUnits.push({
          day: dayN, hour: hour, date: new Date()
        });
        this.orderUnits[newIndex].date.setDate(this.currentWeekFirstDay.getDate());
      });
    });
    this.orders$ = this.orderService.getOrders()
        .subscribe(
          orders => this.allOrders = orders,
          (err) => console.log(err),
          () => {
            this.orderUnits.forEach(unit => {
              const foundOrders = this.allOrders.filter(
                order => 
                  order.date === unit.date && 
                  order.date.getDay() === unit.day && 
                  order.date.getHours() === unit.hour);
              if (foundOrders) unit.order = foundOrders;
            });
          });
    this.masters$ = this.masterService.getMasters()
        .subscribe(
          masters => {this.allMasters = masters}, 
          error => {},
          () => {
            this.orderUnits.forEach(unit => {
              const foundMasters = this.allMasters.filter(
                master => master.id === unit.order[0].master_id);
              if (foundMasters) unit.master = foundMasters;
            // this.weekDays.forEach((day, dayN) => {
            //   this.workingMasters.push(new Array);
            //   this.workingMasters[dayN] = 
            //       this.allMasters.filter(master => master.workingDays.includes(dayN));
          });
        });
    console.log(this.orderUnits);
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
    this.orders$.unsubscribe();
  }

  private orderPlaced(day: number, time: number): boolean {
    const filter = this.allOrders.filter(
        order => {
          const orderDate = new Date(order.date);
          orderDate.getDay() === day && orderDate.getHours() === time
        });
    if (!filter) return false;
    return true;
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
