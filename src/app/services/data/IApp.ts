export interface Product {
  id: string;
  category: string;
  price: number;
  ratings: number;
  no_of_ratings: number;
  name: string;
  availability: string;
  image: string;
  weight: string;
  createdAt: string;
}

export interface Cart {
  id: string;
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  products: Array<Cart>;
  total: number;
  createdAt: string;
  pickupDate: string;
  status: string;
}
