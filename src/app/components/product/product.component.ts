import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart, Product } from 'src/app/services/data/IApp';

@Component({
  selector: 'app-product-card',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() products: Product[] = [];
  @Output() addToCart: EventEmitter<Cart> = new EventEmitter();

  constructor() {}

  addItemToCart(product: Product) {
    const cart: Cart = {
      id: crypto.getRandomValues(new Uint32Array(1))[0].toString(),
      product: product,
      quantity: 1,
    };
    this.addToCart.emit(cart);
  }
}
