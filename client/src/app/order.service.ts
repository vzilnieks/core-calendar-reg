import { Injectable } from '@angular/core';
import { Order } from './shared/classes/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';

@Injectable()
export class OrderService {

  private orders: Order[] = [
    { id: 1, name: 'A B', phone: '4324324', master_id: 1, date: new Date('2018-04-01'), state: true }
  ];

  constructor() { }

  public getOrder(): Observable<Order> {
    return Observable.from(this.orders);
  }

  public addOrder(phone: string) {
    this.orders.push({
      id: Math.floor(Math.random() * 100),
      name: '',
      phone: phone,
      master_id: 0,
      date: new Date(),
      state: true
    });
  }

}
