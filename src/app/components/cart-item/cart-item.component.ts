import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from 'src/app/services/data/IApp';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cart: Cart | undefined;
  @Output() removeFromCart: EventEmitter<Cart> = new EventEmitter();
  @Output() updateQuantity: EventEmitter<Cart> = new EventEmitter();

  constructor() {}

  selectDropdown(event: any) {
    // close other dropdown options
    event.preventDefault();
    const element = document.querySelectorAll('.qty-dropdown');
    element.forEach((el) => {
      if (
        el.classList.contains('show') &&
        el !== event.target.nextElementSibling
      ) {
        el.classList.remove('show');
      }
    });

    // add show class to dropdown options
    event.target.children[1]?.classList.toggle('show');

    // close dropdown options when click outside
    document.addEventListener('mousedown', (e: any) => {
      if (!e.target?.classList.contains('qty-dropdown-option')) {
        element.forEach((el) => {
          if (el.children[1]?.classList.contains('show')) {
            el.children[1]?.classList.remove('show');
          }
        });
      }
    });
  }

  addQuantity(event: any) {
    if (this.cart) {
      this.cart.quantity = Number(event.target.innerText);
      this.updateQuantity.emit(this.cart);
      event.target.parentElement.classList.remove('show');
    }
   }

}
