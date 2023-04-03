import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  titles: string[] = [];
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.url.split('/').forEach((url) => {
      if (url) {
        this.titles.push(url);
      }
    });
  }
}
