import { Injectable } from '@angular/core';
import { Order } from './shared/classes/order';

@Injectable()
export class OrderService {

  private orders: Order[] = [
    { id: 1, name: 'A B', phone: '4324324', master_id: 1, date: new Date('2018-04-01'), state: true }
  ];

  constructor() { }

  public allOrders(): Order[] {
    return this.orders;
  }

}
