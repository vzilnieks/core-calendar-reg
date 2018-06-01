import { Component, OnInit, OnDestroy } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { Order } from '../../shared/classes/order';
import { MatTableDataSource } from '@angular/material';
import { MasterService } from '../../master.service';
import { OrderService } from '../../order.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit, OnDestroy {

  private masters$: Subscription;
  private masters: Master[] = [];
  private displayedColumns = [ 'name', 'phone', 'date', 'master', 'customer_id' ];
  private dataSource = this.orderService.getOrders();

  constructor(private masterService: MasterService, private orderService: OrderService) { }

  ngOnInit() {
    this.masters$ = this.masterService.getMasters()
        .subscribe(masters => this.masters = masters);
  }

  ngOnDestroy() {
    this.masters$.unsubscribe();
  }

  private getMasterName(masterId: number): string {
    // this.masterService.getMasterById(masterId)
        // .subscribe(master => {return master.name;});
    let master = this.masters.filter(master => master.id == masterId);
    if (!master[0]) return 'unknown';
    return master[0].name;
  }

}
