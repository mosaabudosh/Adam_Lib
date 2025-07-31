import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrl: './context-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContextMenuComponent {
  mainActions: any[] = [
    {
      label: 'Mark as read',
      command: (event: any) => {

      }
    },
    {
      label: 'Mark as unRead',
      command: (event: any) => {

      }
    },
  ];

}
