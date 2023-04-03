import { Component } from '@angular/core';
import { CartsService } from 'src/app/services/carts/carts.service';
import { Cart } from 'src/app/services/data/IApp';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(
    public productsService: ProductsService,
    public cartsService: CartsService
  ) {}

  ngOnInit() {
    this.productsService.getProducts();
  }

  selectDropDown(event: any) {
    // close other dropdown options
    event.preventDefault();
    const element = document.querySelectorAll('.filter-dropdown-options');
    element.forEach((el) => {
      if (el.classList.contains('show') && el !== event.target.children[0]) {
        el.classList.remove('show');
      }
    });

    // add show class to dropdown options
    event.target.children[0]?.classList.toggle('show');

    // close dropdown options when click outside
    document.addEventListener('mousedown', (e: any) => {
      if (!e.target?.classList.contains('filter-dropdown-option')) {
        element.forEach((el) => {
          if (el.classList.contains('show')) {
            el.classList.remove('show');
          }
        });
      }
    });
  }

  sortBy(text: string) {
    this.productsService.sortBy = text;
    this.productsService.filterProducts(text);
  }

  addToCart(cart: Cart) {
    this.cartsService.addToCart(cart);
  }
}
