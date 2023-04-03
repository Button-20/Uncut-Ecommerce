import { Injectable } from '@angular/core';
import { Order } from '../data/IApp';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orders: Array<Order> = [];
  constructor() { }

  addOrder(order: Order) {
    this.orders.push(order);
  }
}
