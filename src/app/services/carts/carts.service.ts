import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cart } from '../data/IApp';

@Injectable({
  providedIn: 'root',
})
export class CartsService {
  cart: Cart[] = [];
  subTotal: number = 0;
  tax: number = 0;
  total: number = 0;

  constructor(public toast: ToastrService) {}

  addToCart(cart: Cart) {
    this.cart.push(cart);
    this.toast.success('Product added to cart');
  }

  removeFromCart(cart: Cart) {
    this.cart = this.cart.filter((item) => item.id !== cart.id);
    this.toast.success('Product removed from cart');
  }

  updateQuantity(cart: Cart) {
    this.cart = this.cart.map((item) => {
      if (item.id === cart.id) {
        item.quantity = cart.quantity;
      }
      return item;
    });
  }

  setValues(cartItems: Cart[], subTotal: number, tax: number, total: number) {
    this.cart = cartItems;
    this.subTotal = subTotal;
    this.tax = tax;
    this.total = total;
  }
}
