import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [ProductsComponent, OrdersComponent],
  imports: [CommonModule, ProductsRoutingModule, ComponentsModule],
})
export class ProductsModule {}
