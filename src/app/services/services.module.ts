import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CartsService } from './carts/carts.service';
import { OrdersService } from './orders/orders.service';
import { ProductsService } from './products/products.service';

const services: Array<any> = [ProductsService, CartsService, OrdersService];

@NgModule({
  imports: [CommonModule],
  providers: [...services],
})
export class ServicesModule {}
