import { Component, OnInit } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { Order } from '../../shared/classes/order';
import { MatTableDataSource } from '@angular/material';
import { MasterService } from '../../master.service';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  private masters: Master[] = [];
  private orders: Order[]= [];
  public displayedColumns = [ 'name', 'phone', 'date', 'customer_id' ];
  public dataSource;

  constructor(private masterService: MasterService, private orderService: OrderService) { }

  ngOnInit() {
    this.masterService.getMaster().subscribe(master => {
      this.masters.push(master);
    });
    this.orderService.getOrder().subscribe(order => {
      this.orders.push(order);
    });
    this.dataSource = this.orders;
  }

}
