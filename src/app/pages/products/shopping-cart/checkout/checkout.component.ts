import { Component } from '@angular/core';
import { CartsService } from 'src/app/services/carts/carts.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  constructor(public cartsService: CartsService) {}
}
