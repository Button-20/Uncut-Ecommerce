import { Component } from '@angular/core';
import { CartsService } from 'src/app/services/carts/carts.service';
import { Cart } from 'src/app/services/data/IApp';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent {
  constructor(public cartsService: CartsService) {}

  removeFromCart(cart: Cart) {
    this.cartsService.removeFromCart(cart);
  }

  updateQuantity(cart: Cart) {
    this.cartsService.updateQuantity(cart);
  }

  setValues({
    cartItems,
    subTotal,
    tax,
    total,
  }: {
    cartItems: Cart[];
    subTotal: number;
    tax: number;
    total: number;
  }) {
    this.cartsService.setValues(cartItems, subTotal, tax, total);
  }
}
