import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/services/data/IApp';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss'],
})
export class CartSummaryComponent {
  @Input() cartItems: Cart[] = [];
  @Input() subTotal: number = 0;
  @Input() tax: number = 0;
  @Input() total: number = 0;
  @Output() setValues: EventEmitter<any> = new EventEmitter();

  constructor(public router: Router) {}

  ngOnChanges() {
    if (this.cartItems) {
      this.calculateSubTotal();
      this.calculateTotal();
    }
  }

  calculateSubTotal() {
    let subTotal = 0;
    this.cartItems.forEach((item) => {
      subTotal += item.quantity * item.product.price;
    });
    this.subTotal = subTotal;
  }

  calculateTotal() {
    let estimatedTax = 0;
    let total = 0;
    this.cartItems.forEach((item) => {
      estimatedTax += item.quantity * item.product.price * 0.1;
      total += item.quantity * item.product.price;
    });
    this.tax = estimatedTax;
    this.total = total + estimatedTax;
  }

  checkout(cartItems: Cart[], subTotal: number, tax: number, total: number) {
    this.setValues.emit({
      cartItems,
      subTotal,
      tax,
      total,
    });
    this.router.navigate(['/products/shopping-cart/checkout']);
  }
}
