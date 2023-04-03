import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts/carts.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(public cartsService: CartsService, public router: Router) {}

  selectDropDown(event: any) {
    // close other dropdown options
    event.preventDefault();
    const element = document.querySelectorAll('.social-dropdown');
    element.forEach((el) => {
      if (
        el.classList.contains('show') &&
        el !== event.target.nextElementSibling
      ) {
        el.classList.remove('show');
      }
    });

    // add show class to dropdown options
    event.target.nextElementSibling?.classList.toggle('show');
  }

  navigate(path: string, event: any) {
    this.router.navigate([path]);
    event.target.parentElement?.classList.remove('show');
  }
}
