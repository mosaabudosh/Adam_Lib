import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-adam-tabs',
  templateUrl: './adam-tabs.component.html',
  styleUrl: './adam-tabs.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AdamTabsComponent {

  tabs: any[] = [
    { title: 'Tab 1', value: 0 },
    { title: 'Tab 2', value: 1 },
    { title: 'Tab 3', value: 2 }
  ];
  activeIndex: number = 0;

  onSelectionChanged(event: any) {
    this.activeIndex = event;
  }
}
