import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingCartRoutingModule } from './shopping-cart-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ShoppingCartRoutingModule,
    ComponentsModule
  ]
})
export class ShoppingCartModule { }
