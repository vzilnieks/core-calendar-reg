import { Component, OnInit } from '@angular/core';
import { Master } from '../../shared/classes/master';
import { Order } from '../../shared/classes/order';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss']
})
export class OrdersListComponent implements OnInit {

  private masters: Master[] = [
    {id: 1, name: 'John Smith', workingDays: [1, 2]},
    {id: 2, name: 'Andrew Black', workingDays: [2, 3, 6]}
  ];  
  private orders: Order[] = [
    { id: 1, name: 'A B', phone: '4324324', master_id: 1, date: new Date('2018-04-01'), state: true }
  ];
  public displayedColumns = [ 'name', 'phone', 'date', 'customer_id' ];
  public dataSource = this.orders;

  constructor() { }

  ngOnInit() {
  }

}
