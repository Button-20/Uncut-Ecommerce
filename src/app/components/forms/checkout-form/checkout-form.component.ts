import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartsService } from 'src/app/services/carts/carts.service';
import { Countries } from 'src/app/services/countries';
import { OrdersService } from 'src/app/services/orders/orders.service';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent {
  checkoutForm: FormGroup = new FormGroup({
    firstName: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    lastName: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.email])
    ),
    phone: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(10)])
    ),
    address: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(10)])
    ),
    address2: new FormControl(''),
    city: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    state: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    zip: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    country: new FormControl(
      '',
      Validators.compose([Validators.required, Validators.minLength(3)])
    ),
    date: new FormControl('', Validators.compose([Validators.required])),
    time: new FormControl('', Validators.compose([Validators.required])),
    notes: new FormControl(''),
  });

  countries: any[] = [];
  states: any[] = [];
  times: any[] = [
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
  ];

  constructor(
    public ordersService: OrdersService,
    public router: Router,
    public cartsService: CartsService
  ) {}

  ngOnInit() {
    this.filterCountries();
    this.filterStates(this.countries[0]);
    this.checkoutForm.patchValue({
      country: this.countries[0],
      state: this.states[0],
      time: this.times[0],
    });
  }

  onSubmit(formData: any) {
    this.ordersService.addOrder({
      id: crypto.getRandomValues(new Uint32Array(1))[0].toString(),
      products: this.cartsService.cart,
      createdAt: new Date().toISOString(),
      pickupDate: this.formatDateAndTime(formData.date, formData.time),
      status: 'awaiting',
      total: this.cartsService.total,
    });
    console.log(this.ordersService.orders);
    this.router.navigate(['/products/orders']);
  }

  filterCountries() {
    this.countries = Countries.countries.map((country: any) => {
      return country.country;
    });
  }

  filterStates(country: string) {
    this.checkoutForm.patchValue({ state: '' });
    const countryObj = Countries.countries.find(
      (c: any) => c.country === country
    );
    this.states = countryObj?.states as any[];
  }

  selectCountry(event: any) {
    this.checkoutForm.patchValue({ country: event });
    this.filterStates(event);
  }

  selectState(event: any) {
    this.checkoutForm.patchValue({ state: event });
  }

  setNotes(event: any) {
    this.checkoutForm.patchValue({ notes: event });
  }

  setDate(event: any) {
    this.checkoutForm.patchValue({ date: event });
  }

  formatDateAndTime(date: string, time: string) {
    const dateObj = new Date(date);
    const timeArr = time.split(':');
    dateObj.setHours(
      parseInt(timeArr[0]) + (timeArr[1].includes('PM') ? 12 : 0)
    );
    dateObj.setMinutes(parseInt(timeArr[1]));
    return dateObj.toISOString();
  }

  get firstName() {
    return this.checkoutForm.get('firstName') as FormControl;
  }

  get lastName() {
    return this.checkoutForm.get('lastName') as FormControl;
  }

  get email() {
    return this.checkoutForm.get('email') as FormControl;
  }

  get country() {
    return this.checkoutForm.get('country') as FormControl;
  }

  get state() {
    return this.checkoutForm.get('state') as FormControl;
  }

  get city() {
    return this.checkoutForm.get('city') as FormControl;
  }

  get address() {
    return this.checkoutForm.get('address') as FormControl;
  }

  get zip() {
    return this.checkoutForm.get('zip') as FormControl;
  }

  get phone() {
    return this.checkoutForm.get('phone') as FormControl;
  }

  get date() {
    return this.checkoutForm.get('date') as FormControl;
  }

  get time() {
    return this.checkoutForm.get('time') as FormControl;
  }
}
