import { Injectable } from '@angular/core';
import { Product } from '../data/IApp';
import { Products } from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  product: Product | undefined;
  products: Product[] = Products;
  sortBy: string = 'newest';

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  filterProducts(sort: string): Product[] {
    switch (sort) {
      case 'newest':
        return this.products.sort((a, b) => {
          return <any>new Date(b.createdAt) - <any>new Date(a.createdAt);
        });
      case 'oldest':
        return this.products.sort((a, b) => {
          return <any>new Date(a.createdAt) - <any>new Date(b.createdAt);
        });
      case 'highest':
        return this.products.sort((a, b) => {
          return b.price - a.price;
        });
      case 'lowest':
        return this.products.sort((a, b) => {
          return a.price - b.price;
        });
      default:
        return this.products;
    }
  }
}
