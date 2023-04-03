import { Component, Input } from '@angular/core';
import { Order } from 'src/app/services/data/IApp';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent {
  @Input() order: Order | undefined;
}
