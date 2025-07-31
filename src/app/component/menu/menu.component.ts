import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  items: any[] = [
    {
      label: 'Profile',
      icon: "pi pi-user",
      command: (event: any) => {
        // this.openUserProfile();
      }
    },
    {
      label: 'Orders',
      icon: "pi pi-box",
      command: (event: any) => {
      }
    },
    {
      label: 'SignOut',
      icon: "pi pi-sign-out",
      command: (event: any) => {
      }
    }
  ]
}
