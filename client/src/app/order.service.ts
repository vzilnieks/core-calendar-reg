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

  public addOrder(
      phone: string, 
      date: Date, 
      time: number, 
      masterId: number) {
    return this.http.httpPost('orders', {
      phone: phone,
      date: date,
      hour: time,
      master_id: masterId,
      name: '',
      customer_id: 0
    });
  }

}
