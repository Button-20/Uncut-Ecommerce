import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() value: string = '';
  @Input() name: string = '';
  @Input() options: any[] = [];
  @Input() required: boolean = false;
  @Input() errors: any = {};
  @Output() setValue: EventEmitter<any> = new EventEmitter();
  @Output() selectedOption: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  selectDropDown(event: any) {
    // close other dropdown options
    event.preventDefault();
    const element = document.querySelectorAll('.select-dropdown-options');
    element.forEach((el) => {
      if (el.classList.contains('show') && el !== event.target.children[0]) {
        el.classList.remove('show');
      }
    });

    // add show class to dropdown options
    event.target.children[1]?.classList.toggle('show');

    // close dropdown options when click outside
    document.addEventListener('mousedown', (e: any) => {
      if (!e.target?.classList.contains('select-dropdown-option')) {
        element.forEach((el) => {
          if (el.classList.contains('show')) {
            el.classList.remove('show');
          }
        });
      }
    });
  }

  textAreaInput(event: any) {
    this.setValue.emit(event.target.value);
  }
}
