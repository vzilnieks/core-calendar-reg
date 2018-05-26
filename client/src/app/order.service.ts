import { Injectable } from '@angular/core';
import { Order } from './shared/classes/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { HttpService } from './http.service';

@Injectable()
export class OrderService {

  constructor(private http: HttpService) { }

  public getOrders() {
    return this.http.httpGet('orders');
  }

  public addOrder(phone: string) {
    return this.http.httpPost('orders', {
      phone: phone
    });
    // this.orders.push({
    //   id: Math.floor(Math.random() * 100),
    //   name: '',
    //   phone: phone,
    //   master_id: 0,
    //   date: new Date(),
    //   state: true
    // });
  }

}
