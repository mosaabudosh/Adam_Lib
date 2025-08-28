import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent {

  items: any[] = [];
  home: any;

  constructor() {
    this.items = [
      {
        label: 'Electronics',
        command(event: any) {
          console.log(event)
        },
      },
      {
        label: 'Computer',
        command(event: any) {
          console.log(event)
        },
      },
      {
        label: 'Accessories',
        command(event: any) {
          console.log(event)
        },
      },
      {
        label: 'Keyboard',
        command(event: any) {
          console.log(event)
        },
      },
      {
        label: 'Wireless',
        command(event: any) {
          console.log(event)
        },
      }
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }

}
