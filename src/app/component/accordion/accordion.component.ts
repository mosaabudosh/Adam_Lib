import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {
  searchText: any = null;
  accordions: any[] = [
    {
      label: "title 1",
      date: new Date(),
      content: "Content 1",
      items: [
        {
          label: 'label 1',
          checked: true
        },
        {
          label: 'label 2',
          checked: false
        },
      ]
    },
    {
      label: "title 2",
      date: new Date(),
      content: "Content 2",
      items: [
        {
          label: 'label 3',
          checked: true
        },
        {
          label: 'label 4',
          checked: false
        },
      ]
    }
  ];

  onSearchChange(event: any) {
    if (event?.target?.value) {
      this.searchText = event?.target?.value;
    } else {
      this.searchText = null;
    }
  }

}
