import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CustomCalendarComponent } from './custom-calendar/custom-calendar.component';
import { FooterComponent } from './footer/footer.component';
import { CheckoutFormComponent } from './forms/checkout-form/checkout-form.component';
import { InputComponent } from './input/input.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderItemComponent } from './order-item/order-item.component';
import { ProductComponent } from './product/product.component';

const components = [
  NavbarComponent,
  FooterComponent,
  ProductComponent,
  BreadcrumbComponent,
  CartItemComponent,
  CartSummaryComponent,
  InputComponent,
  CheckoutFormComponent,
  OrderItemComponent, CustomCalendarComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, NgbModule, RouterModule, ReactiveFormsModule],
})
export class ComponentsModule {}
