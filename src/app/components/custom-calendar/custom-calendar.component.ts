import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-calendar',
  templateUrl: './custom-calendar.component.html',
  styleUrls: ['./custom-calendar.component.scss'],
})
export class CustomCalendarComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Output() emitDate: EventEmitter<Date> = new EventEmitter<Date>();
  @Input() buttonLabel: string = '';

  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  years: number[] = [
    2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
  ];
  days: any[] = [];
  currentDate: string = '';
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear() - 1;
  currentDay: number = new Date().getDate();

  firstDayOfMonth: number = 0;
  lastDayOfMonth: number = 0;
  lastDateOfMonth: number = 0;
  lastDateOfPreviousMonth: number = 0;

  showCalendar: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar() {
    this.currentDate = `${
      this.currentDay < 10 ? '0' + this.currentDay : this.currentDay
    }/${
      this.currentMonth + 1 < 10
        ? '0' + Number(this.currentMonth + 1)
        : Number(this.currentMonth + 1)
    }/${this.currentYear + 1}`;

    this.value = this.currentDate;

    this.firstDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth,
      1
    ).getDay();
    this.lastDayOfMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDay();
    this.lastDateOfMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();
    this.lastDateOfPreviousMonth = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();

    this.days = [];

    for (let i = 0; i < this.firstDayOfMonth; i++) {
      this.days.push({
        date: this.lastDateOfPreviousMonth - i,
        disabled: true,
        today: false,
      });
    }

    for (let i = 0; i < this.lastDateOfMonth; i++) {
      this.days.push({
        date: i + 1,
        disabled: false,
        today:
          this.currentDay === i + 1 &&
          this.currentMonth === new Date().getMonth() &&
          this.currentYear === new Date().getFullYear() - 1
            ? true
            : this.currentDate ===
              `${i + 1 < 10 ? '0' + (i + 1) : i + 1}/${
                this.currentMonth + 1 < 10
                  ? '0' + Number(this.currentMonth + 1)
                  : Number(this.currentMonth + 1)
              }/${this.currentYear + 1}`
            ? true
            : false,
      });
    }

    for (let i = 0; i < 6 - this.lastDayOfMonth; i++) {
      this.days.push({
        date: i + 1,
        disabled: true,
        today: false,
      });
    }
  }

  selectDropDown(event: any) {
    // close other dropdown options
    event.preventDefault();
    const element = document.querySelectorAll('.dropdown-options');
    element.forEach((el) => {
      if (el.classList.contains('show') && el !== event.target.children[0]) {
        el.classList.remove('show');
      }
    });

    // add show class to dropdown options
    event.target.children[0]?.classList.toggle('show');
    event.target.classList.toggle('show');

    // close dropdown options when click outside
    document.addEventListener('mousedown', (e: any) => {
      if (!e.target.classList.contains('dropdown-option')) {
        event.target.children[0]?.classList.remove('show');
        event.target.classList.remove('show');
      }
    });
  }

  selectMonth(month: number) {
    this.currentMonth = month - 1;
    this.value = `${
      this.currentDay < 10 ? '0' + this.currentDay : this.currentDay
    }/${this.currentMonth < 10 ? '0' + this.currentMonth : this.currentMonth}/${
      this.currentYear + 1
    }`;

    this.renderCalendar();
  }

  selectYear(year: number) {
    this.currentYear = year;
    this.value = `${
      this.currentDay < 10 ? '0' + this.currentDay : this.currentDay
    }/${this.currentMonth < 10 ? '0' + this.currentMonth : this.currentMonth}/${
      this.currentYear
    }`;

    this.renderCalendar();
  }

  setDate(day: number) {
    this.currentDay = day;
    this.value = `${
      this.currentDay < 10 ? '0' + this.currentDay : this.currentDay
    }/${this.currentMonth < 10 ? '0' + this.currentMonth : this.currentMonth}/${
      this.currentYear
    }`;

    this.renderCalendar();
  }

  submitDate() {
    this.showCalendar = false;
    console.log( this.showCalendar);
    this.emitDate.emit(
      new Date(
        `${this.currentYear + 1}-${
          this.currentMonth + 1 < 10
            ? '0' + Number(this.currentMonth + 1)
            : Number(this.currentMonth + 1)
        }-${this.currentDay < 10 ? '0' + this.currentDay : this.currentDay}`
      )
    );
  }

  cancelDate() {
    this.showCalendar = false;
    this.currentDay = new Date().getDate();
    this.currentMonth = new Date().getMonth();
    this.currentYear = new Date().getFullYear() - 1;
    this.value = `${
      this.currentDay < 10 ? '0' + this.currentDay : this.currentDay
    }/${this.currentMonth < 10 ? '0' + this.currentMonth : this.currentMonth}/${
      this.currentYear
    }`;

    this.renderCalendar();
  }
}
